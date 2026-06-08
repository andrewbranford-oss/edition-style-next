import Link from "next/link"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { CookieBanner } from "@/components/CookieBanner"

export const metadata = { title: "Minimal Sneakers That Go With Everything — EDITION" }

export default function MinimalSneakers() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Nav />
      <section className="relative h-[65vh] min-h-[420px] flex items-end pt-20">
        <div className="absolute inset-0 bg-[#0A0A0A]/40 z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80" alt="Minimal Sneakers" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 max-w-screen-xl mx-auto px-6 pb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-4">Footwear — March 2026</p>
          <h1 className="font-black text-white uppercase leading-none text-3xl md:text-5xl lg:text-6xl max-w-3xl tracking-tight">Minimal Sneakers That Go With Everything</h1>
        </div>
      </section>
      <article className="bg-white py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#f5f5f5] border-l-2 border-[#888888] px-5 py-3 text-[#555555] text-xs leading-relaxed mb-10">
              <strong>Affiliate disclosure:</strong> As an Amazon Associate I earn from qualifying purchases.
            </div>
            <div className="space-y-6 text-[#333333] text-base leading-relaxed">
              <p>Minimal sneakers are the ones that disappear into an outfit and make everything else look more considered. White, grey, off-white, or black. Low sole. No visible branding you didn&apos;t choose.</p>
              <h2 className="font-black text-[#0A0A0A] uppercase text-xl tracking-tight pt-4">What Makes a Sneaker Truly Minimal</h2>
              <p>Three criteria. First: the silhouette should be low-profile. Second: the colour palette should be neutral. Third: branding should be subtle or absent.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 my-10">
              {[
                { label: "Foundation", title: "White Leather Low-Top", note: "The base. Works with everything, ages well.", img: "photo-1542291026-7eec264c27ff" },
                { label: "Casual", title: "Grey Suede Runner", note: "Softer silhouette, easier to keep clean.", img: "photo-1608231387042-66d1773070a5" },
                { label: "Workwear", title: "Black Canvas Low-Top", note: "Casual anchor. Works wherever white feels too clean.", img: "photo-1460353581641-37baddab0fa2" },
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
