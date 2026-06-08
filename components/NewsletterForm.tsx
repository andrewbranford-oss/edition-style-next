"use client"

export function NewsletterForm() {
  return (
    <form className="flex w-full md:w-auto gap-0" onSubmit={e => e.preventDefault()}>
      <input
        type="email"
        placeholder="Your email address"
        className="bg-transparent border border-[#888888] text-white text-sm px-5 py-3.5 w-full md:w-64 placeholder-[#555555] focus:outline-none focus:border-white transition-colors"
      />
      <button
        type="submit"
        className="bg-white text-[#0A0A0A] text-xs tracking-[0.15em] uppercase px-6 py-3.5 hover:bg-[#888888] hover:text-white transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  )
}
