import React from 'react';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import DashboardCard from '@/app/components/dashboard-card';
import { getSummaryCategories } from '@/lib/api';

export interface PageProps {}

interface DataObj {
  categoryId: number;
  categoryTitle: string;
  count: number;
}

export default async function Page({}: PageProps) {
  const data: DataObj[] = await getSummaryCategories();

  // const data: DataObj[] = await new Promise((res) => {
  //   setTimeout(() => {
  //     res(getSummaryCategories());
  //   }, 3000);
  // });

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {data.map(({ categoryId, categoryTitle, count }) => (
          <div key={categoryId} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={categoryTitle}
              counter={count}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}