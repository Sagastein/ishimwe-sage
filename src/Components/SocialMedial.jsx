import Github from "../assets/Github.svg";
import Figma from "../assets/Figma.svg";
import Gmail from "../assets/Gmail.svg";
import Instragram from "../assets/Instagram.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import Twitter from "../assets/Twitter.svg";
import "../index.css";
function SocialMedial() {
  return (
    <section className="flex bg-lightgrey items-center rounded-2xl  border-slate-900  gap-x-4 py-2 my-6 px-4">
      <p className="text-slate-900 capitalize text-sm font-medium">
        Connect with me:
      </p>
      <div className="scroll-container border flex-1">
        <div className="flex w-[200%]  justify-between items-center horizontal-scroll ">
          <img className="cursor-pointer" src={Github} alt=".." />
          <img className="cursor-pointer " src={Figma} alt=".." />
          <img className="cursor-pointer " src={Gmail} alt=".." />
          <img className="cursor-pointer " src={Twitter} alt=".." />
          <img className="cursor-pointer " src={LinkedIn} alt=".." />
          <img className="cursor-pointer " src={Instragram} alt=".." />
          <img className="cursor-pointer" src={Github} alt=".." />
          <img className="cursor-pointer " src={Figma} alt=".." />
          <img className="cursor-pointer " src={Gmail} alt=".." />
          <img className="cursor-pointer " src={Twitter} alt=".." />
          <img className="cursor-pointer " src={LinkedIn} alt=".." />
          <img className="cursor-pointer " src={Instragram} alt=".." />
        </div>
      </div>
    </section>
  );
}

export default SocialMedial;
