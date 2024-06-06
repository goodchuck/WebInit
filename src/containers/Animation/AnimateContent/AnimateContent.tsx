'use client';

import { MainLayout } from '@/layout/MainLayout';
import StyledAnimateContent from './AnimateContent.style';

export default function Page() {
  return (
    <MainLayout title="framer-motion의 Animate content">
      <StyledAnimateContent>
        <p>해당 섹션은 framer-motion의 Animate content 예제입니다.</p>
      </StyledAnimateContent>
    </MainLayout>
  );
}
