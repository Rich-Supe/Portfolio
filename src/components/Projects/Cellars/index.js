import React, { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

import styles from '../Projects.module.css'

import { GoLogoGithub } from 'react-icons/go'
import { DiGithubAlt } from 'react-icons/di'
import wine from '../../../assets/Cellars.mp4'

export default function Cellars() {

    const sectionRef = useRef(null);

    // All the ref to be observed
   const intersection = useIntersection(sectionRef, {
   root: null,
   rootMargin: "0px",
   threshold: 0.5
   });

   const tl = gsap.timeline();

   // Animation for fading in
   const fadeIn = element => {
   tl.to(element, {
       opacity: 1,
       y: -60,
       ease: "bounce",
       duration: 1.5,
       stagger: {
       amount: 0.3
       }
   });
   };
   // Animation for fading out
   const fadeOut = element => {
   tl.to(element, {
       opacity: 0,
       y: -20,
       ease: "power4.out",
       duration: 0.5
   });
   };

   // checking to see when the vieport is visible to the user
   intersection && intersection.intersectionRatio < 0.5 ? fadeOut("#listDiv4") : fadeIn("#listDiv4");

   useEffect(() => {
    fadeOut("#listDiv4")
   }, []);
   
    return (
        <div className={styles.cellars}>
            <div className={styles.slideHeader}>
                <a target="_blank" href="https://cellars-app.herokuapp.com/" className={styles.projectLink}>Cellars</a>
                <a target="_blank" href="https://github.com/Rich-Supe/Cellars" className={styles.github}>
                    < GoLogoGithub className={styles.githubTag} />
                    < DiGithubAlt className={styles.githubIcon} />
                </a>
            </div>
            <div className={styles.slideContent}>
                <div className={styles.slideRight}>
                    <div className={styles.rightCard}>
                        <video width="640" height="480" muted='true' controls className={styles.video}>
                            <source src={wine} type="video/mp4"/>
                            {/* <source src="movie.ogg" type="video/ogg"> */}
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className={styles.slideLeft}>
                        <div className={styles.descriptionCard}>
                            {/* <h1>Description</h1> */}
                            <p className={styles.description}> Cellars is an app for wine lovers and connoisseurs to find their next bottle. Users Can save wines they like in their cellars, leave reviews, add wines to the database, and even write/edit journal entries on ones they've tasted!</p>
                            <div className={styles.technologiesDiv}>
                                <h2> Technologies used</h2>
                                <div className={styles.listDiv} id='listDiv4' ref={sectionRef}>
                                    <ul className={styles.backend}>
                                        <li>JavaScript</li>
                                        <li>NodeJs</li>
                                        <li>Express</li>
                                        <li>Sequelize</li>
                                        <li>AWS</li>
                                        <li>PostgresSQL</li>
                                        <li>BcryptJs</li>
                                    </ul>
                                    <ul className={styles.frontend}>
                                        <li>HTML5/CSS3</li>
                                        <li>React</li>
                                        <li>Redux</li>
                                        <li>QuillJs</li>
                                        <li>Csurf</li>
                                        <li>SwiperJs</li>
                                        <li>Heroku</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}