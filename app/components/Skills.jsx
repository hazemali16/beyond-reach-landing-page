
const Skills = () => {
  return (
  <div className="py-40 w-10/12 max-sm:w-11/12 mx-auto opacity-0 duration-500 translate-y-10" id="skills">
    <div className="overflow-hidden mx-auto text-center w-[500px] max-md:w-full">
    <h2 className="text-3xl mb-7 font-bold text-[var(--second-color)] duration-500 translate-y-[200px] delay-700 max-sm:text-2xl max-sm:mb-5">
        لماذا تختار بيوند ريتش؟
    </h2>
    <p className="text-lg leading-relaxed duration-700 translate-y-[200px] delay-700 max-sm:text-base">
    بيوند ريتش تعمل على تحقيق الأهداف التسويقية، وتحقيق نتائج مستدامة وفعالة تتفوق على المنافسين وتتمثل ميزتنا التنافسية في التسويق الأدائي الذي يقوم على:
    </p>
    </div>
    <div className="grid grid-cols-3 gap-10 mt-20 max-lg:grid-cols-2 max-sm:grid-cols-1">
    <div className="flex justify-center flex-col items-center gap-5 shadow-lg rounded-md p-5 opacity-0 translate-y-10 duration-300 delay-[1.4s]">
        <div className="bg-slate-100 flex justify-center items-center rounded-full text-[var(--second-color)] p-5">
        <i className="fa-solid fa-server fa-2x"></i>
        </div>
        <h3>بيانات سابقة دقيقة</h3>
    </div>
    <div className="flex justify-center flex-col items-center gap-5 shadow-lg rounded-md p-5 opacity-0 translate-y-10 duration-300 delay-[1.7s]">
        <div className="bg-slate-100 flex justify-center items-center rounded-full text-[var(--second-color)] p-5">
        <i className="fa-solid fa-user-check fa-2x"></i>
        </div>
        <h3>ممارسات مخصصة</h3>
    </div>
    <div className="flex justify-center flex-col items-center gap-5 shadow-lg rounded-md p-5 opacity-0 translate-y-10 duration-300 delay-[2s]">
        <div className="bg-slate-100 flex justify-center items-center rounded-full text-[var(--second-color)] p-5">
        <i className="fa-solid fa-database fa-2x"></i>
        </div>
        <h3>توقعات دقيقة مبنية على البيانات </h3>
    </div>
    <div className="flex justify-center flex-col items-center gap-5 shadow-lg rounded-md p-5 opacity-0 translate-y-10 duration-300 delay-[2.3s]">
        <div className="bg-slate-100 flex justify-center items-center rounded-full text-[var(--second-color)] p-5">
        <i className="fa-solid fa-ranking-star fa-2x"></i>
        </div>
        <h3>تسويق مرتكز على النتائج</h3>
    </div>
    <div className="flex justify-center flex-col items-center gap-5 shadow-lg rounded-md p-5 opacity-0 translate-y-10 duration-300 delay-[2.6s]">
        <div className="bg-slate-100 flex justify-center items-center rounded-full text-[var(--second-color)] p-5">
        <i className="fa-regular fa-file-lines fa-2x"></i>
        </div>
        <h3>محتوى أدائي موجه</h3>
    </div>
    <div className="flex justify-center flex-col items-center gap-5 shadow-lg rounded-md p-5 opacity-0 translate-y-10 duration-300 delay-[2.9s]">
        <div className="bg-slate-100 flex justify-center items-center rounded-full text-[var(--second-color)] p-5">
        <i className="fa-solid fa-people-group fa-2x"></i>
        </div>
        <h3>فريق سعودي</h3>
    </div>
    </div>
  </div>
);
};

export default Skills;
