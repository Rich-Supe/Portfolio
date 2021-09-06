
import { Canvas } from 'react-three-fiber';
import { useRef, useEffect, Suspense } from 'react';
import { OrbitControls } from "@react-three/drei";
import { FaAngleDoubleDown } from 'react-icons/fa'
import { AiFillLinkedin, AiFillGithub, AiFillFileText } from 'react-icons/ai'
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/all";
// import { timeline } from 'gsap';

// import Nav from './components/Nav';
// import Footer from './components/Footer';
import Environment from './components/Environment';
import Geometry from './components/Geometry'
import Projects from './components/Projects'
import Technologies from './components/Technologies';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import './App.css';
import { GridHelper } from 'three';

function App() {
    const content = CSSRulePlugin.getRule("#content:before");
    // const h1 = document.querySelector("h1");
    // const p = document.querySelector("p");
    const h1Ref = useRef(null);
    const pRef = useRef(null);
    const s1Ref = useRef(null);
    const s2Ref = useRef(null);
    const s3Ref = useRef(null);
    const tl = gsap.timeline();

    useEffect(() => {
        tl.from(content, { delay: .5, duration: 4, cssRule: {scaleX: 0}})
        tl.to(h1Ref.current, { duration: 2, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: '30px' }, '-=3')
        tl.to(pRef.current, { duration: 3, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: '30px' }, '-=2')
        tl.to(s1Ref.current, { duration: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: '10px' }, '-=1.6')
        tl.to(s2Ref.current, { duration: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: '10px' }, '-=1.4')
        tl.to(s3Ref.current, { duration: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: '10px' }, '-=1.2')
    }, [])

  return (
    <div className="body">
        <div className="nav">
            <ul className='navList'>
                <li className='navLi'><a href="#p1" className='navA'>Home</a></li>
                <li className='navLi'><a href="#p2" className='navA'>Projects</a></li>
                <li className='navLi'><a href="#p3" className='navA'>Technologies</a></li>
                <li className='navLi'><a href="#p4" className='navA'>About Me</a></li>
                <li className='navLi'><a href="#p5" className='navA'>Contact Me</a></li>
            </ul>
        </div>
        <div id="container">
            <div id="content">
                <h1 ref={h1Ref} className='name'>Rich Supe</h1>
                {/* <div className='rightSide'> */}
                    <p ref={pRef} className='role'>Full-Stack Software Engineer</p>
                    <div id='socials'>
                        <ul id="socialsList">
                            <li>
                                <a id='s1' ref={s1Ref} target="_blank" href='https://www.linkedin.com/in/richard-supe' className='anchorT'>
                                    {/* LinkedIn */}
                                    <AiFillLinkedin className='socialIcons'/>
                                </a>
                            </li>
                            <li>
                                <a id='s2' ref={s2Ref} target="_blank" href='https://github.com/Rich-Supe' className='anchorT'>
                                    {/* Github */}
                                    <AiFillGithub className='socialIcons'/>
                                    </a>
                            </li>
                            <li>
                                <a id='s3' ref={s3Ref} target="_blank" href='https://docs.google.com/document/d/1LC3_jW-G1jtCPWpUj680A5HujF5qzUPGnJweSasCvYI/edit?usp=sharing' className='anchorT'>
                                    <p className='resume'>Resume</p>
                                    {/* <AiFillFileText className='socialIcons'/> */}
                                    </a>
                            </li>
                        </ul>
                    </div>
                {/* </div> */}
            </div>
        </div>
        <a href="#p2" className='downpg1'>
            <div className='buttonDiv' className='arrow1'>
                    {/* <p className='downText'>Projects</p> */}
                    {/* <FaAngleDoubleDown className='down'/> */}
                    <div className='arrow'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </a>
        <Canvas className='canvas' id='p1'>
            <Suspense fallback={null}>
                <pointLight color='white' position={[10, -10, 0]} intensity={3}/>
                {/* <spotLight color='white' position={[10, 100, 10]} intensity={2} angle={0.5} penumbra={1} castShadow /> */}
                {/* <spotLightShadow /> */}
                {/* <spotLightHelper /> */}
                <Environment/>
                <Geometry />
                {/* <gridHelper /> */}
            </Suspense>
            {/* <OrbitControls /> */}
        </Canvas>
        <Projects />
        <Technologies />
        <AboutMe />
        {/* <Nav/> */}
        {/* <Footer/> */}
        <ContactMe/>
    </div>
  );
}

export default App;
