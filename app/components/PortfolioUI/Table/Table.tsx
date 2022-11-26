import { useState } from 'react';

import type { PortfolioAsset, PortfolioSummary } from '~/types/assets';
import { moneyFormatter, percentageFormatter } from '~/utils/numberFormatter';
import PortfolioConfirmationModal from '~/components/PortfolioUI/ConfirmationModal/ConfirmationModal';
import { Button } from '~/styles/button';
import {
  Table as StyledTable,
  Td,
  PercentTd,
  Thead,
  ClickableTr
} from '~/styles/table';

import { COLUMNS } from './constants';

function PortfolioTable(props: {
  portfolioData: {
    assets: PortfolioAsset[];
    summary: PortfolioSummary;
  };
}) {
  const { portfolioData } = props;

  const [confirmationAsset, setConfirmationAsset] =
    useState<PortfolioAsset | null>(null);

  return (
    <>
      <StyledTable simpleStyle maxHeight="70%">
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
          {portfolioData.assets.map((asset) => (
            <ClickableTr
              key={asset.dateId}
              onClick={() => {
                setConfirmationAsset(asset);
              }}
            >
              <Td textAlign="left">
                <div>{asset.name}</div>
              </Td>
              <Td textAlign="right">{asset.amount}</Td>
              <Td textAlign="right" hideMobile>
                {moneyFormatter(asset.price)}
              </Td>
              <Td textAlign="right" hideMobile>
                {moneyFormatter(asset.total)}
              </Td>
              <Td textAlign="right" hideMobile>
                {moneyFormatter(asset.currentPrice)}
              </Td>
              <Td textAlign="right">{moneyFormatter(asset.currentTotal)}</Td>
              <PercentTd textAlign="right" changeSign={asset.change >= 0}>
                {percentageFormatter(asset.change, true)}
              </PercentTd>
              <Td textAlign="center" hideMobile>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setConfirmationAsset(asset);
                  }}
                >
                  &#9587;
                </Button>
              </Td>
            </ClickableTr>
          ))}
        </tbody>
      </StyledTable>
      <PortfolioConfirmationModal
        confirmationAsset={confirmationAsset}
        setConfirmationAsset={setConfirmationAsset}
      />
    </>
  );
}

export default PortfolioTable;
