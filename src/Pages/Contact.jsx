import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const USER_ID = "your_user_id";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        USER_ID
      );
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden mt-16"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-blue-700 tracking-light text-[32px] font-bold leading-tight">Get in touch</p>
                <p className="text-[#60758a] text-sm font-normal leading-normal">
                  We're here to help and answer any questions you might have. We look forward to hearing from you
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    name="name"
                    placeholder="Your Name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    name="subject"
                    placeholder="Subject"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-14 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none min-h-36 placeholder:text-[#60758a] p-4 text-base font-normal leading-normal"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </label>
              </div>
              <div className="flex px-4 py-3 justify-start">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                  disabled={loading}
                >
                  <span className="truncate">{loading ? "Sending..." : "Send Message"}</span>
                </button>
              </div>
              {sent && (
                <div className="px-4 py-2 text-green-600 font-medium">Your message has been sent!</div>
              )}
              {error && (
                <div className="px-4 py-2 text-red-600 font-medium">{error}</div>
              )}
            </form>
            <h3 className="text-blue-700 text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Contact Information</h3>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">Email: contact@radiancedesign.com</p>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">Phone: +880 1990-541935</p>
            <div className="flex px-4 py-3 gap-4 items-center">
              <a
                href="https://www.facebook.com/radiancedesign13/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0c7ff2] text-2xl"
                aria-label="Facebook"
              >
                <FaFacebookMessenger />
              </a>
              <a
                href="https://wa.me/+8801990541935"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25d366] text-2xl"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
            <div className="flex px-4 py-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg object-cover"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmXrUrUjJw0KsvErJ46bPkrTE7wPDTe3CHRNNKYWHznUu2cqZO9KZ865cpS2lkqwz42Bx1UTmYKlddaITegh4htJko21WSfSX8CAi10kysLhn3n_9tSgLfWLRMjFDGPM3sXRQ2SvIq0fnY3hdYLt9YXzcGCbpCNBeVhLNaYeTtrdlsP6k8CMynthpHcolHAHNTm-TD5VM_z895kylcMB_-PTVz9XmdzyvJbCksqx2Nw9ydsf28ZKBN0WuFDyA_M9FGp-0EjBAXQ6U")',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;