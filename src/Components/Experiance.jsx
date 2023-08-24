import { motion } from "framer-motion";
import ecclipse from "../assets/Ellipse 1.svg";
function Experiance() {
  const Fronted = [
    {
      id: 1,
      item: "HTML 5",
      exprience: "Advanced",
    },
    {
      id: 2,
      item: "CSS 3",
      exprience: "Advanced",
    },
    {
      id: 3,
      item: "Figma",
      exprience: "Experienced",
    },
    {
      id: 4,
      item: "JavaScript",
      exprience: "Experienced",
    },
    {
      id: 5,
      item: "React JS",
      exprience: "Advanced",
    },
    {
      id: 6,
      item: "Next JS",
      exprience: "Intermediate",
    },
  ];
  const Bankend = [
    {
      id: 1,
      item: "Git",
      exprience: "Experienced",
    },
    {
      id: 2,
      item: "PostgreSQL",
      exprience: "Experienced",
    },
    {
      id: 3,
      item: "Node Js",
      exprience: "Advanced",
    },
    {
      id: 4,
      item: "Fast Api",
      exprience: "Intermediate",
    },
    {
      id: 5,
      item: "Mongo DB",
      exprience: "Intermediate",
    },
    {
      id: 6,
      item: "Prisma ORM",
      exprience: "Experienced",
    },
  ];
  return (
    <div className="space-y-4 min-h-screen pt-12">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-sm mx-auto text-darkgrey text-center"
      >
        Explore My
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center font-Fira my-6 text-5xl text-slate-900"
      >
        Experience
      </motion.h1>
      <section className="grid py-12   border gap-6 md:grid-cols-2">
        <aside className="border space-y-8 rounded-2xl p-2 px-4">
          <h1 className="text-center font-Inter  text-4xl">
            Frontend Development
          </h1>
          <article className="grid justify-center gap-x-6 gap-y-10 sm:grid-cols-2">
            {Fronted.map((exp) => (
              <div key={exp.id} className="flex gap-x-4 items-start">
                <img src={ecclipse} alt="alt" />
                <h2>
                  <span className="block font-Inter font-medium text-3xl">
                    {exp.item}
                  </span>
                  <span className="block text-darkgrey font-medium">
                    {exp.exprience}
                  </span>
                </h2>
              </div>
            ))}
          </article>
        </aside>
        <aside className="border space-y-8 rounded-2xl p-2 px-4">
          <h1 className="text-center font-Inter  text-4xl">
            Backend Development
          </h1>
          <article className="grid justify-center gap-x-6 gap-y-10 sm:grid-cols-2">
            {Bankend.map((exp) => (
              <div key={exp.id} className="flex gap-x-4 items-start">
                <img src={ecclipse} alt="alt" />
                <h2>
                  <span className="block font-medium text-3xl">{exp.item}</span>
                  <span className="block text-darkgrey font-medium">
                    {exp.exprience}
                  </span>
                </h2>
              </div>
            ))}
          </article>
        </aside>
      </section>
    </div>
  );
}

export default Experiance;
