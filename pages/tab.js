import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Tab.module.scss'
import { TabType, TabSwitcher } from '../components';

const tabData=[
  {
    key: 0,
    label: 'Item 1',
    content: 'Content for Item 1'
  },
  {
    key: 1,
    label: 'Item 2',
    content: 'Content for Item 2'
  },
  {
    key: 3,
    label: 'Item 3',
    content: 'Content for Item 3'
  },
]

const tabSwitcherData=[
  {
    key: 0,
    label: 'Item 0',
    content: 'Content for Item 0'
  },
  {
    key: 1,
    label: 'Item 1',
    content: 'Content for Item 1'
  },
]


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <TabType tabData={tabData} ></TabType>
      <TabSwitcher tabSwitcherData={tabSwitcherData}></TabSwitcher>


    </div>
  )
}
