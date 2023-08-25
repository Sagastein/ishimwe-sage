/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import { BiPhoneCall, BiSend } from "react-icons/bi";
function Contact() {
  return (
    <div id="contact" className="space-y-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center my-6 font-Fira text-5xl text-slate-900"
      >
        Contact
      </motion.h1>
      <section className="grid md:grid-cols-2 gap-x-28">
        <aside className=" space-y-4 p-4">
          <h1 className="text-4xl font-Barlow font-medium">
            Connect with Me: Let's Bring Ideas to Life
          </h1>
          <p className="font-Barlow">
            Feel free to reach out for projects, partnerships, or a friendly
            chat. If you're around Kicukiro, let's meet up and explore the
            possibilities over a cup of coffee!
          </p>
          <section className="border bg-[#D9D9D9] rounded-md p-4 gap-4 flex items-center">
            <MdOutlineMail className="text-4xl" />
            <div>
              <p className="text-sm font-medium text-[#132238]">Chat with me</p>
              <a
                href="mail:ishimwe.sage.3@gmail.com"
                className="text-lg hover:text-mainblue font-medium"
              >
                Ishimwe.Sage.3@Gmail.com
              </a>
            </div>
          </section>
          <section className="border bg-[#D9D9D9] rounded-md p-4 gap-4 flex items-center">
            <BiPhoneCall className="text-4xl" />
            <div>
              <p className="text-sm font-medium text-[#132238]">Call Me</p>
              <a
                href="tel:250791786095"
                className="text-lg hover:text-mainblue tracking-wide font-medium"
              >
                +250791786095
              </a>
            </div>
          </section>
        </aside>
        <aside className="space-y-4 p-4">
          <h1 className="text-2xl font-Barlow font-medium">
            Ready to Collaborate? Let's Connect
          </h1>
          <p className="font-Barlow">
            Feel free to reach out for any inquiries, project proposals, or just
            to say hello. Your message is important to me.
          </p>
          <form className="space-y-4" action="." method="post">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="border p-2 w-full outline-none text-darkgrey focus:border-2 rounded-sm focus:border-mainblue"
                type="text"
                name="full name"
                id="fullName"
                placeholder="Full Name"
              />
              <input
                className="border p-2 w-full outline-none text-darkgrey focus:border-2 rounded-sm focus:border-mainblue"
                type="email"
                name="full name"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div>
              <input
                className="border p-2 w-full outline-none text-darkgrey focus:border-2 rounded-sm focus:border-mainblue"
                type="text"
                name="subject"
                id="email"
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                className="border p-2 w-full h-24 outline-none text-darkgrey focus:border-2 rounded-sm focus:border-mainblue"
                name="message"
                id="message"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="py-2 border px-4 rounded-md bg-mainblue hover:opacity-80 text-white font-medium">
              Let's Connect <BiSend className="inline mx-2" />{" "}
            </button>
          </form>
        </aside>
      </section>
    </div>
  );
}

export default Contact;
