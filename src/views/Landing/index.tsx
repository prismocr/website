import React from 'react';
import Button from '../../components/Button';
import styles from './landing.module.scss';
import {ReactComponent as Illustration} from '../../assets/svg/search.svg'; 

export default function(props: any) {
    return (
        <div className={styles.landing}>
            <div className={styles.container}>
                
                <h1>Prism. Convert scanned documents and images into editable text files.</h1>
                <p>Prism is a collaborative, fast and reliable optical character recognition (OCR) software. Convert your scanned documents and images into editable text files</p>

                <Button title={"Download (soon)"}/>
            </div>
            <div className={styles.illustration}>
                <Illustration/>
            </div>
        </div>
    );
}