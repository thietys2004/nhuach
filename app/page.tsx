'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Droplets,
  Menu,
  Phone,
  Play,
  ShieldCheck,
  Sprout,
  X,
} from 'lucide-react'

const navItems = [
  { label: 'Trang chủ', href: '#trang-chu' },
  { label: 'Về Chấn Hùng', href: '#ve-chung-toi' },
  { label: 'Sản phẩm', href: '#san-pham', dropdown: true },
  { label: 'Tin tức', href: '#tin-tuc' },
  { label: 'Liên hệ', href: '#lien-he' },
]

const products = [
  {
    tag: 'Béc tưới',
    title: 'Béc tưới phun mưa',
    description: 'Phân bổ nước đồng đều, phù hợp cho mọi loại cây trồng.',
    image: '/sprinkler-product.png',
  },
  {
    tag: 'Ống dẫn',
    title: 'Ống tưới PE cao cấp',
    description: 'Bền bỉ, linh hoạt và chịu được điều kiện ngoài trời.',
    image: '/pipe-product.png',
  },
  {
    tag: 'Giải pháp',
    title: 'Hệ thống tưới hoàn chỉnh',
    description: 'Thiết kế trọn gói giúp tiết kiệm thời gian và chi phí.',
    image: '/irrigation-hero.png',
  },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9f6] text-[#16352c]" id="trang-chu">
      <header className="motion-fade-up absolute inset-x-0 top-0 z-20 border-b border-white/20 bg-[#16352c]/90 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#trang-chu" className="flex items-center gap-3" aria-label="Chấn Hùng - Trang chủ">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#d8f043] text-xl font-black text-[#16352c]">CH</span>
            <span className="text-sm font-semibold uppercase leading-tight tracking-[0.18em]">Nhựa<br />Chấn Hùng</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Điều hướng chính">
            {navItems.map((item) => item.dropdown ? (
              <div key={item.label} className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
                <button type="button" className="flex items-center gap-1.5 text-sm font-medium text-white/80 transition hover:text-[#d8f043]" aria-expanded={productsOpen} onClick={() => setProductsOpen((open) => !open)}>
                  {item.label}<ChevronDown className={`size-3.5 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 transition duration-200 ${productsOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#16352c] p-2 shadow-2xl shadow-black/20">
                    {products.map((product, index) => <a key={product.title} href={`/san-pham/${index === 0 ? 'bec-tuoi-phun-mua' : index === 1 ? 'ong-tuoi-pe-cao-cap' : 'he-thong-tuoi-hoan-chinh'}`} className="group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/10" onClick={() => setProductsOpen(false)}><span className="size-12 shrink-0 overflow-hidden rounded-lg bg-[#e8efe4]"><img src={product.image} alt="" className="size-full object-cover transition duration-300 group-hover:scale-110" /></span><span><span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#d8f043]">{product.tag}</span><span className="mt-1 block text-sm font-semibold text-white">{product.title}</span></span><ArrowRight className="ml-auto size-4 text-white/40 transition group-hover:translate-x-1 group-hover:text-[#d8f043]" /></a>)}
                  </div>
                </div>
              </div>
            ) : (
              <a key={item.label} href={item.href} className="flex items-center gap-1.5 text-sm font-medium text-white/80 transition hover:text-[#d8f043]">{item.label}</a>
            ))}
          </nav>
          <a href="tel:0328888049" className="motion-pulse-ring hidden items-center gap-2 rounded-full bg-[#d8f043] px-5 py-2.5 text-sm font-bold text-[#16352c] transition hover:bg-white sm:flex">
            <Phone className="size-4" /> 0328 888 049
          </a>
          <button className="rounded-lg p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-4 border-t border-white/10 bg-[#16352c] px-6 py-5 md:hidden">{navItems.map((item) => item.dropdown ? <div key={item.label} className="flex flex-col gap-3"><button type="button" className="flex items-center justify-between text-left text-sm font-medium text-white/85" onClick={() => setProductsOpen((open) => !open)} aria-expanded={productsOpen}>{item.label}<ChevronDown className={`size-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} /></button>{productsOpen && <div className="flex flex-col gap-3 border-l border-[#d8f043]/40 pl-4">{products.map((product, index) => <a key={product.title} href={`/san-pham/${index === 0 ? 'bec-tuoi-phun-mua' : index === 1 ? 'ong-tuoi-pe-cao-cap' : 'he-thong-tuoi-hoan-chinh'}`} onClick={() => setMenuOpen(false)} className="text-sm text-white/70 transition hover:text-[#d8f043]">{product.title}</a>)}</div>}</div> : <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="text-sm font-medium text-white/85">{item.label}</a>)}</nav>}
      </header>

      <section className="relative flex min-h-[760px] items-end bg-[#16352c] pt-28" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,35,28,.88)_0%,rgba(10,35,28,.55)_44%,rgba(10,35,28,.12)_100%)]" />
        <img src="/irrigation-hero.png" alt="Hệ thống tưới phun mưa trên cánh đồng xanh" className="absolute inset-0 size-full object-cover opacity-90" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pb-20 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:px-10 lg:pb-28">
          <div className="max-w-2xl text-white motion-fade-up motion-delay-1">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#d8f043]"><span className="h-px w-10 bg-[#d8f043]" /> Giải pháp tưới thông minh</p>
            <h1 id="hero-title" className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">Tưới đúng.<br /><span className="text-[#d8f043]">Sống xanh.</span></h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/75 sm:text-lg">Thiết bị tưới chất lượng cao cho nông nghiệp hiện đại. Đồng hành cùng người trồng để mỗi giọt nước tạo nên mùa màng bền vững.</p>
            <div className="mt-9 flex flex-wrap gap-3"><a href="#san-pham" className="inline-flex items-center gap-3 rounded-full bg-[#d8f043] px-6 py-3.5 text-sm font-bold text-[#16352c] transition hover:bg-white">Khám phá sản phẩm <ArrowRight className="size-4" /></a><a href="#ve-chung-toi" className="inline-flex items-center gap-3 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"><Play className="size-4 fill-current" /> Về chúng tôi</a></div>
          </div>
          <div className="hidden justify-end lg:flex motion-float"><div className="w-64 border-l border-white/30 pl-7 text-white"><p className="text-5xl font-semibold tracking-tight">15+</p><p className="mt-2 text-sm leading-6 text-white/70">Năm kinh nghiệm cung cấp thiết bị tưới cho nông nghiệp Việt Nam.</p></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10" id="ve-chung-toi">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#71951b]">Về Chấn Hùng</p><h2 className="max-w-md text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">Chúng tôi tin vào sức mạnh của <span className="text-[#71951b]">từng giọt nước.</span></h2></div><div className="grid gap-8 sm:grid-cols-2"><p className="text-base leading-7 text-[#5f746a]">Chấn Hùng là đơn vị sản xuất và phân phối thiết bị tưới với mong muốn đưa những giải pháp đơn giản, hiệu quả đến gần hơn với người nông dân.</p><div className="flex flex-col gap-4"><div className="flex items-center gap-3 text-sm font-semibold"><ShieldCheck className="size-5 text-[#71951b]" /> Sản phẩm bền bỉ, chuẩn kỹ thuật</div><div className="flex items-center gap-3 text-sm font-semibold"><Sprout className="size-5 text-[#71951b]" /> Tối ưu cho cây trồng Việt Nam</div></div></div></div>
      </section>

      <section className="bg-[#e8efe4] px-6 py-24 lg:px-10" id="san-pham"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#71951b]">Danh mục sản phẩm</p><h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Thiết bị cho mọi<br />mùa vụ.</h2></div><a href="#lien-he" className="group inline-flex items-center gap-2 text-sm font-bold text-[#16352c]">Nhận tư vấn sản phẩm <ArrowRight className="size-4 transition group-hover:translate-x-1" /></a></div><div className="grid gap-5 md:grid-cols-3">{products.map((product, i) => <article key={product.title} className={`motion-fade-up motion-shimmer group overflow-hidden rounded-[1.75rem] bg-white ${i === 1 ? 'md:translate-y-8' : ''}`}><div className="aspect-[1.2] overflow-hidden bg-[#f4f4ef]"><img src={product.image} alt={product.title} className="size-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-7"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#71951b]">{product.tag}</p><h3 className="text-2xl font-semibold tracking-tight">{product.title}</h3><p className="mt-3 text-sm leading-6 text-[#718078]">{product.description}</p><a href={`/san-pham/${i === 0 ? 'bec-tuoi-phun-mua' : i === 1 ? 'ong-tuoi-pe-cao-cap' : 'he-thong-tuoi-hoan-chinh'}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Xem chi tiết <ArrowRight className="size-4 transition group-hover:translate-x-1" /></a></div></article>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10" id="tin-tuc"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#71951b]">Vì sao chọn Chấn Hùng</p><h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Tập trung vào điều<br /><span className="text-[#71951b]">thực sự quan trọng.</span></h2></div><div className="grid gap-4 sm:grid-cols-2"><div className="rounded-3xl bg-[#16352c] p-7 text-white"><Droplets className="mb-12 size-8 text-[#d8f043]" /><h3 className="text-xl font-semibold">Tiết kiệm nước</h3><p className="mt-3 text-sm leading-6 text-white/65">Hệ thống phân phối chính xác giúp giảm lãng phí và bảo vệ nguồn nước.</p></div><div className="rounded-3xl bg-[#d8f043] p-7"><Check className="mb-12 size-8 text-[#16352c]" /><h3 className="text-xl font-semibold">Tư vấn tận tâm</h3><p className="mt-3 text-sm leading-6 text-[#385338]">Đội ngũ am hiểu thực tế, sẵn sàng đồng hành từ khâu chọn sản phẩm.</p></div></div></div></section>

      <section className="bg-[#16352c] px-6 py-20 text-white lg:px-10" id="lien-he"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#d8f043]">Liên hệ với chúng tôi</p><h2 className="text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-6xl">Bắt đầu tưới<br /><span className="text-[#d8f043]">thông minh hơn.</span></h2><p className="mt-6 max-w-md text-base leading-7 text-white/65">Hãy để lại thông tin, Chấn Hùng sẽ liên hệ và tư vấn giải pháp phù hợp với nhu cầu của bạn.</p><div className="mt-8 flex flex-col gap-3 text-sm text-white/80"><a href="tel:0328888049" className="flex items-center gap-3"><Phone className="size-4 text-[#d8f043]" /> 0328 888 049</a><p>✉ chanhung1085.cty@gmail.com</p></div></div><form className="rounded-[1.75rem] bg-white p-7 text-[#16352c] sm:p-9" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Họ và tên<input required className="mt-2 w-full border-b border-[#cad5c8] bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-[#a5b1a8] focus:border-[#71951b]" placeholder="Nguyễn Văn A" /></label><label className="text-sm font-semibold">Số điện thoại<input required type="tel" className="mt-2 w-full border-b border-[#cad5c8] bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-[#a5b1a8] focus:border-[#71951b]" placeholder="0328 xxx xxx" /></label></div><label className="mt-6 block text-sm font-semibold">Bạn đang quan tâm điều gì?<textarea required rows={3} className="mt-2 w-full resize-none border-b border-[#cad5c8] bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-[#a5b1a8] focus:border-[#71951b]" placeholder="Chia sẻ nhu cầu của bạn..." /></label><button className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#16352c] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#71951b]">{submitted ? 'Đã gửi yêu cầu' : 'Gửi yêu cầu tư vấn'} {!submitted && <ArrowRight className="size-4" />}</button>{submitted && <p className="mt-4 text-sm font-medium text-[#71951b]">Cảm ơn bạn. Chúng tôi sẽ liên hệ sớm nhất.</p>}</form></div></section>

      <footer className="bg-[#10271f] px-6 py-10 text-white lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><a href="#trang-chu" className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-full bg-[#d8f043] text-sm font-black text-[#16352c]">CH</span><span className="text-xs font-semibold uppercase tracking-[0.18em]">Nhựa Chấn Hùng</span></a><p className="mt-5 max-w-xs text-xs leading-5 text-white/45">Công ty TNHH SX-TM Chấn Hùng<br />Đồng hành cùng nông nghiệp Việt Nam.</p></div><div className="flex items-center gap-4 text-white/55"><a href="#lien-he" className="text-xs transition hover:text-[#d8f043]">Liên hệ tư vấn</a><span className="text-xs">© 2026 Chấn Hùng</span></div></div></footer>
    </main>
  )
}
