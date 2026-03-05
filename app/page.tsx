import Hero from "@/components/portfolio/hero";
import About from "@/components/portfolio/about";
import FeaturedProjects from "@/components/portfolio/featured-projects";
import AllProjects from "@/components/portfolio/all-projects";
import Experience from "@/components/portfolio/experience";
import Skills from "@/components/portfolio/skills";
import Contact from "@/components/portfolio/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <Hero />
      <About />
      <FeaturedProjects />
      {/* <AllProjects /> */}
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
