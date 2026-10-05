'use client'

import { useState } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <form className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-10" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <input required className="border-b border-[#cad5c8] px-0 py-3 outline-none focus:border-[#71951b]" placeholder="Họ và tên" />
        <input required type="tel" className="border-b border-[#cad5c8] px-0 py-3 outline-none focus:border-[#71951b]" placeholder="Số điện thoại" />
      </div>
      <input required type="email" className="mt-6 w-full border-b border-[#cad5c8] px-0 py-3 outline-none focus:border-[#71951b]" placeholder="Email" />
      <textarea required rows={5} className="mt-6 w-full resize-none border-b border-[#cad5c8] px-0 py-3 outline-none focus:border-[#71951b]" placeholder="Nội dung cần tư vấn" />
      <button type="submit" className="mt-8 rounded-full bg-[#16352c] px-7 py-3 font-semibold text-white transition hover:bg-[#71951b]">Gửi yêu cầu</button>
      {sent ? <p role="status" className="mt-4 text-sm font-medium text-[#71951b]">Cảm ơn bạn. Chấn Hùng sẽ liên hệ sớm.</p> : null}
    </form>
  )
}
