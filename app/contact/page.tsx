"use client"

import { useState } from "react"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { CookieBanner } from "@/components/CookieBanner"

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Nav />
      <section className="pt-36 pb-16 border-b border-[#888888]/30">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-4">Get in Touch</p>
          <h1 className="font-black text-white uppercase leading-none text-4xl md:text-6xl tracking-tight">Contact</h1>
        </div>
      </section>
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-6">Send a Message</p>
              <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="space-y-6">
                {[["Name", "text", "Your name"], ["Email", "email", "your@email.com"]].map(([label, type, placeholder]) => (
                  <div key={label as string}>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#888888] mb-2">{label}</label>
                    <input type={type as string} required placeholder={placeholder as string} className="w-full border border-[#888888]/50 bg-transparent text-[#111111] text-sm px-4 py-3.5 focus:outline-none focus:border-[#111111] transition-colors placeholder-[#888888]" />
                  </div>
                ))}
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-[#888888] mb-2">Message</label>
                  <textarea rows={6} required placeholder="What's on your mind?" className="w-full border border-[#888888]/50 bg-transparent text-[#111111] text-sm px-4 py-3.5 focus:outline-none focus:border-[#111111] transition-colors placeholder-[#888888] resize-none" />
                </div>
                <button type="submit" className="border border-[#111111] text-[#111111] text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#111111] hover:text-white transition-colors">
                  Send Message
                </button>
                {sent && <p className="text-xs tracking-wider uppercase text-[#888888]">Message sent — we&apos;ll be in touch.</p>}
              </form>
            </div>
            <div className="md:pt-8">
              <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-6">Direct Contact</p>
              <p className="text-[#111111] text-base leading-relaxed mb-8">Questions about a recommendation, a product you&apos;d like us to cover, or anything else — drop us a line.</p>
              <div className="border-t border-[#888888]/30 pt-8">
                <p className="text-xs tracking-[0.15em] uppercase text-[#888888] mb-2">Email</p>
                <a href="mailto:hello@edition-style.com" className="text-[#111111] text-base hover:text-[#888888] transition-colors">hello@edition-style.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <CookieBanner />
    </div>
  )
}
