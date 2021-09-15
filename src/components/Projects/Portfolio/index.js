


import styles from '../Projects.module.css'

import { GoLogoGithub } from 'react-icons/go'
import { DiGithubAlt } from 'react-icons/di'
import port from '../../../assets/Portfolio.mp4'

export default function Portfolio() {

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
                                <div className={styles.listDiv}>
                                    <ul className={styles.backend}>
                                        <li>JavaScript</li>
                                        <li>HTML5/CSS3</li>
                                        <li>React</li>
                                        <li>Gsap</li>
                                    </ul>
                                    <ul className={styles.frontend}>
                                        <li>ThreeJs</li>
                                        <li>Three-Fiber</li>
                                        <li>MaterialUi</li>
                                        <li>SwiperJs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}