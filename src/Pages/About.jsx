import { motion } from "framer-motion";
import React from "react";

const About = () => {
  const team = [
    {
      name: "Rasel A.",
      role: "Lead Designer",
      desc: "Bringing futuristic elegance to every brand vision.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Rafi K.",
      role: "UI/UX Strategist",
      desc: "Crafting intuitive experiences with a creative edge.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Nila R.",
      role: "Graphic Artist",
      desc: "Illustrating bold visuals with a radiant soul.",
      color: "from-cyan-400 to-blue-400",
    },
    {
      name: "Ray M.",
      role: "Brand Consultant",
      desc: "Giving brands their unique voice and vibe.",
      color: "from-blue-400 to-cyan-300",
    },
  ];

  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 blur-3xl opacity-20 rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-blue-500 blur-3xl opacity-20 rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700  to-cyan-500 tracking-wide mb-6"
        >
          Who We Are
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
        >
          At <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700  to-cyan-500 font-semibold">Radiance Design</span>, we don’t just design — we illuminate.
          Our work combines creative instinct with digital precision, giving your brand a look that’s both stunning and strategic.
        </motion.p>

        {/* Feature Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {[
            {
              title: "Logo & Brand Identity",
              desc: "From concept to execution — we design logos that stand the test of time.",
            },
            {
              title: "Digital & Print Assets",
              desc: "Banners, posters, social media — all tuned to your visual frequency.",
            },
            {
              title: "Creative Strategy",
              desc: "We don’t just make things look good. We make them work smart.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-blue-500/30 rounded-xl bg-white/5 backdrop-blur-lg hover:border-blue-500 transition duration-300 shadow-[0_0_20px_rgba(0,255,255,0.1)]"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          viewport={{ once: true }}
          className="my-24"
        >
          <h3 className="text-3xl font-semibold text-white mb-10">Meet Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md hover:scale-105 transition-transform duration-300"
              >
                <div className={`text-xl font-bold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-1`}>{member.name}</div>
                <div className="text-gray-300 text-sm mb-2">{member.role}</div>
                <p className="text-gray-400 text-sm">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
