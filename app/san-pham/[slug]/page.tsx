import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, ShieldCheck, Sprout } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Breadcrumb, SiteFooter, SiteHeader } from '@/components/site-header'

const productDetails = {
  'bec-tuoi-phun-mua': {
    tag: 'Béc tưới',
    title: 'Béc tưới phun mưa',
    description: 'Giải pháp tưới phủ đều, nhẹ nhàng và tiết kiệm cho nhiều loại cây trồng.',
    image: '/sprinkler-product.png',
    intro: 'Béc tưới phun mưa Chấn Hùng tạo ra hạt nước mịn, phân bổ đồng đều trên diện tích tưới và hạn chế ảnh hưởng đến đất cũng như cây non.',
    specs: ['Bán kính tưới ổn định', 'Phù hợp vườn rau, cây ăn trái và vườn ươm', 'Dễ lắp đặt, vệ sinh và thay thế'],
  },
  'ong-tuoi-pe-cao-cap': {
    tag: 'Ống dẫn',
    title: 'Ống tưới PE cao cấp',
    description: 'Bền bỉ, linh hoạt và chịu được điều kiện ngoài trời.',
    image: '/pipe-product.png',
    intro: 'Ống tưới PE là lựa chọn tin cậy cho hệ thống tưới lâu dài nhờ độ dẻo tốt, dễ đi đường ống và hoạt động ổn định trong môi trường nông nghiệp.',
    specs: ['Dẻo dai, dễ uốn theo địa hình', 'Chịu nắng và điều kiện ngoài trời', 'Kết nối nhanh với nhiều phụ kiện tưới'],
  },
  'he-thong-tuoi-hoan-chinh': {
    tag: 'Giải pháp',
    title: 'Hệ thống tưới hoàn chỉnh',
    description: 'Thiết kế trọn gói giúp tiết kiệm thời gian và chi phí.',
    image: '/irrigation-hero.png',
    intro: 'Từ nguồn nước đến từng gốc cây, Chấn Hùng tư vấn giải pháp tưới phù hợp với diện tích, loại cây và ngân sách của từng mô hình.',
    specs: ['Khảo sát và tư vấn theo nhu cầu', 'Tối ưu lượng nước cho từng khu vực', 'Đồng hành lắp đặt và hướng dẫn sử dụng'],
  },
} as const

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = productDetails[slug as keyof typeof productDetails]

  if (!product) notFound()

  return (
    <main className="min-h-screen bg-[#f7f9f6] text-[#16352c]">
      <SiteHeader active="products" />
      <Breadcrumb current={product.title} parent="Sản phẩm" />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10">
        <div className="motion-fade-up order-2 lg:order-1">
          <Link href="/#san-pham" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#71951b] transition hover:gap-3">
            <ArrowLeft className="size-4" /> Quay lại sản phẩm
          </Link>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#71951b]">{product.tag}</p>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-7xl">{product.title}</h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#5f746a]">{product.description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/#lien-he" className="inline-flex items-center gap-3 rounded-full bg-[#16352c] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#71951b]">Nhận tư vấn <ArrowRight className="size-4" /></Link>
            <Link href="tel:0328888049" className="inline-flex items-center gap-3 rounded-full border border-[#b8c9b8] px-6 py-3.5 text-sm font-bold transition hover:border-[#16352c]">Gọi ngay</Link>
          </div>
        </div>
        <div className="motion-float order-1 overflow-hidden rounded-[2rem] bg-[#e8efe4] lg:order-2">
          <img src={product.image} alt={product.title} className="aspect-square w-full object-cover" />
        </div>
      </section>

      <section className="bg-[#16352c] px-6 py-16 text-white lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#d8f043]">Thông tin sản phẩm</p><h2 className="max-w-md text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">Một lựa chọn tốt cho mùa vụ <span className="text-[#d8f043]">bền vững.</span></h2></div>
          <div><p className="text-lg leading-8 text-white/70">{product.intro}</p><div className="mt-9 grid gap-4 sm:grid-cols-3">{product.specs.map((spec) => <div key={spec} className="rounded-2xl border border-white/15 bg-white/5 p-5"><Check className="mb-7 size-5 text-[#d8f043]" /><p className="text-sm font-semibold leading-6">{spec}</p></div>)}</div></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-16 sm:grid-cols-2 lg:px-10">
        <div className="rounded-3xl bg-[#d8f043] p-7"><ShieldCheck className="mb-10 size-7" /><h2 className="text-2xl font-semibold">Sản phẩm chuẩn kỹ thuật</h2><p className="mt-3 max-w-sm text-sm leading-6 text-[#385338]">Được lựa chọn để hoạt động ổn định trong điều kiện sử dụng thực tế tại Việt Nam.</p></div>
        <div className="rounded-3xl bg-[#e8efe4] p-7"><Sprout className="mb-10 size-7 text-[#71951b]" /><h2 className="text-2xl font-semibold">Tư vấn theo mô hình</h2><p className="mt-3 max-w-sm text-sm leading-6 text-[#5f746a]">Chia sẻ diện tích và loại cây, đội ngũ Chấn Hùng sẽ gợi ý cấu hình phù hợp.</p></div>
      </section>

      <SiteFooter />
    </main>
  )
}

export function generateStaticParams() {
  return Object.keys(productDetails).map((slug) => ({ slug }))
}

export function generateMetadata() {
  return { title: 'Chi tiết sản phẩm | Nhựa Chấn Hùng', description: 'Thông tin thiết bị tưới và giải pháp nông nghiệp từ Nhựa Chấn Hùng.' }
}

