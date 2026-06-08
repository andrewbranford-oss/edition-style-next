import Link from "next/link"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { CookieBanner } from "@/components/CookieBanner"

export const metadata = { title: "How to Build a Capsule Wardrobe From Scratch — EDITION" }

export default function CapsuleWardrobe() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Nav />
      <section className="relative h-[65vh] min-h-[420px] flex items-end pt-20">
        <div className="absolute inset-0 bg-[#0A0A0A]/40 z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1600&q=80" alt="Capsule Wardrobe" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 max-w-screen-xl mx-auto px-6 pb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-4">Essentials — June 2026</p>
          <h1 className="font-black text-white uppercase leading-none text-3xl md:text-5xl lg:text-6xl max-w-3xl tracking-tight">How to Build a Capsule Wardrobe From Scratch</h1>
        </div>
      </section>
      <article className="bg-white py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#f5f5f5] border-l-2 border-[#888888] px-5 py-3 text-[#555555] text-xs leading-relaxed mb-10">
              <strong>Affiliate disclosure:</strong> As an Amazon Associate I earn from qualifying purchases.
            </div>
            <div className="space-y-6 text-[#333333] text-base leading-relaxed">
              <p>A capsule wardrobe isn&apos;t a small wardrobe. It&apos;s a considered one. The goal isn&apos;t to own fewer clothes for the sake of it — it&apos;s to own clothes that work together so well that getting dressed stops being a decision.</p>
              {[
                ["Step 1: Clear the Decks", "Before buying anything, edit what you have. The test is simple: does this fit well, is it in good condition, and would I buy it again today?"],
                ["Step 2: Build the Foundation", "Start with the pieces you wear most. 3 white or grey t-shirts, 2 Oxford shirts, 1 crewneck sweatshirt, 2 pairs of jeans, 1 pair of chinos, 1 pair of tailored trousers, 1 minimal sneaker, 1 leather Derby, 1 versatile jacket."],
                ["Step 3: Add Depth, Not Breadth", "Once the foundation is in place, resist the urge to diversify. Add a second version of what's working — a second good shirt, another pair of trousers."],
                ["Step 4: One Statement Piece", "One or two statement pieces give the wardrobe personality without disrupting its coherence. The rule: they should work with at least four other things you already own."],
              ].map(([h, p]) => (
                <div key={h as string}>
                  <h2 className="font-black text-[#0A0A0A] uppercase text-xl tracking-tight pt-2 mb-2">{h}</h2>
                  <p>{p}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6 my-10">
              {[
                { label: "Foundation", title: "The Basics Bundle", note: "T-shirts, sweatshirt, Oxford shirt — anchor pieces.", img: "photo-1489987707025-afc232f7ea0f" },
                { label: "Bottoms", title: "Chinos & Trousers", note: "Stone chinos and dark tailored trousers.", img: "photo-1473966968600-fa801b869a1a" },
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
