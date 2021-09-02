

import styles from './AboutMe.module.css'
import profilePic from '../../assets/profile2.jpg'
import { FaAngleDoubleDown } from 'react-icons/fa'

export default function AboutMe() {


    return (
        <div className={styles.aboutMe} id='p4'>
            <div className={styles.aboutMe__container}>
                <div className={styles.infoDiv}>
                    <div className={styles.card}>
                        <h1 className={styles.header}>Hey, Nice to Meet You!</h1>
                        <p className={styles.description}>
                            I'm a fullstack developer that loves to connect with people and solve problems. I was born in Cincinnati and spent the last 10 years in Chicago. Previous to coding full time, I worked in the restaurant industry as an Operations Manager for 5 years. I try to challenge myself and learn new things every day. I'm hoping to find other people that share my drive for creating. If that's you, please reach out below!
                        </p>
                    </div>
                </div>
                <div className={styles.pictureDiv}>
                    <img src={profilePic} alt="profile" className={styles.image}/>
                </div>
            </div>
            <a href='#p5' className={styles.arrow}>
            <div className={styles.buttonDiv}>
                <p className={styles.downText}>Contact Me</p>
                <FaAngleDoubleDown className={styles.down}/>
            </div>
            </a>
        </div>
    )

}