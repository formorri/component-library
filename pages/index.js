import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Button1 } from '../components';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Component Library</title>
        <meta name='description' content='Compile all my reusable components' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>Component Library</div>
      <Button1 link='/button' text='Buttons' backgroundColor='#958AF5' textColor='white'></Button1>
      <Button1 link='/carousel' text='Carousels' backgroundColor='#958AF5' textColor='white'></Button1>
      <Button1 link='/motion' text='Motions' backgroundColor='#958AF5' textColor='white'></Button1>
      <Button1 link='/tab' text='Tabs' backgroundColor='#958AF5' textColor='white'></Button1>
      <Button1 link='/cardstack' text='Card Stack' backgroundColor='#958AF5' textColor='white'></Button1>
    </div>
  )
}
