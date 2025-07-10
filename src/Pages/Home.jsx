import { portfolioData, flyerDesignData } from "../data/portfoliodata.js";
import ilustration from '../../public/assets/radiant.jpeg';
import arrowSvg from '../../public/assets/ChatGPT Image May 18, 2025, 01_17_42 AM.png'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
// (Add other components as you create them)

export default function Home() {
  return (
    <div className=" font-sans overflow-x-hidden overflow-clip mt-8 relative">

      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10  mt-24">
            {/* Glowing blurred orb behind the section */}
            <div className="absolute -z-10 top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full blur-[120px] opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Animated Heading */}
            <div className="md:w-1/2 text-center px-4  md:text-left md:ml-32">
            <motion.h2
                className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 text-center"
                initial={{ opacity: 0, y: -50 }} // Start position (off-screen)
                animate={{ opacity: 1, y: 0 }}   // Final position (on screen)
                transition={{ duration: 1, ease: "easeOut" , delay: 2.5 }} // Smooth transition
            >
                About Radiance
            </motion.h2>

            {/* Animated Underline */}
            <motion.div
                className="w-20 h-1 bg-gradient-to-r from-blue-700  to-cyan-500 mx-auto rounded-full mb-6 shadow-md shadow-pink-500/30"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 2.8 }}
            />

            {/* Animated Paragraph */}
            <motion.p
                className="text-black-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
            >
                At <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-700  to-cyan-500">Radiance Design</span>, we blend creativity and strategy to craft stunning visual identities.
                Every pixel is thoughtfully designed to leave a lasting impression.
                Whether it's digital or print, we make your brand shine.
            </motion.p>
            <motion.button
                className="mt-6 bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-6 py-2 rounded-full hover:scale-105 transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3.2, ease: "easeOut" }}
            >
                Get Started
            </motion.button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
            <img src={ilustration} alt="" className='w-full max-w-md mx-auto animate-fade-in-up' />
            </div>
           
    </section>


      {/* Services Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-700  to-cyan-500">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {portfolioData.map(({ title }, i) => (
            <div
                key={i}
                className=" p-6 rounded-xl transition transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className=" text-sm">
                {title === "Brand Identity" && "Logos, guidelines, and more to define your brand’s voice and style."}
                {title === "Flyer Design" && "Eye-catching flyers that grab attention and convey your message."}
                {title === "Menu Design" && "Menus that not only list items but tell a story."}
                {title === "Packaging Design" && "Creative packaging that makes your product stand out."}
                {title === "Social Media Post Design" && "Engaging posts that resonate with your audience."}
                {title === "Signage Design" && "Clear, attractive signage that guides and informs."}
                </p>
            </div>
            ))}
        </div>
      </section>


      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
  <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700  to-cyan-500">Selected Work</h2>
  <p className="text-gray-600 mb-10">From logos to full brand systems — here's a glimpse of our creative power.</p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Portfolio Items */}
    {portfolioData.map((item, index) => (
      <div key={index} className=" m-4" tabIndex="0">
        <div className="  border-b-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
        {/* Gradient border + outer glow */}

        {/* Inner card */}
          <img loading="lazy"
            src={item.image}
            alt={item.title}
            className="w-full h-60 object-cover rounded-t-xl"
          />
          <div className="bg-white text-sm p-4 rounded-b-xl text-center">
            {item.title}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Contact CTA */}
  <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white py-12 px-6 text-center overflow-hidden">
      {/* Overlay background icons (optional) */}
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/cta-bg.jpg')] bg-cover bg-center pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          LET'S TALK ABOUT <br /> YOUR PROJECT
        </h2>
        <p className="text-lg mb-6">
          Got a project in mind? Let's create something great. <br />
          I can transform that idea into real product.
        </p>

        <div className="flex items-center justify-center  gap-3">
          {/* SVG on the left */}
          <img src={arrowSvg} alt="arrow" className="w-20 h-20 md:w-30 md:h-30" />

          {/* Contact Me Button */}
          <Link to="/contact">
            <button className="bg-white text-[#0d1b2a] px-8 py-2 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition transform hover:scale-110">
              Contact Me
            </button>
          </Link>
        </div>

        {/* Contact Info Row */}
        <div className="mt-2 flex flex-col md:flex-row items-center justify-center gap-2 text-base font-medium">
          <a
            href="https://wa.me/+8801990541935"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="flex items-center gap-2 mx-2 hover:text-green-400 transition-colors"
          >
            <FaWhatsapp className="text-green-400 hover:text-green-300" />
            <span>01990 - 541 935</span>
          </a>
          <a
            href="https://facebook.com/mdraselsheikh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mx-2 hover:text-blue-500 transition-colors"
            title="Facebook"
          >
            <FaFacebookF className="text-blue-500 hover:text-blue-400 bg-white rounded-full p-1" />
            <span>@mdraselsheikh</span>
          </a>
          <a
            href="https://instagram.com/radiancedesign13"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mx-2 hover:text-pink-500 transition-colors"
            title="Instagram"
          >
            <FaInstagram className="text-pink-500 hover:text-pink-400" />
            <span>@radiancedesign13</span>
          </a>
        </div>
      </div>
    </section>
    </div>
  );
}
