import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Carousel, CarouselVertical, CarouselVerticalTabs, Card } from '../components';

const carouselData = [
  {
    key: 1,
    content: 'slide1',
    tabContent: 'This is text for tab 1'
  },
  {
    key: 2,
    content: 'slide2',
    tabContent: 'This is text for tab 2'
  },
  {
    key: 3,
    content: 'slide3',
    tabContent: 'This is text for tab 3'
  },
  {
    key: 4,
    content: 'slide4',
    tabContent: 'This is text for tab 4'
  },
  {
    key: 5,
    content: 'slide5',
    tabContent: 'This is text for tab 5'
  },
  {
    key: 6,
    content: 'slide6',
    tabContent: 'This is text for tab 6'
  },
  {
    key: 7,
    content: 'slide7',
    tabContent: 'This is text for tab 7'
  },
  {
    key: 8,
    content: 'slide8',
    tabContent: 'This is text for tab 8'
  },
  {
    key: 9,
    content: 'slide9',
    tabContent: 'This is text for tab 9'
  },
];


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Component Library</title>
        <meta name='description' content='Compile all my reusable components' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Carousel>
        {carouselData.map((item) => (
          <Card key={item.key}>
            <p>{item.content}</p>
          </Card>
        ))}
      </Carousel>
      <CarouselVertical>
        {carouselData.map((item) => (
          <Card key={item.key}>
            <p>{item.content}</p>
          </Card>
        ))}
      </CarouselVertical>
      <CarouselVerticalTabs carouselData={carouselData} />


    </div>
  )
}
