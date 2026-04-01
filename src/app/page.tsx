import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Videos from "@/components/Videos";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Videos />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
