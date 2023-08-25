import SocialMedial from "./SocialMedial";
import { Slide, Bounce } from "react-awesome-reveal";
function Banner() {
  return (
    <main className="border  min-h-screen">
      <aside className="sm:flex">
        <Slide>
          <div className="">
            <img className="mx-auto" src="SagaBanner.png" alt="sagabanner" />
          </div>
        </Slide>
        <section className="my-12 flex flex-col">
          <div className="flex pl-12 gap-x-4 items-center">
            <span className="w-16 h-1 block bg-mainblue"></span>
            <div className="flex text-mainblue font-medium flex-col">
              <Bounce>
                <span>Software</span>
              </Bounce>
              <span>Developer, Designer</span>
            </div>
          </div>
          <article className="pl-12">
            <p className=" text-4xl font-Inter md:text-7xl">Hello, I`m</p>
            <p className="text-4xl md:text-7xl">Ishimwe Sage</p>
            <p className="my-2 max-w-md font-medium text-darkgrey">
              {`Hello, I'm passionate about technology, AI, Penetration Testing, and
            freelancing my skills for real-world impact`}
            </p>
            <div className="flex md:mt-12 gap-x-6">
              <Bounce>
                <button className="bg-slate-900 hover:bg-transparent hover:text-slate-900 hover:border hover:border-slate-900 text-xs px-4 py-3 rounded text-white font-medium">
                  Get In Touch
                </button>
              </Bounce>
              <button className="text-xs border hover:bg-slate-900 hover:text-white px-4 py-2 font-medium border-slate-900 rounded">
                View My Resume
              </button>
            </div>
          </article>
        </section>
      </aside>
      <SocialMedial />
    </main>
  );
}

export default Banner;
