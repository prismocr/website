import React from 'react';
import styles from './navbar.module.scss';
import Logo from '../../assets/png/logo.png';

export default function Navbar(props: any) {
    return (
        <div className={styles.navbar}>
           <img alt="logo" src={Logo}/>

           <ul>
               <li>
                   Home
               </li>
               <li>
                   Features
               </li>
               <li>
                   About
               </li>
           </ul>

            <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/prismocr/ocr">Download</a>
           
        </div>
    )
}