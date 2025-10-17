import React, { useEffect, forwardRef, useState } from "react";
import { motion, useAnimation } from "motion/react";
import type { Ref } from "react";
import { Send } from "lucide-react";

type props = {
  id: string;
  currentVisibleSection : string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const Contact = forwardRef((props:props, ref: Ref<HTMLDivElement | null>) => {
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
    const phoneInput: HTMLInputElement | null = document.getElementById("phone") as HTMLInputElement;
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

  const handleFormChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name, value} = e.target;
    setFormData((prev) =>({...prev, [name]: value}));
  }

  //*API
  // fetch api that submit Contact form
  const submitForm = async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/contact',{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        throw new Error("Cannot Submit Form!");
      }
      props.setMessage("It will be a pleasure working with you"+String(FormData.name))
    } catch (err) {
      if (err instanceof Error) {
        props.setError("Form is not submitted check connection");
      }
    }
  }

  return (
    <section
      id={props.id}
      ref={ref}
      className="flex flex-col justify-center items-center w-full min-h-screen md:p-20"
      
    >
      <h2 
        className="text-3xl font-bold tracking-tight 
        md:text-4xl dark:text-white"
      >
        Contact 
      </h2>
      <motion.div
        ref={ref}
        variants={motionVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <form
          onSubmit={submitForm}
          className="w-full  p-5 rounded-2xl mb-4 "
        >
          <div className="mb-4 w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium dark:text-white"
            >
              <div className="flex items-center">
                <p className="ml-1 roboto-regular">NAME</p>
              </div>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleFormChange}
              className="w-full px-5 py-2 mt-2 border border-gray-500 rounded-md 
              focus:outline-none  focus:border-none focus:ring-2 focus:ring-sky-500
              roboto-regular dark:bg-slate-800 dark:placeholder:text-gray-200
              text-black dark:text-white"
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
              <p className="ml-1 roboto-regular">PHONE NUMBER</p>
            </label>
            <div className="flex items-center justify-center">
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={handleFormChange}
                className="w-full px-5 py-2 mt-2 border border-gray-500 rounded-md focus:outline-none  
                focus:border-none focus:ring-2 focus:ring-sky-500 roboto-regular dark:bg-slate-800
                dark:placeholder:text-gray-200 text-black  dark:text-white"
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
              <p className="ml-1 roboto-regular">EMAIL</p>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              className="w-full px-5 py-2 mt-2 border border-gray-500 rounded-md focus:outline-none  
              focus:border-none  focus:ring-2 focus:ring-sky-500 dark:bg-slate-800
              dark:placeholder:text-gray-200 text-black dark:text-white"
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
              value={formData.message}
              onChange={handleFormChange}
              rows={4}
              className="w-full px-5 py-2 mt-2 border border-gray-500 rounded-md 
              focus:outline-none focus:border-none focus:ring-2 roboto-regular
              focus:ring-sky-500 dark:bg-slate-800 dark:placeholder:text-gray-200
              text-black  dark:text-white max-h-28"
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
            className="w-full px-4 py-2 text-white bg-sky-500 dark:bg-sky-700
            rounded-md hover:bg-sky-600 focus:outline-none"
          >
            <p 
              className="flex flex-row items-center justify-center"
            >
              <Send className="mr-1 " /> Submit
            </p>
          </button>
        </form>
      </motion.div>
    </section>
  );
});

Contact.displayName = "Form";
export default Contact;
