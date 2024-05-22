"use client"

import { useUser } from "@/hooks/useUser"
import { MainLayout } from "@/layout/MainLayout"
import { authActions, userLogin, userLogout } from "@/libs/features/auth"
import { useAppDispatch, useAppSelector } from "@/libs/hooks"
import { ILogin, IUserInfo } from "@/types"
import { Button, Checkbox, Descriptions, Flex, Form, FormProps, Input, Tag } from "antd"
import type { DescriptionsProps } from 'antd';
import { StyledLogin } from "./style"
import { useEffect, useState } from "react"
import { CodeCard } from "@/components/CodeCard"
import { reduxLoginData } from "@/dummyData/redux-login-data"
import { CodeHighlight } from "@/components/CodeHighlight"




export const Login = () => {
    const dispatch = useAppDispatch()

    const { isLogin, userInfo, status } = useUser();
    const [descriptionUserData, setDescriptionUserData] = useState<DescriptionsProps['items']>([]);
    const onFinish: FormProps<ILogin>['onFinish'] = (values) => {
        console.log('Success:', values);
        handleLogin(values);
    };

    const onFinishFailed: FormProps<ILogin>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleLogin = async (data: ILogin) => {

        try {
            const res = await dispatch(userLogin(data)).unwrap();
            console.log({ res });
        }
        catch (e) {
            throw e;
        }
    }

    const handleLogout = async () => {
        try {
            const res = await dispatch(userLogout());
            console.log({ res });
        }
        catch (e) {
            throw e;
        }
    }
    // 타입에 맞게 데이터를 문자열로 변환하는 함수
    const formatValue = (value: any): string => {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            return value.toString();
        } else if (Array.isArray(value)) {
            return value.map(item => JSON.stringify(item)).join(', ');
        } else if (typeof value === 'object') {
            return JSON.stringify(value);
        } else {
            return '';
        }
    };
    useEffect(() => {
        if (!userInfo) return;
        let item: DescriptionsProps['items'] = Object.keys(userInfo).map((key, index) => {
            return {
                key: (index + 1).toString(),
                label: key,
                children: formatValue(userInfo[key as keyof IUserInfo])
            }
        })
        setDescriptionUserData(item)
    }, [userInfo])

    return (
        <MainLayout
            title="Next.js + TS + ReduxToolKit"
            tags={['Next.js', 'TypeScript', 'ReduxToolKit', '로그인']}
        >
            <div className="explanation">

                <p>해당 섹션은 ReduxToolKit + TS + Next.js에서의 로그인을 다룹니다.</p>
                <p>로그인에 관한 기능은 src/libs/features/auth와 관련있습니다.</p>
                <p>사용 방법</p>
                <p>아이디와 패스워드 그리고 저장여부를 선택해 로그인을 수행하면 로그인 후로 창이 바뀝니다.</p>
                <Flex gap={'middle'}>
                    {reduxLoginData.types.map((type, index) => {
                        return (<CodeCard title={type.title} key={index}>
                            <CodeHighlight code={type.content}></CodeHighlight>
                        </CodeCard>)
                    })}

                </Flex>

            </div>
            <StyledLogin>
                {isLogin ? (<h1>로그인 완료 창</h1>) : (<h1>로그인 진행 전 창</h1>)}
                {isLogin ? (<div className="logout-form">
                    <Descriptions title='User Info' bordered items={descriptionUserData}> </Descriptions>
                    <Button onClick={handleLogout}>로그 아웃</Button>
                </div>) : (
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600, backgroundColor: 'white', padding: 20 }}
                        initialValues={{ remember: false }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<ILogin>
                            label="Id"
                            name="id"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<ILogin>
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item<ILogin>
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{ offset: 8, span: 16 }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                )
                }

            </StyledLogin >
        </MainLayout>

    )
}