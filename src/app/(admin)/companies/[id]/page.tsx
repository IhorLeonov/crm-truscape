'use client';

import React, { useEffect } from 'react';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { id: string };
}

// export function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }];
// }

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);

    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);

  return (
    <>
      <Header>Companies ({params.id})</Header>
    </>
  );
}
