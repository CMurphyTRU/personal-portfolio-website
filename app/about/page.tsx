"use client";

import Section from "../components/Section"
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


export default function About()
{
    return (
        <section className="pt-16 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20}}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.6}}
                        >
                        
                            <h1 className="mb-6 text-slate-900">
                                 Hi, i'm Christian Murphy
                            </h1>

                            <p className="text-slate-600 mb-6">
                                I'm a full-stack developer and designer with a passion for creating beautiful, 
                                functional digital experiences. With over 6 years of experience, I've helped 
                                startups and established companies build products that users love.
                            </p>
                            <p className="text-slate-600-mb-8">
                                My approach combines technical expertise with creative thinking. I believe great 
                                software is not just about clean code—it's about solving real problems and creating 
                                delightful experiences that make people's lives easier.
                            </p>
                            <div className="flex items-center gap-4 pt-10">
                                <Button className="bg-linear-to-r from-pink-600 to-indigo-600 hover:from-pink-700 hover:to-indigo-700">
                                    Download Resume
                                </Button>
                                <Button variant="outline">
                                    Get In Touch
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95}}
                            animate={{ opacity: 1, scale: 1}}
                            transition={{ duration: 0.6, delay: 0.2}}
                            className="relative"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-violet-600/20 to-indigo-600/20 rounded-3xl blur-3xl"></div>
                                <div className="relative aspect-square rounded-3xl overflow-hidden">
                                    <Image
                                        src="/images/placeholder.jpg"
                                        alt="profile image"
                                        fill
                                        className="w-full h-full object-cover" />

                                </div>
                            </motion.div>
                </div>
            </div>
        </section>
        
    )
}