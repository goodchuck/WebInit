'use client';

import AnimatedButton from '@/components/Animated/AnimatedButton/AnimatedButton';
import { MainLayout } from '@/layout/MainLayout';
import { fadeVariants } from '@/libs/framer-motion/animations';

export default function Page() {
  return (
    <MainLayout title="framer-motion 버튼들">
      <AnimatedButton variants={fadeVariants} type="primary">
        Fade In Button
      </AnimatedButton>
    </MainLayout>
  );
}
