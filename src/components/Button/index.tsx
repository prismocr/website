import React from 'react';
import styles from './button.module.scss';

type Props = {
    title?: string
}
export default function Button(props: Props) {
    return (
        <button className={styles.button}>{props.title}</button>
    );
}