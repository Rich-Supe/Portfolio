import React, { useRef, useEffect } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";


import styles from '../Projects.module.css'

import { GoLogoGithub } from 'react-icons/go'
import { DiGithubAlt } from 'react-icons/di'
import dog from '../../../assets/ComicReads.mp4'

export default function ComicReads() {
    const sectionRef = useRef(null);
    const pRef = useRef(null);

     // All the ref to be observed
    const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
    });

    const intersection2 = useIntersection(pRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });


    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    // Animation for fading in
    const fadeIn = element => {
    tl.to(element, {
        opacity: 1,
        y: -60,
        ease: "bounce",
        duration: 1,
        stagger: {
        amount: 0.3
        }
    });
    };
    const fadeIn2 = element => {
    tl2.to(element, {
        opacity: 1,
        y: -60,
        ease: "slow",
        duration: 0.5,
        // stagger: {
        // amount: 0.3
        // }
    });
    };
    // Animation for fading out
    const fadeOut = element => {
    tl.to(element, {
        opacity: 0,
        y: 0,
        ease: "back",
        duration: 0.5
    });
    };
    const fadeOut2 = element => {
    tl2.to(element, {
        opacity: 0,
        y: 0,
        ease: "back",
        duration: 0.5
    });
    };

   // checking to see when the vieport is visible to the user
   intersection2 && intersection2.intersectionRatio < 0.5
   ? fadeOut2("#pDiv5")
   : fadeIn2("#pDiv5");

   intersection && intersection.intersectionRatio < 0.5
   ? fadeOut("#listDiv5")
   : fadeIn("#listDiv5");

   useEffect(() => {
    fadeOut2("#pDiv5")
    fadeOut("#listDiv5")
   }, []);

    return (
        <div className={styles.fureverWalks}>
            <div className={styles.slideHeader}>
                <a target="_blank" href="https://comic-reads.herokuapp.com/" className={styles.projectLink}>Comic Reads</a>
                <a target="_blank" href="https://github.com/Rich-Supe/Comic-Reads-App" className={styles.github}>
                    < GoLogoGithub className={styles.githubTag} />
                    < DiGithubAlt className={styles.githubIcon} />
                </a>
                 <div className={styles.swipetext}>
                    <p>5/5</p>
                </div>
            </div>
            <div className={styles.slideContent}>
            <div className={styles.slideLeft}>
                        <div className={styles.descriptionCard}>
                            {/* <h1>Description</h1> */}
                            <div className={styles.descriptionDiv}>
                            <p className={styles.description} id='pDiv5' ref={pRef}> Comic reads is another team effort within a scrum environment. A Good-reads look-alike, users can search for their favorite comics, add them to any of their personal shelves, write reviews, and add them to their read list. My responsibilities included managing deployment, scrum boards, repo, implementing the shelves and more.</p>
                            </div>
                            <div className={styles.technologiesDiv}>
                                <h2> Technologies used</h2>
                                <div className={styles.listDiv} id='listDiv5' ref={sectionRef}>
                                    <ul className={styles.backend}>
                                        <li>Express</li>
                                        <li>NodeJs</li>
                                        <li>PostgreSQL</li>
                                        <li>Sequelize</li>
                                        <li>Bcrypt</li>
                                    </ul>
                                    <ul className={styles.frontend}>
                                        <li>JavaScript</li>
                                        <li>HTML5/CSS3</li>
                                        <li>PugJs </li>
                                        <li>Heroku</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.slideRight}>
                        <div className={styles.rightCard}>
                        <video width="640" muted='true' height="480" controls className={styles.video}>
                            <source src={dog} type="video/mp4"/>
                            {/* <source src="movie.ogg" type="video/ogg"> */}
                            Your browser does not support the video tag.
                        </video>
                        </div>
                    </div>
            </div>
        </div>
    )
}