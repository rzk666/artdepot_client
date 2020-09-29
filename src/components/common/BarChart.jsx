/* eslint-disable no-new */
import React, { Component } from 'react';
// Images
import OrdersIcons from '../../static/images/icons/הזמנות.svg';
// Components
import Chart from 'react-apexcharts';
// Libs
import { MONTHS } from '../../common/app-const';
// Styles
import styles from './BarChart.module.scss';

// ----- Help Functions ----- //
const pastYear = () => {
  const dates = [];
  for (let i = 0; i < 12; i += 1) {
    const currentDate = new Date();
    currentDate.setDate(1);
    currentDate.setMonth(currentDate.getMonth() - i);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const monthName = MONTHS[month].length > 3 ? `${MONTHS[month].slice(0, 3)}'` : MONTHS[month];
    dates.push({ month: monthName, year });
  }
  return dates.reverse();
};

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      options: {
        chart: {
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 200,
            animateGradually: {
              enabled: true,
              delay: 100,
            },
            dynamicAnimation: {
              enabled: true,
              speed: 150,
            },
          },
          foreColor: '#FFFFFF',
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          labels: {
            style: {
              fontSize: '16px',
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              fontSize: '16px',
            },
          },
        },
        tooltip: {
          theme: 'dark',
        },
        colors: ['#d1435b', '#5E72E4', '#FFFFFF'],
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
            left: 35,
          },
        },

        labels: pastYear().map((el) => el.month),
      },
      series: [
        {
          name: 'הזמנות',
          data: [1, 2, 3, 1, 7, 6, 3, 2, 2, 3, 1, 7],
        },
        {
          name: 'התחברויות',
          data: [12, 4, 8, 3, 15, 25, 13, 18, 14, 11, 8, 25],
        },
        {
          name: 'שווי (אלף ש"ח)',
          data: [11, 4, 2, 3, 12, 8, 14, 21, 8, 2, 1, 6],
        },
      ],
    };
  }

  componentDidMount() {
    const { dates, data } = this.state;
  }

  render() {
    const { options, series } = this.state;
    const current = this.containerRef.current || { clientWidth: 0, clientheight: 0 };

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src={OrdersIcons}
            alt="ChartIcon"
            className={styles.image}
          />
          הזמנות
        </div>
        <div ref={this.containerRef} className={styles.chart_container}>
          <Chart
            width={`${current.clientWidth - 15}px`}
            height={`${current.clientHeight - 15}px`}
            options={options}
            series={series}
            type="bar"
          />
        </div>
      </div>
    );
  }
}
