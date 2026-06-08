"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function Nav({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!transparent) return
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [transparent])

  const solid = !transparent || scrolled

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid ? "bg-[#0A0A0A]" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-black tracking-[0.25em] uppercase text-white text-xl">
          EDITION
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {[["Articles", "/articles"], ["About", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={href} href={href} className="text-xs tracking-[0.15em] uppercase text-white hover:text-[#888888] transition-colors">
              {label}
            </Link>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#888888]/30">
          <div className="px-6 py-6 flex flex-col gap-6">
            {[["Articles", "/articles"], ["About", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
              <Link key={href} href={href} className="text-xs tracking-[0.15em] uppercase text-white" onClick={() => setMobileOpen(false)}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
