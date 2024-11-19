import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import menuicon from './icons/whitemenu.svg';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); 
  };

  const handleMenuItemClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="header">
      <button className="menu-icon" onClick={toggleMenu} style={{ backgroundImage: `url(${menuicon})` }}></button>
      <div className="title" onClick={() => handleMenuItemClick('/')}>
        <img src={require('./icons/mainlogo.png')} alt="아이콘" className="icon" />
        <h1 className="titletext">노련한 이력서</h1>
      </div>

      {isMenuOpen && (
        <div className="menu">
          <ul>
            <li onClick={() => handleMenuItemClick('/interest')}>관심채용공고</li>
            <li onClick={() => handleMenuItemClick('/myresume')}>내 이력서</li>
            <li onClick={() => handleMenuItemClick('/')}>내보낸 파일</li>
            <li onClick={() => handleMenuItemClick('/')}>설정</li>
            <li className="logout" onClick={() => handleMenuItemClick('/')} >
              <img src={require('./icons/icon-logout.png')} alt="" className="logout-icon" />
              로그아웃
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;