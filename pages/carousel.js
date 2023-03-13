import styles from '../styles/Carousel.module.scss'
import Head from 'next/head'
import { Carousel, CarouselCard, CarouselVertical, CarouselVerticalTabs, Card } from '../components';

const carouselData = [
  {
    key: 1,
    content: 'slide1',
    tabContent: 'This is text for tab 1',
    color: '#958AF5'
  },
  {
    key: 2,
    content: 'slide2',
    tabContent: 'This is text for tab 2',
    color: '#AFFC41'
  },
  {
    key: 3,
    content: 'slide3',
    tabContent: 'This is text for tab 3',
    color: '#427AA1'
  },
  {
    key: 4,
    content: 'slide4',
    tabContent: 'This is text for tab 4',
    color: '#4DFDE8'
  },
  {
    key: 5,
    content: 'slide5',
    tabContent: 'This is text for tab 5',
    color: '#FC67F2'
  },
  {
    key: 6,
    content: 'slide6',
    tabContent: 'This is text for tab 6',
    color: '#4DFDE8'
  },
  {
    key: 7,
    content: 'slide7',
    tabContent: 'This is text for tab 7',
    color: '#958AF5'
  },
  {
    key: 8,
    content: 'slide8',
    tabContent: 'This is text for tab 8',
    color: '#AFFC41'
  },
  {
    key: 9,
    content: 'slide9',
    tabContent: 'This is text for tab 9',
    color: '#427AA1'
  },
];


export default function CarouselPage() {
  return (
    <div className={styles.container}>
      <Head>
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
      <CarouselCard carouselData={carouselData}/>


    </div>
  )
}
