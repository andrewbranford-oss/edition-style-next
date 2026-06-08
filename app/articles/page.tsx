import Link from "next/link"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { CookieBanner } from "@/components/CookieBanner"

export const metadata = { title: "Articles — EDITION" }

const posts = [
  { cat: "Essentials", date: "June 2026", title: "How to Build a Capsule Wardrobe From Scratch", desc: "The definitive guide to owning less and dressing better.", img: "photo-1489987707025-afc232f7ea0f", href: "/articles/capsule-wardrobe", featured: true },
  { cat: "Tailoring", date: "May 2026", title: "The Tailoring Guide: Getting Suits Right Without a Stylist", desc: "Fit is the only thing that matters. Here's how to find it.", img: "photo-1594938298603-c8148c4bec9d", href: "/articles/tailoring-guide", featured: false },
  { cat: "Outerwear", date: "April 2026", title: "Essential Outerwear: 5 Jackets Worth Owning", desc: "Not five jackets for every occasion — five that cover every occasion.", img: "photo-1548036328-c9fa89d128fa", href: "/articles/essential-outerwear", featured: false },
  { cat: "Footwear", date: "March 2026", title: "Minimal Sneakers That Go With Everything", desc: "Clean, quiet, versatile. The trainers that don't compete.", img: "photo-1542291026-7eec264c27ff", href: "/articles/minimal-sneakers", featured: false },
  { cat: "Basics", date: "February 2026", title: "The Best White T-Shirts for Men in 2026", desc: "After years of testing, these are the ones that pass.", img: "photo-1521572163474-6864f9cf17ab", href: "/articles/best-white-tees", featured: false },
]

export default function Articles() {
  const [featured, ...rest] = posts
  return (
    <div className="bg-[#0A0A0A] text-white">
      <Nav />
      <section className="pt-36 pb-16 border-b border-[#888888]/30">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-4">Editorial</p>
          <h1 className="font-black text-white uppercase leading-none text-4xl md:text-6xl tracking-tight">Articles</h1>
        </div>
      </section>
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
            <Link href={featured.href} className="group block md:col-span-2">
              <div className="relative overflow-hidden aspect-[16/9] mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://images.unsplash.com/${featured.img}?auto=format&fit=crop&w=1200&q=80`} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-3">{featured.cat} — {featured.date}</p>
              <h2 className="font-black text-[#0A0A0A] uppercase text-2xl md:text-3xl leading-tight tracking-tight group-hover:text-[#888888] transition-colors mb-3">{featured.title}</h2>
              <p className="text-[#555555] text-sm leading-relaxed max-w-xl">{featured.desc}</p>
            </Link>
            {rest.map(post => (
              <Link key={post.href} href={post.href} className="group block">
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://images.unsplash.com/${post.img}?auto=format&fit=crop&w=700&q=80`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-3">{post.cat} — {post.date}</p>
                <h2 className="font-black text-[#0A0A0A] uppercase text-xl md:text-2xl leading-tight tracking-tight group-hover:text-[#888888] transition-colors">{post.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <CookieBanner />
    </div>
  )
}
