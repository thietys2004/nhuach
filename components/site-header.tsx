'use client'

import Link from 'next/link'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'

const productLinks = [
  ['Béc tưới phun mưa', 'bec-tuoi-phun-mua'],
  ['Ống tưới PE cao cấp', 'ong-tuoi-pe-cao-cap'],
  ['Hệ thống tưới hoàn chỉnh', 'he-thong-tuoi-hoan-chinh'],
] as const

export function SiteHeader({ active = '' }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#dce6d9] bg-[#f7f9f6]/95 text-[#16352c] shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Nhựa Chấn Hùng - Trang chủ" onClick={close}>
          <span className="flex size-10 items-center justify-center rounded-full bg-[#d8f043] text-xl font-black">CH</span>
          <span className="text-sm font-semibold uppercase leading-tight tracking-[0.18em]">Nhựa<br />Chấn Hùng</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Điều hướng chính">
          <Link className={active === 'home' ? 'font-bold text-[#71951b]' : 'transition hover:text-[#71951b]'} href="/">Trang chủ</Link>
          <Link className={active === 'about' ? 'font-bold text-[#71951b]' : 'transition hover:text-[#71951b]'} href="/ve-chung-toi">Về chúng tôi</Link>
          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <button type="button" onClick={() => setProductsOpen((value) => !value)} className={`flex items-center gap-1 transition hover:text-[#71951b] ${active === 'products' ? 'font-bold text-[#71951b]' : ''}`} aria-expanded={productsOpen}>Sản phẩm <ChevronDown className={`size-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} /></button>
            <div className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 transition ${productsOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}>
              <div className="rounded-2xl border border-[#dce6d9] bg-white p-2 shadow-xl">{productLinks.map(([label, slug]) => <Link key={slug} href={`/san-pham/${slug}`} onClick={() => setProductsOpen(false)} className="block rounded-xl px-4 py-3 text-sm transition hover:bg-[#e8efe4] hover:text-[#71951b]">{label}</Link>)}</div>
            </div>
          </div>
          <Link className={active === 'services' ? 'font-bold text-[#71951b]' : 'transition hover:text-[#71951b]'} href="/dich-vu">Dịch vụ</Link>
          <Link className={active === 'news' ? 'font-bold text-[#71951b]' : 'transition hover:text-[#71951b]'} href="/tin-tuc">Tin tức</Link>
          <Link className={active === 'contact' ? 'font-bold text-[#71951b]' : 'transition hover:text-[#71951b]'} href="/lien-he">Liên hệ</Link>
        </nav>
        <Link href="tel:0328888049" className="hidden items-center gap-2 rounded-full bg-[#16352c] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#71951b] sm:flex"><Phone className="size-4" /> 0328 888 049</Link>
        <button type="button" className="rounded-lg p-2 md:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="flex flex-col gap-4 border-t border-[#dce6d9] bg-white px-6 py-5 md:hidden"><Link href="/" onClick={close}>Trang chủ</Link><Link href="/ve-chung-toi" onClick={close}>Về chúng tôi</Link><button type="button" className="flex items-center justify-between text-left" onClick={() => setProductsOpen((value) => !value)}>Sản phẩm <ChevronDown className={`size-4 ${productsOpen ? 'rotate-180' : ''}`} /></button>{productsOpen && <div className="flex flex-col gap-3 border-l-2 border-[#d8f043] pl-4">{productLinks.map(([label, slug]) => <Link key={slug} href={`/san-pham/${slug}`} onClick={close} className="text-sm text-[#5f746a]">{label}</Link>)}</div>}<Link href="/dich-vu" onClick={close}>Dịch vụ</Link><Link href="/tin-tuc" onClick={close}>Tin tức</Link><Link href="/lien-he" onClick={close}>Liên hệ</Link></nav>}
    </header>
  )
}

export function Breadcrumb({ current, parent }: { current: string; parent?: string }) {
  return <div className="bg-[#ededed] px-6 py-3 text-sm text-[#5f746a] lg:px-10"><div className="mx-auto max-w-7xl"><Link href="/" className="text-[#16352c] hover:text-[#71951b]">Trang chủ</Link><span className="mx-3 text-[#9aa69d]">/</span>{parent && <><span>{parent}</span><span className="mx-3 text-[#9aa69d]">/</span></>}<span>{current}</span></div></div>
}

export function SiteFooter() {
  return <footer className="bg-[#10271f] px-6 py-10 text-white lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.18em]">Nhựa Chấn Hùng</p><p className="mt-3 text-xs text-white/55">Công ty TNHH SX-TM Chấn Hùng · Đồng hành cùng nông nghiệp Việt Nam.</p></div><Link href="/lien-he" className="text-sm font-bold text-[#d8f043]">Liên hệ tư vấn</Link></div></footer>
}
