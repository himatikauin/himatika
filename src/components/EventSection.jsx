import React from "react"
import { events } from "../data/event"
import EventCard from "./EventCard"

const EventSection = ({ onEventClick }) => {
  return (
    <section id="event" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-title text-brand-dark font-bold mb-4">
            Kegiatan Kami
          </h2>
          <p className="max-w-3xl mx-auto text-lg font-body text-gray-700">
            Berikut adalah beberapa program kerja unggulan yang kami
            selenggarakan untuk mahasiswa dan masyarakat.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <EventCard key={event.id} event={event} onClick={onEventClick} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventSection