
import React, { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

import styles from '../Projects.module.css'
// GoLogoGithub
import { GoLogoGithub } from 'react-icons/go'
import { DiGithubAlt } from 'react-icons/di'
import food from '../../../assets/GameBnb.mp4'


export default function GameBnb() {

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
    ? fadeOut("#listDiv1", console.log("fadeout1"))
    : fadeIn("#listDiv1", console.log('fadeIn 1'));

    
    return (
        <div className={styles.gameBnb}>
            <div className={styles.slideHeader}>
                <a target="_blank" href="https://game-bnb.herokuapp.com/" className={styles.projectLink}>GameBnb</a>
                <a target="_blank" href="https://github.com/Rich-Supe/GameBnB" className={styles.github}>
                    < GoLogoGithub className={styles.githubTag} />
                    < DiGithubAlt className={styles.githubIcon} />
                </a>
                <div className={styles.swipetext}>
                    <p>(Swipe Right for More!)</p>
                </div>
            </div>
            <div className={styles.slideContent}>
                <div className={styles.slideLeft}>
                    <div className={styles.descriptionCard}>
                        {/* <h1>Description</h1> */}
                        <p className={styles.description}> GameBnb is a fantasy based Airbnb clone where users can create worlds for others to stay and even make reservations/write reviews at other places! Allows multiple image uploading to AWS, Docker containerization/Heroku for deployment, and Redux/Flux architecture for unidirectional data flow and state management on the front-end.</p>
                        <div className={styles.technologiesDiv}>
                            <h2> Technologies used</h2>
                            <div className={styles.listDiv} id='listDiv1' ref={sectionRef}>
                                <ul className={styles.backend}>
                                    <li>Python</li>
                                    <li>Flask</li>
                                    <li>PostgreSQL</li>
                                    <li>SQLAlchemy</li>
                                    <li>WTForms</li>
                                    <li>Docker</li>
                                    <li>AWS</li>
                                </ul>
                                <ul className={styles.frontend}>
                                    <li>JavaScript</li>
                                    <li>HTML5/CSS3</li>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>Material UI</li>
                                    <li>SwiperJs</li>
                                    <li>Heroku</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.slideRight}>
                    <div className={styles.rightCard}>
                    {/* <h1>SlideRight!</h1> */}
                    <video width="640" height="480" controls muted='true' className={styles.video}>
                    <source src={food} type="video/mp4"/>
                    {/* <source src="movie.ogg" type="video/ogg"> */}
                    Your browser does not support the video tag, Please Check out the Repo or live site above!.
                    </video>
                    </div>
                    {/* <Swiper className={styles.swiperContainer} 
                    
                    navigation 
                    pagination 
                    spaceBetween={300} 
                    slidesPerView={2} 
                    effect="cube" 
                    cubeEffect={{ slideShadows: true, shadow: true, shadowOffset: 100, shadowScale: 0.6 }}
                    >
                    <SwiperSlide className={styles.cubeSlide}>
                    <div className={styles.cubeSlideContent}>
                    <h1>Slide1</h1>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.cubeSlide}>
                    <div className={styles.cubeSlideContent}>
                    <h1>Slide2</h1>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.cubeSlide}>
                    <div className={styles.cubeSlideContent}>
                    <h1>Slide3</h1>
                    </div>
                    </SwiperSlide>
                </Swiper> */}
                </div>
            </div>
        </div>
    )
}
    // import React, { useRef, useState } from "react";
    // Import Swiper React components
    // import { Swiper, SwiperSlide } from "swiper/react";
    
    // Import Swiper styles
    // import "swiper/css"; 
    // import '../../../../node_modules/swiper/swiper-bundle.css'
    // import '../../../../node_modules/swiper/swiper.min.css'
    // import '../../../../node_modules/swiper/swiper-bundle.min.css'
    // import '../../../../node_modules/swiper/components/effect-cube/effect-cube.min.css'
    
    
    // import "swiper/swiper.min.css";
    // import "swiper/components/effect-cube/effect-cube.min.css"
    // import "swiper/components/pagination/pagination.min.css"
    // import "swiper/css/effect-cube"
    
    // import "swiper/css/pagination"
    
    // import "./styles.css";
    
    // module "/home/richsupe/portfolio/portfolio/node_modules/swiper/swiper"
    
    // import Swiper core and required modules
    // import SwiperCore, {
    //   EffectCube, Pagination, Navigation,
    // } from 'swiper';
    
    // install Swiper modules
    // SwiperCore.use([EffectCube,Pagination, Navigation]);