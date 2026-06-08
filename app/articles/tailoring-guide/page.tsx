import Link from "next/link"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { CookieBanner } from "@/components/CookieBanner"

export const metadata = { title: "The Tailoring Guide — EDITION" }

export default function TailoringGuide() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Nav />
      <section className="relative h-[65vh] min-h-[420px] flex items-end pt-20">
        <div className="absolute inset-0 bg-[#0A0A0A]/40 z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1594938298603-c8148c4bec9d?auto=format&fit=crop&w=1600&q=80" alt="Tailoring" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 max-w-screen-xl mx-auto px-6 pb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-4">Tailoring — May 2026</p>
          <h1 className="font-black text-white uppercase leading-none text-3xl md:text-5xl lg:text-6xl max-w-3xl tracking-tight">The Tailoring Guide: Getting Suits Right Without a Stylist</h1>
        </div>
      </section>
      <article className="bg-white py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#f5f5f5] border-l-2 border-[#888888] px-5 py-3 text-[#555555] text-xs leading-relaxed mb-10">
              <strong>Affiliate disclosure:</strong> As an Amazon Associate I earn from qualifying purchases.
            </div>
            <div className="space-y-6 text-[#333333] text-base leading-relaxed">
              <p>More men wear ill-fitting suits than any other clothing mistake. Fit is the only variable that matters.</p>
              {[
                ["The Shoulders Are Everything", "The shoulder seam should sit exactly at the edge of your shoulder. This is the one measurement that cannot be altered cheaply. Buy for the shoulders first."],
                ["Chest and Waist", "When you button the jacket, it should close without pulling across the chest. Aim for a small amount of suppression at the waist."],
                ["Sleeve Length", "The jacket sleeve should end so that approximately 1–1.5cm of shirt cuff is visible. Most off-the-rack jackets have sleeves that are too long."],
                ["Trouser Break", "A quarter break — just a slight fold — is the safe middle ground that works on almost everyone."],
                ["The First Suit to Buy", "Charcoal grey, two-button, notch lapel, plain front trousers. This is the most versatile suit in existence."],
              ].map(([h, p]) => (
                <div key={h as string}>
                  <h2 className="font-black text-[#0A0A0A] uppercase text-xl tracking-tight pt-2 mb-2">{h}</h2>
                  <p>{p}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6 my-10">
              {[
                { label: "Essential", title: "The Charcoal Two-Button", note: "The first suit everyone should own.", img: "photo-1594938298603-c8148c4bec9d" },
                { label: "Details", title: "The Right Shirt & Tie", note: "White poplin shirt, navy or burgundy tie.", img: "photo-1507679799987-c73779587ccf" },
              ].map(({ label, title, note, img }) => (
                <div key={title} className="border border-[#888888]/30">
                  <div className="aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=700&q=80`} alt={title} className="w-full h-full object-cover" />
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
