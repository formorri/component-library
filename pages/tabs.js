import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Tab1 } from '../components';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <Tab1></Tab1>


    </div>
  )
}
