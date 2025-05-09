import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  const scrollRef = useRef(null);
  const isInteractingRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Drag scroll
  useEffect(() => {
    const container = scrollRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const startDragging = (e) => {
      isDown = true;
      isInteractingRef.current = true;
      container.classList.add("cursor-grabbing");
      startX = e.pageX || e.touches[0].pageX;
      scrollLeft = container.scrollLeft;
    };

    const stopDragging = () => {
      isDown = false;
      container.classList.remove("cursor-grabbing");
      setTimeout(() => (isInteractingRef.current = false), 1000);
    };

    const handleMove = (e) => {
      if (!isDown) return;
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", startDragging);
    container.addEventListener("touchstart", startDragging);
    container.addEventListener("mouseleave", stopDragging);
    container.addEventListener("mouseup", stopDragging);
    container.addEventListener("touchend", stopDragging);
    container.addEventListener("mousemove", handleMove);
    container.addEventListener("touchmove", handleMove);

    return () => {
      container.removeEventListener("mousedown", startDragging);
      container.removeEventListener("touchstart", startDragging);
      container.removeEventListener("mouseleave", stopDragging);
      container.removeEventListener("mouseup", stopDragging);
      container.removeEventListener("touchend", stopDragging);
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("touchmove", handleMove);
    };
  }, []);

  // Click scroll to center
  const handleCardClick = (index) => {
    const container = scrollRef.current;
    const card = container.children[index];
    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const scrollOffset =
      card.offsetLeft - (containerRect.width / 2 - cardRect.width / 2);

    container.scrollTo({ left: scrollOffset, behavior: "smooth" });
    setCurrentIndex(index);
  };

  // Auto-scroll with requestAnimationFrame
  useEffect(() => {
    const container = scrollRef.current;
    let animationFrame;
    let lastTime = 0;

    const scrollToCard = (index) => {
      const card = container.children[index];
      if (!card) return;
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const scrollOffset =
        card.offsetLeft - (containerRect.width / 2 - cardRect.width / 2);

      container.scrollTo({ left: scrollOffset, behavior: "smooth" });
    };

    const loop = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const elapsed = timestamp - lastTime;

      if (!isInteractingRef.current && elapsed >= 4000) {
        const nextIndex = (currentIndex + 1) % portfolioData.length;
        scrollToCard(nextIndex);
        setCurrentIndex(nextIndex);
        lastTime = timestamp;
      }

      animationFrame = requestAnimationFrame(loop);
    };

    animationFrame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrame);
  }, [currentIndex]);

  return (
    <section className="relative py-28 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
        Our Services
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-10 px-6 snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scroll-smooth max-w-full cursor-grab scrollbar-hide"
      >
        {portfolioData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex-none w-[90vw] md:w-[60vw] lg:w-[50vw] lg:h-[380px] snap-center bg-black rounded-2xl p-6 shadow-lg border border-blue-800/40 hover:scale-[1.02] transition duration-300"
            onClick={() => handleCardClick(index)}
          >
            <div
              className={`flex flex-col md:flex-row items-center justify-center gap-8 h-full ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 w-full">
                <img loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="md:w-1/2 w-full space-y-4 text-left">
                <h3 className="text-3xl font-semibold text-blue-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Globes */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 blur-3xl opacity-20 rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-blue-500 blur-3xl opacity-20 rounded-full pointer-events-none z-0"></div>
    </section>
  );
};

export default Services;
