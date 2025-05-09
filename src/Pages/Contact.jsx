import emailjs from 'emailjs-com';
import { useState } from 'react';
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_key
      )
      .then(() => {
        alert('✅ Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert('❌ Oops, something went wrong', error);
      });
  };

  return (
    <section
      id="Contact"
      className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full glassy rounded-2xl p-8 backdrop-blur-md border border-white/10 shadow-xl"
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Get in Touch
        </h2>

        <form onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            placeholder="Your Name"
            required
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="you@example.com"
            required
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Write your message..."
            required
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-blue-600 hover:to-pink-500 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Contact Links */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://wa.me/+8801990541935" // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 text-2xl transition duration-200"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/radiancedesign13/" // Replace with your actual Facebook page
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 text-2xl transition duration-200"
            title="Facebook"
          >
            <FaFacebookMessenger />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
