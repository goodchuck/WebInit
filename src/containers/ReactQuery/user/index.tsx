'use client';

import { MainLayout } from '@/layout/MainLayout';
import { formatJsonToDescription } from '@/libs/antdesign/utils';
import {
  UserQueryOptions,
  useUserQuery,
} from '@/services/react-query/quries/useUserQuery';
import { User } from '@/types/fakerJS';
import { Button, Descriptions, DescriptionsProps } from 'antd';
import { useEffect, useState } from 'react';
import StyledReactQueryUser from './style';

export default function Page() {
  const [queryOptions, setQueryOptions] = useState<UserQueryOptions>({
    enabled: false,
  });

  const [descriptionData, setDescriptionData] = useState<
    DescriptionsProps['items']
  >([]);

  const { data: user, isLoading: isUserLoading } = useUserQuery(
    '123',
    queryOptions,
  );

  useEffect(() => {
    if (!user) return;
    console.log({ user });

    const item: DescriptionsProps['items'] = Object.keys(user).map(
      (key, index) => {
        return {
          key: (index + 1).toString(),
          label: key,
          children: formatJsonToDescription(user[key as keyof User]),
        };
      },
    );
    setDescriptionData(item);
  }, [user]);

  useEffect(() => {
    console.log({ queryOptions });
  }, [queryOptions]);

  const handleButtonClick = () => {
    console.log('handleButtonClick');
    setQueryOptions((prev) => {
      const updatedOptions = { ...prev, enabled: !prev.enabled };
      return updatedOptions;
    });
  };

  if (isUserLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout title="Next.js + TS + React-query의 User">
      <StyledReactQueryUser>
        <p>해당 섹션은 ReactQuery로 user를 불러오는 영역입니다.</p>
        <p>
          유저 가져오기 버튼을 클릭하면 Faker.js를 통해 데이터를 불러옵니다.
        </p>
        <div className="react-query-user__btns">
          <Button className="react-query-user__btn" onClick={handleButtonClick}>
            데이터 호출
          </Button>
        </div>

        <div className="react-query-user__descriptions">
          <Descriptions title="User Info" bordered items={descriptionData} />
        </div>
      </StyledReactQueryUser>
    </MainLayout>
  );
}
