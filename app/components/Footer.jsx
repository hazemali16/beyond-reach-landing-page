import Image from "next/image";
import logo from '../images/logo.png'

const Footer = () => {
  return (
  <div className="bg-white footer py-10">
    <div className="w-10/12 max-sm:w-11/12  mx-auto flex justify-between items-center max-sm:flex-col max-sm:gap-10">
    <Image src={logo} alt="logo" className="w-40 max-sm:w-30" />
    <div className="">
        <h3>أهم الروابط :</h3>
        <div className="flex items-center justify-center gap-5 mt-5">
            <a className="bg-[var(--second-color)] text-white py-2 px-3 rounded-md" href="https://www.instagram.com/beyondreach.0?igsh=YmwzdWFwcXQwZGRh">
            <i className="fa-brands fa-instagram"></i>
            </a>
            <a className="bg-[var(--second-color)] text-white py-2 px-3 rounded-md" href="https://x.com/beyondreach_sa?s=21&t=i2bg08Zjod83CNiYwP68pg">
            <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a className="bg-[var(--second-color)] text-white py-2 px-3 rounded-md" href="https://www.linkedin.com/company/beyond-reach-creative/">
            <i className="fa-brands fa-linkedin"></i>
            </a>
        </div>
    </div>
    </div>
  </div>
);
};

export default Footer;
