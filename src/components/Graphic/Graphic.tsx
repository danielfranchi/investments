import React from 'react';
import Chart from 'react-apexcharts';

interface ChartValues {
  contributionChart: number[];
  graphWithoutInput: number[];
}

const Graphic = ({ contributionChart, graphWithoutInput }: ChartValues) => {
  const metricas = {
    options: {
      chart: {
        stacked: true,
      },

      xaxis: {
        categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

        title: {
          text: 'Tempo (meses)',
        },
      },

      yaxis: {
        title: {
          text: 'Valor R$',
        },
      },

      colors: ['#000000', '#ed8e53'],

      dataLabels: {
        enabled: false,
      },

      responsive: [
        {
          breakpoint: 1828,
          options: {
            chart: {
              width: 520,
              height: 320,
            },
          },
        },

        {
          breakpoint: 1330,
          options: {
            chart: {
              width: 440,
              height: 320,
            },
          },
        },

        {
          breakpoint: 600,
          options: {
            chart: {
              width: 430,
              height: 320,
            },
          },
        },

        {
          breakpoint: 420,
          options: {
            chart: {
              width: 340,
              height: 320,
            },
          },
        },
      ],

      series: [
        {
          name: 'Sem aporte',
          data: graphWithoutInput,
        },
        {
          name: 'Com aporte',
          data: contributionChart,
        },
      ],
    },
  };

  return (
    <div>
      <Chart
        options={metricas.options}
        series={metricas.options.series}
        type="bar"
        width={700}
        height={320}
      />
    </div>
  );
};

export default Graphic;
