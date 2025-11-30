"use client";

import { Loader, X } from "lucide-react";
import { type FormEvent, useEffect, useMemo, useRef, useState } from "react";
import useChatStore, { type Message } from "@/app/stores/useChatStore";
import { chatWithBot } from "@/lib/chatbot";
import Button from "../button/Button";

export default function ChatbotWidget() {
	const isOpen = useChatStore.useIsOpen();
	const messages = useChatStore.useMessages();
	const isThinking = useChatStore.useIsThinking();

	const setIsOpen = useChatStore.useSetIsOpen();
	const addMessage = useChatStore.useAddMessage();
	const setIsThinking = useChatStore.useSetIsThinking();
	const clearConversation = useChatStore.useClearConversation();

	const [input, setInput] = useState("");
	const chatWindowRef = useRef<HTMLDivElement>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: Scroll to bottom when messages change
	useEffect(() => {
		if (chatWindowRef.current) {
			chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
		}
	}, [messages.length, isThinking]);

	const placeholder = useMemo(
		() =>
			"Tanya tentang rebalancing, penjelasan portofolio, atau tips menabung...",
		[],
	);

	const handleLauncherClick = () => {
		setIsOpen(!isOpen);
	};

	const handleClose = () => setIsOpen(false);

	const handleSend = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const userQuery = input.trim();
		if (!userQuery) return;

		addMessage({ role: "user", content: userQuery });
		setInput("");
		setIsThinking(true);

		try {
			const response = await chatWithBot({ query: userQuery });

			addMessage({
				role: "assistant",
				content: response.answer,
				sources: response.sources,
			});
		} catch (error) {
			console.error("Chatbot API Error:", error);
			addMessage({
				role: "assistant",
				content:
					"Maaf, terjadi kesalahan saat menghubungi asisten AI. Mohon coba lagi.",
			});
		} finally {
			setIsThinking(false);
		}
	};

	const renderMessageContent = (message: Message) => {
		return (
			<>
				{message.content}
				{message.sources && message.sources.length > 0 && (
					<p className="mt-2 text-xs text-slate-500/70 italic">
						Sources: {message.sources.join(", ")}
					</p>
				)}
			</>
		);
	};

	return (
		<>
			<Button
				onClick={handleLauncherClick}
				className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/40 transition hover:bg-primary-400"
			>
				<span className="h-2 w-2 animate-pulse rounded-full bg-white" />
				Chat Robo-Advisor
			</Button>
			{isOpen && (
				<div className="fixed inset-0 z-40 flex items-end justify-end bg-black/40 px-4 pb-6 pt-10 sm:items-center sm:justify-center">
					<div className="w-full max-w-md rounded-3xl bg-white text-slate-900 shadow-2xl">
						<header className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-primary-500">
									Panduan Cerdas
								</p>
								<h3 className="text-lg font-semibold text-slate-900">
									Asisten Keuangan AI
								</h3>
								<p className="text-xs text-slate-500">
									Tanya apapun tentang investasi.
								</p>
							</div>
							<Button
								onClick={handleClose}
								className="rounded-full border border-slate-200 p-2 text-slate-500 transition bg-white hover:bg-gray-100 active:bg-gray-100 hover:text-slate-900"
								aria-label="Close chatbot"
							>
								<X className="w-4 h-4" />
							</Button>
						</header>

						<div
							ref={chatWindowRef}
							className="max-h-[420px] space-y-4 overflow-y-auto px-6 py-4"
						>
							{messages.map((message) => (
								<div key={message.id} className="flex gap-3">
									<div
										className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
											message.role === "assistant"
												? "bg-slate-100 text-slate-900"
												: "ml-auto bg-primary-500 text-white"
										}`}
									>
										{renderMessageContent(message)}
									</div>
								</div>
							))}
							{isThinking && (
								<div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-500">
									<Loader size={16} className="animate-spin" />
									Berpikir...
								</div>
							)}
						</div>

						<form
							onSubmit={handleSend}
							className="border-t border-slate-100 px-6 py-4"
						>
							<label className="sr-only" htmlFor="chatbot-input">
								Message
							</label>
							<div className="flex gap-3">
								<input
									id="chatbot-input"
									type="text"
									value={input}
									onChange={(event) => setInput(event.target.value)}
									placeholder={placeholder}
									disabled={isThinking}
									className="flex-1 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-primary-500 focus:outline-none"
								/>
								<button
									type="submit"
									disabled={isThinking || !input.trim()}
									className="rounded-2xl bg-primary-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-400"
								>
									Kirim
								</button>
							</div>
							<div className="mt-2 text-right">
								<Button
									onClick={clearConversation}
									size="sm"
									variant="ghost"
									className="text-xs text-red-500 hover:text-red-600"
								>
									Hapus percakapan
								</Button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
}
