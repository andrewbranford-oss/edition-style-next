import Link from "next/link"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"

export const metadata = { title: "Cookie Policy — EDITION" }

export default function Cookies() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Nav />
      <section className="pt-36 pb-16 border-b border-[#888888]/30">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-4">Legal</p>
          <h1 className="font-black text-white uppercase leading-none text-4xl md:text-6xl tracking-tight">Cookie Policy</h1>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-2xl mx-auto space-y-6 text-[#333333] text-base leading-relaxed">
            <p className="text-xs tracking-wider uppercase text-[#888888]">Last updated: June 2026</p>
            <h2 className="font-black text-[#0A0A0A] uppercase text-xl tracking-tight pt-4">Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#888888]/30">
                    {["Cookie", "Type", "Purpose"].map(h => <th key={h} className="text-left text-xs tracking-[0.15em] uppercase text-[#888888] py-3 pr-6 font-normal">{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#888888]/20">
                    <td className="py-4 pr-6 text-xs font-mono">edition-cookie-consent</td>
                    <td className="py-4 pr-6 text-xs">Essential</td>
                    <td className="py-4 text-xs">Stores your cookie consent preference.</td>
                  </tr>
                  <tr className="border-b border-[#888888]/20">
                    <td className="py-4 pr-6 text-xs font-mono">Amazon (3rd party)</td>
                    <td className="py-4 pr-6 text-xs">Affiliate / Tracking</td>
                    <td className="py-4 text-xs">Set by Amazon when you follow an affiliate link. Governed by Amazon&apos;s privacy policy.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2 className="font-black text-[#0A0A0A] uppercase text-xl tracking-tight pt-4">How to Control Cookies</h2>
            <p>Use the Accept/Decline buttons on the banner, or adjust settings in your browser. To opt out of Amazon advertising cookies visit <a href="https://www.amazon.co.uk/adprefs" className="text-[#111111] underline hover:text-[#888888] transition-colors" rel="noopener noreferrer">amazon.co.uk/adprefs</a>.</p>
            <p>Questions? <Link href="/contact" className="text-[#111111] underline hover:text-[#888888] transition-colors">Get in touch</Link>.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
