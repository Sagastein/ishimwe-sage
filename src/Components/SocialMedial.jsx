import Github from "../assets/Github.svg";
import Figma from "../assets/Figma.svg";
import Gmail from "../assets/Gmail.svg";
import Instragram from "../assets/Instagram.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import Twitter from "../assets/Twitter.svg";
import { Fade } from "react-awesome-reveal";
function SocialMedial() {
  return (
    <Fade cascade fraction={1}>
      <section className="flex bg-lightgrey items-center rounded-2xl  border-slate-900  gap-x-4 py-2 my-6 px-4">
        <p className="text-slate-900 hidden md:block capitalize text-sm font-medium">
          Connect with me:
        </p>
        <div className="scroll-container flex-1">
          <div className="flex   justify-between items-center horizontal-scroll ">
            <img className="cursor-pointer hover:scale-90 hover:shadow-md rounded-md" src={Github} alt=".." />
            <img className="cursor-pointer hover:scale-90 hover:shadow-md rounded-md" src={Figma} alt=".." />
            <img className="cursor-pointer hover:scale-90 hover:shadow-md rounded-md" src={Gmail} alt=".." />
            <img className="cursor-pointer hover:scale-90 hover:shadow-md rounded-md" src={Twitter} alt=".." />
            <img className="cursor-pointer hover:scale-90 hover:shadow-md rounded-md" src={LinkedIn} alt=".." />
            <img className="cursor-pointer hover:scale-90 hover:shadow-md rounded-md" src={Instragram} alt=".." />
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default SocialMedial;
