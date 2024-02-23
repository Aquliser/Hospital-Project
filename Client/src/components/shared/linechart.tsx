import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const LineChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      let newChartInstance: Chart;

      if (chartRef.current.chart) {
        // Destroy previous chart instance if it exists
        chartRef.current.chart.destroy();
      }

      newChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Sample Data 1',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            },
            {
              label: 'Sample Data 2',
              data: [45, 67, 78, 65, 70, 62, 55],
              fill: false,
              borderColor: 'rgb(0,0,0)',
              tension: 0.1
            }
          ]
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              grid: {
                display: false,
              },
              beginAtZero: false
            }
          }
        }
      });

      chartRef.current.chart = newChartInstance;

      return () => {
        if (newChartInstance) {
          newChartInstance.destroy();
        }
      };
    }
  }, []);

  return (
    <div className="justify-center">
      <div className="h-1/4 bg-gray-100 items-center rounded-lg">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default LineChart;
