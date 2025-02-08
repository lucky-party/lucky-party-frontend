import React, { useState } from 'react';
import Signor from './\bSignor';
import { Link } from 'react-router-dom';

function Signin() {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('회원가입 정보:', { nickname, email, password });
    // 여기서 실제 회원가입 로직을 구현할 수 있습니다.
  };

  const appContainerStyle = {
    backgroundColor: 'rgb(22, 27, 34)',
    color: '#fff',
    fontFamily: "'Roboto', sans-serif",
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const signupBoxStyle = {
    backgroundColor: 'rgb(22, 27, 34)',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '400px',
    marginBottom: '60px',
  };

  const signupTitleStyle = {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 'bold',
  };

  const inputGroupStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    fontSize: '0.9rem',
    marginBottom: '5px',
    display: 'block',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #444',
    // : 'rgb(22, 27, 34)',
    backgroundColor: 'rgb(45, 47, 50)',
    color: '#fff',
    borderRadius: '4px',
    fontSize: '1rem',
  };

  const submitBtnStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#2188ff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '20px',
  };

  const submitBtnHoverStyle = {
    backgroundColor: '#1e77d3',
  };

  return (
    <div style={appContainerStyle}>
      <div style={signupBoxStyle}>
        <h2
          style={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '20px',
            fontWeight: 'bold',
          }}
        >
          Sign In
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={inputGroupStyle}>
            <label style={labelStyle} htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
              placeholder="E-mail"
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
              placeholder="password"
            />
          </div>
          <button type="submit" style={submitBtnStyle}>
            Sign In
          </button>
          <Signor />
          <p
            style={{
              width: '100%',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            <Link
              to={'/sginup'}
              style={{
                color: 'rgb(244, 244, 244)',
              }}
            >
              계정이 없으신가요? 회원가입하러 가기
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
