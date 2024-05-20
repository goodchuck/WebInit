"use client"

import { Counter } from "@/libs/features/counter/Counter"
import { Flex } from "antd"

export const ReduxMain = () => {
    return (
        <Flex vertical gap={'middle'}>
            <p>리덕스 메인 부분입니다.</p>
            <p>해당 섹션은 Next.js + TypeScript + ReduxToolKit 으로 되어있습니다.</p>
            <p>폴더구조는 src/libs에있으며 기능들은 features에 있습니다.</p>
            <p>reduxToolKit공식 권장하는 폴더구조로 되어있습니다.</p>
            <Counter />
        </Flex>
    )
}