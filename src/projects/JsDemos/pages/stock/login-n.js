import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// 模擬使用者數據
const users = [
  { username: 'user1', password: 'pass1', nickname: '小明' },
  { username: 'user2', password: 'pass2', nickname: '小華' },
];

const LoginN = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setLoggedIn(true);
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setLoggedIn(true);
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      alert('登入失敗，請檢查帳號密碼');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  if (loggedIn) {
    return (
      <Card className="w-[300px] mx-auto mt-10">
        <CardHeader>歡迎, {currentUser.nickname}!</CardHeader>
        <CardContent>
          <Button onClick={handleLogout} className="w-full">登出</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-[300px] mx-auto mt-10">
      <CardHeader>登入</CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="使用者名稱"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="密碼"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} className="w-full">登入</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginN;