"use client"

import { useState } from "react"

const categories = [
	"Mind",
	"Blog",
	"Portfólió"
]

const projects: {
	title: string;
	category: string;
	description: string;
	tags: string[];
	color: string;
	year: string;
	link: string;
	logo: string;
	flags?: string[];
	logo_style?: string;
}[] = [
	{
		title: "Célom a Történelem",
		category: "Blog",
		description:
			"Történelmi blog. Komplett felhasználókezelés, bejegyzés és kategória szerkesztés.",
		tags: ["Next.js", "TailwindCSS", "Laravel", "MySQL", "Redis"],
		flags: ["Fejlesztés alatt"],
		color: "from-blue-500/50 to-cyan-500/20",
		year: "2025-"+new Date().getFullYear(),
		link: "https://celom-a-tortenelem.eu",
		logo: "https://celom-a-tortenelem.eu/cat_logo.svg"
	},
	{
		title: "Portfólió oldal",
		category: "Portfólió",
		description:
			"Saját portfólió oldal.",
		tags: ["Next.js", "TailwindCSS"],
		/* flags: ["Használatban"], */
		color: "from-blue-500/50 to-cyan-500/20",
		year: "2026",
		link: "/",
		logo: "/logo.png",
		logo_style: "invert"
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
						Nézd meg a legújabb projektjeimet, amelyek bemutatják tudásomat és tapasztalatomat.
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
							target="_blank"
							className="group overflow-hidden rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80"
						>
							{/* Gradient header */}
							<div
								className={`relative h-44 bg-gradient-to-br ${project.color} flex items-center justify-center`}
							>
								<div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/80 backdrop-blur-sm transition-transform group-hover:scale-110">
									<img src={project.logo} className={`w-11.5 ${project.logo_style}`} />
								</div>
								<span className="absolute bottom-4 rounded-md bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
									{project.year}
								</span>
								{project.flags && (
									<span className="absolute right-4 top-4 flex gap-1">
										{project.flags.map((flag, i) => (
											<span key={i} className="rounded-md bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">{flag}</span>
										))}
									</span>
								)}
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
							Nincs találat ebben a kategóriában.
						</p>
					</div>
				)}
			</section>
		</div>
	)
}
