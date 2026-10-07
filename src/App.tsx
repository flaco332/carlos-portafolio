import GridBackground from "./components/GridBackground";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Badges from "./components/Badges";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LearningLog from "./components/LearningLog";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <LearningLog />
        <Badges />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
