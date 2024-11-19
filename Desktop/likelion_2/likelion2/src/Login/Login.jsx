import React, { useState } from 'react';
import axios from 'axios';
import './login.scss';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 일반 로그인
  const handleLogin = async () => {
    const requestData = {
      username: id,
      password: password,
    };

    console.log('로그인 요청 데이터:', requestData);

    try {
      const response = await axios.post(
        'api/v1/users/login',
        requestData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('로그인 응답 데이터:', response);

      const { access, userid } = response.headers;
      console.log('로그인 성공:', { access, userid });

      // 토큰 및 사용자 ID 저장
      localStorage.setItem('accessToken', access);
      localStorage.setItem('userid', userid);

      setError('');
      // 로그인 후 리다이렉션
      window.location.href = '/dashboard';
    } catch (error) {
      if (error.response) {
        console.error('로그인 실패 응답:', error.response);
        if (error.response.status === 401) {
          setError('아이디 혹은 비밀번호가 일치하지 않습니다.');
        } else {
          setError('로그인 실패: ' + (error.response.data.errorMessage || '알 수 없는 오류'));
        }
      } else {
        console.error('로그인 요청 중 오류:', error);
        setError('서버 오류입니다. 다시 시도해 주세요.');
      }
    }
  };

  // 구글 로그인
  const handleGoogleLogin = async () => {
    const requestData = {
      email: id,
      password: '',
    };

    console.log('구글 로그인 요청 데이터:', requestData);

    try {
      const response = await axios.post(
        'api/v1/users/login/google',
        requestData
      );

      console.log('구글 로그인 응답 데이터:', response);

      // 헤더에서 액세스 토큰 가져오기
      const accessToken = response.headers.access;
      if (accessToken) {
        console.log('구글 로그인 성공, 토큰:', accessToken);
        localStorage.setItem('accessToken', accessToken);
        setError('');
        // 구글 로그인 성공 후 리다이렉션
        window.location.href = '/dashboard';
      }
    } catch (error) {
      if (error.response) {
        console.error('구글 로그인 실패 응답:', error.response);
        if (error.response.status === 401) {
          setError('구글 로그인 실패: 이메일 또는 비밀번호가 잘못되었습니다.');
        } else {
          setError('구글 로그인 중 서버 오류가 발생했습니다.');
        }
      } else {
        console.error('구글 로그인 요청 중 오류:', error);
        setError('구글 로그인 중 서버 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="title-image"></div>
        <div className="login-form">
          <label className="login-label">로그인</label>
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button className="login-button" onClick={handleLogin}>
            로그인
          </button>
          <button className="google-login" onClick={handleGoogleLogin}>
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google Logo"
              className="google-logo"
            />
            구글계정으로 로그인
          </button>
          <a href="/join" className="signup-link">
            회원가입하기
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
