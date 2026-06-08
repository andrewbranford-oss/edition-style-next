import Link from "next/link"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { CookieBanner } from "@/components/CookieBanner"

export const metadata = { title: "Essential Outerwear: 5 Jackets Worth Owning — EDITION" }

export default function EssentialOuterwear() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Nav />
      <section className="relative h-[65vh] min-h-[420px] flex items-end pt-20">
        <div className="absolute inset-0 bg-[#0A0A0A]/40 z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1600&q=80" alt="Essential Outerwear" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 max-w-screen-xl mx-auto px-6 pb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-4">Outerwear — April 2026</p>
          <h1 className="font-black text-white uppercase leading-none text-3xl md:text-5xl lg:text-6xl max-w-3xl tracking-tight">Essential Outerwear: 5 Jackets Worth Owning</h1>
        </div>
      </section>
      <article className="bg-white py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#f5f5f5] border-l-2 border-[#888888] px-5 py-3 text-[#555555] text-xs leading-relaxed mb-10">
              <strong>Affiliate disclosure:</strong> As an Amazon Associate I earn from qualifying purchases.
            </div>
            <div className="space-y-6 text-[#333333] text-base leading-relaxed">
              <p>Most men own too many jackets and wear three of them. The goal isn&apos;t a jacket for every scenario — it&apos;s five jackets that between them cover every scenario.</p>
              {[
                ["1. The Harrington", "The most versatile jacket in existence. Sits at the hip, light enough to wear nine months of the year in the UK, works with chinos, jeans, and trousers alike."],
                ["2. The Overshirt / Shacket", "Heavier than a shirt, lighter than a jacket. Fills the gap between summer and proper coat weather. Flannel or CPO wool are the best fabrics."],
                ["3. The Technical Shell", "For actual weather. A clean waterproof shell in a neutral colour. Stick to black, navy, or olive."],
                ["4. The Wool Overcoat", "The one that makes everything underneath look intentional. A mid-length overcoat in charcoal or camel is the single item that upgrades your entire wardrobe."],
                ["5. The Bomber", "The casual anchor. A clean MA-1 or a suede bomber in a neutral tone sits between the Harrington and the overcoat in terms of formality."],
              ].map(([h, p]) => (
                <div key={h}>
                  <h2 className="font-black text-[#0A0A0A] uppercase text-xl tracking-tight pt-2 mb-2">{h}</h2>
                  <p>{p}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6 my-10">
              {[
                { label: "Versatile", title: "The Harrington Jacket", note: "Clean silhouette, hip length, works year-round.", img: "photo-1551698618-1dfe5d97d256" },
                { label: "Investment", title: "The Wool Overcoat", note: "Charcoal or camel. Makes everything look intentional.", img: "photo-1591047139829-d91aecb6caea" },
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
