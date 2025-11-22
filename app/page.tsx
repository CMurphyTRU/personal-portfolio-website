"use client";

import Image from "next/image";
import Section from "../app/components/Section"
import Link from "next/link";
import { motion } from "framer-motion"

export default function Home() {
  return (
          

            <Section>
              <div className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] text-center pb-20">
                        <motion.h1
                          initial={{ opacity: 0, y: 20}}
                          animate={{ opacity:1, y: 0}}
                          transition={{ duration: 1}}
                          className=" big-title text-5xl font-bold">
                          
                            Hi, i'm Christian Murphy
                        </motion.h1>

                        <motion.p
                          initial={{ opacity: 0, y: 20}}
                          animate={{ opacity:1, y: 0}}
                          transition={{ duration: 1, delay: 0.2}}
                          className="subtitle text-gray-500 text-lg py-5 max-w-xl">
                          A computer science student passionate about software development and UI design
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 20}}
                          animate={{ opacity:1, y: 0}}
                          transition={{ duration: 1, delay: 0.4}} className="text-lg py-5 ">
                          <Link href="/projects">
                            <button className="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-full mr-10 border border-black transition duration-300 ">
                              View Projects
                            </button>
                          </Link>

                          <Link href="/about">
                            <button className="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-full border border-black transition duration-300">
                              About Me
                            </button>
                          </Link>
                        </motion.div>
                </div>
            </Section>
  );
}
