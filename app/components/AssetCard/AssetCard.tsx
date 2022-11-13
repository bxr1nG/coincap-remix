import numeral from 'numeral';

import type { Asset } from '~/types/assets';
import { Button } from '~/styles/button';

import {
  AdditionalInfo,
  AdditionalInfoItem,
  AdditionalInfoItemTitle,
  AdditionalInfoItemValue,
  AssetContainer,
  Background,
  ChangePercent,
  MainInfo,
  NameAndPrice,
  Rank,
  StyledContainer
} from './styles';

function AssetCard(props: { asset: Asset }) {
  const { asset } = props;
  return (
    <Background>
      <StyledContainer>
        <AssetContainer>
          <MainInfo>
            <Rank>
              <div>{asset.rank}</div>
              <div>rank</div>
            </Rank>
            <NameAndPrice>
              <div>{`${asset.name} (${asset.symbol})`}</div>
              <div>
                {+asset.priceUsd < 1
                  ? numeral(asset.priceUsd).format('$0,0.00000')
                  : numeral(asset.priceUsd).format('$0,0.00')}
                <ChangePercent changeSign={asset.changePercent24Hr[0] !== '-'}>
                  {numeral(+asset.changePercent24Hr / 100).format('0.00%')}
                </ChangePercent>
              </div>
            </NameAndPrice>
          </MainInfo>
          <Button secondary large>
            Buy
          </Button>
        </AssetContainer>
        <AdditionalInfo>
          <AdditionalInfoItem>
            <AdditionalInfoItemTitle>Supply</AdditionalInfoItemTitle>
            <AdditionalInfoItemValue>
              {`${numeral(asset.supply).format('(0.00a)')} ${asset.symbol}`}
            </AdditionalInfoItemValue>
          </AdditionalInfoItem>
          {asset.maxSupply && (
            <AdditionalInfoItem>
              <AdditionalInfoItemTitle>Max Supply</AdditionalInfoItemTitle>
              <AdditionalInfoItemValue>
                {`${numeral(asset.maxSupply).format('(0.00a)')} ${
                  asset.symbol
                }`}
              </AdditionalInfoItemValue>
            </AdditionalInfoItem>
          )}
          <AdditionalInfoItem>
            <AdditionalInfoItemTitle>Market Cap</AdditionalInfoItemTitle>
            <AdditionalInfoItemValue>
              {numeral(asset.marketCapUsd).format('($0.00a)')}
            </AdditionalInfoItemValue>
          </AdditionalInfoItem>
          <AdditionalInfoItem>
            <AdditionalInfoItemTitle>Volume (24h)</AdditionalInfoItemTitle>
            <AdditionalInfoItemValue>
              {numeral(asset.volumeUsd24Hr).format('($0.00a)')}
            </AdditionalInfoItemValue>
          </AdditionalInfoItem>
          {asset.vwap24Hr && (
            <AdditionalInfoItem>
              <AdditionalInfoItemTitle>Average (24h)</AdditionalInfoItemTitle>
              <AdditionalInfoItemValue>
                {+asset.vwap24Hr < 1
                  ? numeral(asset.vwap24Hr).format('$0,0.00000')
                  : numeral(asset.vwap24Hr).format('$0,0.00')}
              </AdditionalInfoItemValue>
            </AdditionalInfoItem>
          )}
        </AdditionalInfo>
      </StyledContainer>
    </Background>
  );
}

export default AssetCard;
