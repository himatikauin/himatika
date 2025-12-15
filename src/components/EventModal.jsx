import React from "react"
import { XIcon } from "./icons"

const EventModal = ({ event, onClose }) => {
  return (
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
            <img
              src={event.logoUrl}
              alt={`${event.title} Logo`}
              className="w-40 h-40 object-contain"
            />
            <div>
              <h2 className="text-3xl font-title font-bold text-brand-red">
                {event.title}
              </h2>
              {event.theme && (
                <p className="text-md font-title font-semibold text-gray-700 mt-1">
                  {event.theme}
                </p>
              )}
              <br /><p className="text-gray-600 font-body">{event.description}</p>
            </div>
          </div>

          <div className="mt-6 border-t pt-6">
          </div>

          {event.images.length > 0 && (
            <div className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {event.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Dokumentasi ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          )}

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
                  className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventModal