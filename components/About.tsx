'use client';
import { useScroll, useTransform } from "motion/react";
import * as motion from "motion/react-client"
import { useRef } from "react";
import { sentences } from "@/data/projects";

export default function AppleScrollSection() {
  const containerRef = useRef(null);

  // Track scroll progress of this section only
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

    const step = 1 / sentences.length;
    const animations = sentences.map((_, i) => {

        const start = i * step;
        const mid = start + step / 2;
        const end = start + step;
        return {
            opacity: useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]),
            y: useTransform(scrollYProgress, [start, mid, end], [40, 0, -40]),
            // scale: useTransform(scrollYProgress, [start, mid, end], [0.8, 1.2, 0.8]),
        }
    });

  return (
    <section id="about" ref={containerRef} className="h-[800vh] bg-gradient-to-b from-[#06000f] via-[#010002] to-black text-white relative">
      <div className="p-10 mt-20 flex items-center justify-center">
          <motion.p 
            initial={{ opacity: 0, y: 150 }}
					  whileInView={{ opacity: 1, y: 0 }}
					  viewport={{ once: true }}
					  transition={{ duration: 2.0 }}
            className="p-7 mt-20 text-xl md:text-2xl lg:text-3xl font-semibold text-center">I’m a software engineer with a strong focus on building secure, scalable, 
            and practical systems. My background in cyber security shapes how I think about 
            software, not just how it works, but how it holds up under real-world conditions. 
            I’ve worked across full stack development, building applications from the ground up,
            designing APIs, handling data, and implementing authentication and security layers. 
            I’m particularly interested in systems that combine performance, reliability, and 
            clean design, and I tend to approach problems with a balance of analytical thinking and attention to detail...</motion.p>
      </div>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">

          {sentences.map((text, i) => {
            return (
              <motion.p
                key={i}
                style={{ ...animations[i] }}
                className="p-5 md:p-0 text-xl absolute md:text-3xl font-semibold text-center">
                {text}
              </motion.p>
            );
          })}

        </div>
      </div>
      
    </section>
  );
}
