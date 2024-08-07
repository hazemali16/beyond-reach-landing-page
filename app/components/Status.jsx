

const Status = () => {
  return (
  <div className="pt-40 w-10/12 grid grid-cols-3 gap-10 mx-auto max-lg:grid-cols-2 max-md:grid-cols-1 opacity-0 duration-500 translate-y-10 max-sm:w-11/12" id="status">
    <div className="flex justify-center flex-col items-center gap-5 shadow-lg rounded-md p-5">
    <i className="fa-regular fa-lightbulb fa-3x text-[var(--second-color)]"></i>
    <h3 className="text-xl text-[var(--first-color)] font-bold">خبرتنا</h3>
    <span className="text-2xl font-bold text-[var(--first-color)]">+<span data-num="9" className="state-num">0</span></span>
    </div>
    <div className="flex justify-center flex-col items-center gap-5 shadow-lg rounded-md p-5">
    <i className="fa-solid fa-rocket fa-3x text-[var(--second-color)]"></i>
    <h3 className="text-xl text-[var(--first-color)] font-bold">مشاريعنا الكبري</h3>
    <span className="text-2xl font-bold text-[var(--first-color)] ">+<span data-num="20" className="state-num">0</span></span>
    </div>
    <div className="flex justify-center flex-col items-center gap-5 shadow-lg rounded-md p-5">
    <i className="fa-solid fa-user-group fa-3x text-[var(--second-color)]"></i>
    <h3 className="text-xl text-[var(--first-color)] font-bold">عملائنا</h3>
    <span className="text-2xl font-bold text-[var(--first-color)]">+<span data-num="500" className="state-num">0</span></span>
    </div>
  </div>
);
};

export default Status;
