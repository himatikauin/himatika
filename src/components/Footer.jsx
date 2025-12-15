import React from "react"
import { socials } from "../data/socials"

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-title font-bold text-white mb-2">
            HIMATIKA UIN SGD
          </h3>
          <div className="flex  mb-4">
            {socials.map(social => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brand-bg transition-colors px-4"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} HIMATIKA UIN Sunan Gunung Djati
            Bandung. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer