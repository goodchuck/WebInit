import { Flex, Tag } from 'antd';
import { StyledMainLayout } from './style';

interface IMainLayout {
  title: string;
  tags?: string[];

  children: React.ReactNode;
}

export const MainLayout = ({
  title = '테스트',
  tags,
  children,
}: IMainLayout) => {
  return (
    <StyledMainLayout>
      <h1>{title}</h1>
      <Flex>{tags?.map((tag, index) => <Tag key={index}>{tag}</Tag>)}</Flex>
      {children}
    </StyledMainLayout>
  );
};
