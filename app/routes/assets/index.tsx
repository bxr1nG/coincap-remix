import { useState } from 'react';
import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import type { Asset, Assets } from '~/types/assets';
import { getTableAssets } from '~/api/assets';
import AssetsTable from '~/components/AssetsTable/AssetsTable';
import PageControls from '~/components/PageControls/PageControls';
import BuyAssetModal from '~/components/BuyAssetModal/BuyAssetModal';
import { Container } from '~/styles/container';
import { Background } from '~/styles/coloredBackground';
import { TableContainer } from '~/styles/tableContainer';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get('page');

  if (!page) {
    return redirect('/assets?page=1');
  }

  const itemsPerPage = process.env.ITEMS_PER_PAGE
    ? +process.env.ITEMS_PER_PAGE
    : 25;
  const tableAssets: Assets = await getTableAssets(+page, itemsPerPage);
  return {
    assets: tableAssets.data,
    page: +page,
    itemsPerPage
  };
};

export default function AssetsIndex() {
  const { assets, itemsPerPage, page } = useLoaderData<{
    assets: Asset[];
    page: number;
    itemsPerPage: number;
  }>();
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
