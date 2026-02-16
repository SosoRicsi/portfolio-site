"use client"

import { useState } from "react"

const categories = [
	"Mind",
	"Weboldal",
	"Alkalmazas",
	"E-commerce",
	"Landing Page",
]

const projects = [
	{
		title: "SkyTech Dashboard",
		category: "Alkalmazas",
		description:
			"Vallalati adat-dashboard valos ideju grafikonokkal, felhasznalo kezelessel es exportalasi lehetosegekkel.",
		tags: ["Next.js", "TypeScript", "PostgreSQL", "Recharts"],
		color: "from-blue-500/20 to-cyan-500/20",
		year: "2025",
		link: "#",
	},
	{
		title: "GreenMarket Shop",
		category: "E-commerce",
		description:
			"Bio elelmiszer webshop teljes kosar- es fizetesi rendszerrel, Stripe integracio es keszletkezeles.",
		tags: ["Next.js", "Stripe", "Supabase", "Tailwind"],
		color: "from-emerald-500/20 to-green-500/20",
		year: "2025",
		link: "#",
	},
	{
		title: "FitPro Landing",
		category: "Landing Page",
		description:
			"Fitness alkalmazas promocioja landing page, animaciokkal es konverzio-optimalizalt elrendezessel.",
		tags: ["React", "Framer Motion", "Tailwind"],
		color: "from-orange-500/20 to-red-500/20",
		year: "2024",
		link: "#",
	},
	{
		title: "NovaBuild Portfolio",
		category: "Weboldal",
		description:
			"Epiteszeti iroda bemutatkozo weboldala projekt-galeria es kapcsolati uerlap.",
		tags: ["Next.js", "Sanity CMS", "Tailwind"],
		color: "from-violet-500/20 to-purple-500/20",
		year: "2024",
		link: "#",
	},
	{
		title: "TaskFlow App",
		category: "Alkalmazas",
		description:
			"Csapat feladatkezelo alkalmazas drag-and-drop tablakkal, valos ideju szinkronizacioval es ertesitesekkel.",
		tags: ["React", "Node.js", "Socket.io", "MongoDB"],
		color: "from-sky-500/20 to-indigo-500/20",
		year: "2024",
		link: "#",
	},
	{
		title: "Vintage Vinyl Store",
		category: "E-commerce",
		description:
			"Retro bakelit webshop keresessel, szuressel es egyedi kosar-rendszerrel.",
		tags: ["Next.js", "Shopify API", "Tailwind"],
		color: "from-amber-500/20 to-yellow-500/20",
		year: "2023",
		link: "#",
	},
	{
		title: "CloudSync SaaS",
		category: "Landing Page",
		description:
			"SaaS termek landing oldala arazasi tablazattal, GYIK szekcioval es regisztraccios flow-val.",
		tags: ["Next.js", "TypeScript", "Tailwind"],
		color: "from-teal-500/20 to-cyan-500/20",
		year: "2023",
		link: "#",
	},
	{
		title: "Dr. Molnar Rendelo",
		category: "Weboldal",
		description:
			"Orvosi rendelo bemutatkozo weboldala idopontfoglalo rendszerrel es beteg portal.",
		tags: ["Next.js", "Supabase", "Tailwind", "Cal.com"],
		color: "from-rose-500/20 to-pink-500/20",
		year: "2023",
		link: "#",
	},
]

export function ProjectsContent() {
	const [activeCategory, setActiveCategory] = useState("Mind")

	const filteredProjects =
		activeCategory === "Mind"
			? projects
			: projects.filter((p) => p.category === activeCategory)

	return (
		<div className="relative z-10">
			{/* Hero */}
			<section className="px-6 pb-12 pt-20 md:pb-16 md:pt-28">
				<div className="mx-auto max-w-6xl text-center">
					<div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
						<span className="text-sm font-medium text-primary">
							Projektek
						</span>
					</div>
					<h1 className="mt-4 text-balance text-3xl font-bold text-foreground md:text-5xl">
						Válogatott munkák
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-pretty text-muted-foreground leading-relaxed md:text-lg">
						Nézd meg a legújabb projektjeimet, amelyke bemutatják tudásomat és tapasztalatomat.
					</p>
				</div>
			</section>

			{/* Filter */}
			<section className="px-6 pb-12">
				<div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2">
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setActiveCategory(cat)}
							className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all cursor-pointer! ${activeCategory === cat
									? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
									: "border border-border bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
								}`}
						>
							{cat}
						</button>
					))}
				</div>
			</section>

			{/* Projects Grid */}
			<section className="px-6 pb-24 md:pb-32">
				<div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
					{filteredProjects.map((project) => (
						<a
							key={project.title}
							href={project.link}
							className="group overflow-hidden rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80"
						>
							{/* Gradient header */}
							<div
								className={`relative h-44 bg-gradient-to-br ${project.color} flex items-center justify-center`}
							>
								<div className="flex h-16 w-16 items-center justify-center rounded-xl border border-foreground/10 bg-background/80 backdrop-blur-sm transition-transform group-hover:scale-110">
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
										className="text-primary"
									>
										<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
										<path d="M9 18c-4.51 2-5-2-7-2" />
									</svg>
								</div>
								<span className="absolute right-4 top-4 rounded-md bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
									{project.year}
								</span>
							</div>

							{/* Content */}
							<div className="p-6">
								<div className="mb-2 flex items-center justify-between">
									<h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
										{project.title}
									</h3>
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
										className="text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary"
									>
										<path d="M7 7h10v10" />
										<path d="M7 17 17 7" />
									</svg>
								</div>
								<span className="mb-3 inline-block text-xs font-medium text-primary">
									{project.category}
								</span>
								<p className="mb-4 text-sm leading-relaxed text-muted-foreground">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</a>
					))}
				</div>

				{filteredProjects.length === 0 && (
					<div className="mx-auto max-w-6xl py-20 text-center">
						<p className="text-muted-foreground">
							Nincs talalat ebben a kategoriaban.
						</p>
					</div>
				)}
			</section>
		</div>
	)
}
