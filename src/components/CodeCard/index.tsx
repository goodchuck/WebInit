"use client"

import { Card } from "antd";
import { StyledCodeCard } from "./style";

type Props = {
    title: string;
    children: React.ReactNode;
}
export const CodeCard = ({ title, children }: Props) => {

    return (
        <StyledCodeCard>
            <Card title={title}>
                {children}
            </Card>
        </StyledCodeCard>

    )
}