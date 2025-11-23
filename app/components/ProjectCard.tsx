"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    href: string;
}

export default function ProjectCard({
    title,
    description,
    image,
    tags,
    href,
}: ProjectCardProps) {
    return (
        
        <Link href={href}>
            <motion.div
                initial={{ opacity: 0, y: 20}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5}}
                whileHover={{ scale:1.02}}
                className="
                    bg-white rounded-xl shadow-md overflow-hidden
                    border border-gray-200 hover:shadow-xl
                    transition cursor-pointer">

                        {/* IMAGE */}
                        <div className="relative w-full h-56">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"/>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{description}</p>

                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs-border">
                                            {tag}
                                        </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
        </Link>
    );
}



