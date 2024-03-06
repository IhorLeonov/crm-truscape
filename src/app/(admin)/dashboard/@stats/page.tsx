import React from 'react';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import { getSummaryStats } from '@/lib/api';
import Link from 'next/link';

export interface PageProps {}

interface Data {
  promotions: number;
  categories: number;
  newCompanies: number;
  activeCompanies: number;
}

const labelByStat = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

export default async function Page({}: PageProps) {
  // const data = await getSummaryStats();

  const data: Data = await new Promise((res) => {
    setTimeout(() => {
      res(getSummaryStats());
    }, 2000);
  });

  return (
    <div className="grid grid-cols-12 gap-5">
      {(Object.keys(labelByStat) as (keyof typeof data)[]).map((key) => (
        <Link href={`/dashboard/${key}`} key={key} className="col-span-3">
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStat[key]}
            counter={data[key]}
          />
        </Link>
      ))}
    </div>
  );
}
