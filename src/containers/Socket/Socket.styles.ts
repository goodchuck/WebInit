import styled from 'styled-components';

const StyledSocket = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .socket-nickname-container {
    display: flex;
    gap: 10px;
  }

  .socket-message-container {
    display: flex;
    gap: 10px;

    input {
      width: 80%;
    }
  }

  .socket-logs-container {
    display: flex;
    gap: 5px;
    background-color: white;
    .socket-logs-container__left {
      width: 70%;
      border: 1px solid gray;
      padding: 10px;
    }

    .socket-logs-container__right {
      width: 30%;
      border: 1px solid gray;
      padding: 10px;
    }
  }
`;

export default StyledSocket;
