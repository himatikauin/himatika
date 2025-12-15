import React from "react"

const ExploreCard = ({ item }) => {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group bg-white rounded-lg ring-1 ring-brand-red/50 overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:ring-brand-red"
    >
      <div className="relative">
        <img
          src={item.thumbnailUrl}
          alt={item.title}
          className="w-full h-48 object-cover p-2 rounded-2xl"
        />
        <div className="absolute top-3 right-3 bg-brand-red text-white text-xs font-semibold px-2 py-1 rounded-lg">
          {item.tag}
        </div>
      </div>
      <div className="p-4 pt-2 h-28">
        <span className="text-sm text-gray-700">{item.time}</span>
        <h3 className="font-semibold text-md text-brand-dark group-hover:text-brand-red transition-colors">
          {item.title}
        </h3>
      </div>
    </a>
  )
}

export default ExploreCard
