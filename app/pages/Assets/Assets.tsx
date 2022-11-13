import type { TableAsset } from '~/types/assets';
import Table from '~/components/Table/Table';
import PageControls from '~/components/PageControls/PageControls';
import { Container } from '~/styles/container';

import { Background, TableContainer } from './styles';

function AssetsPage(props: {
  assets: TableAsset[];
  itemsPerPage: number;
  page: number;
}) {
  const { assets, itemsPerPage, page } = props;
  return (
    <>
      <Background />
      <TableContainer>
        <Table assets={assets} />
      </TableContainer>

      <Container>
        <PageControls
          page={page}
          assetsCount={assets.length}
          itemsPerPage={itemsPerPage}
        />
      </Container>
    </>
  );
}

export default AssetsPage;
