import React, { useState, useEffect, useRef, useCallback } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Profile from "./components/Profile"
import ExploreSection from "./components/ExploreSection"
import EventSection from "./components/EventSection"
// import Timeline from "./components/Timeline";
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import EventModal from "./components/EventModal"
import { events } from "./data/event"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Profil", href: "#profil" },
  { name: "Eksplore", href: "#eksplore" },
  { name: "Event", href: "#event" },
  { name: "Kontak", href: "#kontak" }
]

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [activeSection, setActiveSection] = useState("home")

  const sectionRefs = useRef({})

  useEffect(() => {
    navLinks.forEach(link => {
      const id = link.href.substring(1)
      sectionRefs.current[id] = document.getElementById(id)
    })
  }, [])

  const handleScroll = useCallback(() => {
    const pageYOffset = window.scrollY
    let newActiveSection = "home"

    Object.keys(sectionRefs.current).forEach(sectionId => {
      const section = sectionRefs.current[sectionId]
      if (section && section.offsetTop <= pageYOffset + 100) {
        newActiveSection = sectionId
      }
    })

    setActiveSection(newActiveSection)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  const handleEventClick = eventId => {
    const event = events.find(e => e.id === eventId)
    if (event) {
      setSelectedEvent(event)
      setIsModalOpen(true)
      document.body.style.overflow = "hidden"
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="bg-brand-bg text-brand-dark font-alt">
      <Navbar navLinks={navLinks} activeSection={activeSection} />
      <main>
        <Hero />
        <Profile />
        {/* <Timeline /> */}
        <ExploreSection />
        <EventSection onEventClick={handleEventClick} />
        <Contact />
      </main>
      <Footer />
      {isModalOpen && selectedEvent && (
        <EventModal event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  )
}

export default App