import React from 'react'

export default function AboutCard2Card({icon, title, description}) {
  return (
    <div className="flex items-start gap-4 sm:gap-5">
    
    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#45a049] rounded-xl flex items-center justify-center shadow-lg shadow-green-900/20 text-white transition-transform hover:scale-105 duration-300">
      {icon}
    </div>
    
    <div className="flex-1">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  </div>
  )
}
