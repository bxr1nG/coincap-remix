import { useNavigate } from '@remix-run/react';

import type { Asset } from '~/types/assets';
import { Button } from '~/styles/button';
import {
  moneyFormatter,
  percentageFormatter,
  abbreviatedNumberFormatter
} from '~/utils/numberFormatter';
import {
  ClickableTr,
  Table as StyledTable,
  Td,
  PercentTd,
  Thead
} from '~/styles/table';

import { Symbol } from './styles';
import { COLUMNS } from './constants';

function AssetsTable(props: {
  assets: Asset[];
  setModalAsset: (asset: Asset | null) => void;
}) {
  const { assets, setModalAsset } = props;
  const navigate = useNavigate();

  const handleRowClick = (asset: Asset) => {
    setModalAsset(asset);
  };
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
            <Td textAlign="center">{asset.rank}</Td>
            <Td textAlign="left">
              <div>{asset.name}</div>
              <Symbol>{asset.symbol}</Symbol>
            </Td>
            <Td textAlign="right" hideMobile>
              {abbreviatedNumberFormatter(+asset.supply)}
            </Td>
            <Td textAlign="right">{moneyFormatter(+asset.priceUsd)}</Td>
            <PercentTd
              textAlign="right"
              changeSign={asset.changePercent24Hr[0] !== '-'}
            >
              {percentageFormatter(+asset.changePercent24Hr)}
            </PercentTd>
            <Td textAlign="center" hideMobile>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRowClick(asset);
                }}
              >
                +
              </Button>
            </Td>
          </ClickableTr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default AssetsTable;
