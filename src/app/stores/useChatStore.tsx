import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { produce } from "immer";
import { create } from "zustand";

export type Message = {
	id: string;
	role: "user" | "assistant";
	content: string;
	sources?: string[];
};

type ChatStoreType = {
	messages: Message[];
	isOpen: boolean;
	isThinking: boolean;
	setIsOpen: (isOpen: boolean) => void;
	addMessage: (message: Omit<Message, "id">) => void;
	setIsThinking: (isThinking: boolean) => void;
	clearConversation: () => void;
};

const CHAT_STORAGE_KEY = "robo_advisor_chat_history";

const withSessionPersistence =
	(config: (set: any, get: any) => ChatStoreType) =>
	(set: any, get: any): ChatStoreType => {
		const initialState = config(set, get);

		if (typeof window !== "undefined") {
			const storedData = sessionStorage.getItem(CHAT_STORAGE_KEY);
			if (storedData) {
				try {
					const { messages } = JSON.parse(storedData);
					if (Array.isArray(messages)) {
						initialState.messages = messages;
					}
				} catch (e) {
					console.error("Failed to parse chat history from session storage", e);
				}
			} else {
				initialState.messages = [
					{
						id: "intro",
						role: "assistant",
						content:
							"Hi! Saya adalah Robo Advisor. Silahkan tanya tentang investasi, profil risikomu, atau alokasi portofolio.",
					},
				];
			}
		}

		const updateStorage = (state: ChatStoreType) => {
			sessionStorage.setItem(
				CHAT_STORAGE_KEY,
				JSON.stringify({ messages: state.messages }),
			);
		};

		return {
			...initialState,
			setIsOpen: (isOpen) => {
				set(
					produce<ChatStoreType>((state) => {
						state.isOpen = isOpen;
					}),
				);
			},
			addMessage: (message) => {
				set(
					produce<ChatStoreType>((state) => {
						const newMessage: Message = {
							id: `${Date.now()}_${Math.random().toString(36).slice(2)}`,
							...message,
						};
						state.messages.push(newMessage);
						updateStorage(state);
					}),
				);
			},
			setIsThinking: (isThinking) => {
				set(
					produce<ChatStoreType>((state) => {
						state.isThinking = isThinking;
					}),
				);
			},
			clearConversation: () => {
				set(
					produce<ChatStoreType>((state) => {
						state.messages = [
							{
								id: "intro",
								role: "assistant",
								content:
									"Hi! Saya adalah Robo Advisor. Silahkan tanya tentang investasi, profil risikomu, atau alokasi portofolio.",
							},
						];
						updateStorage(state);
					}),
				);
			},
		};
	};

const useChatStoreBase = create<ChatStoreType>(
	withSessionPersistence((_set, _get) => ({
		messages: [],
		isOpen: false,
		isThinking: false,
		setIsOpen: () => {},
		addMessage: () => {},
		setIsThinking: () => {},
		clearConversation: () => {},
	})),
);

const useChatStore = createSelectorHooks(useChatStoreBase);

export default useChatStore;
