import React from "react";
import { motion } from "framer-motion";
import ModalImage from "react-modal-image";
import { flyerDesignData, labelAndPackagingData, BrandIdentityData, menuDesignData, signageDesignData, socialMediaDesignData} from "../data/portfoliodata";

/**
 * Portfolio component displays categorized portfolio sections with animated image cards.
 */
const Portfolio = () => {
  /**
   * Renders a portfolio section with a category title and a grid of images.
   * @param {Object} section - Section object containing title and images.
   * @param {number} sectionIndex - Index of the section.
   */
  const renderSection = (section, sectionIndex) => {
    if (!section || !Array.isArray(section.images) || !section.title) return null;

    return (
      <div key={sectionIndex} className="mb-16">
        <h3 className="text-2xl  font-semibold mb-8 border-b-2 pb-2 text-center  tracking-wide drop-shadow-lg">
          {section.title}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {section.images.map((item, index) => (
            <motion.div
              key={index}
              className="bg-transparent  p-4 rounded-2xl shadow-xl hover:shadow-blue-900/40 relative group overflow-hidden transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.045, boxShadow: "0 8px 32px 0 rgba(0, 184, 255, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div style={{ width: "100%", height: "192px", overflow: "hidden", borderRadius: "0.5rem" }}>
                  <ModalImage
                    small={item.image}
                    large={item.image}
                    alt={item.title}
                    hideDownload={true}
                    hideZoom={false}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                </div>
              </div>
              <h4 className="mt-4 text-lg font-medium text-center text-gray-900">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const flyerSections = Array.isArray(flyerDesignData) ? flyerDesignData : [];
  const labelSections = Array.isArray(labelAndPackagingData) ? labelAndPackagingData : [];
  const brandIdentitySections = Array.isArray(BrandIdentityData) ? BrandIdentityData : []; 
  const menuDesignSections = Array.isArray(menuDesignData) ? menuDesignData : [];
  const signageDesignSections = Array.isArray(signageDesignData) ? signageDesignData : [];
  const socialMediaSections = Array.isArray(socialMediaDesignData) ? socialMediaDesignData : [];


  return (
    <section className="py-20 px-4 min-h-screen ">
      <div className="max-w-7xl mx-auto text-blue-700">
        <motion.h2
          className="text-4xl text-blue-700 font-bold text-center my-12 tracking-wider drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Portfolio
        </motion.h2
        >
        {[...flyerSections, ...labelSections, ...brandIdentitySections, ...menuDesignSections, ...signageDesignSections, ...socialMediaSections].map(renderSection)}
      </div>
    </section>
  );
};

export default Portfolio;
