
import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

import styles from '../Projects.module.css'

import { GoLogoGithub } from 'react-icons/go'
import { DiGithubAlt } from 'react-icons/di'
import port from '../../../assets/Portfolio.mp4'

export default function Portfolio() {

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
       ease: "power4.out",
       duration: 3,
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
       duration: 1
   });
   };

   // checking to see when the vieport is visible to the user
   intersection && intersection.intersectionRatio < 0.2
   ? fadeOut("#listDiv2", '#ul21', '#ul22', '#li21', '#li22', '#li23', '#li24', '#li25', '#li26', '#li27', '#li28')
   : fadeIn("#listDiv2", '#ul21', '#ul22', '#li21', '#li22', '#li23', '#li24', '#li25', '#li26', '#li27', '#li28');

    return (
        <div className={styles.portfolio}>
            <div className={styles.slideHeader}>
                <p className={styles.projectLink}>Portfolio</p>
                <a target="_blank" href="https://github.com/Rich-Supe/Portfolio" className={styles.github}>
                    < GoLogoGithub className={styles.githubTag} />
                    < DiGithubAlt className={styles.githubIcon} />
                </a>
            </div>
            <div className={styles.slideContent}>
                <div className={styles.slideRight}>
                    <div className={styles.rightCard}>
                    <video width="640" height="480" muted='true' controls className={styles.video}>
                    <source src={port} type="video/mp4"/>
                    {/* <source src="movie.ogg" type="video/ogg"> */}
                    Your browser does not support the video tag.
                    </video>
                    </div>
                </div>
            <div className={styles.slideLeft}>
                        <div className={styles.descriptionCard}>
                            {/* <h1>Description</h1> */}
                            <p className={styles.description}> My Portfolio website uses Three Js/Fiber to create the landing page! I start by creating a scene and place the camera. Then I add lighting utilizing three-fibers spotlight, shadows, and hoverLights. I create the environment using a rotating 3000 star geometry. The rings on the planet are separate geometries with the planet having having custom normal mapping and mesh. Animations are powered by GSAP and custom CSS.</p>
                            <div className={styles.technologiesDiv}>
                                <h2> Technologies used</h2>
                                <div className={styles.listDiv} id='listDiv2' ref={sectionRef}>
                                    <ul className={styles.backend} id='ul21'>
                                        <li id='li21'>JavaScript</li>
                                        <li id='li22'>HTML5/CSS3</li>
                                        <li id='li23'>React</li>
                                        <li id='li24'>Gsap</li>
                                    </ul>
                                    <ul className={styles.frontend} id='ul22'>
                                        <li id='li25'>ThreeJs</li>
                                        <li id='li26'>Three-Fiber</li>
                                        <li id='li27'>MaterialUi</li>
                                        <li id='li28'>SwiperJs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}