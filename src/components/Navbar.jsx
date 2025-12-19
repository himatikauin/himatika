import React, { useState, useEffect } from "react"
import { MenuIcon, XIcon } from "./icons"
import logoHimatika from "../assets/brand/hima.webp"

const Navbar = ({ navLinks, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-2 left-5 right-5 z-50 rounded-[50px]
        sm:top-0 sm:left-0 sm:right-0 sm:rounded-none
        transition-all duration-300 ease-out
        ${
          isScrolled || isMenuOpen
            ? "bg-white/30 backdrop-blur-sm shadow-md"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-3 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <img
                src={logoHimatika}
                alt="Logo HIMATIKA"
                className="w-12"
              />
            </a>

            {/* ================= DESKTOP MENU ================= */}
            <div className="hidden lg:flex items-center gap-10">
              <div
                className={`fixed top-0 left-0 right-0 flex justify-around mx-[32%]
                rounded-b-[20px] transition-all duration-200
                ${
                  isScrolled
                    ? "bg-transparent py-5"
                    : "bg-white/30 backdrop-blur-sm py-3 shadow-md"
                }`}
              >
                {navLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`font-medium transition-colors
                      ${
                        activeSection === link.href.substring(1)
                          ? "text-brand-red border-b-2 border-brand-red"
                          : "text-brand-dark hover:text-brand-red"
                      }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <a
                href="https://www.instagram.com/himatikauinsgd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red hover:bg-red-800 text-white px-5 py-2 rounded-full transition"
              >
                Follow Us
              </a>
            </div>

            {/* ================= HAMBURGER (MOBILE + TABLET) ================= */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-white/30 backdrop-blur-sm p-3 rounded-[20px] shadow-md"
              >
                {isMenuOpen ? (
                  <XIcon className="w-6 h-6 text-brand-dark" />
                ) : (
                  <MenuIcon className="w-6 h-6 text-brand-dark" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE + TABLET SLIDE MENU ================= */}
      <div
        className={`
          fixed top-32 right-5 py-4 w-[80%] max-w-sm z-40 ring-1 ring-brand-red/50
          bg-white/30 backdrop-blur-lg shadow-xl
          transform transition-transform duration-500 ease-in-out rounded-xl
          lg:hidden
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col items-center justify-center pt-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-semibold transition-colors w-full text-center hover:bg-brand-bg/40 py-4 duration-250 ease-in-out
                ${
                  activeSection === link.href.substring(1)
                    ? "text-brand-red"
                    : "text-brand-dark hover:text-brand-red"
                }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://www.instagram.com/himatikauinsgd"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-6 bg-brand-red hover:bg-red-800 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Follow Us
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
