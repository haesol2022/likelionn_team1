import React, { useState } from 'react';
import axios from 'axios';
import './join.scss';

function Join() {
  const [isIdChecked, setIsIdChecked] = useState(false); // 중복확인 상태 관리
  const [username, setUsername] = useState(''); // 아이디 상태
  const [password, setPassword] = useState(''); // 비밀번호 상태
  const [confirmPassword, setConfirmPassword] = useState(''); // 비밀번호 확인 상태
  const [error, setError] = useState(''); // 에러 메시지 상태
  const [success, setSuccess] = useState(false); // 성공 상태

  // 아이디 중복 체크
  const handleCheckId = async () => {
    if (!username) {
      setError('아이디를 입력해 주세요.');
      return;
    }

    // 아이디를 콘솔에 출력
    console.log('현재 입력된 아이디:', username);

    try {
      const response = await axios.get(`/api/v1/users/checkUsername?username=${username}`);
      console.log('아이디 중복 체크 응답:', response.data);

      if (response.status === 200) {
        setIsIdChecked(true);
        setError('');
      }
    } catch (err) {
      if (err.response && err.response.status === 409) {
        console.log('중복 아이디 응답:', err.response.data);
        setError('이미 존재하는 아이디입니다.');
      } else {
        console.error('아이디 중복 체크 오류:', err);
        setError('아이디 확인 중 오류가 발생했습니다.');
      }
    }
  };

  // 비밀번호 입력 체크
  const handleSubmit = async () => {
    if (!password || !confirmPassword) {
      setError('비밀번호를 입력해 주세요.');
      return;
    }

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    // FormData 객체를 사용하여 폼 데이터 전송
    const formData = new FormData();
    formData.append('username', username); // 아이디 추가
    formData.append('password', password); // 비밀번호 추가

    try {
      const response = await axios.post('/api/v1/users/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // 폼 데이터 형식으로 전송
        },
      });

      console.log('회원가입 응답:', response.data);

      if (response.status === 200) {
        setSuccess(true);
        setError('');
      }
    } catch (err) {
      if (err.response && err.response.status === 409) {
        console.log('아이디 중복 응답:', err.response.data);
        setError('이미 존재하는 아이디입니다.');
      } else {
        console.error('회원가입 오류:', err);
        setError('회원가입 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className="join-container">
      <div className="join-content">
        <div className="join-form">
          {!success ? (
            !isIdChecked ? (
              <>
                <label className="id-label">
                  노련한 이력서에서<br />
                  사용할 아이디를 입력해 주세요
                </label>
                <input
                  className="join-input"
                  type="text"
                  placeholder="아이디"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <button className="check-button" onClick={handleCheckId}>
                  중복확인
                </button>
              </>
            ) : (
              <>
                <label className="password-label">
                  노련한 이력서에서<br />
                  사용할 비밀번호를 입력해 주세요
                </label>
                <input
                  className="join-input"
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className="join-input"
                  type="password"
                  placeholder="비밀번호 확인"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <button className="next-button" onClick={handleSubmit}>
                  다음으로
                </button>
              </>
            )
          ) : (
            <p className="success-message">회원가입이 완료되었습니다!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Join;
