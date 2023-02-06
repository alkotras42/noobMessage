import {SessionProvider} from 'next-auth/react';
import type {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import {theme} from '../chakra/theme';

export default function App({Component, pageProps}: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme} cssVarsRoot="body">
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
