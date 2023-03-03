import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Tab.module.scss'
import { Motion1 } from '../motion';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
            </Head>
            <Motion1>Left Fade In Subtle in desktop but fade upwards in mobile</Motion1>

        </div>
    )
}
