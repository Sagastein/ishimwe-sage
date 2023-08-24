import { FiCommand, FiLayout, FiShield, FiTerminal } from "react-icons/fi";
import { motion } from "framer-motion";
function Services() {
  const data = [
    {
      id: "01",
      icon: <FiCommand className="text-2xl"></FiCommand>,
      item: "Ui/UX Design",
      Description:
        "Crafting captivating user experiences, I design beautiful UIs using Figma, blending aesthetics and functionality for seamless interactions",
      css: "self-start",
    },
    {
      id: "02",
      icon: <FiLayout className="text-2xl" />,
      item: "Fronted  Development",
      Description:
        "Empowering digital experiences, I use React.js to create lightning-fast apps with engaging interfaces and smooth user interactions.",
      css: "self-end",
    },
    {
      id: "03",
      icon: <FiTerminal className="text-2xl" />,
      item: "Backed  Development",
      Description:
        "Building strong foundations, I develop secure backend systems with Django, Node.js, and FastAPI, driving the functionality of applications.",
      css: "self-start",
    },
    {
      id: "04",
      icon: <FiShield className="text-2xl" />,
      item: "Penetration Testing",
      Description:
        "Ensuring digital security, I specialize in penetration testing, using tools like Burp Suite and Beef to rigorously assess and enhance web application defenses.",
      css: "self-end",
    },
  ];
  return (
    <div className="space-y-4 w-full min-h-full">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center font-Fira text-5xl text-slate-900"
      >
        Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-sm mx-auto text-darkgrey text-center"
      >
        Merging Vision with Function: Crafting Experiences, Code, and Security
      </motion.p>
      <section className="grid  gap-6 sm:grid-cols-2 md:grid-cols-4 md:h-72 ">
        {data.map((service) => (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            className={`h-64 shadow-md overflow-clip group cursor-pointer border p-4 ${service.css}`}
          >
            <div className="flex justify-between">
              <p>{service.icon}</p>
              <p className="text-3xl">{service.id}</p>
            </div>
            <motion.h1
              className="text-center font-Cardo font-bold my-2 text-2xl text-slate-900"
              whileHover={{ color: "#1F11FF" }}
            >
              {service.item}
            </motion.h1>
            <motion.p
              className="text-start max-w-xs mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {service.Description}
            </motion.p>
          </motion.article>
        ))}
      </section>
    </div>
  );
}

export default Services;
