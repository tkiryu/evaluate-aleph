import React, { Suspense } from 'react';
import { Center, CircularProgress } from 'chakra-ui';
import { SpaceX } from '../components/SpaceX.tsx';

export default function Home() {
  return (
    <Suspense
      fallback={
        <Center h="100vh">
          <CircularProgress isIndeterminate />
        </Center>
      }
    >
      <SpaceX />
    </Suspense>
  );
}
