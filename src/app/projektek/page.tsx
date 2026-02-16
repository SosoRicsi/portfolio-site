export const dynamic = 'force-dynamic';

import { ProjectsContent } from "@/contents/projects-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Projektek | Jarkó Richárd",
	description: "Válogatás a legjobb munkáimból: weboldalak, alkalmazások, és sok más.",
}

export default function ProjectsPage() {
	return <ProjectsContent />
}
