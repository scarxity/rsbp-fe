import Link from "next/link";
import Button from "../button/Button";

const stats = [
	{ label: "Durasi Penilaian", value: "2-5 mnt" },
	{ label: "Selalu Tersedia", value: "24/7" },
];

const conservativeAllocation = [
	{ label: "Reksa Dana Pasar Uang", value: 50, color: "bg-slate-400" },
	{ label: "Reksa Dana Obligasi", value: 40, color: "bg-emerald-500" },
	{ label: "Reksa Dana Saham", value: 10, color: "bg-blue-500" },
];

type HeroSectionProps = {
	questionnaireHref: string;
	onOpenChat: () => void;
};

export default function HeroSection({
	questionnaireHref,
	onOpenChat,
}: HeroSectionProps) {
	return (
		<section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black">
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
				<div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-primary-500 blur-3xl" />
				<div className="absolute bottom-16 right-0 h-64 w-64 rounded-full bg-secondary-400 blur-3xl" />
			</div>
			<div className="container grid gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
				<div>
					<p className="text-sm uppercase tracking-[0.3em] text-primary-200">
						ROBO ADVISOR
					</p>
					<h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
						Investasi Cerdas dengan Sistem Pakar
					</h1>
					<p className="mt-6 text-lg text-slate-200">
						Robo advisor adalah sistem pakar yang dapat menilai profil risiko,
						memberikan alokasi portofolio, dan menyediakan chatbot AI untuk
						menjawab semua pertanyaan investasi.
					</p>
					<div className="mt-8 flex flex-wrap gap-4">
						<Link
							href={questionnaireHref}
							className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary-500/40 transition hover:bg-primary-400"
						>
							Mulai Kuisioner
						</Link>
						<Button
							onClick={onOpenChat}
							className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
						>
							Chatbot AI
						</Button>
					</div>
					<div className="mt-10 grid gap-6 sm:grid-cols-2">
						{stats.map((stat) => (
							<div
								key={stat.label}
								className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
							>
								<p className="text-3xl font-semibold text-white">
									{stat.value}
								</p>
								<p className="mt-1 text-sm uppercase tracking-wide text-slate-300">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
					<div className="rounded-2xl bg-slate-900 p-6 shadow-2xl">
						<div className="rounded-2xl bg-white/5 p-4 text-sm text-slate-200">
							<p className="font-semibold text-white">Pratinjau Kuisioner</p>
							<p className="mt-2 text-slate-300">
								"Bagaimana reaksi Anda ketika pasar turun 15% dalam seminggu?"
							</p>
							<div className="mt-3 grid gap-2 text-xs text-slate-200">
								<p className="rounded-xl bg-white/10 px-3 py-2">
									Saya tetap berinvestasi, itu bagian dari rencana.
								</p>
								<p className="rounded-xl bg-white/10 px-3 py-2">
									Saya menyeimbangkan kembali untuk menangkap peluang.
								</p>
								<p className="rounded-xl bg-white/10 px-3 py-2">
									Saya mengurangi eksposur sampai volatilitas mereda.
								</p>
							</div>
						</div>
						<div className="mt-6 rounded-2xl bg-white/90 p-5 text-slate-900">
							<p className="text-sm font-medium text-slate-600">
								Profil Risiko: Konservatif
							</p>
							<div className="mt-4 space-y-3 text-sm">
								{conservativeAllocation.map((asset) => (
									<div key={asset.label}>
										<div className="flex justify-between text-xs text-slate-600">
											<span>{asset.label}</span>
											<span>{asset.value}%</span>
										</div>
										<div className="mt-1 h-2 rounded-full bg-slate-200">
											<div
												className={`${asset.color} h-2 rounded-full`}
												style={{ width: `${asset.value}%` }}
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
