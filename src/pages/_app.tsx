import {ApolloProvider} from '@apollo/client';
import {ChakraProvider} from '@chakra-ui/react';
import {SessionProvider} from 'next-auth/react';
import type {AppProps} from 'next/app';
import {theme} from '../chakra/theme';
import { client } from '../graphql/apollo-client';

export default function App({Component, pageProps}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider theme={theme} cssVarsRoot='body'>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}
