import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ToolsMarquee from "./components/ToolsMarquee";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<main className="text-white">
			<Navbar />
			<Hero />
			<About />
			<Projects />
			<ToolsMarquee />
			<Contact />
			<Footer />
		</main>
	);
}
