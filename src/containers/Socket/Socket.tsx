'use client';

import { MainLayout } from '@/layout/MainLayout';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import StyledSocket from './Socket.styles';
import { socket } from '../../socket.js';

interface MessageLog {
  room: string;
  message: string;
  nickName: string;
}

export default function SocketPage() {
  const [nickName, setNickName] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState('N/A');
  const [logs, setLogs] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    if (!nickName) {
      setNickName(faker.internet.userName());
    }
  }, [nickName]);

  useEffect(() => {
    if (!nickName) return undefined;
    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on('upgrade', (transport) => {
        setTransport(transport.name);
      });
    }

    if (socket.connected) {
      onConnect();
      socket.emit('joinAndLeave', { type: 'join', nickName });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport('N/A');
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    function onSetLog(msg: MessageLog | string) {
      if (typeof msg === 'string') {
        setLogs((prevLogs) => [...prevLogs, msg]);
      } else {
        setLogs((prevLogs) => [
          ...prevLogs,
          `${msg.nickName}의 말: ${msg.message}`,
        ]);
      }
    }

    socket.on('chat message', onSetLog);

    function onUsers(inputUsers: { id: string; nickname: string }[]) {
      console.log({ inputUsers });
      setUsers(inputUsers.map((inputUser) => inputUser.nickname));
    }
    socket.on('users', onUsers);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('chat message', onSetLog);
      socket.off('users', onUsers);
    };
  }, [nickName]);

  const onClickSubmitBtn = () => {
    socket.emit('chat message', { room: 'room1', message, nickName });
    setMessage('');
  };
  return (
    <MainLayout title="Socket 페이지!" tags={['next.js', 'socket']}>
      <StyledSocket>
        <p>Status: {isConnected ? 'connected' : 'disconnected'}</p>
        <p>Transport : {transport}</p>
        <div className="socket-nickname-container">
          <h3>닉네임</h3>
          <input
            type="text"
            placeholder="닉네임을 적어주세요"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            disabled
          />
        </div>

        <div className="socket-message-container">
          <h3>메시지</h3>
          <input value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type="submit" onClick={onClickSubmitBtn}>
            전송
          </button>
        </div>

        <div className="socket-logs-container">
          <div className="socket-logs-container__left">
            <h3>채팅 로그</h3>
            {logs && logs.map((log) => <p key={uuidv4()}>{log}</p>)}
          </div>

          <div className="socket-logs-container__right">
            <h3>접속 유저</h3>
            {users && users.map((user) => <p key={uuidv4()}>{user}</p>)}
          </div>
        </div>
      </StyledSocket>
    </MainLayout>
  );
}
