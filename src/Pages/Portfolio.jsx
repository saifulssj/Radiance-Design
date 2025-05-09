import React from "react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfoliodata";

const Portfolio = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center my-12 text-blue-500">
        Our Work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-black rounded-xl border border-blue-800/40 overflow-hidden shadow-lg hover:shadow-blue-400/40 transition-shadow duration-300"
          >
            <img loading="lazy"
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-white font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
