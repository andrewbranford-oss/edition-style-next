import Link from "next/link"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"

export const metadata = { title: "Affiliate Disclosure — EDITION" }

export default function Disclosure() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Nav />
      <section className="pt-36 pb-16 border-b border-[#888888]/30">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-4">Legal</p>
          <h1 className="font-black text-white uppercase leading-none text-4xl md:text-6xl tracking-tight">Affiliate Disclosure</h1>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-2xl mx-auto space-y-6 text-[#333333] text-base leading-relaxed">
            <p className="text-xs tracking-wider uppercase text-[#888888]">Last updated: June 2026</p>
            <p>EDITION participates in the Amazon Services LLC Associates Program. <strong className="text-[#111111]">As an Amazon Associate I earn from qualifying purchases.</strong></p>
            <h2 className="font-black text-[#0A0A0A] uppercase text-xl tracking-tight pt-4">What This Means for You</h2>
            <p>Affiliate links do not change the price you pay. The commission comes from Amazon&apos;s own margin, not from you.</p>
            <h2 className="font-black text-[#0A0A0A] uppercase text-xl tracking-tight pt-4">Editorial Independence</h2>
            <p>Affiliate relationships do not influence what I recommend. Every product is chosen on merit. A product with a higher commission will never make the cut if a better product exists.</p>
            <div className="pt-4">
              <Link href="/contact" className="text-[#111111] underline hover:text-[#888888] transition-colors">Contact us</Link> with any questions.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
