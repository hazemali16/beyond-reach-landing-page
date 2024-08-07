import Image from "next/image";
import hero from "../images/hero.png"


const Hero = () => {
  return (
  <div className="pt-32 bg-[var(--first-color)] h-screen flex items-center justify-center gap-20 opacity-0 duration-500" id="hero">
    <div className="w-2/5 overflow-hidden max-md:w-11/12">
        <h1 className="text-4xl mb-10 text-[var(--second-color)] font-bold duration-700 translate-y-[200px] delay-700 max-sm:text-3xl max-sm:mb-5">ثورة التسويق الأدائي</h1>
        <p className="text-white text-lg leading-relaxed duration-700 translate-y-[200px] delay-1000 max-sm:text-base">حلول تسويقية مبتكرة تعتمد على البيانات الضخمة لتحقيق أفضل النتائج يوند ريتش هي وكالة تسويق تعمل على تحويل تحديات التسويق الرقمي إلى فرص نمو ونجاح ونتائج موثوقة
        اعتمادا على تسويقنا الأدائي.</p>
    </div>
    <Image className="w-2/5 max-md:hidden" src={hero} alt="hero" />
  </div>
);
};

export default Hero;
