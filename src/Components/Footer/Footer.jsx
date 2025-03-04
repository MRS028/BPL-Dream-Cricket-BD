import bgShadow from '../../icons/bg-shadow.png'
import logoFooter from '../../icons/logo-footer.png'
const Footer = () => {
  return (
    <section>
      <footer className="footer bg-[#06091A] flex flex-col items-center mt-[300px] relative pt-72">
        <section className="absolute bottom-[600px] md:bottom-[310px] lg:bottom-[310px] lg:border-2 lg:p-4 border-yellow-50 rounded-3xl mb-24 mt-32 mx-auto lg:w-[85%]">
        
          <div className="bg-white w-[350px] bg-cover bg-center h-[450px] lg:min-h-[400px] lg:flex flex-col items-center gap-12 py-28 rounded-3xl md:w-full lg:w-full text-center border" style={{backgroundImage:`url(${bgShadow})`}}>
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-3xl text-[#131313] font-bold pb-5">
                Subscribe to our Newsletter
              </h1>
              <p className="text-xl p-2 pb-5 lg:pb-0  text-[#131313B3] font-medium">
                Get the latest updates and news right in your inbox!
              </p>
            </div>
            <div className="flex gap-4 flex-col lg:flex-row items-center justify-center ">
              <label className="input  input-bordered flex items-center gap-2 lg:w-[480px]">
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter your email"
                />
              </label>
              <button onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    } className="btn btn-primary bg-gradient-to-r from-yellow-300 shadow-inner text-black to-pink-500 join-item border-none">
                Subscribe
              </button>
            </div>
          </div>
        </section>
        <img src={logoFooter} alt="" />



        <section className="footer lg:w-[85%] mx-auto justify-between items-center text-base-content px-10 pb-10 space-y-5">
          <nav className="text-[#FFFFFF99] w-72">
            <h6 className="font-bold text-white">About Us</h6>
            <p className="">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </nav>
          <nav className="text-[#FFFFFF99]">
            <h6 className="font-bold text-white">Quick Links</h6>
            <ul className="list-disc  pl-8">
              <li>
                <a className="link link-hover">Home</a>
              </li>
              <li>
                <a className="link link-hover">Service</a>
              </li>
              <li>
                <a className="link link-hover">About us</a>
              </li>
              <li>
                <a className="link link-hover">Contact</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h6 className="font-bold text-white">Subscribe</h6>
            <p className="text-[#FFFFFF99] w-72">
              Subscribe to our newsletter for the latest updates.
            </p>
            <fieldset className="form-control">
              <div className="join">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input w-56 input-bordered join-item"
                />
                <button onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    } className="btn btn-primary bg-gradient-to-r from-yellow-300 shadow-inner text-black to-pink-500 join-item border-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </nav>
        </section>
      </footer>
      <footer className="bg-[#06091A] pt-5 pb-6  text-center px-10 ">
        <p className=" text-[#FFFFFF99]">@2024 RiFAT All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Footer;
