
import { useState } from 'react';

import styles from './ContactMe.module.css'

import { IoMdRocket } from 'react-icons/io'
import { RiMailSendLine } from 'react-icons/ri'

export default function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className={styles.contactMe} id='p5'>
            <a href='#p1' className={styles.upArrow}>
                <IoMdRocket className={styles.icon} />
                {/* <p className={styles.upText}>Beam me up!</p> */}
            </a>
            <h1 className={styles.header}>Looking to work with me?</h1>
            <div className={styles.card}>
                <form className={styles.form} form action="https://formsubmit.co/bfc735cd21b9a4b2c637904767e72cba" method="POST">
                    <div>
                    {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/> */}
                    <input type="hidden" name="_subject" value="Rich Supe Contact Form"></input>
                    {/* <input type="hidden" name="_captcha" value="false"></input> */}
                    <input type="hidden" name="_autoresponse" value="Thanks for connecting with me! I'll get back to you at my earliest convenience.      - Rich Supe"></input>
                    <label>Name</label>
                    <input type="text" name="name" className={styles.nameInput} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div>
                    <label>Email</label>
                    <input type="email" name="email" className={styles.emailInput} onChange={e => setEmail(e.target.value)} required={true}/>
                    </div>
                    <div className={styles.textDiv}>
                    <label>Message</label>
                    <textarea name="message" onChange={e => setMessage(e.target.value)} className={styles.textInput} required={true}/>
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                        <RiMailSendLine className={styles.mailBtn}/>
                    </button>
                </form>
            </div>
        </div>
    )
}