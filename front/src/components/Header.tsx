import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [headerStatus, setHeaderStatus] = useState(false);
  return (
    <>
      <div
        style={{
          width: '40px',
          height: '40px',
          border: '2px solid rgb(165, 165, 165)',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center', // 수평 가운데 정렬
          alignItems: 'center', // 수직 가운데 정렬
          position: 'absolute',
          right: '50px',
          top: '30px',
          cursor: 'pointer',
          userSelect: 'none',
        }}
        onClick={() => {
          setHeaderStatus((prev) => !prev);
        }}
      >
        <div>😀</div>
      </div>
      {headerStatus && <HeaderModal />}
    </>
  );
}

function HeaderModal() {
  return (
    <div
      style={{
        width: '120px', // 박스의 너비
        height: 'auto', // 내용에 따라 자동으로 높이가 조정됩니다.
        border: '2px solid rgb(165, 165, 165)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column', // 세로로 배치
        justifyContent: 'center', // 세로 가운데 정렬
        alignItems: 'center', // 가로 가운데 정렬
        position: 'absolute',
        right: '50px',
        color: 'white',
        top: '30px',
        cursor: 'pointer',
        padding: '10px', // 내부 여백 추가
        marginTop: '55px',
        userSelect: 'none',
      }}
    >
      <div style={{ marginBottom: '10px' }}>
        <Link to={''} style={{ color: 'white', textDecoration: 'none' }}>
          My Profile
        </Link>
      </div>
      <div
        style={{ border: '1px solid rgb(165, 165, 165)', width: '122%' }}
      ></div>
      <div style={{ marginTop: '10px' }}>
        <Link to={'/sginin'} style={{ color: 'white', textDecoration: 'none' }}>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Header;
