'use client';

import { MainLayout } from '@/layout/MainLayout';
import { useUserQuery } from '@/services/react-query/quries/useUserQuery';
import { useEffect } from 'react';

export default function Page() {
    const { data: user, isLoading: isUserLoading } = useUserQuery('123');

    useEffect(() => {
        console.log({ user });
    }, [user]);
    if (isUserLoading) {
        return <div>Loading...</div>;
    }

    return (
        <MainLayout title="Next.js + TS + React-query">
            <p>해당 섹션은 Next.js + TS + React-query를 담은 페이지입니다.</p>
            <p>
                해당 코드에서 React-query는 src/services/react-query에 담겨있습니다.
            </p>
        </MainLayout>
    );
}
