import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Accordion.module.scss'
import { Accordion1 } from '../components';

const accordionData = [
  {
    key: 0,
    title: 'Item1',
    content: "Commodo elit pariatur ullamco tempor dolor nulla irure aute ipsum ut."
  },
  {
    key: 1,
    title: 'Item2',
    content: "Proident Lorem proident ut ex enim elit sit."
  },
  {
    key: 3,
    title: 'Item3',
    content: "Laboris occaecat enim amet proident consequat veniam."
  },
]

export default function accordionPage() {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <div>Accordion</div>
      <Accordion1 accordionData={accordionData} />
    </div>
  )
}
