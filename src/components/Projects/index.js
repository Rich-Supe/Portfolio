

import styles from './Projects.module.css'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import Cellars from './Cellars'
import GameBnb from './GameBnb'
import FureverWalks from './FureverWalks';
import Portfolio from './Portfolio';

// Import Swiper styles
// import 'swiper-bundle.css'
// import '../../swiper/css';
import '../../../node_modules/swiper/swiper-bundle.css'

// module "/home/richsupe/portfolio/portfolio/node_modules/swiper/swiper"


// import Swiper core and required modules
// import SwiperCore, {
//     Pagination,Navigation
// } from '../../../node_modules/swiper';
  
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation]);

function Projects() {


    return (
        <div className={styles.projects} id='p2'>
            {/* <h1 >Projects</h1> */}
            <Swiper
                className={styles.swiper}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                // pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide className= {styles.slide}>
                    <GameBnb />
                </SwiperSlide>
                <SwiperSlide className= {styles.slide}>
                    <Portfolio />
                </SwiperSlide>
                <SwiperSlide className= {styles.slide}>
                    <FureverWalks />
                </SwiperSlide>
                <SwiperSlide className= {styles.slide}>
                    <Cellars />
                </SwiperSlide>
                </Swiper>
                    <a href='#p3' className={styles.downpg1}>
                <div className={styles.buttonDiv}>
                        {/* <p className={styles.downText}>My Stack</p> */}
                        {/* <FaAngleDoubleDown className={styles.down}/> */}
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

export default Projects;


