import React from 'react';
import styles from './landing.module.scss';
import {ReactComponent as Illustration} from '../../assets/svg/search.svg'; 

export default function Landing(props: any) {
    return (
        <div className={styles.landing}>
            <div className={styles.container}>
                
                <h1>Prism. Convert scanned documents and images into editable text files.</h1>
                <p>Prism is a collaborative, fast and reliable optical character recognition (OCR) software. Convert your scanned documents and images into editable text files</p>

                <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/prismocr/ocr">Download</a>
            </div> 
            <div className={styles.illustration}>
                <Illustration/>
            </div>
        </div>
    );
}