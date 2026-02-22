import Link from "next/link";

import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Szolgaltatasok | Kovacs Tamas",
	description:
		"Webfejlesztesi szolgaltatasok: weboldalak, alkalmazasok, UI/UX tervezes es tanacsadas.",
}

const services = [
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<polyline points="16 18 22 12 16 6" />
				<polyline points="8 6 2 12 8 18" />
			</svg>
		),
		title: "Webfejlesztés",
		description:
			"Modern, gyors és reszponzív weboldalak és alkalmazások fejlesztése a legújabb technológiák használatával.",
		features: [
			"Reszponzív dizájn",
			"SEO optimalizálás",
			"Gyors betöltés",
			"Modern keretrendszerek",
		],
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<polyline points="16 18 22 12 16 6" />
				<polyline points="8 6 2 12 8 18" />
			</svg>
		),
		title: "Backend fejlesztés",
		description:
			"Skálázható API-ok és szerver oldali megoldások építése.",
		features: [
			"REST API",
			"Adatbázis tervezés",
			"Átláthatóság"
		],
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M12 20h9" />
				<path
					d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
			</svg>
		),
		title: "Tartalomkezelő rendszerek",
		description:
			"Egyedi CMS megoldások, amelyekkel könnyedén kezelheted a weboldalad tartalmát, külső segítség nélkül.",
		features: [
			"Egyedi admin felület",
			"Tartalom verzizózás",
			"Többnyelvűség",
		],
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="28"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path
					d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9" />
			</svg>
		),
		title: "Tanácsadás & Konzultáció",
		description:
			"Technologiai tanácsadás meglévő projektekhez. Kód audit, teljesítmény optimalizálás és architektúra tervezés.",
		features: [
			"Kód audit",
			"Architektúra tervezés",
			"Teljesítmény javítás",
			"Technológia választás",
		],
	},
]

const process_steps = [
	{
		step: "01",
		title: "Felmérés & tervezés",
		description:
			"Megismerem az igényeidet, célkitűzéseidet és a projekt kereteit. Részletes tervet készítünk.",
	},
	{
		step: "02",
		title: "Dizájn & Prototípus",
		description:
			"Vizualis terveket és interaktív prototípusokat készítek, amelyeket együtt finomítunk.",
	},
	{
		step: "03",
		title: "Fejlesztés",
		description:
			"Modern technológiákkal megvalósítom a tervet. Folyamatos egyeztetéssel követjük az előremenetelt.",
	},
	{
		step: "04",
		title: "Tesztek & indítás",
		description:
			"Alapos tesztelés után elindítjuk a projektet. Támogatást nyújtok az indulást követően is.",
	},
]


export default function ServicesPage() {
	return (
		<div className="relative z-10">
			{/* Hero */}
			<section className="px-6 pb-16 pt-20 md:pb-24 md:pt-28">
				<div className="mx-auto max-w-6xl text-center">
					<span className="text-sm font-semibold uppercase tracking-widest text-primary">
						Szolgáltatások
					</span>
					<h1 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-5xl">
						Amit nyújtani tudok
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-pretty text-muted-foreground leading-relaxed md:text-lg">
						Komplett webfejlesztési megoldásokat kínálok, az ötlettől a végtermékig. Minden projektet a legjobb minőségben kínálok.
					</p>
				</div>
			</section>

			{/* Services Grid */}
			<section className="px-6 pb-24">
				<div className="mx-auto flex flex-wrap max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => (
						<div
							key={service.title}
							className="w-lg group rounded-xl border border-border/50 bg-card/60 p-7 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80 mx-auto"
						>
							<div
								className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
								{service.icon}
							</div>
							<h3 className="mb-3 text-lg font-semibold text-foreground">
								{service.title}
							</h3>
							<p className="mb-5 text-sm leading-relaxed text-muted-foreground">
								{service.description}
							</p>
							<ul className="space-y-2">
								{service.features.map((feature) => (
									<li
										key={feature}
										className="flex items-center gap-2 text-sm text-muted-foreground"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="14"
											height="14"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="shrink-0 text-primary"
										>
											<path d="M20 6 9 17l-5-5" />
										</svg>
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			{/* Process */}
			<section className="px-6 pb-24 md:pb-32">
				<div className="mx-auto max-w-6xl">
					<div className="mb-4 text-center">
						<span className="text-sm font-semibold uppercase tracking-widest text-primary">
							Folyamat
						</span>
					</div>
					<h2 className="mb-16 text-center text-3xl font-bold text-foreground md:text-4xl">
						Hogyan dolgozom?
					</h2>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{process_steps.map((item) => (
							<div
								key={item.step}
								className="relative rounded-xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm"
							>
								<span className="mb-4 block font-mono text-3xl font-bold text-primary/30">
									{item.step}
								</span>
								<h3 className="mb-2 font-semibold text-foreground">
									{item.title}
								</h3>
								<p className="text-sm leading-relaxed text-muted-foreground">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="px-6 pb-24">
				<div
					className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center backdrop-blur-sm md:p-14">
					<h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
						Kész vagy elkezdeni?
					</h2>
					<p className="mb-8 text-muted-foreground">
						Beszéljük meg a projekted részleteit és találjunk megoldást együtt.
					</p>
					<Link
						href="/#contact"
						className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
					>
						Kapcsolatfelvétel
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M5 12h14" />
							<path d="m12 5 7 7-7 7" />
						</svg>
					</Link>
				</div>
			</section>
		</div>
	);
}
