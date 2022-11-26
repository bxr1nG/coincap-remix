/* eslint-disable @typescript-eslint/no-explicit-any */
import { normalDateFormatter, shortDateFormatter } from '~/utils/dateFormatter';
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
          return normalDateFormatter(+context[0].label);
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        callback(this: any, value: any): any {
          return shortDateFormatter(this.getLabelForValue(value));
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
