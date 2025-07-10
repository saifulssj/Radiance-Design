// src/Components/Footer.jsx
import { FaFacebookF, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center">
                  <div className="flex max-w-[960px] flex-1 flex-col">
            <div className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#60758a] text-base font-normal leading-normal min-w-40" href="/src/Pages/Home.jsx">Home</a>
                <a className="text-[#60758a] text-base font-normal leading-normal min-w-40" href="/src/Pages/Services.jsx">Services</a>
                <a className="text-[#60758a] text-base font-normal leading-normal min-w-40" href="/src/Pages/Portfolio.jsx">Portfolio</a>
                <a className="text-[#60758a] text-base font-normal leading-normal min-w-40" href="/src/Pages/About.jsx">About</a>
                <a className="text-[#60758a] text-base font-normal leading-normal min-w-40" href="/src/Pages/Contact.jsx">Contact</a>
              </div>
                      <p className="text-sm text-gray-400 text-center ">
          &copy; {new Date().getFullYear()} Radiance Design. All rights reserved.
        </p>
          <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-pink-500 transition"
          >
            <FaEnvelope />
          </a>
          </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;


    