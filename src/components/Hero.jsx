import React, { useEffect, useState, useRef } from "react";
import { IKImage, IKContext } from "imagekitio-react";

const Hero = () => {
  // Gunakan useRef untuk memanipulasi gambar langsung tanpa re-render komponen
  const imgRef = useRef(null);
  
  // State khusus Typewriter
  const [text, setText] = useState("");
  const fullText = "Lebih dari Sekedar Angka";

  useEffect(() => {
    let requestID;

    const handleScroll = () => {
      // requestAnimationFrame menjamin animasi sinkron dengan refresh rate layar (smooth)
      requestID = requestAnimationFrame(() => {
        // imgRef.current mungkin menunjuk ke wrapper IKImage, jadi kita pastikan target yang benar
        if (imgRef.current) {
          const scrollY = window.scrollY;
          // Gunakan translate3d untuk mengaktifkan GPU Acceleration (Hardware)
          imgRef.current.style.transform = `translate3d(0, ${scrollY * 0.5}px, 0)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // --- Logic Typewriter ---
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 60);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestID); 
      clearInterval(intervalId);
    };
  }, []);

  return (
    // Bungkus dengan IKContext
    <IKContext urlEndpoint="https://ik.imagekit.io/mddeta8rw"> 
      <section
        id="home"
        // Tambahkan 'overflow-hidden' agar jika gambar bergeser, tidak muncul scrollbar aneh
        className="relative h-screen flex items-center justify-center text-white text-center"
      >
        {/* BACKGROUND WRAPPER */}
        <div className="absolute inset-0 z-0 select-none bg-brand-dark">
          {/* Menggunakan IKImage untuk performa maksimal.
             Kami menambahkan 'forwardRef' secara implisit melalui properti ref 
             agar parallax tetap jalan.
          */}
          <div ref={imgRef} className="absolute w-full h-[120%] -top-[10%] left-0 will-change-transform">
             <IKImage
              path="/assets/mainHero.webp" // Path sesuai folder di ImageKit Anda
              transformation={[{
                width: 3692, // Resize lebar ke 1200px (cukup tajam untuk background tapi ringan)
                quality: 100, // Kompresi sedikit agar size file turun drastis
                blur: 0 // Pastikan tajam
              }]}
              lqip={{ active: true, quality: 10 }} // Efek blur saat loading pertama kali
              loading="eager" // PENTING: Jangan lazy load untuk Hero Image (LCP Score)
              alt="Main Hero Image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute top-0 w-full h-[200%] bg-[linear-gradient(0deg,#240000_30%,transparent)]"></div>
          {/* <div className="absolute inset-0 bg-black/40"></div> Tambahan overlay gelap biar teks terbaca */}
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-left md:text-center pt-20">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg min-h-[120px] md:min-h-auto">
            <span className="inline-block border-r-4 border-brand-red pr-2 animate-pulse-cursor">
              {text}
            </span>
            <br />
            <span className="opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards] block mt-2">
              Kami adalah Keluarga
            </span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-200 drop-shadow max-w-3xl mx-auto opacity-0 animate-[fadeIn_1s_ease-out_2.5s_forwards]">
            HIMATIKA UIN Sunan Gunung Djati Bandung adalah wadah bagi mahasiswa
            Pendidikan Matematika untuk belajar, berkarya, dan mengabdi sejak
            1999.
          </p>

          <a
            href="#event"
            className="mt-10 inline-block bg-brand-red hover:bg-red-800 text-white px-8 py-3 rounded-full font-semibold transition transform hover:-translate-y-1 hover:shadow-lg opacity-0 animate-[fadeIn_1s_ease-out_2.5s_forwards]"
          >
            Lihat Kegiatan Kami
          </a>
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-pulse-cursor {
             animation: blink 1s step-end infinite;
          }
           @keyframes blink {
            50% { border-color: transparent; }
          }
        `}</style>
      </section>
    </IKContext>
  );
};

export default Hero;