
const Navbar = () => {
    return (
        <div className="w-full mx-auto z-50 top-0 fixed backdrop-blur-lg bg-white/70">
      <div className="navbar lg:px-24 my-2 ">
        <div className="navbar-start">
          <img src="/src/icons/logo.png" alt="" />
                  </div>
 <div className="navbar-end gap-10 ">
      <div className="hidden lg:flex">
      <ul className="flex gap-7 opacity-75 font-semibold">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
        <li><a>Teams</a></li>
        <li><a>Schedules</a></li>
      </ul>
      </div>
        
          <div><button className="btn border-gray-300 text-xl">0 Coin  </button></div>
        </div>
      </div>
    </div>
    );
};

export default Navbar;