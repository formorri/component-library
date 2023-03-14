import styles from './Doughnut1.module.scss';
import React from 'react'
import { motion } from 'framer-motion';
import { Chart, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip);

const Doughnut1 = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: '# of Votes',
        data: data.map(item => item.value),
        backgroundColor: [
          '#958AF5',
          '#AFFC41',
          '#427AA1',
          '#FC67F2',
          '#4DFDE8'
        ]
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            if (label) {
              const value = context.parsed || 0;
              return `${label}: ${value}`;
            }
            return '';
          }
        }
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };
  

  return (
    <div className={styles.container}>
      <div>
        Doughnut1
      </div>
      <div className={styles.wrapper}>
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  )
}

export default Doughnut1;
