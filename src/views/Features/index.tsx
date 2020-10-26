import React from 'react';
import styles from './features.module.scss';

import {ReactComponent as Team} from '../../assets/svg/team.svg';
import {ReactComponent as Rocket} from '../../assets/svg/rocket.svg';
import {ReactComponent as Target} from '../../assets/svg/target.svg';


export default function(props: any) {
    return (
        <div className={styles.features}>
            <h1>Features</h1>

            <div className={styles.container}>

                <div className={styles.feature}>
                    <Rocket/>
                    <h3>Fast</h3>
                    <p>Prism is built in C to achieve very high-performances.</p>
                </div>
                <div className={styles.feature}>
                    <Target/>
                    <h3>Reliable</h3>
                    <p>Prism's neural network is one of the bests in the world and produces highly reliable results.</p>
                </div>
                <div className={styles.feature}>
                    <Team/>
                    <h3>Collaborative</h3>
                    <p>Prism is an open and collaborative project on GitHub. There are currently 4 active contributors.</p>
                </div>
            </div>
        </div>
    );
}