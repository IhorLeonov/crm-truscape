'use client';

import React from 'react';
import Button from './button';
import { useRouter } from 'next/navigation';
// import dynamic from 'next/dynamic';

// const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
//   ssr: false,
// });

export default function AddCompanyButton() {
  const router = useRouter();

  return (
    <Button onClick={() => router.push('/companies/new', { scroll: false })}>
      Add company
    </Button>
  );
}
