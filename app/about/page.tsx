import Link from "next/link"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { CookieBanner } from "@/components/CookieBanner"

export const metadata = { title: "About — EDITION" }

export default function About() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Nav />
      <section className="relative h-[70vh] min-h-[480px] flex items-end pt-20">
        <div className="absolute inset-0 bg-[#0A0A0A]/50 z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80" alt="About EDITION" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 max-w-screen-xl mx-auto px-6 pb-16 md:pb-24">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-4">About</p>
          <h1 className="font-black text-white uppercase leading-none text-4xl md:text-6xl lg:text-7xl max-w-2xl tracking-tight">What EDITION Is About</h1>
        </div>
      </section>
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#f5f5f5] border-l-2 border-[#888888] px-5 py-3 text-[#555555] text-xs leading-relaxed mb-10">
              As an Amazon Associate I earn from qualifying purchases. Some links on this site are affiliate links — this means I may earn a small commission at no extra cost to you.
            </div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-8">Our Story</p>
            <p className="text-[#111111] text-lg leading-relaxed mb-8">EDITION exists because getting dressed well shouldn't require a stylist, unlimited money, or hours of scrolling. Men's style is cluttered with noise — fast fashion, over-hyped drops, trend cycles that make everything feel disposable. We cut through that.</p>
            <p className="text-[#111111] text-lg leading-relaxed mb-8">Every piece we recommend is chosen for longevity, quality, and value. We're not interested in what's trending this week. We're interested in what you'll still be reaching for in five years.</p>
            <p className="text-[#111111] text-lg leading-relaxed mb-12">EDITION is run independently by someone who has spent years testing, returning, and quietly obsessing over the stuff that matters. Everything you read here is an honest opinion.</p>
            <div className="border-t border-[#888888]/30 pt-12">
              <h2 className="font-black text-[#0A0A0A] uppercase text-2xl md:text-3xl mb-8 tracking-tight">Why Trust Us</h2>
              <ul className="space-y-5 mb-10">
                {["We only recommend products we'd genuinely buy or recommend to a friend.", "Affiliate commissions don't influence what makes the cut. A better product will always beat a higher-commission one.", "We link out to Amazon for current pricing — we never hardcode prices."].map((text, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-[#888888] font-bold text-sm uppercase tracking-widest shrink-0 pt-0.5">0{i+1}</span>
                    <p className="text-[#333333] text-base leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
              <Link href="/articles" className="inline-block border border-[#0A0A0A] text-[#0A0A0A] text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#0A0A0A] hover:text-white transition-colors">Read the Articles</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <CookieBanner />
    </div>
  )
}
