import { useNavigate } from '@remix-run/react';
import numeral from 'numeral';

import type { TableAsset } from '~/types/assets';
import { Button } from '~/styles/button';

import {
  ClickableTr,
  Table as StyledTable,
  Td,
  PercentTd,
  Thead,
  Symbol
} from './styles';
import { COLUMNS } from './constants';

function Table(props: { assets: TableAsset[] }) {
  const { assets } = props;
  const navigate = useNavigate();
  return (
    <StyledTable>
      <Thead>
        <tr>
          {COLUMNS.map((column) => (
            <Td
              key={column.name}
              as="th"
              textAlign={column.textAlign}
              hideMobile={column.hideMobile}
            >
              {column.name}
            </Td>
          ))}
        </tr>
      </Thead>
      <tbody>
        {assets.map((asset) => (
          <ClickableTr
            key={asset.id}
            onClick={() => {
              navigate(`/assets/${asset.id}`);
            }}
          >
            <Td textAlign="center" hideMobile={false}>
              {asset.rank}
            </Td>
            <Td textAlign="left" hideMobile={false}>
              <div>{asset.name}</div>
              <Symbol>{asset.symbol}</Symbol>
            </Td>
            <Td textAlign="right" hideMobile>
              {numeral(asset.supply).format('(0.00a)')}
            </Td>
            <Td textAlign="right" hideMobile={false}>
              {+asset.priceUsd < 1
                ? numeral(asset.priceUsd).format('$0,0.00000')
                : numeral(asset.priceUsd).format('$0,0.00')}
            </Td>
            <PercentTd
              textAlign="right"
              hideMobile={false}
              changeSign={asset.changePercent24Hr[0] !== '-'}
            >
              {numeral(+asset.changePercent24Hr / 100).format('0.00%')}
            </PercentTd>
            <Td
              textAlign="center"
              hideMobile
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Button type="submit">+</Button>
            </Td>
          </ClickableTr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
