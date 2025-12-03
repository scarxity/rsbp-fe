import { ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Button from "@/components/button/Button";
import type { RiskAssessResponse } from "../_hooks/useAssessRiskMutation";

export default function RiskAssessmentResult({
	data,
	onRetake,
}: {
	data: RiskAssessResponse;
	onRetake: () => void;
}) {
	const labelMap: Record<string, string> = {
		money_market: "Reksa Dana Pasar Uang",
		obligation: "Obligasi",
		stocks: "Saham",
	};

	const profileDescriptions: Record<string, string> = {
		Konservatif:
			"Portofolio Anda akan lebih berat pada reksa dana pasar uang dan obligasi untuk menghasilkan return yang stabil di atas inflasi dengan fluktuasi minimal.",
		Moderat:
			"Portofolio Anda akan lebih berat pada reksa dana pasar uang dan obligasi, dengan diversifikasi di reksa dana saham untuk return di atas inflasi dengan risiko moderat.",
		Agresif:
			"Portofolio Anda akan lebih berat pada saham dengan sedikit diversifikasi di obligasi untuk return maksimal jangka panjang. Anda dapat menerima fluktuasi pasar yang tinggi.",
	};

	const profileDescription = profileDescriptions[data.profile] ?? "";

	const pieData = useMemo(
		() =>
			Object.entries(data.allocations).map(([key, value]) => ({
				name: labelMap[key] ?? key.replace(/_/g, " ").toUpperCase(),
				value,
			})),
		[data.allocations],
	);

	return (
		<div className="space-y-12">
			<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary-500/20 via-slate-900 to-slate-950 p-8 text-center shadow-2xl">
				<div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-500/30 blur-3xl" />
				<div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-secondary-400/20 blur-3xl" />
				<p className="relative text-sm uppercase tracking-[0.3em] text-primary-200">
					Hasil Analisis
				</p>
				<h1 className="relative mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
					Profil Risikomu:{" "}
					<span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
						{data.profile}
					</span>
				</h1>
				<div className="relative mx-auto mt-6 flex items-center justify-center gap-3">
					<div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary-400 bg-white/10 text-2xl font-bold text-white">
						{data.risk_profile_score}
					</div>
					<span className="text-lg text-slate-300">/ 10</span>
				</div>
				{profileDescription && (
					<p className="relative mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300">
						{profileDescription}
					</p>
				)}
			</div>

			<div className="bg-white/5 p-8 rounded-xl shadow-2xl shadow-black/50">
				<h2 className="text-2xl font-semibold mb-6 text-white">
					Rekomendasi Alokasi Portofolio
				</h2>
				<div className="h-80 w-full mx-auto">
					<ResponsiveContainer width="100%" height="100%">
						<PieChart>
							<Tooltip
								formatter={(value: number, name: string) => [`${value}%`, name]}
								contentStyle={{
									backgroundColor: "rgba(30, 41, 59, 0.9)",
									border: "1px solid #334155",
									borderRadius: "4px",
								}}
								itemStyle={{ color: "#fff" }}
							/>
							<Pie
								data={pieData}
								cx="50%"
								cy="50%"
								innerRadius={80}
								outerRadius={120}
								dataKey="value"
								labelLine={true}
								label={({ name, percent }) =>
									`${name} (${percent ? (percent * 100).toFixed(0) : "0"}%)`
								}
							>
								{pieData.map((_entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={generateColor(index)}
										stroke="#1e293b"
										strokeWidth={1}
									/>
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>

			<div className="flex flex-col sm:flex-row gap-4 pt-4">
				<Link href="/" className="flex-1">
					<Button
						size="lg"
						variant="blue"
						className="w-full rounded-xl flex items-center justify-center gap-2"
					>
						<ArrowLeft size={20} /> Back to Home
					</Button>
				</Link>
				<Button
					onClick={onRetake}
					size="lg"
					variant="primary"
					className="flex-1 w-full rounded-xl flex items-center justify-center gap-2"
				>
					<RefreshCw size={20} /> Retake Test
				</Button>
			</div>
		</div>
	);
}

const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#0088FE", "#AF19FF"];

const generateColor = (index: number) => COLORS[index % COLORS.length];
