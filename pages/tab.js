import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Tab.module.scss'
import { TabType, TabSwitcher, TabCircular } from '../components';

const tabData = [
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

const tabSwitcherData = [
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

const TabCircularData = [
  {
    key: 0,
    label: 'Section 1',
    item1:
      [
        'Item 1 text 1',
        'Item 1 text 2',
        'Item 1 text 3',
        'Item 1 text 4',
      ],
    item2:
      [
        'Item 2 text 1',
        'Item 2 text 2',
      ],
    item3:
      [
        'Item 3 text 1',
        'Item 3 text 2',
      ],
    item4:
      [
        'Item 4 text 1',
        'Item 4 text 2',
      ],
    item5:
      [
        'Item 5 text 1',
        'Item 5 text 2',
        'Item 5 text 3',
        'Item 5 text 4',
        'Item 5 text 5',
        'Item 5 text 6',
      ],
  },
  {
    key: 1,
    label: 'Section 2',
    item1:
      [
        'Item 1 text 1',
        'Item 1 text 2',
        'Item 1 text 3',
        'Item 1 text 4',
      ],
    item2:
      [
        'Item 2 text 1',
        'Item 2 text 2',
      ],
    item3:
      [
        'Item 3 text 1',
        'Item 3 text 2',
      ],
    item4:
      [
        'Item 4 text 1',
        'Item 4 text 2',
      ],
    item5:
      [
        'Item 5 text 1',
        'Item 5 text 2',
        'Item 5 text 3',
        'Item 5 text 4',
        'Item 5 text 5',
        'Item 5 text 6',
      ],
  },
]


export default function tabPage() {
  return (
    <div className={styles.container}>
      <Head>
      </Head>
      <TabType tabData={tabData} ></TabType>
      <TabSwitcher tabSwitcherData={tabSwitcherData}></TabSwitcher>
      <TabCircular></TabCircular>
    </div>
  )
}
