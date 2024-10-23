import React from "react";
import { DiVim } from "react-icons/di";
import styles from "./project.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Project() {

    const works = [
        {
            imgSrc: '/images/project-1.jpg',
            title: 'Full stack music app',
            tags: ['API', 'MVC', 'Development'],
            projectLink: 'https://musify-5al0.onrender.com/'
        },
        {
            imgSrc: '/images/project-2.jpg',
            title: 'Free stock photo app',
            tags: ['API', 'SPA'],
            projectLink: 'https://pixstock-official.vercel.app/'
        },
        {
            imgSrc: '/images/project-3.jpg',
            title: 'Recipe app',
            tags: ['Development', 'API'],
            projectLink: ''
        },

    ];



    return (
        <>
            <section className="section" id="projects">
            <div className={styles.project_section} >
                <div className={styles.circle}>2</div>
                <h1 className={styles.title}>Projects</h1>
            </div>
            <div className="container">
                <h2 className="headline-2 mb-5">
                    Here are some of the projects I have worked on.
                </h2>

                <div>
                    {works.map(({ imgSrc, title, tags, projectLink },key) => (<ProjectCard/>))}
                </div>
            </div>
            </section>
        </>
    );
};