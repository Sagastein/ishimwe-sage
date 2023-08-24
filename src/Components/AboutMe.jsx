function AboutMe() {
  return (
    <div className="min-h-[80dvh]">
      <h1 className="my-6 font-Fira text-center text-5xl">About Me</h1>
      <section className="grid sm:flex gap-x-32 border">
        <img
          className="border  hover:drop-shadow-2xl hover:grayscale backdrop-blur cursor-pointer"
          src="SagaAboutMe.png"
          alt="Me"
        />
        <article>
          <section className="grid border lg:grid-cols-2 gap-6">
            <div className="rounded-md border h-72  block">a</div>
            <div className="rounded-md border h-72 block">b</div>
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
