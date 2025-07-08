'use client';

import React from 'react'
import skills from "./data";

const Skills = () => {
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="group rounded-2xl border border-gray-700 bg-gray-800 hover:border-indigo-500 transition-all duration-300 shadow-md hover:shadow-indigo-600/30"
    >
      <div className="p-4 flex flex-col items-center text-center">
        <img
          src={skill.image}
          alt={`${skill.technology} logo`}
          className="w-16 h-16 object-contain mb-4 transition-transform group-hover:scale-110"
        />
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-indigo-400 transition-colors">
          {skill.technology}
        </h3>
        <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
          {skill.description}
        </p>
      </div>
    </div>
  ))}
</div>

  )
}

export default Skills