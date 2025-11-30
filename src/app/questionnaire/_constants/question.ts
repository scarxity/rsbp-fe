export const questionsData = [
	{
		question: 1,
		name: "question1" as const,
		label:
			"1. Secara umum, bagaimana sahabat Anda menggambarkan Anda dalam hal pengambilan risiko?",
		options: [
			{ value: "A", label: "Seorang pengambil risiko sejati (gambler)" },
			{
				value: "B",
				label: "Bersedia mengambil risiko setelah melakukan riset yang memadai",
			},
			{ value: "C", label: "Hati-hati" },
			{ value: "D", label: "Sangat menghindari risiko" },
		],
	},
	{
		question: 2,
		name: "question2" as const,
		label:
			"2. Anda berada di acara kuis TV dan dapat memilih salah satu dari berikut ini; mana yang akan Anda ambil?",
		options: [
			{ value: "A", label: "$1.000 tunai" },
			{ value: "B", label: "Peluang 50% untuk memenangkan $5.000" },
			{ value: "C", label: "Peluang 25% untuk memenangkan $10.000" },
			{ value: "D", label: "Peluang 5% untuk memenangkan $100.000" },
		],
	},
	{
		question: 3,
		name: "question3" as const,
		label:
			'3. Anda baru saja selesai menabung untuk liburan "sekali seumur hidup". Tiga minggu sebelum keberangkatan, Anda kehilangan pekerjaan. Apa yang akan Anda lakukan?',
		options: [
			{ value: "A", label: "Membatalkan liburan" },
			{ value: "B", label: "Mengambil liburan yang jauh lebih sederhana" },
			{
				value: "C",
				label:
					"Pergi sesuai jadwal, dengan alasan bahwa Anda butuh waktu untuk mempersiapkan pencarian kerja",
			},
			{
				value: "D",
				label:
					"Memperpanjang liburan, karena ini mungkin kesempatan terakhir Anda untuk menikmati fasilitas kelas satu",
			},
		],
	},
	{
		question: 4,
		name: "question4" as const,
		label:
			"4. Jika Anda secara tidak terduga menerima $20.000 untuk diinvestasikan, apa yang akan Anda lakukan?",
		options: [
			{
				value: "A",
				label:
					"Menyetorkannya ke rekening bank, rekening pasar uang, atau sertifikat deposito (CD) berasuransi",
			},
			{
				value: "B",
				label:
					"Menginvestasikannya dalam obligasi aman berkualitas tinggi atau reksa dana obligasi",
			},
			{
				value: "C",
				label: "Menginvestasikannya dalam saham atau reksa dana saham",
			},
		],
	},
	{
		question: 5,
		name: "question5" as const,
		label:
			"5. Dalam hal pengalaman, seberapa nyaman Anda berinvestasi dalam saham atau reksa dana saham?",
		options: [
			{ value: "A", label: "Sama sekali tidak nyaman" },
			{ value: "B", label: "Agak nyaman" },
			{ value: "C", label: "Sangat nyaman" },
		],
	},
	{
		question: 6,
		name: "question6" as const,
		label:
			'6. Ketika Anda memikirkan kata "risiko", kata mana yang muncul pertama kali di benak Anda?',
		options: [
			{ value: "A", label: "Kerugian" },
			{ value: "B", label: "Ketidakpastian" },
			{ value: "C", label: "Peluang" },
			{ value: "D", label: "Sensasi (Thrill)" },
		],
	},
	{
		question: 7,
		name: "question7" as const,
		label:
			"7. Beberapa ahli memprediksi harga aset seperti emas, perhiasan, barang koleksi, dan properti (aset riil) akan meningkat nilainya. Sebagian besar aset investasi Anda saat ini ada dalam obligasi pemerintah berbunga tinggi. Apa yang akan Anda lakukan?",
		options: [
			{ value: "A", label: "Menahan obligasi tersebut" },
			{
				value: "B",
				label:
					"Jual obligasi, masukkan setengah hasilnya ke rekening pasar uang, dan setengahnya lagi ke aset riil",
			},
			{
				value: "C",
				label: "Jual obligasi dan masukkan seluruh hasilnya ke aset riil",
			},
			{
				value: "D",
				label:
					"Jual obligasi, masukkan semua uang ke aset riil, dan pinjam uang tambahan untuk membeli lebih banyak lagi",
			},
		],
	},
	{
		question: 8,
		name: "question8" as const,
		label:
			"8. Mengingat pengembalian kasus terbaik dan terburuk dari empat pilihan investasi di bawah ini, mana yang lebih Anda sukai?",
		options: [
			{ value: "A", label: "Untung $200 (terbaik); Untung/Rugi $0 (terburuk)" },
			{ value: "B", label: "Untung $800 (terbaik); Rugi $200 (terburuk)" },
			{ value: "C", label: "Untung $2.600 (terbaik); Rugi $800 (terburuk)" },
			{ value: "D", label: "Untung $4.800 (terbaik); Rugi $2.400 (terburuk)" },
		],
	},
	{
		question: 9,
		name: "question9" as const,
		label:
			"9. Selain apa pun yang Anda miliki, Anda telah diberi $1.000. Anda sekarang diminta untuk memilih antara:",
		options: [
			{ value: "A", label: "Keuntungan pasti sebesar $500" },
			{
				value: "B",
				label:
					"Peluang 50% untuk untung $1.000 dan peluang 50% untuk tidak untung apa-apa.",
			},
		],
	},
	{
		question: 10,
		name: "question10" as const,
		label:
			"10. Selain apa pun yang Anda miliki, Anda telah diberi $2.000. Anda sekarang diminta untuk memilih antara:",
		options: [
			{ value: "A", label: "Kerugian pasti sebesar $500" },
			{
				value: "B",
				label:
					"Peluang 50% untuk rugi $1.000 dan peluang 50% untuk tidak rugi apa-apa.",
			},
		],
	},
	{
		question: 11,
		name: "question11" as const,
		label:
			"11. Seandainya seorang kerabat mewariskan $100.000 kepada Anda, dengan syarat dalam wasiat bahwa Anda harus menginvestasikan SEMUA uang tersebut dalam SATU pilihan berikut. Mana yang akan Anda pilih?",
		options: [
			{
				value: "A",
				label: "Rekening tabungan atau reksa dana pasar uang",
			},
			{ value: "B", label: "Reksa dana yang memiliki saham dan obligasi" },
			{ value: "C", label: "Portofolio berisi 15 saham biasa (common stocks)" },
			{ value: "D", label: "Komoditas seperti emas, perak, dan minyak" },
		],
	},
	{
		question: 12,
		name: "question12" as const,
		label:
			"12. Jika Anda harus menginvestasikan $20.000, pilihan investasi mana yang menurut Anda paling menarik?",
		options: [
			{
				value: "A",
				label:
					"60% di investasi risiko rendah, 30% di investasi risiko sedang, 10% di investasi risiko tinggi",
			},
			{
				value: "B",
				label:
					"30% di investasi risiko rendah, 40% di investasi risiko sedang, 30% di investasi risiko tinggi",
			},
			{
				value: "C",
				label:
					"10% di investasi risiko rendah, 40% di investasi risiko sedang, 50% di investasi risiko tinggi",
			},
		],
	},
	{
		question: 13,
		name: "question13" as const,
		label:
			"13. Teman dan tetangga Anda, seorang ahli geologi berpengalaman, sedang mengumpulkan sekelompok investor untuk mendanai usaha eksplorasi pertambangan emas. Jika berhasil, usaha tersebut dapat memberikan hasil 50 hingga 100 kali lipat dari investasi. Teman Anda memperkirakan peluang keberhasilannya hanya 20%. Jika Anda punya uangnya, berapa banyak yang akan Anda investasikan?",
		options: [
			{ value: "A", label: "Tidak sama sekali" },
			{ value: "B", label: "Gaji satu bulan" },
			{ value: "C", label: "Gaji tiga bulan" },
			{ value: "D", label: "Gaji enam bulan" },
		],
	},
];
