'use client';

import { MainLayout } from '@/layout/MainLayout';
import { motion } from 'framer-motion';
import StyledAnimationMain from './AnimationMain.style';

export default function Page() {
  return (
    <MainLayout
      title="Next.js + TS + framer-motion"
      tags={['Next.js', 'TS', 'framer-motion']}
    >
      <StyledAnimationMain>
        <p>해당 섹션은 Next.js + TS + framermotion 관련 페이지 입니다.</p>
        <p>아래 예제는 framer-motion의 keyFrame 애니메이션 예제입니다</p>
        <div className="animation-main_container">
          <motion.div
            className="box"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ['0%', '0%', '50%', '50%', '0%'],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </div>
      </StyledAnimationMain>
    </MainLayout>
  );
}
