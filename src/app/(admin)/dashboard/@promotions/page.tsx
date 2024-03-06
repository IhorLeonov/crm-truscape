import React from 'react';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '@/app/components/summary-table-header';
import { getSummaryPromotions } from '@/lib/api';
import DashboardCard from '@/app/components/dashboard-card';
import SummaryTableCell from '@/app/components/summary-table-cell';

export interface PageProps {}

interface DataObj {
  promotionId: number;
  promotionName: string;
  companyTitle: string;
  discount: number;
}

export default async function Page({}: PageProps) {
  const data: DataObj[] = await getSummaryPromotions();

  // const data: DataObj[] = await new Promise((res) => {
  //   setTimeout(() => {
  //     res(getSummaryPromotions());
  //   }, 4000);
  // });

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ promotionId, promotionName, companyTitle, discount }) => (
          <tr key={promotionId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{promotionName}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
