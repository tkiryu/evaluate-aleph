import React, { FC } from 'react';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'https://api.spacex.land/graphql/',
  suspense: true,
});

export default function App({ Page, pageProps }: { Page: FC; pageProps: Record<string, unknown> }) {
  return (
    <Provider value={client}>
      <main>
        <head>
          <meta name="viewport" content="width=device-width" />
        </head>
        <Page {...pageProps} />
      </main>
    </Provider>
  );
}
