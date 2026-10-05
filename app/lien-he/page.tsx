import { Mail, MapPin, Phone } from 'lucide-react'
import { Breadcrumb, SiteFooter, SiteHeader } from '@/components/site-header'
import { ContactForm } from './contact-form'

export const metadata = { title: 'Liên hệ | Nhựa Chấn Hùng' }

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f9f6] text-[#16352c]">
      <SiteHeader active="contact" />
      <Breadcrumb current="Liên hệ" />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#71951b]">Liên hệ</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
          Cùng bắt đầu một mùa vụ <span className="text-[#71951b]">hiệu quả hơn.</span>
        </h1>
        <div className="mt-14 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <div className="flex gap-4"><MapPin className="mt-1 text-[#71951b]" /><div><p className="font-bold">Địa chỉ</p><p className="mt-1 leading-7 text-[#5f746a]">Số 789 Đường Đê Bao Rạch Cát, Ấp 7, Xã Tân Lân, Tỉnh Tây Ninh</p></div></div>
            <div className="flex gap-4"><Phone className="mt-1 text-[#71951b]" /><div><p className="font-bold">Điện thoại</p><a href="tel:0909969612" className="mt-1 block text-[#5f746a]">0909 969 612</a></div></div>
            <div className="flex gap-4"><Mail className="mt-1 text-[#71951b]" /><div><p className="font-bold">Email</p><p className="mt-1 text-[#5f746a]">chanhung1085.cty@gmail.com</p></div></div>
          </div>
          <ContactForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
