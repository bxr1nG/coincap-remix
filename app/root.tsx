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
  ScrollRestoration
} from '@remix-run/react';
import { ThemeProvider } from 'styled-components';

import type { Assets } from '~/types/assets';
import { defaultTheme as theme } from '~/styles/theme';
import resetStyles from '~/styles/normalize.css';
import { getThreeAssets } from '~/api/assets';
import Header from '~/components/Header/Header';
import { displayAssetDto } from '~/dtos/display-asset-dto';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: resetStyles
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
  return threeAssets.data.map(displayAssetDto);
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Links />
        <Meta />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Header />
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
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
        {error.message}
        <Scripts />
      </body>
    </html>
  );
}
