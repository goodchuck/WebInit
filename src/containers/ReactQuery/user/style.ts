import styled from 'styled-components';

// 공통 스타일 변수 정의
const colors = {
  white: '#FFFFFF',
};

const spacing = {
  small: '10px',
  medium: '20px',
};

const buttonWidth = '200px';

const StyledReactQueryUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};

  // 버튼 컨테이너 스타일링
  .react-query-user__btns {
    display: flex;

    // 버튼 스타일링
    .react-query-user__btn {
      width: ${buttonWidth};
    }
  }

  // 설명 영역 스타일링
  .react-query-user__descriptions {
    background-color: ${colors.white};
    padding: ${spacing.medium};
  }
`;

export default StyledReactQueryUser;
