const steps = [
	{
		title: "01. Isi Kuisioner",
		description:
			"Kuisioner akan mengungkap toleransi risiko, profil risiko, dan alokasi portofolio Anda dalam waktu kurang dari 5 menit.",
	},
	{
		title: "02. Dapatkan Profil Risiko Anda",
		description:
			"Sistem pakar kami akan menilai jawaban Anda dan memetakannya ke dalam profil risiko seperti Konservatif, Moderat, atau Agresif, lengkap dengan penjelasannya.",
	},
	{
		title: "03. Terima Rekomendasi Alokasi",
		description:
			"Berdasarkan profil risiko Anda, kami memberikan rekomendasi alokasi portofolio yang optimal sesuai dengan prinsip Modern Portfolio Theory.",
	},
	{
		title: "04. Tanya Jawab dengan AI Chatbot",
		description:
			"Pelajari lebih lanjut tentang investasi dan profil risiko Anda menggunakan Chatbot AI kami yang didukung oleh RAG.",
	},
];

export default function HowItWorksSection() {
	return (
		<section
			id="how-it-works"
			className="bg-gradient-to-b from-black to-slate-950 py-20"
		>
			<div className="container space-y-8">
				<div className="max-w-2xl">
					<p className="text-sm uppercase tracking-[0.3em] text-primary-200">
						Cara Kerja
					</p>
					<h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
						Dapatkan hasil dengan mengikuti 4 langkah ini.
					</h2>
					<p className="mt-4 text-base text-slate-300">
						Setiap langkah dirancang untuk memandu Anda secara sistematis,
						memberikan kejelasan dan fondasi yang kuat untuk keputusan investasi
						Anda.
					</p>
				</div>
				<div className="grid gap-6 lg:grid-cols-2">
					{steps.map((step) => (
						<div
							key={step.title}
							className="rounded-3xl border border-white/5 bg-white/5 p-6 shadow-xl shadow-black/30"
						>
							<h3 className="text-xl font-semibold text-white">{step.title}</h3>
							<p className="mt-3 text-sm text-slate-300">{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
