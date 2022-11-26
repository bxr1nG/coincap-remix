import { useContext } from 'react';

import type { PortfolioAsset } from '~/types/assets';
import { PortfolioContext } from '~/context/portfolioContext';
import Modal from '~/components/Modal/Modal';
import { Button } from '~/styles/button';

import { Footer } from './styles';

function PortfolioConfirmationModal(props: {
  confirmationAsset: PortfolioAsset | null;
  setConfirmationAsset: (confirmationAsset: PortfolioAsset | null) => void;
}) {
  const { confirmationAsset, setConfirmationAsset } = props;

  const { portfolio, setPortfolio } = useContext(PortfolioContext);

  return (
    <Modal
      active={!!confirmationAsset}
      hideModal={() => setConfirmationAsset(null)}
      title="Confirm"
      footer={
        <Footer>
          <Button
            secondary
            onClick={() => {
              setConfirmationAsset(null);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setConfirmationAsset(null);
              setPortfolio(
                portfolio.filter(
                  (asset) => asset.dateId !== confirmationAsset?.dateId
                )
              );
            }}
          >
            Confirm
          </Button>
        </Footer>
      }
    >
      <div>Are you sure you want to delete this asset?</div>
    </Modal>
  );
}

export default PortfolioConfirmationModal;
