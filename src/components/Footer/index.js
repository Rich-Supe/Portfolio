
import styles from './Footer.module.css';

import { FaGithubAlt, FaLinkedin, FaAngellist } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';

function Footer(){

    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <header>SOCIALS</header>
                <ul>
                    <FaGithubAlt className={styles.github}/>
                    <FaLinkedin className={styles.linkedin}/>
                    <FaAngellist className={styles.angellist}/>
                    <FiTwitter className={styles.twitter}/>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;