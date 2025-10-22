import React, { useEffect, forwardRef, useState } from "react";
import { motion, useAnimation } from "motion/react";
import type { Ref } from "react";
import { Send } from "lucide-react";

type props = {
  id: string;
  currentVisibleSection: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

const Contact = forwardRef((props: props, ref: Ref<HTMLDivElement | null>) => {
  //On Scroll Animation
  const motionVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const mainControls = useAnimation();
  useEffect(() => {
    if (props.currentVisibleSection === "contact") {
      mainControls.start("visible");
    }
  }, [props.currentVisibleSection, mainControls]);

  // add tn phone numebr code to phone input
  const updatePhone = () => {
    const phoneInput: HTMLInputElement | null = document.getElementById(
      "phone",
    ) as HTMLInputElement;
    if (phoneInput) {
      phoneInput.value = "+216 ";
    }
  };

  //handling form data retreving
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //*API
  // fetch api that submit Contact form
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Cannot Submit Form!");
      }
      props.setMessage(
        "It will be a pleasure working with you" + String(FormData.name),
      );
    } catch (err) {
      if (err instanceof Error) {
        props.setError("Form is not submitted check connection");
      }
    }
  };

  return (
    <section
      id={props.id}
      ref={ref}
      className="flex min-h-screen w-full flex-col items-center justify-center md:p-20"
    >
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl dark:text-white">
        Contact
      </h2>
      <motion.div
        ref={ref}
        variants={motionVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <form onSubmit={submitForm} className="mb-4 w-full rounded-2xl p-5">
          <div className="mb-4 w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium dark:text-white"
            >
              <div className="flex items-center">
                <p className="roboto-regular ml-1">NAME</p>
              </div>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleFormChange}
              className="roboto-regular mt-2 w-full rounded-md border border-gray-500 px-5 py-2 text-black focus:border-none focus:ring-2 focus:ring-sky-500 focus:outline-none dark:bg-slate-800 dark:text-white dark:placeholder:text-gray-200"
              placeholder="Enter your Name"
              value={formData.name}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium dark:text-white"
            >
              <p className="roboto-regular ml-1">PHONE NUMBER</p>
            </label>
            <div className="flex items-center justify-center">
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={handleFormChange}
                className="roboto-regular mt-2 w-full rounded-md border border-gray-500 px-5 py-2 text-black focus:border-none focus:ring-2 focus:ring-sky-500 focus:outline-none dark:bg-slate-800 dark:text-white dark:placeholder:text-gray-200"
                required
                placeholder="+216"
                value={formData.phone}
                onClick={updatePhone}
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium dark:text-white"
            >
              <p className="roboto-regular ml-1">EMAIL</p>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              className="mt-2 w-full rounded-md border border-gray-500 px-5 py-2 text-black focus:border-none focus:ring-2 focus:ring-sky-500 focus:outline-none dark:bg-slate-800 dark:text-white dark:placeholder:text-gray-200"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium dark:text-white"
            >
              <p className="roboto-regular ml-1">MESSAGE</p>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              rows={4}
              className="roboto-regular mt-2 max-h-28 w-full rounded-md border border-gray-500 px-5 py-2 text-black focus:border-none focus:ring-2 focus:ring-sky-500 focus:outline-none dark:bg-slate-800 dark:text-white dark:placeholder:text-gray-200"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="mb-5">
            <label
              htmlFor=""
              className="roboto-regular text-center dark:text-white"
            >
              Leave me a suggestion or a project idea or contact me if you want
              us to work together
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-sky-500 px-4 py-2 text-white hover:bg-sky-600 focus:outline-none dark:bg-sky-700"
          >
            <p className="flex flex-row items-center justify-center">
              <Send className="mr-1" /> Submit
            </p>
          </button>
        </form>
      </motion.div>
    </section>
  );
});

Contact.displayName = "Form";
export default Contact;
