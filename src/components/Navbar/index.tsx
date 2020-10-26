import React from 'react';
import styles from './navbar.module.scss';
import Logo from '../../assets/png/logo.png';
import Button from '../Button';

export default function(props: any) {
    return (
        <div className={styles.navbar}>
           <img src={Logo}/>

           <ul>
               <li>
                   Home
               </li>
               <li>
                   Project
               </li>
               <li>
                   Team
               </li>
               <li>
                   About
               </li>
           </ul>

            <Button title={"Download"}/>
           
        </div>
    )
}