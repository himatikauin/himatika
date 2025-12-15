import React from "react";
const BidangModal = ({ bidang, onClose }) => {
  if (!bidang) return null;

  // Fungsi untuk mencegah klik di dalam modal menutup modal
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-9999 p-4 animate-fadeIn"
        onClick={onClose} // Klik backdrop untuk tutup
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
        onClick={handleContentClick}
      >
        {/* Tombol Close Absolute */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-red-500 hover:text-white transition z-10 font-bold"
        >
            ✕
        </button>

        {/* Hero Image (Foto Bersama) - Scrollable Area Starts Here */}
        <div className="overflow-y-auto custom-scrollbar">
            <div className="relative h-64 sm:h-80 w-full">
                <img 
                    src={bidang.hero} 
                    alt={`Foto ${bidang.name}`}
                    className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-top from-black/80 to-transparent flex items-end p-8">
                    <div className="flex items-center gap-4 text-white">
                        <img src={bidang.logo} className="h-16 w-16 object-contain bg-white rounded-full p-2" alt="Logo" />
                        <div>
                            <h2 className="text-3xl font-bold">{bidang.name}</h2>
                            <p className="opacity-90 text-sm">HIMATIKA UIN SGD Bandung</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-8 space-y-8">
                
                {/* Deskripsi */}
                <section>
                    <h3 className="text-xl font-bold text-brand-dark mb-2 border-l-4 border-brand-yellow pl-3">Tentang Bidang</h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                        {bidang.description}
                    </p>
                </section>

                {/* Anggota (Foto Bulat) */}
                <section>
                    <h3 className="text-xl font-bold text-brand-dark mb-4 border-l-4 border-brand-yellow pl-3">Anggota Bidang</h3>
                    <div className="flex flex-wrap gap-4">
                        {bidang.members.map((src, i) => (
                        <div key={i} className="group relative">
                            <img 
                                src={src} 
                                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-2 border-gray-200 group-hover:border-brand-yellow transition" 
                                alt="Anggota" 
                            />
                        </div>
                        ))}
                    </div>
                </section>

                {/* Program Kerja (List) */}
                <section>
                    <h3 className="text-xl font-bold text-brand-dark mb-4 border-l-4 border-brand-yellow pl-3">Program Kerja</h3>
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <ul className="grid sm:grid-cols-2 gap-3">
                            {bidang.programs.map((p, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                                <span className="text-brand-yellow mt-1">➤</span>
                                {p}
                            </li>
                            ))}
                        </ul>
                    </div>
                </section>

            </div>
            
            {/* Footer Modal */}
            <div className="p-6 bg-gray-50 text-right border-t">
                 <button
                    onClick={onClose}
                    className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                >
                    Tutup Detail
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BidangModal;