import { useState } from 'react';

import type { TableAsset } from '~/types/assets';
import Table from '~/components/Table/Table';
import PageControls from '~/components/PageControls/PageControls';
import { Container } from '~/styles/container';
import BuyAssetModal from '~/components/BuyAssetModal/BuyAssetModal';

import { Background, TableContainer } from './styles';

function AssetsPage(props: {
  assets: TableAsset[];
  itemsPerPage: number;
  page: number;
}) {
  const { assets, itemsPerPage, page } = props;
  const [modalAsset, setModalAsset] = useState<TableAsset | null>(null);

  return (
    <>
      <Background />
      <TableContainer>
        <Table assets={assets} setModalAsset={setModalAsset} />
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
