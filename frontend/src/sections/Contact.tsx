import { useEffect, forwardRef } from "react";
import { motion, useAnimation } from "motion/react";
import type { Ref } from "react";
import { Send } from "lucide-react";

const Contact = forwardRef(({ id, currentVisibleSection }:props, ref: Ref<HTMLDivElement | null>) => {
  //On Scroll Animation
  const motionVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const mainControls = useAnimation();
  useEffect(() => {
    if (currentVisibleSection == "contact") {
      mainControls.start("visible");
    }
  }, [currentVisibleSection, mainControls]);

  //* add tn code
  const updatePhone = () => {
    const phoneInput: HTMLInputElement | null = document.getElementById("phone") as HTMLInputElement;
    if (phoneInput) {
      phoneInput.value = "+216 ";
    }
  };

  return (
    <section
      id={id}
      ref={ref}
      className="flex flex-col justify-center items-center bg-slate-100 dark:bg-gray-900  w-full h-screen md:p-20"
    >
      <motion.div
        ref={ref}
        variants={motionVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <form
          action="https://portfolio-8dam.onrender.com/suggestion"
          method="post"
          className="w-full  p-10 rounded-2xl mb-4 "
        >
          <div className="mb-4 w-full">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium dark:text-white"
            >
              <div className="flex items-center">
                <p className="ml-1 roboto-regular">NAME</p>
              </div>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-5 py-2 mt-2 border border-gray-500 rounded-md focus:outline-none  focus:border-none 
                focus:ring-2 focus:ring-sky-500 roboto-regular dark:bg-slate-800 
              dark:placeholder:text-gray-200 text-black dark:text-white"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium dark:text-white"
            >
              <p className="ml-1 roboto-regular">PHONE NUMBER</p>
            </label>
            <div className="flex items-center justify-center">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-5 py-2 mt-2 border border-gray-500 rounded-md focus:outline-none  
                focus:border-none focus:ring-2 focus:ring-sky-500 roboto-regular dark:bg-slate-800
                dark:placeholder:text-gray-200 text-black  dark:text-white"
                required
                placeholder="+216"
                onClick={updatePhone}
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium dark:text-white"
            >
              <p className="ml-1 roboto-regular">EMAIL</p>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-5 py-2 mt-2 border border-gray-500 rounded-md focus:outline-none  
                focus:border-none  focus:ring-2 focus:ring-sky-500 dark:bg-slate-800 dark:placeholder:text-gray-200
                text-black"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium dark:text-white"
            >
              <p className="ml-1 roboto-regular">MESSAGE</p>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-5 py-2 mt-2 border border-gray-500 rounded-md focus:outline-none focus:border-none
              focus:ring-2 roboto-regular focus:ring-sky-500 dark:bg-slate-800 
              dark:placeholder:text-gray-200 text-black  dark:text-white max-h-28"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="mb-5">
            <label
              htmlFor=""
              className="dark:text-white roboto-regular text-center"
            >
              Leave me a suggestion or a project idea or contact me if you want
              us to work together
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-sky-700 rounded-md hover:bg-sky-600 focus:outline-none"
          >
            <p className="flex flex-row items-center justify-center">
              <Send className="mr-1 " /> Submit
            </p>
          </button>
        </form>
      </motion.div>
    </section>
  );
});

type props = {
  id: string;
  currentVisibleSection : string;
}

Contact.displayName = "Form";
export default Contact;
