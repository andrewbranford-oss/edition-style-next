import Link from "next/link"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { CookieBanner } from "@/components/CookieBanner"
import { WebGLShader } from "@/components/ui/web-gl-shader"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { NewsletterForm } from "@/components/NewsletterForm"

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Nav transparent />

      {/* HERO — WebGL shader background */}
      <section className="relative h-screen min-h-[600px] flex items-end">
        <WebGLShader />
        <div className="absolute inset-0 bg-[#0A0A0A]/55 z-10" />
        <div className="relative z-20 max-w-screen-xl mx-auto px-6 pb-20 md:pb-28">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-5">Summer 2026 Edit</p>
          <h1 className="font-black text-white uppercase leading-none text-5xl md:text-7xl lg:text-8xl max-w-3xl mb-10 tracking-tight">
            Dress<br />With Intent
          </h1>
          <Link href="/articles">
            <LiquidButton className="text-white border border-white/40 rounded-full" size="xl">
              Explore the Edit
            </LiquidButton>
          </Link>
        </div>
      </section>

      {/* SPLIT BANNER 1 — dark */}
      <section className="bg-[#0A0A0A] grid md:grid-cols-2 min-h-[70vh]">
        <div className="relative min-h-[50vw] md:min-h-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=900&q=80" alt="Essential outerwear" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center px-10 md:px-16 py-16 md:py-24">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-6">The Outerwear Report</p>
          <h2 className="font-black text-white uppercase leading-none text-4xl md:text-5xl lg:text-6xl mb-8 max-w-sm tracking-tight">
            Layer Up.<br />Stand Out.
          </h2>
          <Link href="/articles/essential-outerwear">
            <LiquidButton className="text-white border border-white/40 rounded-full" size="lg">Read the Guide</LiquidButton>
          </Link>
        </div>
      </section>

      {/* SPLIT BANNER 2 — light */}
      <section className="bg-white grid md:grid-cols-2 min-h-[70vh]">
        <div className="flex flex-col justify-center px-10 md:px-16 py-16 md:py-24 order-2 md:order-1">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-6">Essentials</p>
          <h2 className="font-black text-[#0A0A0A] uppercase leading-none text-4xl md:text-5xl lg:text-6xl mb-8 max-w-sm tracking-tight">
            Build the<br />Foundation.
          </h2>
          <Link href="/articles/capsule-wardrobe">
            <LiquidButton className="text-[#0A0A0A] border border-[#0A0A0A]/40 rounded-full" size="lg">The Capsule Guide</LiquidButton>
          </Link>
        </div>
        <div className="relative min-h-[50vw] md:min-h-0 order-1 md:order-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80" alt="Capsule wardrobe" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>

      {/* FEATURED PICKS */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-14 flex items-end justify-between border-b border-[#888888]/30 pb-6">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-3">Curated</p>
              <h2 className="font-black text-white uppercase text-3xl md:text-4xl tracking-tight">Featured Picks</h2>
            </div>
            <Link href="/articles" className="hidden md:block text-xs tracking-[0.15em] uppercase text-[#888888] hover:text-white transition-colors">View All</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "Basics", title: "The Perfect White Tee", note: "The hardest garment to get right.", img: "photo-1521572163474-6864f9cf17ab", href: "/articles/best-white-tees" },
              { label: "Footwear", title: "Minimal Sneakers", note: "Clean lines, no branding overload.", img: "photo-1542291026-7eec264c27ff", href: "/articles/minimal-sneakers" },
              { label: "Outerwear", title: "The Essential Jacket", note: "Five jackets that earn their keep.", img: "photo-1548036328-c9fa89d128fa", href: "/articles/essential-outerwear" },
              { label: "Tailoring", title: "Suits, Done Right", note: "Fit is everything.", img: "photo-1594938298603-c8148c4bec9d", href: "/articles/tailoring-guide" },
            ].map(({ label, title, note, img, href }) => (
              <div key={href} className="group">
                <div className="relative overflow-hidden aspect-[3/4] mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=600&q=80`} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-xs tracking-[0.15em] uppercase text-[#888888] mb-1">{label}</p>
                <h3 className="font-bold text-white text-sm uppercase tracking-wide mb-2">{title}</h3>
                <p className="text-[#888888] text-xs leading-relaxed mb-4">{note}</p>
                <Link href={href} className="text-xs tracking-[0.15em] uppercase text-white border-b border-[#888888] hover:border-white transition-colors pb-0.5">View on Amazon</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-14 flex items-end justify-between border-b border-[#888888]/30 pb-6">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-3">Editorial</p>
              <h2 className="font-black text-[#0A0A0A] uppercase text-3xl md:text-4xl tracking-tight">Latest Articles</h2>
            </div>
            <Link href="/articles" className="hidden md:block text-xs tracking-[0.15em] uppercase text-[#888888] hover:text-[#0A0A0A] transition-colors">All Articles</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { cat: "Essentials", title: "How to Build a Capsule Wardrobe From Scratch", img: "photo-1489987707025-afc232f7ea0f", href: "/articles/capsule-wardrobe" },
              { cat: "Tailoring", title: "The Tailoring Guide: Getting Suits Right Without a Stylist", img: "photo-1594938298603-c8148c4bec9d", href: "/articles/tailoring-guide" },
              { cat: "Footwear", title: "Minimal Sneakers That Go With Everything", img: "photo-1542291026-7eec264c27ff", href: "/articles/minimal-sneakers" },
            ].map(({ cat, title, img, href }) => (
              <Link key={href} href={href} className="group block">
                <div className="relative overflow-hidden aspect-[4/3] mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=800&q=80`} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-2">{cat}</p>
                <h3 className="font-black text-[#0A0A0A] uppercase text-xl md:text-2xl leading-tight tracking-tight group-hover:text-[#888888] transition-colors">{title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#0A0A0A] border-t border-[#888888]/30 py-20">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-black text-white uppercase text-2xl md:text-3xl tracking-tight mb-2">The Weekly Edit</p>
            <p className="text-[#888888] text-sm">New picks and articles every Thursday. No spam.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
