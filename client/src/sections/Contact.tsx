import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";

type Props = {
  currentVisibleSection: string;
  setMessage: (msg: string) => void; 
  setError: (err: string) => void;
};

export default function Contact({setMessage, setError }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submission failed");
      
      setMessage(`Thanks ${formData.name}, I'll get back to you soon!`);
      setFormData({ name: "", phone: "", email: "", message: "" }); // Reset form
    } catch (err) {
      setError("Server connection error. Please try again later.");
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="h-[1px] w-8 bg-sky-500/50" />
          <span className="text-[10px] font-black tracking-[0.4em] text-sky-500 uppercase">
            04. Get In Touch
          </span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Let's <span className="text-sky-500">Collaborate</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Info */}
        <div className="space-y-8">
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
            I’m always looking for new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
          
          <div className="space-y-4">
            {[
              { icon: <Mail size={18}/>, label: "Email", value: "aidi360omar@gmail.com" },
              { icon: <Phone size={18}/>, label: "Phone", value: "+216 28431109" },
              { icon: <MapPin size={18}/>, label: "Location", value: "Kairouan, Tunisia" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                <div className="text-sky-500">{item.icon}</div>
                <span className="text-[13px] font-bold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.form 
          onSubmit={submitForm}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Name</label>
              <input 
                name="name" 
                value={formData.name} 
                onChange={handleFormChange} 
                className="w-full bg-slate-100/50 dark:bg-slate-800/40 border-none rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-sky-500 outline-none transition-all"
                placeholder="foulen" 
                required 
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone</label>
              <input 
                name="phone" 
                value={formData.phone} 
                onChange={handleFormChange} 
                className="w-full bg-slate-100/50 dark:bg-slate-800/40 border-none rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-sky-500 outline-none transition-all"
                placeholder="+216" 
                required 
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
            <input 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleFormChange} 
              className="w-full bg-slate-100/50 dark:bg-slate-800/40 border-none rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-sky-500 outline-none transition-all"
              placeholder="name@email.com" 
              required 
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleFormChange} 
              rows={4}
              className="w-full bg-slate-100/50 dark:bg-slate-800/40 border-none rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-sky-500 outline-none transition-all resize-none"
              placeholder="Tell me about your project..." 
              required 
            />
          </div>

          <button
            type="submit"
            className="group w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold text-[12px] uppercase tracking-widest py-3 rounded-lg transition-all active:scale-[0.98]"
          >
            Send Message <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.form>
      </div>
    </div>
  );
}