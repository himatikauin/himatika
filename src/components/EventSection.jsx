/* component/EventSection.jsx */
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { events } from "../data/event"
import EventCard from "./EventCard"
import { IKContext } from "imagekitio-react"

const EventSection = ({ onEventClick }) => {
  const sectionRef = useRef(null)

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  // Data ImageKit Anda
  const urlEndpoint = "https://ik.imagekit.io/mddeta8rw";

  return (
    // Bungkus Section (atau area yg memuat gambar) dengan IKContext
    <IKContext urlEndpoint={urlEndpoint}>
      <section
        ref={sectionRef}
        id="event"
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-title text-brand-dark font-bold mb-4">
              Kegiatan Kami
            </h2>
            <p className="max-w-3xl mx-auto text-lg font-body text-gray-700">
              Berikut adalah beberapa program kerja unggulan yang kami selenggarakan.
            </p>
          </div>

          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 relative gap-12">
            {events.map((event, index) => {
              const total = events.length
              const orderFromTop = total - index - 1

              const scale = useTransform(
                scrollYProgress,
                [1, 0],
                isMobile ? [1 - orderFromTop * 0.05, 1] : [1, 1]
              )

              const y = isMobile ? index * 20 : 0

              return (
                <motion.div
                  key={event.id}
                  style={{
                    scale,
                    y,
                    position: isMobile ? "sticky" : "static",
                    top: isMobile ? 180 : "auto",
                    zIndex: index + 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                  }}
                >
                  {/* EventCard akan menerima data event yang kini berisi path string ImageKit */}
                  <EventCard
                    event={event}
                    onClick={onEventClick}
                  />
                </motion.div>
              )
            })}
          </div>

          <div className="h-32 md:hidden" />
        </div>
      </section>
    </IKContext>
  )
}

export default EventSection