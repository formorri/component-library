import styles from './Doughnut1.module.scss';
import React from 'react'
import { motion } from 'framer-motion';
import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
Chart.register(ArcElement);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      label: '# of Votes',
      tooltip: true,
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        '#958AF5',
        '#AFFC41',
        '#427AA1',
        '#FC67F2',
        '#4DFDE8'
      ],
      // borderColor: [
      //   'rgba(255, 99, 132, 1)',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      //   'rgba(153, 102, 255, 1)',
      // ],
      borderWidth: 1,
    },
  ],
};

const Doughnut1 = () => {
  return (
    <div className={styles.container}>
      <div >
        Doughnut1
      </div>
      <div className={styles.wrapper}>
        <Doughnut data={data} />
      </div>
    </div>
  )
}

export default Doughnut1
