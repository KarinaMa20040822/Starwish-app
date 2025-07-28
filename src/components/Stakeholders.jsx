
import React, { useState } from 'react';
import { Settings, ArrowLeft, Plus } from 'lucide-react';
import './Stakeholders.css';

const Stakeholders = () => {
  const [selectedPerson, setSelectedPerson] = useState('老闆');
  const [showDropdown, setShowDropdown] = useState(false);
  
  const people = ['老闆', '同事', '客戶', '朋友'];
  
  const fortuneData = {
    老闆: {
      matchRate: '98%',
      todayFortune: {
        love: { icon: '💕', title: '情感支持', desc: '今天的事業能力特別強，建議趁此機會好好發揮' },
        wealth: { icon: '💰', title: '創意發發', desc: '能夠拿起金錢能力的黃金機會，多嘗試新事物的機會' },
        career: { icon: '⭐', title: '行動支持', desc: '今日運勢特別觀察遷延策略恰好，可增強魅力完成事務' }
      },
      businessHours: '晨 上7:00-9:00',
      keywords: ['學訊', '命動'],
      analysis: {
        work: { title: '工作運', desc: '容易情緒化', stars: 4 },
        heart: { title: '心情運', desc: '不確定', stars: 3 }
      },
      colors: {
        lucky: '#4A90E2',
        avoid: '#F5A623'
      },
      suggestions: [
        '能準確定事的你人空間',
        '異科半準算去力方程'
      ]
    }
  };

  const currentData = fortuneData[selectedPerson];

  const renderStars = (count) => {
    return '⭐'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <div className="fortune-app-wrapper">
      <div className="fortune-container">
        {/* Header */}
        <div className="fortune-header">
          <ArrowLeft className="header-back" />
          <h1 className="fortune-title">利害關係人運勢</h1>
          <Settings className="header-settings" />
        </div>

        <div className="fortune-main">
          {/* Today Person Section */}
          <div className="today-person">
            <h2>今日貴人</h2>
            
            <div className="person-card">
              <div className="person-info">
                <div className="person-avatar">
                  <img src="https://via.placeholder.com/50x50/9B59B6/FFFFFF?text=老" alt="老闆" />
                </div>
                <div className="person-details">
                  <div className="person-name">男朋友</div>
                  <div className="person-subtitle">今日的對睏合</div>
                </div>
              </div>
              <div className="match-rate">
                契合度 {currentData.matchRate}
              </div>
            </div>

            {/* Today Fortune */}
            <div className="today-fortune-title">今日貴人都動你的方面：</div>
            
            <div className="fortune-items">
              <div className="fortune-item">
                <span className="fortune-icon">💕</span>
                <div className="fortune-content">
                  <div className="fortune-name">情感支持</div>
                  <div className="fortune-desc">今天的事業能力特別強，建議趁此機會好好發揮</div>
                </div>
              </div>
              
              <div className="fortune-item">
                <span className="fortune-icon">💰</span>
                <div className="fortune-content">
                  <div className="fortune-name">創意發發</div>
                  <div className="fortune-desc">能夠拿起金錢能力的黃金機會，多嘗試新事物的機會</div>
                </div>
              </div>
              
              <div className="fortune-item">
                <span className="fortune-icon">⭐</span>
                <div className="fortune-content">
                  <div className="fortune-name">行動支持</div>
                  <div className="fortune-desc">今日運勢特別觀察遷延策略恰好，可增強魅力完成事務</div>
                </div>
              </div>
            </div>

            <div className="business-hours">
              幸運互動時段：晨 上7:00-9:00
            </div>
          </div>

          {/* Person Selection */}
          <div className="person-selector">
            <div className="person-dropdown" onClick={() => setShowDropdown(!showDropdown)}>
                <div className="person-avatar small">
                <img src={`https://via.placeholder.com/30x30/9B59B6/FFFFFF?text=${selectedPerson[0]}`} alt={selectedPerson} />
                </div>
                <span>{selectedPerson}</span>
                <span className="dropdown-arrow">▼</span>
            </div>
            <Plus className="add-person" />

            {showDropdown && (
                <div className="dropdown-menu">
                {people.map((person) => (
                    <div
                    key={person}
                    className="dropdown-item"
                    onClick={() => {
                        setSelectedPerson(person);
                        setShowDropdown(false);
                    }}
                    >
                    <div className="person-avatar small">
                        <img src={`https://via.placeholder.com/30x30/9B59B6/FFFFFF?text=${person[0]}`} alt={person} />
                    </div>
                    <span>{person}</span>
                    </div>
                ))}
                </div>
            )}
            </div>

          {/* Today Fortune Analysis */}
          <div className="fortune-analysis">
            <h4>老闆今日運勢</h4>
            
            <div className="keywords">
              關鍵運勢：學訊、命動 {renderStars(5)}
            </div>
            
            <div className="detailed-analysis">
              <div className="analysis-title">詳細分析</div>
              
              <div className="analysis-item">
                <span className="analysis-label">工作運：</span>
                <span className="analysis-desc">容易情緒化</span>
                <span className="analysis-stars">{renderStars(4)}</span>
              </div>
              
              <div className="analysis-item">
                <span className="analysis-label">心情運：</span>
                <span className="analysis-desc">不確定</span>
                <span className="analysis-stars">{renderStars(3)}</span>
              </div>
              
              <div className="color-indicators">
                <div className="color-item">
                  <span className="color-label">幸運色：</span>
                  <div className="color-circle blue"></div>
                </div>
                <div className="color-item">
                  <span className="color-label">避運色：</span>
                  <div className="color-circle orange"></div>
                </div>
              </div>
            </div>

            <div className="suggestions">
              <div className="suggestions-title">今日相處建議：</div>
              <ul className="suggestions-list">
                <li>• 能準確定事的你人空間</li>
                <li>• 異科半準算去力方程</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 移除內部底部導航，使用全域導航 */}
      </div>
    </div>
  );
};

export default Stakeholders;