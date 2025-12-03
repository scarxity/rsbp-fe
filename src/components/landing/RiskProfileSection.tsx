const profiles = [
	{
		name: "Konservatif",
		description:
			"Portofolio Anda akan lebih berat pada reksa dana pasar uang dan obligasi untuk menghasilkan return yang stabil di atas inflasi dengan fluktuasi minimal.",
		riskScore: "Skor Risiko: 0 - 4",
		allocation: [
			{ label: "Reksa Dana Pasar Uang", value: 50, color: "bg-slate-300" },
			{ label: "Reksa Dana Obligasi", value: 40, color: "bg-emerald-400" },
			{ label: "Reksa Dana Saham", value: 10, color: "bg-blue-400" },
		],
	},
	{
		name: "Moderat",
		description:
			"Portofolio Anda akan lebih berat pada reksa dana pasar uang dan obligasi, dengan diversifikasi di reksa dana saham untuk return di atas inflasi dengan risiko moderat.",
		riskScore: "Skor Risiko: 4 - 7",
		allocation: [
			{ label: "Reksa Dana Obligasi", value: 50, color: "bg-emerald-400" },
			{ label: "Reksa Dana Saham", value: 40, color: "bg-blue-400" },
			{ label: "Reksa Dana Pasar Uang", value: 10, color: "bg-slate-300" },
		],
	},
	{
		name: "Agresif",
		description:
			"Portofolio Anda akan lebih berat pada saham dengan sedikit diversifikasi di obligasi untuk return maksimal jangka panjang. Anda dapat menerima fluktuasi pasar yang tinggi.",
		riskScore: "Skor Risiko: 7 - 10",
		allocation: [
			{ label: "Reksa Dana Saham", value: 80, color: "bg-blue-500" },
			{ label: "Reksa Dana Obligasi", value: 15, color: "bg-emerald-400" },
			{ label: "Reksa Dana Pasar Uang", value: 5, color: "bg-slate-300" },
		],
	},
];

export default function RiskProfileSection() {
	return (
		<section id="risk-profile" className="bg-slate-950 py-20">
			<div className="container space-y-8">
				<div className="max-w-2xl">
					<p className="text-sm uppercase tracking-[0.3em] text-primary-200">
						Profil Risiko Anda
					</p>
					<h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
						Apa itu Skor Risiko?
					</h2>
					<p className="mt-4 text-base text-slate-300">
						Melalui teknologi Robo Advisor kami, Anda hanya perlu menjawab
						beberapa pertanyaan singkat. Sistem kami akan memberikan rekomendasi
						portofolio dengan return optimal berdasarkan riset peraih Nobel,
						Harry Markowitz.
					</p>
				</div>
				<div className="grid gap-6 lg:grid-cols-3">
					{profiles.map((profile) => (
						<article
							key={profile.name}
							className="rounded-3xl border border-white/5 bg-white/5 p-6"
						>
							<div className="flex items-start justify-between">
								<div>
									<h3 className="text-2xl font-semibold text-white">
										{profile.name}
									</h3>
									<p className="text-xs uppercase tracking-wide text-slate-400">
										{profile.riskScore}
									</p>
								</div>
								<span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
									Personalisasi
								</span>
							</div>
							<p className="mt-4 text-sm text-slate-300">
								{profile.description}
							</p>
							<div className="mt-6 space-y-3 text-sm text-white">
								{profile.allocation.map((asset) => (
									<div key={asset.label}>
										<div className="flex justify-between text-xs text-slate-300">
											<span>{asset.label}</span>
											<span>{asset.value}%</span>
										</div>
										<div className="mt-1 h-2 rounded-full bg-white/10">
											<div
												className={`${asset.color} h-2 rounded-full`}
												style={{ width: `${asset.value}%` }}
											/>
										</div>
									</div>
								))}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
