import type { LoaderFunction } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { getPortfolioAssets } from '~/api/assets';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const ids = url.searchParams.get('ids');
  invariant(ids, 'expected ids');
  const assets = await getPortfolioAssets(ids);
  return assets.data;
};
