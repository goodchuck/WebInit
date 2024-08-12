import { Flex, Tag } from 'antd';
import { StyledMainLayout } from './style';

interface MainLayoutProps {
  title: string;
  tags: string[];

  children: React.ReactNode;
}

function MainLayout({
  title = '테스트',
  tags = [''],
  children,
}: MainLayoutProps) {
  return (
    <StyledMainLayout>
      <h1>{title}</h1>
      <Flex>{tags?.map((tag) => <Tag key={Math.random()}>{tag}</Tag>)}</Flex>
      {children}
    </StyledMainLayout>
  );
}

export default MainLayout;
