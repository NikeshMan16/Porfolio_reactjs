

import React from "react";
import styles from "./description.module.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { DiDjango } from "react-icons/di";
import { AiOutlinePython } from "react-icons/ai";
import { FaGit } from "react-icons/fa";

import { IconContext } from "react-icons/lib";


import { useState, useEffect } from "react";



export default function Description ()  {
    
    const [text, setText] = useState('');
    const fullText = "I'm Nikesh Man Shrestha! I'm actively working and pursuing web development, mainly focusing on front-end magic with ReactJS. I'm all about embracing new challenges and learning opportunities. Let's build something awesome together!";
  
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
          if (index < fullText.length) {
            console.log(`Adding character: ${fullText[index]}`); // Debugging line
            setText((prev) => prev + fullText[index]);
            index++;
          } else {
            console.log("Animation complete"); // Debugging line
            clearInterval(interval);
          }
        }, 20);
      
        return () => clearInterval(interval);
      }, []);
      



    
    return (
        <div className={styles.container} id="about">
            <span className={styles.explore_text}>Explore about me</span>
            <div className={styles.about_section}>
                <div className={styles.circle}>1</div>
                <h1 className={styles.title}>About</h1>
                <p className={styles.Description}>
                I'm Nikesh Man Shrestha! I'm actively working and pursuing web development, mainly focusing on front-end magic with ReactJS. I'm all about embracing new challenges and learning opportunities. Let's build something awesome together!
                </p>
            </div>

            <div className={styles.skills}>
                <span className={styles.skill_list}>Knowledge In</span>
                <div className={styles.icons}>


                    <FaHtml5 size={'4rem'} />
                    <FaCss3Alt size={'4rem'} />
                    <FaReact size={'4rem'} />
                    <AiOutlinePython size={'4rem'} />
                    <DiDjango size={'4rem'} />
                    <FaGit size={'4rem'} />

                </div>
            </div>


        </div>
    );
};