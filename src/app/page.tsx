import {About} from "@/components/about";
import {SiteNav} from "@/components/site-nav";
import {Hero} from "@/components/hero";
import {Contact} from "@/components/contact";

export default function Home() {
	return (
		<>
			<SiteNav />
			<main>
				<Hero />
				<About />
				<Contact />
			</main>
		</>
	);
}
