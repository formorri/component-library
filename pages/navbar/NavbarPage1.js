import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/NavbarPage.module.scss'
import { Navbar1 } from '../../components';

const sections = ['home', 'highlights', 'messages', 'performance', 'value', 'downloads'];

export default function NavbarPage1() {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <Navbar1 />
      {sections.map((item, index) => (
        <section className={styles.section} key={index} id={item}>{item}</section>
      ))}
    </div>
  )
}