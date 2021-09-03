
import styles from '../Projects.module.css'

import { GoLogoGithub } from 'react-icons/go'
import { DiGithubAlt } from 'react-icons/di'
import wine from '../../../assets/Cellars.mp4'

export default function Cellars() {

    return (
        <div className={styles.cellars}>
            <div className={styles.slideHeader}>
                <a href="https://cellars-app.herokuapp.com/" className={styles.projectLink}>Cellars</a>
                <a href="https://github.com/Rich-Supe/Cellars" className={styles.github}>
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
                                <div className={styles.listDiv}>
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