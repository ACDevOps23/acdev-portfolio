'use client';
import Image from "next/image";
import * as motion from "motion/react-client"

const Hero = () => {
    return (
        <div id="home" className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#06000f] via-pink-800 to-[#06000f]">
            <div className="w-full md:grid grid-cols-2 px-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="flex flex-col justify-center items-center md:pl-20">
                        <h1 className="mt-20 lg:text-6xl text-left text-5xl font-bold text-gray-300">{"<Andrea Cimmino/>"}
                            <span className="inline-block w-0.5 h-10 lg:h-15 bg-gray-300 ml-1 animate-cursor-blink"></span>
                        </h1>
                        <h2 className="xl:text-center lg:text-3xl text-2xl font-bold text-gray-400">Full-Stack Software Engineer</h2>
                    </div>
                
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} >
                    <div className="mt-10 md:flex justify-center items-center">
                        <Image className="drop-shadow-xl/90" src="/computer.png" width={800} height={400} loading="eager" alt="image of a computer" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;