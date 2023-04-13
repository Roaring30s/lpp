import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  LivepeerConfig,
  ThemeConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import * as React from 'react';

 
const client = createReactClient({
  provider: studioProvider({ apiKey: '' }),
});
 
const livepeerTheme: ThemeConfig = {
  colors: {
    accent: 'rgb(0, 145, 255)',
    containerBorderColor: 'rgba(0, 145, 255, 0.9)',
  },
  fonts: {
    display: 'Inter',
  },
};


export default function App({ Component, pageProps }: AppProps) {
  return( 
  <LivepeerConfig client={client} theme={livepeerTheme}>
      <Component {...pageProps} />
  </LivepeerConfig>
  )
}


 

 