import Link from "next/link"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { CookieBanner } from "@/components/CookieBanner"

export const metadata = { title: "The Best White T-Shirts for Men in 2026 — EDITION" }

export default function BestWhiteTees() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Nav />
      <section className="relative h-[65vh] min-h-[420px] flex items-end pt-20">
        <div className="absolute inset-0 bg-[#0A0A0A]/40 z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80" alt="White T-Shirts" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 max-w-screen-xl mx-auto px-6 pb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-4">Basics — February 2026</p>
          <h1 className="font-black text-white uppercase leading-none text-3xl md:text-5xl lg:text-6xl max-w-3xl tracking-tight">The Best White T-Shirts for Men in 2026</h1>
        </div>
      </section>
      <article className="bg-white py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#f5f5f5] border-l-2 border-[#888888] px-5 py-3 text-[#555555] text-xs leading-relaxed mb-10">
              <strong>Affiliate disclosure:</strong> As an Amazon Associate I earn from qualifying purchases.
            </div>
            <div className="space-y-6 text-[#333333] text-base leading-relaxed">
              <p>The white t-shirt is the hardest garment in menswear to get right. It sounds absurd — it&apos;s a rectangle of fabric — but the wrong one collapses everything around it. Too sheer and it looks cheap. Too thick and it reads workwear. Wrong length and you&apos;re either swimming in it or showing your midriff.</p>
              <p>I&apos;ve spent years buying, testing, returning, and quietly discarding white t-shirts. What follows is the shortlist — the ones that survived.</p>
              <h2 className="font-black text-[#0A0A0A] uppercase text-xl tracking-tight pt-4">What Makes a Good White T-Shirt</h2>
              <p>Three things: opacity, weight, and fit. Opacity matters because a translucent white tee looks like an afterthought. Weight should be in the 180–220gsm range. And fit should be clean without being tight.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 my-10">
              {[
                { label: "Essential", title: "The Classic Crew", note: "Heavy cotton, clean cut, stays white.", img: "photo-1521572163474-6864f9cf17ab" },
                { label: "Relaxed", title: "The Oversized Fit", note: "Dropped shoulder, longer body. Looks deliberate.", img: "photo-1503341504253-dff4815485f1" },
                { label: "Premium", title: "The Pima Cotton", note: "Longer staple cotton. Worth the extra spend.", img: "photo-1583743814966-8936f5b7be1a" },
              ].map(({ label, title, note, img }) => (
                <div key={title} className="border border-[#888888]/30">
                  <div className="aspect-square overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=500&q=80`} alt={title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs tracking-[0.15em] uppercase text-[#888888] mb-1">{label}</p>
                    <h3 className="font-bold text-[#111111] text-sm uppercase tracking-wide mb-2">{title}</h3>
                    <p className="text-[#555555] text-xs leading-relaxed mb-4">{note}</p>
                    <a href="#" data-amazon="true" className="block text-center border border-[#111111] text-[#111111] text-xs tracking-[0.15em] uppercase py-3 hover:bg-[#111111] hover:text-white transition-colors">View on Amazon</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6 text-[#333333] text-base leading-relaxed">
              <h2 className="font-black text-[#0A0A0A] uppercase text-xl tracking-tight pt-4">How to Care for White T-Shirts</h2>
              <p>Wash at 30°C or cold. Never tumble dry at high heat — it&apos;s what causes yellowing at the collar. Turn them inside out before washing. Buy two of whatever you choose. White t-shirts are consumables — treat them that way.</p>
            </div>
            <div className="border-t border-[#888888]/30 mt-12 pt-8">
              <Link href="/articles" className="text-xs tracking-[0.15em] uppercase text-[#888888] hover:text-[#111111] transition-colors">← All Articles</Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
      <CookieBanner />
    </div>
  )
}
