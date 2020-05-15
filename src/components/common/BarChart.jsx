/* eslint-disable no-new */
import React, { Component } from 'react';
// Components
import Chart from 'chart.js';
// Libs
import { app } from '../../common/config';
import { MONTHS } from '../../common/app-const';
// Styles
import styles from './BarChart.module.scss';

// ----- Consts ----- //
const { cdn } = app;

// ----- Help Functions ----- //
const pastYear = () => {
  const dates = [];
  for (let i = 0; i < 12; i += 1) {
    const currentDate = new Date();
    currentDate.setDate(1);
    currentDate.setMonth(currentDate.getMonth() - i);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    dates.push({ month: MONTHS[month], year });
  }
  return dates.reverse();
};

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.state = {
      dates: pastYear(),
      data: pastYear().map((date) => ({
        name: date.month,
        value: Math.floor(Math.random() * 30) + 1,
        year: date.year,
      })),
    };
  }

  componentDidMount() {
    const { dates, data } = this.state;
    const myChartRef = this.chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: dates.map((date) => date.month),
        datasets: [
          {
            label: 'הזמנות',
            data: data.map((el) => el.value),
            backgroundColor: '#5E72E4',
          },
        ],
      },
      options: {
        tooltips: {
          enabled: true,
          callbacks: {
            title: (tooltipItem) => `${tooltipItem[0].label} ${data[tooltipItem[0].index].year}`,
          },
        },
      },
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src={`${cdn}/הזמנות.svg`}
            alt="ChartIcon"
            className={styles.image}
          />
          הזמנות
        </div>
        <canvas
          className={styles.chart}
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    );
  }
}
