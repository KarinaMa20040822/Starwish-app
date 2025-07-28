import React, { useState } from 'react';
import './AstrologyApp.css';
import { Settings, Facebook, MessageCircle, Eye, EyeOff } from 'lucide-react';

const AstrologyApp = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    birthday: '',
    mbti: '',
    confirmPassword: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const LoginPage = () => (
    <div className="login-container">
      <div className="header">
        <h1 className="title">星願指引</h1>
        <Settings className="icon" />
      </div>
      <div className="main">
        <div className="intro">
          <h2 className="intro-title">尚未登入</h2>
          <p className="intro-subtitle">請登入或註冊以使用完整功能</p>
        </div>
        <div className="form-section">
          <div>
            <label className="label">電子郵件</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="input"
              placeholder=""
            />
          </div>
          <div>
            <label className="label">密碼</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="input"
                placeholder=""
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-icon"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div className="forgot-password">
            <button className="text-button">忘記密碼？</button>
          </div>
          <button className="login-button">登入</button>
          <button 
            onClick={() => setCurrentPage('register')}
            className="register-button"
          >
            註冊新帳號
          </button>
        </div>
        <div className="alt-login">
          <p className="alt-text">或使用以下方式登入</p>
          <div className="icon-group">
            <button className="icon-button fb"><Facebook className="icon-inner" /></button>
            <button className="icon-button line"><MessageCircle className="icon-inner" /></button>
            <button className="icon-button google">G</button>
          </div>
        </div>
      </div>
      <div className="footer">© 2025 星願指引 | 版權所有</div>
      <div className="bottom-nav">
        {[1,2,3,4,5].map(i => (
          <div key={i} className="nav-icon"><div className="nav-dot"></div></div>
        ))}
      </div>
    </div>
  );

  const RegisterPage = () => (
    <div className="register-container">
      <div className="header">
        <h1 className="title">星願指引</h1>
        <Settings className="icon" />
      </div>
      <div className="main">
        <div className="intro">
          <h2 className="intro-title">註冊帳號</h2>
          <p className="intro-subtitle">加入星願指引，探索更多星座的神秘世界</p>
        </div>
        <div className="form-section">
          <div>
            <label className="label">電子郵件 <span className="required">*</span></label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="input"
              placeholder="請輸入您的電子郵件"
            />
          </div>
          <div>
            <label className="label">使用者名稱</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              className="input"
              placeholder="請輸入您的使用者名稱"
            />
          </div>
          <div>
            <label className="label">生日</label>
            <input
              type="date"
              value={formData.birthday}
              onChange={(e) => handleInputChange('birthday', e.target.value)}
              className="input"
              placeholder="yyyy / mm / dd"
            />
          </div>
          <div>
            <label className="label">MBTI性格類型</label>
            <select
              value={formData.mbti}
              onChange={(e) => handleInputChange('mbti', e.target.value)}
              className="select"
            >
              <option value="">請選擇您的MBTI類型</option>
              <option value="INTJ">INTJ - 架構師</option>
              <option value="INTP">INTP - 邏輯學家</option>
              <option value="ENTJ">ENTJ - 指揮官</option>
              <option value="ENTP">ENTP - 辯論家</option>
              <option value="INFJ">INFJ - 提倡者</option>
              <option value="INFP">INFP - 調停者</option>
              <option value="ENFJ">ENFJ - 主人公</option>
              <option value="ENFP">ENFP - 活動家</option>
              <option value="ISTJ">ISTJ - 物流師</option>
              <option value="ISFJ">ISFJ - 守護者</option>
              <option value="ESTJ">ESTJ - 管理者</option>
              <option value="ESFJ">ESFJ - 執政官</option>
              <option value="ISTP">ISTP - 鑑賞家</option>
              <option value="ISFP">ISFP - 冒險家</option>
              <option value="ESTP">ESTP - 企業家</option>
              <option value="ESFP">ESFP - 表演者</option>
            </select>
          </div>
          <div>
            <label className="label">密碼</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="input"
                placeholder="請設定6位以上的密碼"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-icon"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div>
            <label className="label">確認密碼 <span className="required">*</span></label>
            <div className="input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="input"
                placeholder="請再次輸入密碼"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="toggle-icon"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div className="terms">
            <input type="checkbox" className="checkbox" />
            <p className="terms-text">
              我已閱讀並同意
              <button className="link">服務條款</button>
              與
              <button className="link">隱私條款</button>
              政策
            </p>
          </div>
          <button className="login-button">註冊</button>
          <div className="text-center">
            <span className="intro-subtitle">已有帳號？</span>
            <button 
              onClick={() => setCurrentPage('login')}
              className="link ml-1"
            >
              立即登入
            </button>
          </div>
        </div>
      </div>
      <div className="footer">© 2025 星願指引 | 版權所有</div>
      <div className="bottom-nav">
        {[1,2,3,4,5].map(i => (
          <div key={i} className="nav-icon"><div className="nav-dot"></div></div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="app-wrapper">
      {currentPage === 'login' ? <LoginPage /> : <RegisterPage />}
    </div>
  );
};

export default AstrologyApp;
