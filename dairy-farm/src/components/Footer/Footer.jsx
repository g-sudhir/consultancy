import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export default function Footer(){
    return(
        
        <footer className={styles.footer}>
            <div className={styles.foot1}>
               <div className={styles.foot1__address}>
                <p>ADDRESS:</p>
                <p>SARAVANA DAIRY FARM,<br/>
                    2/112,KANGAYAM ROAD,ANAIPALAYAM,<br/>
                    UTHUKULI R.S,TIRUPUR-638753
                </p>
               </div>
               <div className={styles.foot1__page}>
                <p>PROFILE</p>
                <ul>
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/product">PRODUCT</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
               </div>
               <div className={styles.foot1__product}>
                <p>PRODUCTS</p>
                <ul>
                    <li><a href="#">MILK</a></li>
                    <li><a href="#">CURD</a></li>
                    <li><a href="#">BUTTER MILK</a></li>
                    <li><a href="#">BUTTER</a></li>
                    <li><a href="#">GHEE</a></li>
                </ul>
               </div>
            </div>
            <div className={styles.foot2}>
               <div className={styles.location__qr}>
                <p>LOCATION:</p>
                <img src="../../public/4A964774-B3FA-4DF7-884E-1B62B8C7414C 1.png"/>
               </div>
               <div className={styles.contact}>
                  <p>CONTACT US</p>
                  <div>
                  <a href="#" className={styles.whatsapp}>
                  <FontAwesomeIcon icon="fa-brands fa-whatsapp" style={{color: "#63E6BE",}} />
                    <p>Whatsapp</p>
                  </a>
                  <a href="#" className={styles.gmail}>
                  <FontAwesomeIcon icon={faEnvelope} />
                    <p>Gmail</p>
                  </a>
                  </div>
               </div>
               <div className={styles.social_media}>
                <p>FOLLOW US ON</p>
                <div>

                </div>
               </div>
            </div>
        </footer>
    );
}