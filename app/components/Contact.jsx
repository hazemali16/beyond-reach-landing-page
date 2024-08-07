'use client'

import { useState } from 'react';

const Contact = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, email, phone, message }),
      });
      const data = await res.json();
      let alertBox = document.querySelector("#alertBox")
      if (res.ok) {
        alertBox.classList.remove("hidden")
        alertBox.classList.add("flex")
        alertBox.children[0].children[0].innerHTML = data.message
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert('An error occurred while sending the email.');
    }
  };
    

  return (
  <div className="py-40 flex justify-center items-center opacity-0 translate-y-10 duration-500" id="contact">
    <div className="shadow-xl grid grid-cols-2 w-3/4 max-xl:w-11/12 max-lg:grid-cols-1">
        <div className="p-5">
        <h2 className="text-center text-2xl text-bold text-[var(--second-color)]">تواصلوا معنا اآلن وابدأوا رحلتكم نحو التميز</h2>
        <form action="" onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
            <div className="flex gap-3 flex-col w-full">
                <label htmlFor="">الاسم الكامل</label>
                <input className="p-3 outline-none bg-slate-100" value={fullname} onChange={(e) => setFullname(e.target.value)} required type="text" />
            </div>
            <div className="flex gap-3 flex-col w-full">
                <label htmlFor="">البريد الإلكتروني</label>
                <input className="p-3 outline-none bg-slate-100" value={email} onChange={(e) => setEmail(e.target.value)}  required type="email" />
            </div>
            <div className="flex gap-3 flex-col w-full">
                <label htmlFor="">رقم الهاتف</label>
                <input className="p-3 outline-none bg-slate-100" value={phone} onChange={(e) => setPhone(e.target.value)} required type="phone" />
            </div>
            <div className="flex gap-3 flex-col w-full">
                <label htmlFor="">الرسالة</label>
                <textarea className="p-3 outline-none bg-slate-100 resize-none h-40" value={message} onChange={(e) => setMessage(e.target.value)} required name="" id=""></textarea>
            </div>
            <div className="flex gap-5 justify-center items-center flex-col">
                <input type="submit" className="w-[211px] bg-[var(--second-color)] text-white px-5 py-2 rounded-md cursor-pointer" value="إرسال" />
                <span>أو</span>
                <a className="bg-[#5FFC7B] text-white flex justify-center items-center px-5 py-2 rounded-md  gap-2" href="https://wa.me/+966505274358">تواصل معنا عبر واتساب
                <i className="fa-brands fa-whatsapp"></i>
                </a>
            </div>
        </form>
        </div>
        <div className="max-lg:h-[500px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57943.68186544626!2d46.6283165!3d24.8132495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee5bafafbe801%3A0xddc3e1bb82a01943!2z2YjZg9in2YTYqSDYqNmK2YjZhtivINix2YrYqti0Ldir2YjYsdipINin2YTYqtiz2YjZitmCINin2YTYo9iv2KfYptmK!5e0!3m2!1sen!2seg!4v1723013304176!5m2!1sen!2seg"  style={{border: 0}} className="w-full h-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  </div>
);
};

export default Contact;
