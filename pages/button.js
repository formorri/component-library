import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Button.module.scss'
import { Button1, Button2 } from '../components';

export default function buttonPage() {
  return (
    <div className={styles.container}>
      <Button1 link='/' text='Button' backgroundColor='#958AF5' textColor='white'></Button1>
      <Button2
        text='Button with dropdown'
        backgroundColor='#958AF5'
        textColor='white'
        link={[
          {
            content: 'item1',
            link: '/'
          },
          {
            content: 'item2',
            link: '/'
          },
          {
            content: 'item3',
            link: '/'
          },
        ]}
      />
    </div>
  )
}
