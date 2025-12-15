import React from "react"
import GambarBG from "../assets/mainHero.webp"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white text-center"
    >
      <div
        className="absolute"
      >
        <img src={GambarBG} alt="Main Hero Image" className="w-screen inset-0 h-screen object-cover" />
        <div className="absolute top-0 w-full h-[200%] bg-[linear-gradient(0deg,#240000_50%,transparent)]"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-top from-brand-dark via-brand-dark/50 to-transparent"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-left md:text-center">
        <h1 className="text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
          Lebih dari Sekedar Angka
          <br />
          Kami adalah Keluarga
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 drop-shadow max-w-3xl mx-auto">
          HIMATIKA UIN Sunan Gunung Djati Bandung adalah wadah bagi mahasiswa
          Pendidikan Matematika untuk belajar, berkarya, dan mengabdi sejak 1999.
        </p>

        <a
          href="#event"
          className="mt-10 inline-block bg-brand-red hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold transition"
        >
          Lihat Kegiatan Kami
        </a>
      </div>
    </section>
  )
}

export default Hero
