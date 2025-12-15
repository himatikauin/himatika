import React, { useState } from "react"
import { WhatsUp, Building, InstagramIcon } from "../components/icons";

const Contact = () => {
  const [result, setResult] = useState("")

  const onSubmit = async event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    formData.append("access_key", "f029b709-11be-4b68-8e90-c02914b101c1")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()
    setResult(data.success ? "Pesan berhasil dikirim!" : "Terjadi kesalahan.")
    if (data.success) event.target.reset()
  }

  return (
    <section id="kontak" className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            {/* Judul */}
            <h2 className="text-4xl font-title font-bold text-brand-dark mb-4">
              Kenali Kami Lebih Dekat
            </h2>
            {/* Paragraf*/}
            <div className="border-l-4 border-brand-dark pl-4 mb-10">
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl font-body">
                Punya pertanyaan, saran, atau ingin bekerja sama? Kami siap membantu Anda.  
                Kirimkan pesan melalui formulir dan sosial media kami, atau kunjungi lokasi kami untuk mendapatkan informasi lebih lanjut.
              </p>
            </div>
            <div className="space-y-6 mt-6">
              <div 
                className="flex items-center gap-2"
              >
                <Building className="text-3xl text-brand-dark" />
                <p className="text-gray-800 leading-relaxed">
                  Kampus II UIN Sunan Gunung Djati Bandung <br />
                  Jl. Cimincrang, Cimenerang, Kec. Gedebage, Kota Bandung, Jawa Barat
                </p>
              </div>
              <a 
                className="flex items-center gap-2"
                target="_blank"
                href="http://wa.me/6285159950656"  
              >
                <WhatsUp className="text-2xl text-brand-dark" />
                <p className="text-gray-800 border-b-2 border-brand-dark mb-1">+62 812-3456-7890</p>
              </a>
              <a 
                className="flex items-center gap-2"
                target="_blank"
                href="https://www.instagram.com/himatikauinsgd"  
              >
                <InstagramIcon className="text-2xl text-brand-dark" />
                <p className="text-gray-800 border-b-2 border-brand-dark mb-1">@himatikauinsgd</p>
              </a>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Nama */}
            {/* <label
            className="block text-brand-dark font-semibold mb-1"
            >
            Nama
            </label> */}
            <input
              type="text"
              name="name"
              placeholder="Nama: Bahlil"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ouline-2"
            />

            {/* Email */}
            {/* <label
            className="block text-brand-dark font-semibold mb-1"
            >
            Email
            </label> */}
            <input
              type="email"
              name="email"
              placeholder="Email: example@mail.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ouline-2"
            />

            {/* Pesan */}
            {/* <label
            className="block text-brand-dark font-semibold mb-1"
            >
            Pesan
            </label> */}
            <textarea
              name="message"
              rows={4}
              placeholder="Pesan: Admin Ganteng"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ouline-2"
            ></textarea>

            {/* Tombol */}
            <button
              type="submit"
              className="text-white px-6 py-3 rounded-lg bg-brand-red hover:bg-red-800 transition"
            >
              Kirim Pesan untuk Kami
            </button>

            <p className="text-brand-dark font-medium">{result}</p>
          </form>
        </div>
        {/* Maps */}
        <div className="mt-16 w-full h-[350px] md:h-[420px] rounded-xl overflow-hidden border border-gray-300 shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6415.998713870262!2d107.70268313377309!3d-6.938630842373842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c2dcfd65e3b3%3A0x23806c141c2f45f5!2sKampus%20II%20UIN%20Sunan%20Gunung%20Djati%20Bandung%20(%20kampus%20merdeka)!5e0!3m2!1sid!2sid!4v1764302955594!5m2!1sid!2sid"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default Contact
