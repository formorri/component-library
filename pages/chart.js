import styles from '../styles/Carousel.module.scss'
import Head from 'next/head'
import { Doughnut1 } from '../chart'

const data = [
  { label: 'Red', value: 20 },
  { label: 'Blue', value: 30 },
  { label: 'Green', value: 50 },
];

export default function ChartPage() {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <div>Charts</div>
      <Doughnut1 data={data} />
    </div>
  )
}
