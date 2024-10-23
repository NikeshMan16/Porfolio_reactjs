import React, { useState } from "react";
import styles from "./navbar.module.css";
export default function Navbar() {


    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.Menu}>
                    <ul className={styles.Items}>

                        <li className={styles.Item}>
                            <a href="#about" className={styles.List}>About</a>
                        </li>
                        <li className={styles.Item} >
                            <a href="#projects" className={styles.List}>Projects </a>
                        </li>
                        <li className={styles.Item}>
                            <a href="#contact" className={styles.List}>Contact</a>
                        </li>

                    </ul>
                </div>

            </nav>
        </>

    );
}
