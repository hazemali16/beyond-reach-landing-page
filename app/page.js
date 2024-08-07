'use client'

import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { useEffect } from "react";
import Status from "./components/Status";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Companies from "./components/Companies";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    let navBar = document.querySelector(".navbar");
    let hero = document.querySelector("#hero");
    let status = document.querySelector("#status");
    let services = document.querySelector("#services");
    let skills = document.querySelector("#skills");
    let companies = document.querySelector("#companies");
    let contact = document.querySelector("#contact");
    let statusNums = document.querySelectorAll(".state-num");

    hero.classList.remove("opacity-0");
    hero.children[0].children[0].classList.remove("translate-y-[200px]");
    hero.children[0].children[1].classList.remove("translate-y-[200px]");

    navBar.classList.remove("-translate-y-full");

    const handleScroll = () => {
        if (window.scrollY >= status.offsetTop - 500) {
            status.classList.remove("opacity-0");
            status.classList.remove("translate-y-10");
            if (statusNums[0].innerHTML == "0") {
              statusNums.forEach((ele) => {

                let targetNum = parseInt(ele.dataset.num, 10);
                let currentNum = 0;

                let count = setInterval(() => {
                    currentNum++;
                    ele.innerHTML = currentNum;
                    if (currentNum == targetNum) {
                        clearInterval(count);
                    }
                }, 1000 / targetNum);
            });
            }
        }
        if (window.scrollY >= services.offsetTop - 500) {
          services.classList.remove("opacity-0");
          services.classList.remove("translate-y-10");
          services.children[0].children[0].classList.remove("translate-y-[200px]");
          services.children[0].children[1].classList.remove("translate-y-[200px]");
        }
        if (window.scrollY >= skills.offsetTop - 500) {
          skills.classList.remove("opacity-0");
          skills.classList.remove("translate-y-10");
          skills.children[0].children[0].classList.remove("translate-y-[200px]");
          skills.children[0].children[1].classList.remove("translate-y-[200px]");
          for (let index = 0; index < skills.children[1].children.length; index++) {
            skills.children[1].children[index].classList.remove("opacity-0")
            skills.children[1].children[index].classList.remove("translate-y-10")
          }
        }
        if (window.scrollY >= companies.offsetTop - 500) {
          companies.classList.remove("opacity-0");
          companies.classList.remove("translate-y-10");
          companies.children[0].children[0].classList.remove("translate-y-[200px]");
          companies.children[0].children[1].classList.remove("translate-y-[200px]");
          companies.children[1].classList.remove("opacity-0");
          companies.children[1].classList.remove("translate-y-10");
        }
        if (window.scrollY >= contact.offsetTop - 500) {
          contact.classList.remove("opacity-0");
          contact.classList.remove("translate-y-10");
        }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return (
    <div>
      <div className="justify-center items-center fixed bg-[#00000054] w-full h-full top-0 left-0 z-50 hidden p-5" id="alertBox">
        <div className="bg-white rounded-md shadow-md p-10 text-2xl font-bold text-[var(--second-color)]">
          <div>رسالتكم وصلت ، وسنقوم بالتواصل معكم قريباً</div>
        <div className="bg-[var(--first-color)] text-white px-5 py-2 rounded-md w-fit mt-10 mx-auto cursor-pointer text-lg" id="closeAlert" onClick={(e) => {
          e.target.parentElement.parentElement.classList.remove("flex")
          e.target.parentElement.parentElement.classList.add("hidden")
        }}>حسناً</div>
        </div>
      </div>
          <NavBar />
          <Hero />
          <Status />
          <Services />
          <Skills />
          <Companies />
          <Contact />
          <Footer />
    </div>
  );
}
