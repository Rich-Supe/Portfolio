import {useRef} from 'react'
// import { gsap } from 'gsap'
// import { three } from 'three'

import styles from './AboutMe.module.css'
// import hoverEffect from 'hover-effect'
import profilePic1 from '../../assets/profile3.jpg'
import profilePic2 from '../../assets/profile5.jpg'
// import profilePic3 from '../../assets/profile6.jpg'
import SimpleAccordion from '../../assets/Javascript/SimpleAccordion'


export default function AboutMe() {
    // const profilePic = useRef(null)

    // const m = new hoverEffect({
    //     // parent: document.querySelector('.image'),
    //     parent: profilePic.current,
    //     // parent: document.querySelector('#pic'),
    //     intensity: 0.3,
    //     image1: profilePic1,
    //     image2: profilePic3,
    //     // displacementImage: profilePic2,
    //     speedIn: 1.5,
    //     speedOut: 1.5,
    //     easing: 'ease-in',
    //     hover: true
    // });
    
    
    return (
        <div className={styles.aboutMe} id='p4'>
            {/* <script src="three.min.js"></script>
            <script src="TweenMax.min.js"></script> */}
            <div className={styles.aboutMe__container}>
                <div className={styles.infoDiv}>
                    <div className={styles.card}>
                        <h1 className={styles.header}>Hey, Nice to Meet You!</h1>
                        {/* <p className={styles.description}>
                            I'm a fullstack developer that loves to connect with people and solve problems. I was born in Cincinnati and spent the last 10 years in Chicago. Previous to coding full time, I worked in the restaurant industry as an Operations Manager for 5 years. I try to challenge myself and learn new things every day. I'm hoping to find other people that share my drive for creating. If that's you, please reach out below!
                        </p> */}
                        <SimpleAccordion />
                    </div>
                </div>
                <div className={styles.pictureDiv}>
                    <img 
                        src={profilePic1} 
                        alt="profile" 
                        className={styles.image}
                        onMouseOver={e => (e.currentTarget.src= profilePic2)}
                        onMouseOut={e => (e.currentTarget.src= profilePic1)}
                        />
                            {/* {m} */}
                    {/* <div className={styles.image} ref={profilePic} id='pic'>
                    </div>
                    {console.log(typeof m)} */}
                </div>
            </div>
            <a href='#p5' className={styles.arrow1}>
            <div className={styles.buttonDiv}>
                {/* <p className={styles.downText}>Contact Me</p>
                <FaAngleDoubleDown className={styles.down}/> */}
                <div className='arrow'>
                            <span></span>
                            <span></span>
                            <span></span>
                    </div>
            </div>
            </a>
        </div>
    )

}