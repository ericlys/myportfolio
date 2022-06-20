import styles from './contact.module.scss';
import Lottie from 'react-lottie';

import { FaGithub, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';

import animationData from '../../lotties/spaceman.json';
import { SocialCard } from '../../components/SocialCard';

export default function Contact(){
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return(
    <div className={styles.container}>
      <h1>Contact</h1>
      <div className={styles.content}>
        <form action="https://formsubmit.co/ericlysm@gmail.com" method="POST">
          <input type='text' placeholder='Name' required/>
          <input type='email' placeholder='Email' required/>
          <input type='tel' placeholder='(XX)9 XXXX-XXXX' required/>
          <textarea 
            name='message' 
            placeholder='Type your message here...' 
            required
          />
          <button type="submit">Send</button>
        </form>
        <div>
        <Lottie 
        options={defaultOptions}
          height={'40%'}
          width={'70%'}
        />
        <div className={styles.social}>
          <SocialCard href='https://www.linkedin.com/in/ericlys-moreira-77b803140/' icon={FaLinkedin} text="Linkedin"/>
          <SocialCard href='https://github.com/ericlys' icon={FaGithub} text="Github"/>
          <SocialCard href='https://www.instagram.com/ericlysmoreira/' icon={FaInstagram} text="Instagram"/> 
          <SocialCard href='' icon={FaGoogle} text="ericlysm@gmail.com"/>
        </div>
        </div>
      </div>

    </div>
  )
}