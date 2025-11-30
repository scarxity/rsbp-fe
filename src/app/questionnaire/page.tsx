"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/button/Button";
import ChatbotWidget from "@/components/chat/ChatbotWidget";
import RadioButton from "@/components/form/RadioButton";
import clsxm from "@/lib/clsxm";
import { questionsData } from "./_constants/question";
import RiskAssessmentResult from "./_containers/RiskAssessmentResult";
import {
	type RiskAssessResponse,
	useAssessRiskMutation,
} from "./_hooks/useAssessRiskMutation";

type QuestionKeys =
	| "question1"
	| "question2"
	| "question3"
	| "question4"
	| "question5"
	| "question6"
	| "question7"
	| "question8"
	| "question9"
	| "question10"
	| "question11"
	| "question12"
	| "question13";

type QuestionnaireForm = Record<QuestionKeys, string>;

type Answer = {
	question: number;
	answer: string;
};

export type RiskAssessRequest = {
	answers: Answer[];
};

export default function QuestionnairePage() {
	const methods = useForm<QuestionnaireForm>();

	const [resultData, setResultData] = useState<RiskAssessResponse | null>(null);

	const handleRetake = () => {
		setResultData(null);
		methods.reset();
	};

	const { mutate, isPending } = useAssessRiskMutation({
		onSuccess: (data) => {
			setResultData(data);
		},
	});

	const onSubmit: SubmitHandler<QuestionnaireForm> = (data) => {
		const payload: RiskAssessRequest = {
			answers: questionsData.map((q) => ({
				question: q.question,
				answer: data[q.name as QuestionKeys],
			})),
		};

		mutate(payload);
	};

	const isAssessmentComplete = !!resultData;

	return (
		<main className="min-h-screen bg-slate-950 text-white">
			<div className="container mx-auto px-4 py-24 sm:px-6 lg:py-28">
				{!isAssessmentComplete && (
					<div className="space-y-4 mb-10">
						<Link
							href="/"
							className="text-sm uppercase flex items-center gap-2 hover:font-semibold transition-all duration-300 tracking-[0.3em] text-primary-200"
						>
							<ArrowLeft /> Kembali ke Beranda
						</Link>
						<h1 className="text-4xl font-semibold leading-tight text-white">
							Kuisioner Toleransi Risiko
						</h1>
						<p className="text-lg text-slate-300">
							Silakan pilih opsi yang paling menggambarkan Anda untuk
							masing-masing dari 13 pertanyaan. Penilaian ini akan menentukan
							profil risiko Anda.
						</p>
					</div>
				)}

				{isAssessmentComplete ? (
					<RiskAssessmentResult data={resultData} onRetake={handleRetake} />
				) : (
					<FormProvider {...methods}>
						<form
							className="flex flex-col gap-10"
							onSubmit={methods.handleSubmit(onSubmit)}
						>
							{questionsData.map((q) => (
								<div
									key={q.question}
									className={clsxm(
										"space-y-4 p-6 rounded-3xl border border-white/5 bg-white/5 shadow-xl shadow-black/30",
									)}
								>
									<h2 className="text-xl font-semibold text-white">
										{q.label}
									</h2>
									<div className="space-y-3">
										{q.options.map((option) => (
											<RadioButton
												key={option.value}
												label={option.label}
												name={q.name}
												value={option.value}
												validation={{ required: "An answer is required." }}
												variant="medium"
												className="block"
											/>
										))}
									</div>
								</div>
							))}
							<div>
								<Button
									type="submit"
									size="lg"
									variant="primary"
									className="w-full rounded-xl"
									isLoading={isPending}
								>
									Kirim Kuisioner
								</Button>
							</div>
						</form>
					</FormProvider>
				)}
			</div>
			<ChatbotWidget />
		</main>
	);
}
