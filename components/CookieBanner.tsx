"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("edition-cookie-consent")) setVisible(true)
  }, [])

  const respond = (val: string) => {
    localStorage.setItem("edition-cookie-consent", val)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A] border-t border-[#888888]/30 px-6 py-5">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-white text-xs leading-relaxed max-w-xl">
          We use cookies to improve your experience. By continuing you accept our{" "}
          <Link href="/cookies" className="underline hover:text-[#888888] transition-colors">Cookie Policy</Link>.
        </p>
        <div className="flex gap-4 shrink-0">
          <button onClick={() => respond("accepted")} className="text-xs tracking-[0.15em] uppercase bg-white text-[#0A0A0A] px-5 py-2 hover:bg-[#888888] hover:text-white transition-colors">
            Accept
          </button>
          <button onClick={() => respond("declined")} className="text-xs tracking-[0.15em] uppercase border border-[#888888] text-white px-5 py-2 hover:border-white transition-colors">
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
