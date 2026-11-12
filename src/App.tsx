import { useEffect } from "react"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Education } from "./components/Education"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { GitHub } from "./components/GitHub"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"
import { Technologies } from "./components/Technologies"
import { site } from "./data/site"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressCountry: "Sri Lanka",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Moratuwa",
  },
  sameAs: [site.linkedinUrl, site.githubUrl].filter(Boolean),
  knowsAbout: [
    "C++",
    "Linux",
    "SNMP",
    "Network monitoring",
    "Node.js",
    "React",
    "PostgreSQL",
  ],
}

export default function App() {
  useEffect(() => {
    document.title = site.seo.title
  }, [])

  return (
    <div className="bg-white font-sans text-zinc-800 antialiased">
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Education />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
