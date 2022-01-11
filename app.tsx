// @deno-types="https://esm.sh/v58/@types/react/jsx-runtime.d.ts"
import React, { FC } from 'react';
import { createClient, Provider } from 'urql';
import { ChakraProvider } from 'chakra-ui';

const client = createClient({
  url: 'https://api.spacex.land/graphql/',
  suspense: true,
});

export default function App({ Page, pageProps }: { Page: FC; pageProps: Record<string, unknown> }) {
  return (
    <Provider value={client}>
      <ChakraProvider>
        <main>
          <head>
            <meta name="viewport" content="width=device-width" />
          </head>
          <Page {...pageProps} />
        </main>
      </ChakraProvider>
    </Provider>
  );
}
