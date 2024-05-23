'use client';

import { MainLayout } from '@/layout/MainLayout';

export default function Page() {
  return (
    <MainLayout
      title="Next.js + TS + React-query"
      tags={['Next.js', 'TS', 'React-query']}
    >
      <p>해당 섹션은 Next.js + TS + React-query를 담은 페이지입니다.</p>
      <p>
        해당 코드에서 React-query는 src/services/react-query에 담겨있습니다.
      </p>
    </MainLayout>
  );
}
