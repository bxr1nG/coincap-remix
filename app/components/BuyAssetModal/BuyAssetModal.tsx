import { useState } from 'react';
import { useNavigate } from '@remix-run/react';

import type { Asset } from '~/types/assets';
import Modal from '~/components/Modal/Modal';
import { Button } from '~/styles/button';
import { Input } from '~/styles/input';
import { moneyFormatter } from '~/utils/numberFormatter';
import { buyAsset } from '~/utils/portfolioManager';

function BuyAssetModal(props: {
  modalAsset: Asset | null;
  setModalAsset: (asset: Asset | null) => void;
}) {
  const { modalAsset, setModalAsset } = props;
  const [inputValue, setInputValue] = useState<number>(1);
  const navigate = useNavigate();
  return (
    <Modal
      active={!!modalAsset}
      hideModal={() => setModalAsset(null)}
      title={`Buy ${modalAsset?.name} at ${
        modalAsset?.priceUsd ? moneyFormatter(+modalAsset.priceUsd) : null
      } apiece`}
      footer={
        <Button
          onClick={() => {
            if (modalAsset) {
              buyAsset(modalAsset, inputValue);
            }
            setModalAsset(null);
            navigate('.', { replace: true });
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
