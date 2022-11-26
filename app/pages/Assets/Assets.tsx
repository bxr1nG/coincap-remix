import { useState } from 'react';

import type { Asset } from '~/types/assets';
import AssetsTable from '~/components/AssetsTable/AssetsTable';
import PageControls from '~/components/PageControls/PageControls';
import { Container } from '~/styles/container';
import BuyAssetModal from '~/components/BuyAssetModal/BuyAssetModal';

import { Background, TableContainer } from './styles';

function AssetsPage(props: {
  assets: Asset[];
  itemsPerPage: number;
  page: number;
}) {
  const { assets, itemsPerPage, page } = props;
  const [modalAsset, setModalAsset] = useState<Asset | null>(null);

  return (
    <>
      <Background />
      <TableContainer>
        <AssetsTable assets={assets} setModalAsset={setModalAsset} />
      </TableContainer>

      <Container>
        <PageControls
          page={page}
          assetsCount={assets.length}
          itemsPerPage={itemsPerPage}
        />
      </Container>
      <BuyAssetModal modalAsset={modalAsset} setModalAsset={setModalAsset} />
    </>
  );
}

export default AssetsPage;
