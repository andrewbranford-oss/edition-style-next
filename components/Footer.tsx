import Link from "next/link"

const articles = [
  ["White T-Shirts", "/articles/best-white-tees"],
  ["Outerwear", "/articles/essential-outerwear"],
  ["Sneakers", "/articles/minimal-sneakers"],
  ["Capsule Wardrobe", "/articles/capsule-wardrobe"],
  ["Tailoring", "/articles/tailoring-guide"],
]

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#888888]/30 pt-16 pb-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <p className="text-lg font-black tracking-[0.25em] uppercase text-white mb-4">EDITION</p>
            <p className="text-[#888888] text-sm leading-relaxed">Considered picks for the modern man. No noise, just the best.</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-white mb-5">Articles</p>
            <ul className="space-y-3">
              {articles.map(([label, href]) => (
                <li key={href}><Link href={href} className="text-[#888888] text-xs tracking-wider hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-white mb-5">Company</p>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[#888888] text-xs tracking-wider hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-[#888888] text-xs tracking-wider hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-white mb-5">Legal</p>
            <ul className="space-y-3">
              <li><Link href="/disclosure" className="text-[#888888] text-xs tracking-wider hover:text-white transition-colors">Affiliate Disclosure</Link></li>
              <li><Link href="/privacy" className="text-[#888888] text-xs tracking-wider hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="text-[#888888] text-xs tracking-wider hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#888888]/30 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[#888888] text-xs tracking-wider">© 2026 EDITION. All rights reserved.</p>
          <p className="text-[#888888] text-xs leading-relaxed max-w-md">As an Amazon Associate I earn from qualifying purchases. Affiliate links may appear throughout this site.</p>
        </div>
      </div>
    </footer>
  )
}
