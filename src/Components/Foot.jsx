import { FaMedium, FaLinkedinIn, FaTwitter, FaFacebook } from "react-icons/fa";
function Foot() {
  return (
    <footer className="py-6 bg-gradient-to-b from-slate-900 from-60% via-slate-700 to-cyan-500/80">
      <main className="w-11/12 mx-auto">
        <section className="sm:flex flex-wrap w-full gap-4 grid justify-between">
          <div className="flex gap-4">
            <p className="p-2 px-4 text-2xl rounded-md font-bold text-white bg-mainblue">
              S
            </p>
            <div>
              <p className="text-white font-medium text-xl">Ishimwe Sage</p>
              <p className="text-lightgrey font-light text-xs">
                Software Enginner
              </p>
            </div>
          </div>
          <div className="hidden md:flex  gap-6">
            <a className="text-white" href="#">
              Home
            </a>
            <a className="text-white" href="#">
              About
            </a>
            <a className="text-white" href="#">
              Services
            </a>
            <a className="text-white" href="">
              Contact
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <p className="bg-slate-800/75 hover:scale-90 cursor-pointer p-4 rounded-md group">
              <FaFacebook className="text-white text-lg group-hover:text-mainblue" />
            </p>
            <p className="bg-slate-800/75 hover:scale-90 cursor-pointer p-4 rounded-md group">
              <FaTwitter className="text-white text-lg group-hover:text-mainblue" />
            </p>
            <p className="bg-slate-800/75 hover:scale-90 cursor-pointer p-4 rounded-md group">
              <FaLinkedinIn className="text-white text-lg group-hover:text-mainblue" />
            </p>
            <p className="bg-slate-800/75 hover:scale-90 cursor-pointer p-4 rounded-md group">
              <FaMedium className="text-white text-lg group-hover:text-mainblue" />
            </p>
          </div>
        </section>
        <hr className="h-4 my-4" />
        <p className="text-center text-darkgrey">© 2023 Ishimwe Sage</p>
      </main>
    </footer>
  );
}

export default Foot;
