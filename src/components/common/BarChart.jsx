/* eslint-disable no-new */
import React, { Component } from 'react';
// Components
import Chart from 'react-apexcharts';
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
    this.state = {
      options: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        xaxis: {
        },
        colors: ['#ffffff'],
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: true,
          borderColor: '#ffffff',
          strokeDashArray: 0,
          position: 'back',
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
          row: {
            colors: undefined,
            opacity: 0.5,
          },
          column: {
            colors: undefined,
            opacity: 0.5,
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },

        labels: pastYear().map((el) => el.month),
      },
      series: [
        {
          name: 'sales',
          data: [1, 2, 3, 1, 14, 6, 3, 11, 2, 12, 31, 57],
        },
      ],
    };
  }

  componentDidMount() {
    const { dates, data } = this.state;
  }

  render() {
    const { options, series } = this.state;
    const { dimensions } = this.props;
    const { screenWidth, screenHeight} = dimensions;
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
        <div className={styles.chart_container}>
          <Chart
            options={options}
            series={series}
            type="bar"
          />
        </div>
      </div>
    );
  }
}
