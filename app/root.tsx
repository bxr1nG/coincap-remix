import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction
} from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from '@remix-run/react';
import { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import type { Assets, LocalStorageAsset } from '~/types/assets';
import { defaultTheme as theme } from '~/styles/theme';
import resetStyles from '~/styles/normalize.css';
import globalStyles from '~/styles/global.css';
import { getThreeAssets } from '~/api/assets';
import Header from '~/components/Header/Header';
import { PortfolioContext } from '~/context/portfolioContext';
import { useLocalStorage } from '~/hooks/useLocalStorage';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: resetStyles
  },
  {
    rel: 'stylesheet',
    href: globalStyles
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'
  },
  {
    rel: 'preload',
    href: '/images/logo.svg',
    as: 'image',
    type: 'image/svg+xml'
  }
];

export const meta: MetaFunction = () => ({
  title: 'CoinCap',
  description: 'Cryptocurrency market cap rankings, trading charts, and more.',
  viewport: 'width=device-width,initial-scale=1'
});

export const loader: LoaderFunction = async () => {
  const threeAssets: Assets = await getThreeAssets();
  return threeAssets.data;
};

export default function App() {
  const [portfolio, setPortfolio] = useLocalStorage<LocalStorageAsset[]>(
    'portfolio',
    []
  );
  const value = useMemo(
    () => ({ portfolio, setPortfolio }),
    [portfolio, setPortfolio]
  );
  return (
    <html lang="en">
      <head>
        <Links />
        <Meta />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <PortfolioContext.Provider value={value}>
          <ThemeProvider theme={theme}>
            <Header />
            <Outlet />
          </ThemeProvider>
        </PortfolioContext.Provider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <html lang="en">
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>{`${caught.status} ${caught.statusText}`}</h1>
        <Scripts />
      </body>
    </html>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ErrorBoundary({ error }: { error: any }): JSX.Element {
  // eslint-disable-next-line no-console
  console.error(error);
  return (
    <html lang="en">
      <head>
        <title>Error</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>{error.message}</h1>
        <Scripts />
      </body>
    </html>
  );
}
