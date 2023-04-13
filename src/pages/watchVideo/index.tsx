import Image from 'next/image';
import { Player } from '@livepeer/react';
import waterfallsPoster from '../../../public/next.svg'

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

const playbackId =
  'bafybeigtqixg4ywcem3p6sitz55wy6xvnr565s6kuwhznpwjices3mmxoe';

export default function WatchVideo() {
    return (
    <div className="h-[200px]">
        <Player
            title="Waterfalls"
            playbackId={playbackId}
            loop
            autoPlay
            muted
            showTitle={false}
            poster={<PosterImage />}
        />
    </div>
    )
}
