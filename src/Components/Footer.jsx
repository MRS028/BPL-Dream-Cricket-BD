const Footer = () => {
  return (
    <div className="items-center place-items-center">
<div  className="w-[996px] border-base-300  border  relative">
<nav className="space-y-3 text-center flex flex-col p-12">
          <h6 className="text-black font-bold text-3xl">Subscribe to our Newsletter</h6>
          <p className="text-black opacity-55">
          Get the latest updates and news right in your inbox!
          </p>
          <div className=" space-x-5 flex justify-center">
            <input
              type="text"
              placeholder="Enter Your Email."
              className="input input-bordered join-item"
            />
            <button className="btn bg-orange-400">Subscribe</button>
          </div>
        </nav>
  
</div>
        <div className=" absolute w-full h-[750px] bg-[#06091A]">
      <div className="pt-24 flex justify-center">
        <img src="src/icons/logo-footer.png" alt="" />
      </div>
      <footer className="lg:mx-20 grid grid-cols-3 justify-center text-base-content  p-12">
        <nav>
          <h6 className=" text-white pb-3 font-bold text-xl">About US</h6>
          <p className="text-white w-5/12 opacity-55 ">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>
        <nav className="grid text-white grid-rows-1">
          <h6 className="text-white font-bold text-xl">Quick Links</h6>
          <div className="opacity-55 px-5">
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Contact</li>
          </div>
        </nav>
        <nav className="space-y-3">
          <h6 className="text-white font-bold text-xl">Subscribe</h6>
          <p className="text-white opacity-55">
            Subscribe to our newsletter for the <br /> latest updates.
          </p>
          <div className="join">
            <input
              type="text"
              placeholder="Enter Your Email."
              className="input input-bordered join-item"
            />
            <button className="btn bg-orange-400 join-item">Subscribe</button>
          </div>
        </nav>
      </footer>
      <div className=" border border-slate-500 w-auto rounded-lg">
        <aside className="opacity-55 text-center text-white p-4">
          <p>
          @2024 PH B10A7 All Rights Reserved.
          </p>
        </aside>
      </div>
    </div>
    </div>
  );
};

export default Footer;
