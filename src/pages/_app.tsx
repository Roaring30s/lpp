import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  LivepeerConfig,
  ThemeConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
import Image from 'next/image';
import { Player } from '@livepeer/react';
import * as React from 'react';
import waterfallsPoster from '../../public/next.svg';
 
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

const playbackId =
  'bafybeigtqixg4ywcem3p6sitz55wy6xvnr565s6kuwhznpwjices3mmxoe';
export default function App({ Component, pageProps }: AppProps) {
  return( 
  <LivepeerConfig client={client} theme={livepeerTheme}>
    <Player
      title="Waterfalls"
      playbackId={playbackId}
      loop
      autoPlay
      showTitle={false}
      muted
      poster={<PosterImage />}
    />
  </LivepeerConfig>
  )
}

const PosterImage = () => {
  return (
    <Image
      src={waterfallsPoster}
      alt="waterfull"
      priority
      placeholder="blur"
      className="object-cover"
      blurDataURL="https://theboutiqueadventurer.com/wp-content/uploads/2022/11/seljalandsfoss-waterfall.jpg.webp" //must be link not data:image
    />
  );
};
 

 