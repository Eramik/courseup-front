import React from 'react'
import styles from './Footer.module.scss';
import FooterLogoFacebook from '../../img/FooterLogoFacebook.png';
import FooterLogoTelegram from '../../img/FooterLogoTelegram.png';
import FooterLogoInstagram from '../../img/FooterLogoInstagram.png';
const Footer = (props) => {
    return (
        <footer className={styles.Footer}>
            <h3 className={styles.FooterText}>© 2020 CourseUp</h3>
                <div className={styles.FooterImage}>
                    <img src={FooterLogoFacebook} alt="logoFacebook" className={styles.FooterImg}>
                    </img>
                    <img src={FooterLogoTelegram} alt="logoTelegram" className={styles.FooterImg}>
                    </img>
                    <img src={FooterLogoInstagram} alt="logoInstagram" className={styles.FooterImg}>
                    </img>
                </div>
        </footer>
    );
}

export default Footer