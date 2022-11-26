import { useContext, useState } from 'react';

import type { Asset } from '~/types/assets';
import Modal from '~/components/Modal/Modal';
import { Button } from '~/styles/button';
import { Input } from '~/styles/input';
import { moneyFormatter } from '~/utils/numberFormatter';
import { PortfolioContext } from '~/context/portfolioContext';

function BuyAssetModal(props: {
  modalAsset: Asset | null;
  setModalAsset: (asset: Asset | null) => void;
}) {
  const { modalAsset, setModalAsset } = props;
  const [inputValue, setInputValue] = useState<number>(1);

  const { portfolio, setPortfolio } = useContext(PortfolioContext);
  return (
    <Modal
      active={!!modalAsset}
      hideModal={() => setModalAsset(null)}
      title={`Buy ${modalAsset?.name} at ${
        modalAsset?.priceUsd ? moneyFormatter(+modalAsset.priceUsd) : null
      } apiece`}
      footer={
        <Button
          disabled={!inputValue}
          onClick={() => {
            if (modalAsset) {
              setPortfolio([
                ...portfolio,
                {
                  dateId: new Date().getTime(),
                  id: modalAsset.id,
                  name: modalAsset.name,
                  amount: inputValue,
                  price: +modalAsset.priceUsd,
                  total: inputValue * +modalAsset.priceUsd
                }
              ]);
            }
            setModalAsset(null);
          }}
        >
          Buy
        </Button>
      }
      large
    >
      <Input
        type="number"
        placeholder="Amount"
        width="8rem"
        defaultValue={inputValue}
        onChange={(e) => setInputValue(+e.target.value)}
        step={0.01}
        outlined
        hideArrows
      />
    </Modal>
  );
}

export default BuyAssetModal;
