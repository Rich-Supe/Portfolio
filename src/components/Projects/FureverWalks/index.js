


import styles from '../Projects.module.css'

import { GoLogoGithub } from 'react-icons/go'
import { DiGithubAlt } from 'react-icons/di'
import dog from '../../../assets/FureverWalks.mp4'

export default function FureverWalks() {

    return (
        <div className={styles.fureverWalks}>
            <div className={styles.slideHeader}>
                <a target="_blank" href="https://furever-walks.herokuapp.com/" className={styles.projectLink}>Furever Walks</a>
                <a target="_blank" href="https://github.com/Rich-Supe/Furever-Walks" className={styles.github}>
                    < GoLogoGithub className={styles.githubTag} />
                    < DiGithubAlt className={styles.githubIcon} />
                </a>
            </div>
            <div className={styles.slideContent}>
            <div className={styles.slideLeft}>
                        <div className={styles.descriptionCard}>
                            {/* <h1>Description</h1> */}
                            <p className={styles.description}> Furever Walks is a team effort with 3 other engineers within an agile environment. The app lets users plan, manage, and save both past and future walks with their dogs! Furever Walks leverages Google maps geolocation for routes and ReactGraph to record stats. My responsibilities included managing scrum efforts, implementing carousels, Google Maps API, deployment, and more. </p>
                            <div className={styles.technologiesDiv}>
                                <h2> Technologies used</h2>
                                <div className={styles.listDiv}>
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
                                        <li>Google Maps API </li>
                                        <li>React</li>
                                        <li>Redux</li>
                                        <li>ReactGraph</li>
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