import { useState } from 'react';

import type { Asset } from '~/types/assets';
import { Button } from '~/styles/button';
import {
  moneyFormatter,
  percentageFormatter,
  abbreviatedNumberFormatter
} from '~/utils/numberFormatter';
import BuyAssetModal from '~/components/BuyAssetModal/BuyAssetModal';

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
  const [modalAsset, setModalAsset] = useState<Asset | null>(null);
  return (
    <>
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
                  {moneyFormatter(+asset.priceUsd)}
                  <ChangePercent
                    changeSign={asset.changePercent24Hr[0] !== '-'}
                  >
                    {percentageFormatter(+asset.changePercent24Hr)}
                  </ChangePercent>
                </div>
              </NameAndPrice>
            </MainInfo>
            <Button secondary large onClick={() => setModalAsset(asset)}>
              Buy
            </Button>
          </AssetContainer>
          <AdditionalInfo>
            <AdditionalInfoItem>
              <AdditionalInfoItemTitle>Supply</AdditionalInfoItemTitle>
              <AdditionalInfoItemValue>
                {`${abbreviatedNumberFormatter(+asset.supply)} ${asset.symbol}`}
              </AdditionalInfoItemValue>
            </AdditionalInfoItem>
            {asset.maxSupply && (
              <AdditionalInfoItem>
                <AdditionalInfoItemTitle>Max Supply</AdditionalInfoItemTitle>
                <AdditionalInfoItemValue>
                  {`${abbreviatedNumberFormatter(+asset.maxSupply)} ${
                    asset.symbol
                  }`}
                </AdditionalInfoItemValue>
              </AdditionalInfoItem>
            )}
            <AdditionalInfoItem>
              <AdditionalInfoItemTitle>Market Cap</AdditionalInfoItemTitle>
              <AdditionalInfoItemValue>
                {abbreviatedNumberFormatter(+asset.marketCapUsd, true)}
              </AdditionalInfoItemValue>
            </AdditionalInfoItem>
            <AdditionalInfoItem>
              <AdditionalInfoItemTitle>Volume (24h)</AdditionalInfoItemTitle>
              <AdditionalInfoItemValue>
                {abbreviatedNumberFormatter(+asset.volumeUsd24Hr, true)}
              </AdditionalInfoItemValue>
            </AdditionalInfoItem>
            {asset.vwap24Hr && (
              <AdditionalInfoItem>
                <AdditionalInfoItemTitle>Average (24h)</AdditionalInfoItemTitle>
                <AdditionalInfoItemValue>
                  {moneyFormatter(+asset.vwap24Hr)}
                </AdditionalInfoItemValue>
              </AdditionalInfoItem>
            )}
          </AdditionalInfo>
        </StyledContainer>
      </Background>
      <BuyAssetModal modalAsset={modalAsset} setModalAsset={setModalAsset} />
    </>
  );
}

export default AssetCard;
