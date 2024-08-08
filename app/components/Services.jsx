import Image from "next/image";
import services_image from "../images/marketing.png"

const Services = () => {
  return (
  <div className="w-10/12 flex justify-center gap-12 items-center mx-auto opacity-0 duration-500 translate-y-10 max-sm:w-11/12 max-lg:flex-col-reverse pt-40" id="services">
    <div className="w-2/5 overflow-hidden max-lg:w-full">
    <h2 className="text-3xl mb-7 font-bold text-[var(--second-color)] duration-500 translate-y-[200px] delay-300 max-sm:text-2xl max-sm:mb-5">التسويق الأدائي</h2>
    <p className="text-lg leading-relaxed duration-700 translate-y-[200px] delay-700 max-sm:text-base">
    نحن في بيوند ريتش نعتبر التسويق الأدائي هو قلب خدماتنا.
باستخدام استراتيجيات مبتكرة وتحليالت دقيقة، نحقق نتائج قابلة للقياس ونقدم عائد استثماري ملموس من الحملات
التسويقية الأدائية الفريدة.
    </p>
    </div>
    <div className="w-2/5 max-lg:w-full">
    <Image src={services_image} alt="services" />
    </div>
  </div>
);
};

export default Services;
