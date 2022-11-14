import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import type { AssetHistoryStage } from '~/types/assets';

import { OPTIONS } from './constants';
import { ChartContainer } from './styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart(props: { data: AssetHistoryStage[] }) {
  const { data } = props;
  return (
    <ChartContainer>
      <Line
        options={OPTIONS}
        data={{
          labels: data.map((item) => item.time),
          datasets: [
            {
              data: data.map((item) => item.priceUsd),
              label: 'PriceUsd',
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              pointRadius: 0
            }
          ]
        }}
      />
    </ChartContainer>
  );
}

export default Chart;
