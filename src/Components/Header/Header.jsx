/* eslint-disable react/prop-types */
import bgShadow from '../../icons/bg-shadow.png'
import bgCoin from '../../icons/coin.png'
import bgBanner from '../../icons/banner-main.png'
import bgLogo from '../../icons/logo.png'



const Header = ({ coinBalance, setCoinBalance, handlecCoin }) => {
  return (
    <section>
      <div className="w-screen md:w-[916px] lg:w-full mx-auto z-50 top-0 fixed backdrop-blur-lg bg-white/70">
        <div className="navbar lg:px-24 my-2 ">
          <div className="navbar-start">
            <img src={bgLogo} alt="" />
          </div>
          <div className="navbar-end gap-10 ">
            <div className="hidden lg:flex">
              <ul className="flex gap-7 opacity-75 font-semibold cursor-pointer">
                <li>
                  <a
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a>Fixture</a>
                </li>
                <li>
                  <a>Teams</a>
                </li>
                <li>
                  <a>Schedules</a>
                </li>
              </ul>
            </div>

            <div>
              <button className="btn  border-gray-200 text-[16px] lg:text-xl">
                {coinBalance} <span className='hidden lg:flex'></span>  <img src={bgCoin} alt="" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div  className=" my-28 mx-5 p-2 md:mx-auto w-full bg-black  items-center md:w-11/12  bg-cover   bg-no-repeat rounded-3xl md:h-[33.5rem]  h-[] lg:h-[33.5rem] mb-10" style={{backgroundImage:`url(${bgShadow})`}}>
        <div className=" flex flex-col justify-center items-center text-center h-full space-y-6 py-5">
          <div>
            <img src={bgBanner} alt="" />
          </div>
          <h1 className="text-white font-extrabold text-3xl lg:text-4xl">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <h3 className="font-bold text-2xl opacity-80 text-white">
            Beyond Boundaries Beyond Limits
          </h3>
          <div className="bg-black px-1 py-1 border rounded-lg border-lime-300">
            <button
              onClick={() => handlecCoin()}
              className="btn relative inline-block  rounded-md btn-primary bg-gradient-to-r from-pink-500  shadow-inne to-yellow-300 text-black font-bold"
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
