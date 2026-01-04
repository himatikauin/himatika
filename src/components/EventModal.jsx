import React from "react"
import { XIcon } from "./icons"
import { IKImage, IKContext } from "imagekitio-react" // Import ImageKit SDK

const EventModal = ({ event, onClose }) => {
  // Konfigurasi Endpoint ImageKit Anda
  const urlEndpoint = "https://ik.imagekit.io/mddeta8rw";

  return (
    // Bungkus dengan IKContext agar IKImage di dalamnya berfungsi
    <IKContext urlEndpoint={urlEndpoint}>
      <div
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 animate-fade-in"
        onClick={onClose}
      >
        <div
          className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto inimodalcuy"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
          >
            <XIcon className="w-8 h-8" />
          </button> 
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              
              {/* --- BAGIAN LOGO --- */}
              {/* Cek apakah logoUrl ada dan ambil index ke-0 karena struktur baru berupa Array */}
              {event.logoUrl && event.logoUrl[0] && (
                <div className="w-40 h-40 shrink-0">
                   <IKImage
                    path={event.logoUrl[0]}
                    transformation={[{ width: 300 }]} // Resize logo biar tajam tapi ringan
                    lqip={{ active: true }}
                    loading="lazy"
                    alt={`${event.title} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              <div>
                <h2 className="text-3xl font-title font-bold text-brand-red">
                  {event.title}
                </h2>
                {event.theme && (
                  <p className="text-md font-title font-semibold text-gray-700 mt-1">
                    {event.theme}
                  </p>
                )}
                <br />
                <p className="text-gray-600 font-body">{event.description}</p>
              </div>
            </div>

            <div className="mt-6 border-t pt-6"></div>

            {/* --- BAGIAN IMAGES DENGAN IMAGEKIT --- */}
            {event.images && event.images.length > 0 && (
              <div className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.images.map((imgPath, index) => (
                    <div key={index} className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden relative shadow-md">
                      <IKImage
                        path={imgPath}
                        alt={`Dokumentasi ${index + 1}`}
                        transformation={[{
                          width: 1200, // Resize lebar ke 400px (cukup untuk grid)
                          height: 900,
                          crop: "at_max"
                        }]}
                        lqip={{ active: true }} // Efek blur saat loading
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* --- BAGIAN AFTERMOVIE (Tetap sama karena Youtube) --- */}
            {event.aftermovieUrl && (
              <div className="mt-6">
                <h3 className="text-xl font-bold font-alt text-brand-dark mb-4">
                  Aftermovie
                </h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={event.aftermovieUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg shadow-lg bg-black"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </IKContext>
  )
}

export default EventModal