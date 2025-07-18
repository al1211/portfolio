'use client'

import React, { useState,useRef,useEffect }  from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'




export default function Navbar() {
  const container=useRef();
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
   


    <header className="sticky top-0 z-50  bg-gray-900 text-white border-b">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 py-4">
        <Link href="/" className="text-2xl font-bold">
          Anil.dev
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/skills">Skills</Link></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t px-6 pb-4 text-white">
          <ul className="flex flex-col space-y-4 font-medium">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li><Link href="/skills" onClick={toggleMenu}>skills</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}
