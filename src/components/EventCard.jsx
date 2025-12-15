import React from "react"

const EventCard = ({ event, onClick }) => {
  return (
    <div
      className="cursor-pointer group bg-white rounded-xl ring-1 ring-brand-red/50 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:ring-brand-red"
      onClick={() => onClick(event.id)}
    >
      <div className="relative">
        <img
          src={event.images[0]}
          alt={event.title}
          className="w-full h-48 object-cover p-2 rounded-2xl"
        />
      </div>
      <div className="p-4 pt-2 sm:h-40">
        <h3 className="font-bold font-title text-2xl text-brand-dark">
          {event.title}
        </h3>
        {event.theme && (
          <p className="text-sm text-gray-700">{event.theme}</p>
        )}
        <div className="mt-4">
          <span className="hidden sm:inline-block bg-brand-red group-hover:bg-red-800 text-white px-5 py-2 rounded-full transition">
            Lihat Detail
          </span>
        </div>
      </div>
    </div>
  )
}

export default EventCard