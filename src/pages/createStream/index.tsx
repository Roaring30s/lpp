import { useCreateStream } from '@livepeer/react';

const streamName = `New Stream`;
 
export default function CreateStreamUI() {
  const {
    mutate: createStream,
    data: stream,
    status,
  } = useCreateStream({ name: streamName });
 
  return (
    <div>
      <button
        disabled={status === 'loading' || !createStream}
        onClick={() => createStream?.()}
      >
        Create Stream
      </button>
      {stream && <div>Stream Key: {stream.streamKey}</div>}
    </div>
  );
}