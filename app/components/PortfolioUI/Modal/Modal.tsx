import { useContext } from 'react';

import type { PortfolioAsset, PortfolioSummary } from '~/types/assets';
import { portfolioOverviewCreator } from '~/utils/portfolioHelper';
import { PortfolioContext } from '~/context/portfolioContext';
import { Button } from '~/styles/button';
import Modal from '~/components/Modal/Modal';
import PortfolioTable from '~/components/PortfolioUI/Table/Table';
import { Price } from '~/styles/price';

function PortfolioModal(props: {
  modal: boolean;
  setModal: (modal: boolean) => void;
  portfolioData: {
    assets: PortfolioAsset[];
    summary: PortfolioSummary;
  };
}) {
  const { modal, setModal, portfolioData } = props;

  const { portfolio } = useContext(PortfolioContext);

  return (
    <Modal
      active={modal && !!portfolio.length}
      hideModal={() => setModal(false)}
      large
      title="Portfolio"
      footer={
        <Button
          secondary
          onClick={() => {
            setModal(false);
          }}
        >
          Close
        </Button>
      }
    >
      <>
        <div>
          {'Overview: '}
          <Price
            as="span"
            changeSign={portfolioData.summary.changePercent >= 0}
          >
            {portfolioOverviewCreator(portfolioData.summary, true)}
          </Price>
        </div>

        <PortfolioTable portfolioData={portfolioData} />
      </>
    </Modal>
  );
}

export default PortfolioModal;
