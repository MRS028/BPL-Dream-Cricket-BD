const Banner = () => {
  return (
    <div className=" my-28 mx-24 bg-black items-center w-[1366px] bg-cover h-screen bg-[url('src/icons/bg-shadow.png')] bg-no-repeat rounded-3xl  lg:h-[33.5rem] mb-10">
      <div className=" flex flex-col justify-center items-center text-center h-full space-y-6 py-5">
        <div>
          <img src="src/icons/banner-main.png" alt="" />
        </div>
        <h1 className="text-white font-extrabold text-4xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <h3 className="font-bold text-2xl opacity-80 text-white">
          Beyond Boundaries Beyond Limits
        </h3>
        <div className="bg-black px-1 py-1 border rounded-lg border-lime-300">
          <button className="btn relative inline-block text-xl  rounded-md bg-[#E7FE29] text-black font-bold">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
