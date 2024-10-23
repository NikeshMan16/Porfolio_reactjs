import React from "react";
import styles from "./hero.module.css";
import image from "./heroImage.png";

import { FaLinkedin, FaGithub } from 'react-icons/fa';


export default function Hero() {
    return (
        <section className={styles.mainContent}>

            <div className={styles.mainsection}>
                <div className={styles.image}>
                    <img src={image}
                        alt="Profile picture of Me"
                        className={styles.profileImage}
                    />
                </div>
                <h1 className={styles.title}>Hi, I'm Nikesh.</h1>
                <p className={styles.description}>Aspiring Computer Engineer building Reactive and responsive web applications.</p>
                <div className={styles.buttons}>
                    <a className={styles.contactButton} href="mailto:nikeshmanshresth@gmail.com">
                        Contact me
                    </a>
                    <a className={styles.cvButton} href="../../../public/cv.pdf" download>
                        Download CV
                    </a>
                    <a className={styles.iconButton} href="https://www.linkedin.com/in/nikesh-man-shrestha-28a119268" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a className={styles.iconButton} href="https://github.com/NikeshMan16" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>

            </div>
        </section>
    );
};