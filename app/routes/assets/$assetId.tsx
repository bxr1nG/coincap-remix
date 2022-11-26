import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';

import type { Asset, AssetHistoryStage } from '~/types/assets';
import { getAsset, getAssetHistory } from '~/api/assets';
import AssetCard from '~/components/AssetCard/AssetCard';
import AssetChart from '~/components/AssetChart/AssetChart';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.assetId, 'expected params.assetId');
  const asset = await getAsset(params.assetId);
  const history = await getAssetHistory(params.assetId);

  return {
    asset: asset.data,
    history: history.data
  };
};

export default function AssetsId() {
  const { asset, history } = useLoaderData<{
    asset: Asset;
    history: AssetHistoryStage[];
  }>();

  return (
    <>
      <AssetCard asset={asset} />
      <AssetChart data={history} />
    </>
  );
}
