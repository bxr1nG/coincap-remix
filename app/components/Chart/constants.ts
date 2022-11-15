/* eslint-disable @typescript-eslint/no-explicit-any */
import { moneyFormatter } from '~/utils/numberFormatter';

export const OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false
  },
  layout: {
    padding: {
      top: 30,
      bottom: 30
    }
  },
  plugins: {
    title: {
      display: true,
      text: 'Price History',
      font: {
        size: 20
      }
    },
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label(context: any) {
          let label: string = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += moneyFormatter(+context.parsed.y);
          }
          return label;
        },
        title(context: any) {
          return new Date(+context[0].label).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit'
          });
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        callback(this: any, value: any): any {
          return new Date(this.getLabelForValue(value)).toLocaleDateString(
            'en-us',
            {
              month: '2-digit',
              day: '2-digit'
            }
          );
        },
        maxRotation: 45,
        minRotation: 45,
        autoSkip: true
      }
    },
    y: {
      ticks: {
        callback(value: any): any {
          return moneyFormatter(+value, true);
        },
        autoSkip: true,
        mirror: true
      },
      position: 'right' as const
    }
  }
};
