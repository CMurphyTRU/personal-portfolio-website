"use client";

import {useState} from "react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";




export default function Projects() {
    return (
        <div className="px-0 py-10 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-5xl pt-10 pb-5">My Projects</h1>
                <p className="text-gray-500 pb-10">A collection of things I have made</p>   
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <ProjectCard
                        title="Card1"
                        description="desc1"
                        image="/images/placeholder.jpg"
                        tags={["tag1", "tag2", "tag3"]}
                        href="/about"
                         />

                    <ProjectCard
                        title="Card1"
                        description="desc1"
                        image="/images/placeholder2k.png"
                        tags={["tag1", "tag2", "tag3"]}
                        href="/about"
                         />

                    <ProjectCard
                        title="Card1"
                        description="desc1"
                        image="/images/placeholder4k.png"
                        tags={["tag1", "tag2", "tag3"]}
                        href="/about"
                         />
                </div>
        </div>
    )
}