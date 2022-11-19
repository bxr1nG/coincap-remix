import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import type { Asset, Assets } from '~/types/assets';
import { getTableAssets } from '~/api/assets';
import AssetsPage from '~/pages/Assets/Assets';

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
  const data = useLoaderData<{
    assets: Asset[];
    page: number;
    itemsPerPage: number;
  }>();
  return (
    <AssetsPage
      assets={data.assets}
      page={data.page}
      itemsPerPage={data.itemsPerPage}
    />
  );
}
