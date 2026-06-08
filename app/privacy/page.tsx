import Link from "next/link"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"

export const metadata = { title: "Privacy Policy — EDITION" }

export default function Privacy() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Nav />
      <section className="pt-36 pb-16 border-b border-[#888888]/30">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-4">Legal</p>
          <h1 className="font-black text-white uppercase leading-none text-4xl md:text-6xl tracking-tight">Privacy Policy</h1>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="max-w-2xl mx-auto space-y-6 text-[#333333] text-base leading-relaxed">
            <p className="text-xs tracking-wider uppercase text-[#888888]">Last updated: June 2026</p>
            {[
              ["Who We Are", "EDITION is a men's fashion and style website operated independently in the United Kingdom. Contact: hello@edition-style.com."],
              ["What We Collect", "Contact form submissions (name, email, message), newsletter email addresses if you subscribe, and cookies (see Cookie Policy)."],
              ["How We Use It", "To respond to enquiries, send newsletters if opted in, and improve the site. We do not sell your personal data."],
              ["Legal Basis (UK GDPR)", "Consent for newsletters and cookie consent. Legitimate interests for responding to enquiries."],
              ["Your Rights", "Under UK GDPR you have the right to access, correct, delete, and withdraw consent for your data. Contact hello@edition-style.com or lodge a complaint with the ICO (ico.org.uk)."],
            ].map(([h, p]) => (
              <div key={h as string}>
                <h2 className="font-black text-[#0A0A0A] uppercase text-xl tracking-tight pt-4 mb-2">{h}</h2>
                <p>{p}</p>
              </div>
            ))}
            <div>
              <h2 className="font-black text-[#0A0A0A] uppercase text-xl tracking-tight pt-4 mb-2">Third-Party Services</h2>
              <p>Affiliate links go to Amazon — <a href="https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=201909010" className="text-[#111111] underline hover:text-[#888888] transition-colors" rel="noopener noreferrer">Amazon&apos;s Privacy Notice applies</a>. See also our <Link href="/cookies" className="text-[#111111] underline hover:text-[#888888] transition-colors">Cookie Policy</Link>.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
