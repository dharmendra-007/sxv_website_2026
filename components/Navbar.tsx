'use client'

import Link from 'next/link'
import Button from './Button'
import HamburgerButton from './MenuButton'
import { useState } from 'react'
import { motion } from 'motion/react'

type NavbarProps = {
  isLoggedIn?: Boolean
  onSignOut?: () => {}
}

type navItem = {
  label: string
  href: string
}

const navItems: navItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'Committees', href: '/committees' },
  { label: 'Team', href: '/team' },
  { label: 'Contact Us', href: '/contactUs' },
]

export default function Navbar({ isLoggedIn = false, onSignOut }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <>
      {/* Custom Font Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap');
        
        @font-face {
          font-family: 'NinjaNaruto';
          src: url('https://fonts.cdnfonts.com/s/12313/njnaruto.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
        
        .navbar-brand {
          font-family: 'NinjaNaruto', 'Saira Stencil One', cursive, sans-serif;
          letter-spacing: 2px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .navbar-link {
          font-family: 'Saira Stencil One', sans-serif;
          letter-spacing: 1px;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transition: width 0.3s ease;
        }
        
        .navbar-link:hover::after {
          width: 100%;
        }
        
        .navbar-gradient {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
        }
        
        .navbar-button {
          font-family: 'Saira Stencil One', sans-serif;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          transition: all 0.3s ease;
        }
        
        .navbar-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.4);
        }
      `}</style>

      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 navbar-gradient">
        <div className="max-w-full px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">

            {/* LOGO */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">SV</span>
              </div>
              <span className="navbar-brand text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                SamaveshXVassaunt
              </span>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="lg:flex items-center hidden">
              <ul className="flex gap-8">
                {navItems.map((item, id) => (
                  <li key={id}>
                    <Link 
                      href={item.href}
                      className="navbar-link text-white hover:text-blue-400 text-lg font-medium"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* DESKTOP AUTH */}
            <div className="lg:flex items-center hidden">
              <ul className="flex gap-4">
                {isLoggedIn ? (
                  <li>
                    <button 
                      onClick={() => onSignOut}
                      className="navbar-button px-6 py-2.5 rounded-lg text-white font-bold border-0 cursor-pointer"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link href="/signup">
                        <button className="navbar-button px-6 py-2.5 rounded-lg text-white font-bold border-0 cursor-pointer">
                          Register
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href="/login">
                        <button className="px-6 py-2.5 rounded-lg text-white font-bold border-2 border-blue-500 bg-transparent hover:bg-blue-500/10 transition-all duration-300 cursor-pointer navbar-link">
                          Login
                        </button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* MOBILE BUTTON */}
            <motion.div
              className="lg:hidden cursor-pointer z-50 flex items-center justify-center"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <HamburgerButton height={48} width={48} isMenuOpen={isMenuOpen} />
            </motion.div>

            {/* MOBILE MENU */}
            {isMenuOpen && (
              <motion.div
                className="absolute right-4 top-24 w-72 rounded-2xl navbar-gradient shadow-2xl z-40 border border-blue-500/20"
                initial={{ y: '-20%', opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: '-20%', opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <ul className="flex flex-col gap-2 p-6">
                  {navItems.map((item, id) => (
                    <li
                      key={id}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Link 
                        href={item.href}
                        className="navbar-link block text-white hover:text-blue-400 hover:bg-blue-500/10 px-4 py-3 rounded-lg transition-all duration-300 text-lg"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}

                  <div className="pt-4 mt-2 border-t border-gray-700/50 space-y-3">
                    {!isLoggedIn ? (
                      <>
                        <Link href="/signup">
                          <button className="navbar-button w-full py-3 rounded-lg text-white font-bold border-0 cursor-pointer">
                            Register
                          </button>
                        </Link>
                        <Link href="/login">
                          <button className="w-full py-3 rounded-lg text-white font-bold border-2 border-blue-500 bg-transparent hover:bg-blue-500/10 transition-all duration-300 cursor-pointer navbar-link">
                            Login
                          </button>
                        </Link>
                      </>
                    ) : (
                      <button 
                        className="navbar-button w-full py-3 rounded-lg text-white font-bold border-0 cursor-pointer" 
                        onClick={() => onSignOut}
                      >
                        Logout
                      </button>
                    )}
                  </div>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>
    </>
  )
}
