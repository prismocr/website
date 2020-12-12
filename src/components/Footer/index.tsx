import React from 'react';
import Logo from '../../assets/png/prism_transparent.png';
import styles from './footer.module.scss';

export default function Footer(props: any) {
    return (
        <div className={styles.footer}>
            <div className={styles.logo}>
                <img alt="logo" src={Logo}/>
            </div>

            <div className={styles.container}>
                <div>
                    <h3>Prism</h3>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Features</a>
                        </li>
                        <li>
                            <a href="/">Team</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Team</h3>
                    <ul>
                        <li>
                            <a href="https://github.com/trayzen">Léo Benito</a>
                        </li>
                        <li>
                            <a href="https://github.com/aureleoules">Aurèle Oulès</a>
                        </li>
                        <li>
                            <a href="https://github.com/Naexys">Brice Parent</a>
                        </li>
                        <li>
                            <a href="https://github.com/Obeeron">Charles Trodet</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <a href="mailto:contact@prism.org">contact@prism.org</a>
                        </li>
                        <li>
                            <a href="mailto:contact@prism.org">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}