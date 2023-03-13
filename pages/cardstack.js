import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/CardStack.module.scss'
import { CardStack1 } from '../components'

const cardData = [
  {
    key: 0,
    color: '#958AF5',
    header: 'Card 1',
    text: 'Sint reprehenderit labore enim officia tempor reprehenderit qui excepteur culpa cupidatat non.',
  },
  {
    key: 1,
    color: '#AFFC41',
    header: 'Card 2',
    text: 'Sint reprehenderit labore enim officia tempor reprehenderit qui excepteur culpa cupidatat non.',
  },
  {
    key: 2,
    color: '#427AA1',
    header: 'Card 3',
    text: 'Sint reprehenderit labore enim officia tempor reprehenderit qui excepteur culpa cupidatat non.',
  },
  {
    key: 3,
    color: '#FC67F2',
    header: 'Card 4',
    text: 'Sint reprehenderit labore enim officia tempor reprehenderit qui excepteur culpa cupidatat non.',
  },
]

export default function cardstackPage() {
  return (
    <div className={styles.container}>
      <div>Card Stack</div>
      <CardStack1 cardData={cardData}></CardStack1>
    </div>
  )
}
