// --- components/Profile.jsx ---
import React, { useState } from "react";
import { cabinetData } from "../data/kabinet"; 

const Profile = () => {
  const [selectedBidang, setSelectedBidang] = useState(null);

  return (
    // Sesuaikan padding/margin agar tidak tertutup navbar
    <section id="profil" className="relative rounded-t-[5rem] -top-5 pt-20 bg-brand-bg bg-brand-bg min-h-screen">
      <div className="container mx-auto px-6">

        {/* --- IDENTITAS KABINET --- */}
        <div className="text-center mb-12">
          <div className="flex mb-6 gap-3 justify-center">
            <img
              src={cabinetData.logo}
              alt={`Logo ${cabinetData.nama}`}
              className="h-20 sm:h-40 drop-shadow-lg"
            />
          </div>
          
          <h2 className="text-4xl font-title text-brand-dark font-bold uppercase mb-2">
            HIMATIKA UIN SGD BANDUNG
          </h2>
          <p className="text-xl text-brand-dark font-medium mb-1">
            Kabinet {cabinetData.nama}
          </p>
          <p className="text-gray-600 italic mb-6">Periode {cabinetData.periode}</p>

          <div className="max-w-3xl mx-auto">
            <p className="text-md leading-relaxed text-gray-700 mb-4">
              Sejak berdiri pada 2 Desember 1999, HIMATIKA UIN Sunan Gunung Djati Bandung menjadi ruang tumbuh bagi mahasiswa Pendidikan Matematika tempat untuk mengasah akademik, menumbuhkan kreativitas, dan berkontribusi bagi masyarakat melalui semangat Tridarma Perguruan Tinggi.
            </p>
            <p className="text-md leading-relaxed text-gray-700 mb-4">
              {cabinetData.deskripsi}
            </p>
            <p className="text-brand-dark font-bold text-lg">
              "{cabinetData.moto}"
            </p>
          </div>
        </div>

        {/* --- VISI & MISI --- */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20 bg-white p-8 rounded-2xl shadow-sm">
            <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 border-b-2 border-brand-yellow inline-block">Visi</h3>
                <p className="text-gray-700 leading-relaxed italic">
                    {cabinetData.visi}
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 border-b-2 border-brand-yellow inline-block">Misi</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {cabinetData.misi.map((item, i) => (
                    <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="border-b-4 border-brand-red/50"></div>
      </div>
    </section>
    
    
  );
};

export default Profile