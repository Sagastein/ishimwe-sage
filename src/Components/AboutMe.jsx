import { LiaCertificateSolid } from "react-icons/lia";
import { LuBookMarked } from "react-icons/lu";
function AboutMe() {
  return (
    <div id="about" className="min-h-[80dvh]">
      <h1 className="my-6 font-Fira text-center text-5xl">About Me</h1>
      <section className="grid sm:flex gap-x-32">
        <img
          className="border  hover:drop-shadow-2xl hover:grayscale backdrop-blur cursor-pointer"
          src="SagaAboutMe.png"
          alt="Me"
        />
        <article>
          <section className="grid lg:grid-cols-2 gap-6 py-12">
            <div className="rounded-lg shadow-lg border h-64  block">
              <div className="flex justify-center pt-5">
                <LiaCertificateSolid className="text-center text-5xl" />
              </div>
              <h1 className="font-Cardo text-3xl font-semibold text-center">
                Experience
              </h1>
              <p className="whitespace-pre-wrap w-min my-2 text-center mx-auto">
                2+ years<br></br> Frontend<br></br>Development
              </p>
            </div>
            <div className="rounded-lg shadow-lg border h-64 block">
              <div className="flex justify-center pt-5">
                <LuBookMarked className="text-center text-5xl" />
              </div>
              <h1 className="font-Cardo text-3xl font-semibold text-center">
                Education
              </h1>
              <p className="whitespace-pre-wrap w-min my-2 text-center mx-auto">
                B.Sc. Bachelors Degree
              </p>
            </div>
          </section>
          <p className="my-8 text-darkgrey">{`
I'm a passionate software developer with
 a knack for problem-solving and a curiosity
  that drives me to explore new technologies.
   With a strong foundation in coding and
    a love for creating practical solutions,
     I'm dedicated to turning ideas into functional
     software`}</p>
        </article>
      </section>
    </div>
  );
}

export default AboutMe;
