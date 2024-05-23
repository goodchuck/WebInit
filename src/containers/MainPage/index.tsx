'use client';

import { MainLayout } from '@/layout/MainLayout';
import { Flex } from 'antd';
import Link from 'next/link';

export default function MainPage() {
  return (
    <MainLayout
      title="메인 페이지!"
      tags={[
        'next.js',
        'typescript',
        'redux',
        'zustand',
        'antdesign',
        'styled-components',
      ]}
    >
      <Flex vertical gap="middle">
        <p>해당 페이지는 제가 사용하는 코드 컨벤션에 대한 정리페이지입니다.</p>
        <p>
          새로 추가개발을 진행하거나 참고하고자 할때 해당 페이지의 git을
          활용합니다.
        </p>
        <p>
          해당 git 경로를 통해 코드 컨벤션을 확인하고 페이지에선 어떻게
          보여지는지 확인합니다.
        </p>
        <p />
        <Link href="https://github.com/goodchuck/WebInit">git 링크</Link>
        <p>위 링크를 클릭해주세요</p>
        <p />
        <p>
          추가로 새로운 방식이 발견될경우 페이지나 git branch로 추가 관리하려고
          합니다.
        </p>
        <p>
          주 사용방식은 git으로된 폴더구조를 확인하는 것이며 사이드 바를 통해
          구현된 모습을 볼수 있습니다.
        </p>
      </Flex>
    </MainLayout>
  );
}
