'use client'
import logo from '../images/logo.png'
import Image from "next/image";
import { useEffect } from "react";


const NavBar = () => {
    useEffect(() => {
        let bars = document.querySelector(".bars")
        let mobileNavbar = document.querySelector(".mobile-navbar")
        let clicked = 0
        bars.onclick = () => {
            if (clicked === 0) {
                bars.children[0].style.cssText = "top: 50%; transform: translateY(-50%) rotate(45deg)"
                bars.children[1].style.opacity = "0"
                bars.children[2].style.cssText = "bottom: unset; top: 50%; transform: translateY(-50%) rotate(-45deg)"
                mobileNavbar.classList.add("show-menu")
                clicked = 1
            } else {
                bars.children[0].style.cssText = "top: 0; transform: translateY(0) rotate(0)"
                bars.children[1].style.opacity = "1"
                bars.children[2].style.cssText = "bottom: 0; top: unset; transform: translateY(0) rotate(0)"
                mobileNavbar.classList.remove("show-menu")
                clicked = 0
            }
        }

    }, [])

    return (
        <>
            <div className="fixed top-0 left-0 w-full p-5 flex bg-white justify-center z-40 navbar duration-500 shadow-md -translate-y-full delay-300">
                <div className="flex items-center justify-between w-10/12 max-sm:w-full">
                    <a href="#" className="w-32 max-md:w-20"><Image src={logo} alt="logo" /></a>
                    <ul className="flex items-center gap-5  max-md:hidden desktop-menu">
                        <li className=""><a href='#hero' className="cursor-pointer">الرئيسية</a></li>
                        <li className=""><a href='#status' className="cursor-pointer">إحصائياتنا</a></li>
                        <li className=""><a href='#services' className="cursor-pointer">خدماتنا</a></li>
                        <li className=""><a href='#skills' className="cursor-pointer">مميزاتنا</a></li>
                        <li className=""><a href='#companies' className="cursor-pointer">الشركاء</a></li>
                        <li className=""><a href='#contact' className="cursor-pointer">التواصل</a></li>
                    </ul>
                    <div className="bars w-7 relative h-5 cursor-pointer md:hidden">
                        <span className="absolute left-0 top-0 w-full h-1/5 bg-black duration-300"></span>
                        <span className="absolute left-0  top-1/2 -translate-y-1/2 w-full h-1/5 bg-black duration-300"></span>
                        <span className="absolute left-0 bottom-0 w-full h-1/5 bg-black duration-300"></span>
                    </div>
                </div>
                <ul className="mobile-navbar flex gap-5 p-0 bg-white flex-col absolute top-[71px] w-full left-0 shadow-2xl z-40 h-0 overflow-hidden">
                <li className=""><a href='#hero' className="cursor-pointer">الرئيسية</a></li>
                <li className=""><a href='#status' className="cursor-pointer">إحصائياتنا</a></li>
                <li className=""><a href='#services' className="cursor-pointer">خدماتنا</a></li>
                <li className=""><a href='#skills' className="cursor-pointer">مميزاتنا</a></li>
                <li className=""><a href='#companies' className="cursor-pointer">الشركاء</a></li>
                <li className=""><a href='#contact' className="cursor-pointer">التواصل</a></li>
            </ul>
            </div>

        </>
);
};

export default NavBar;