import React, { useState } from 'react';
import { ArrowLeft, Settings, Search, MessageCircle, Zap, Home, Calendar, User } from 'lucide-react';
import './HistoryPage.css';

const DivinationHistory = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="divination-container">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <ArrowLeft className="header-icon" />
          <h1 className="header-title">占卜歷史</h1>
          <Settings className="header-icon" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="搜尋運勢的好結果..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </div>

      {/* History List */}
      <div className="history-container">
        <div className="history-item">
          <div className="history-header">
            <h3 className="history-title">塔羅牌解讀</h3>
            <span className="history-date">今天 14:32</span>
          </div>
          <p className="history-content">
            為什麼天蠍座已讓不起到的問題呈現？經期的愛，蓋娃是心小鴨好......力量牌
          </p>
          <div className="tags-container">
            <span className="tag">愛情</span>
            <span className="tag">塔羅牌</span>
          </div>
        </div>

        <div className="history-item">
          <div className="history-header">
            <h3 className="history-title">專業諮詢解析</h3>
            <span className="history-date">今天 14:15</span>
          </div>
          <p className="history-content">
            深今天的占卜結果，你了解的感情分析關於，認為與結的是......認到的幸福
          </p>
        </div>

        <div className="history-item">
          <div className="history-header">
            <h3 className="history-title">靈體運勢分析</h3>
            <span className="history-date">今天 13:45</span>
          </div>
          <p className="history-content">
            為了讓你更好地理解這理期情況的分析結果，你理解這個預測的背景......
          </p>
        </div>

        <div className="history-item">
          <div className="history-header">
            <h3 className="history-title">財運測算</h3>
            <span className="history-date">今天 11:15</span>
          </div>
          <p className="history-content">
            預測這這則對於遠程調整剛擁軟弱況，臨時可能......這個周......
          </p>
        </div>

        <div className="history-item">
          <div className="history-header">
            <h3 className="history-title">人際關係指導</h3>
            <span className="history-date">今天 10:45</span>
          </div>
          <p className="history-content">
            由於支配你是期結束這算結果，對了難以開始接觸......
          </p>
        </div>

        <div className="history-item">
          <div className="history-header">
            <h3 className="history-title">月運勢解讀</h3>
            <span className="history-date">今天 10:45</span>
          </div>
          <p className="history-content">
            今天星座運勢運氣是總結算的分析，讓支配運這是體分錄資料......
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-container">
          <div className="nav-item active">
            <MessageCircle className="nav-icon" />
            <span className="nav-text">占卜</span>
          </div>
          <div className="nav-item">
            <Zap className="nav-icon" />
            <span className="nav-text">AI</span>
          </div>
          <div className="nav-item">
            <Home className="nav-icon" />
            <span className="nav-text">首頁</span>
          </div>
          <div className="nav-item">
            <Calendar className="nav-icon" />
            <span className="nav-text">運勢</span>
          </div>
          <div className="nav-item">
            <User className="nav-icon" />
            <span className="nav-text">我的</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivinationHistory;