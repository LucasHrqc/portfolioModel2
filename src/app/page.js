import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
