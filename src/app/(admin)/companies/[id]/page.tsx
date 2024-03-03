import Header from '@/app/components/header';
import React from 'react';

interface PageProps {
  params: { id: string };
}

// export function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }];
// }

export default function Page({ params }: PageProps) {
  console.log(params.id);

  return (
    <>
      <Header>Companies ({params.id})</Header>
      {/* <p>{new Date().toTimeString()}</p> */}
    </>
  );
}
