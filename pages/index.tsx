import React, { Suspense } from 'react';
import { SpaceX } from '../components/SpaceX.tsx';

export default function Home() {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <SpaceX />
    </Suspense>
  );
}
