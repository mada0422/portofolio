import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import About from "@/components/About"
import Process from "@/components/Process"
import Contact from "@/components/Contact"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <div className="bg-porcelain text-ink min-h-screen relative pt-32 pb-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(61,90,241,0.1),_transparent_55%)] pointer-events-none" aria-hidden />
      <div className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-ink/10 to-transparent left-1/2 opacity-40 pointer-events-none" aria-hidden />

      <div className="relative z-10 space-y-16">
        <Navigation />
        {/* <Hero />
        <Projects />
        <About />
        <Process />
        <Contact />
        <CTA />
        <Footer /> */}
        <Hero />
      </div>
    </div>
  )
}