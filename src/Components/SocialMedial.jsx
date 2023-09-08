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
            <img
              className="cursor-pointer hover:scale-90 hover:shadow-md rounded-md"
              title="Github"
              // onClick={() =>
              //   (window.location.href = "https://github.com/Sagastein")
              // }
              onClick={() =>
                window.open("https://github.com/Sagastein", "_blank")
              }
              src={Github}
              alt=".."
            />
            <img
              onClick={() => (window.location.href = "https://figma.com/")}
              className="cursor-pointer hover:scale-90 hover:shadow-md rounded-md"
              title="Figma"
              src={Figma}
              alt=".."
            />
            <img
              className="cursor-pointer hover:scale-90 hover:shadow-md rounded-md"
              src={Gmail}
              title="Gmail"
              alt=".."
              onClick={() =>
                (window.location.href = "mail:ishimwe.sage.3@gmail.com")
              }
            />
            <img
              className="cursor-pointer hover:scale-90 hover:shadow-md rounded-md"
              src={Twitter}
              title="Twitter Profile"
              alt=".."
              onClick={() =>
                (window.location.href = "https://twitter.com/ishimwe_sage")
              }
            />
            <img
              className="cursor-pointer hover:scale-90 hover:shadow-md rounded-md"
              src={LinkedIn}
              title="LinkedIn"
              alt=".."
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/ishimwe-sage-7799091b2/")
              }
            />
            <img
              className="cursor-pointer hover:scale-90 hover:shadow-md rounded-md"
              src={Instragram}
              title="instagram"
              alt=".."
              onClick={() =>
                window.open("https://instagram.com/Sagastein_45", "_blank")
              }
            />
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default SocialMedial;
