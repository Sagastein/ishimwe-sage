/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import { BiPhoneCall, BiSend } from "react-icons/bi";
import { useState, useRef } from "react"; // Import useState and useRef

function Contact() {
  // State variables for form inputs and errors
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Input references
  const fullNameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic for each input field
    const newErrors = {};
    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      fullNameRef.current.focus();
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
      emailRef.current.focus();
    }
    if (!subject.trim()) {
      newErrors.subject = "Subject is required";
      subjectRef.current.focus();
    }
    if (!message.trim()) {
      newErrors.message = "Message is required";
      messageRef.current.focus();
    }

    // If there are errors, update the state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If there are no errors, you can proceed with form submission
    // Add your code here to handle the form submission, e.g., sending data to a server.
  };

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
        {/* ... (other content) */}
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
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="border p-2 w-full outline-none text-darkgrey focus:border-2 rounded-sm focus:border-mainblue"
                type="text"
                name="full name"
                id="fullName"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                ref={fullNameRef}
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName}</p>
              )}
              <input
                className="border p-2 w-full outline-none text-darkgrey focus:border-2 rounded-sm focus:border-mainblue"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={emailRef}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div>
              <input
                className="border p-2 w-full outline-none text-darkgrey focus:border-2 rounded-sm focus:border-mainblue"
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                ref={subjectRef}
              />
              {errors.subject && (
                <p className="text-red-500">{errors.subject}</p>
              )}
            </div>
            <div>
              <textarea
                className="border p-2 w-full h-24 outline-none text-darkgrey focus:border-2 rounded-sm focus:border-mainblue"
                name="message"
                id="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ref={messageRef}
              />
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
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
