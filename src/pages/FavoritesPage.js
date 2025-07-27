import React from "react";
import "./FavoritesPage.css";

function FavoritesPage() {
  return (
    <div className="phone-container">
      {/* 狀態欄 */}
      <div className="status-bar">
        <span className="time">9:41</span>
        <div className="status-icons">
          <div className="signal"></div>
          <div className="wifi"></div>
          <div className="battery"></div>
        </div>
      </div>

      {/* 標題欄 */}
      <div className="header">
        <button className="back-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1>收藏記錄</h1>
        <button className="settings-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.51-1H12a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>

      {/* 搜尋區域 */}
      <div className="search-container">
        <div className="search-box">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <input type="text" placeholder="搜尋收藏的內容" />
        </div>
        <div className="search-tags">
          <span className="tag">共 5 則收藏內容</span>
        </div>
      </div>

      {/* 收藏列表 */}
      <div className="favorites-list">
        <div className="favorite-item">
          <div className="user-info">
            <img src="https://via.placeholder.com/40x40/7C79FF/FFFFFF?text=水" alt="水果批小幫手" className="avatar" />
            <div className="user-details">
              <h3>水果批小幫手</h3>
              <span className="time">今天 18:47</span>
            </div>
          </div>
          <div className="content">
            <p>今天水果批又大豐收啦，水果攤提前分到了多水果，我們除量賣到凌晨啦~請老虎友們關於市場清倉啊</p>
            <div className="image-container">
              <img src="https://via.placeholder.com/120x80/F3F4F6/666666?text=水果圖片" alt="水果圖片" className="content-image" />
            </div>
          </div>
          <div className="favorite-stats">
            <span>1年前 · 2則留言 · 2分享</span>
          </div>
        </div>

        <div className="favorite-item">
          <div className="user-info">
            <img src="https://via.placeholder.com/40x40/FFA500/FFFFFF?text=吃" alt="感受吃喝社" className="avatar" />
            <div className="user-details">
              <h3>感受吃喝社</h3>
              <span className="time">今天 16:20</span>
            </div>
          </div>
          <div className="content">
            <p><span className="highlight">【本月吃貨分享】</span>感受吃感覺配飲新手上路吃喝週，園隊推進力重開專業、各色珍產、衝天啊咖</p>
            <div className="image-container">
              <img src="https://via.placeholder.com/60x60/8C7A6B/FFFFFF?text=食物1" alt="食物圖片1" className="content-image small" />
              <img src="https://via.placeholder.com/60x60/FFD100/FFFFFF?text=食物2" alt="食物圖片2" className="content-image small" />
            </div>
          </div>
          <div className="favorite-stats">
            <span>4周前 · 15則留言 · 3分享</span>
          </div>
        </div>

        <div className="favorite-item">
          <div className="user-info">
            <img src="https://via.placeholder.com/40x40/57C4F3/FFFFFF?text=電" alt="全球電王" className="avatar" />
            <div className="user-details">
              <h3>全球電王</h3>
              <span className="time">1天前</span>
            </div>
          </div>
          <div className="content">
            <p>分享一個好看的作法，每天大功不只獎場問題，量...</p>
          </div>
          <div className="favorite-stats">
            <span>2周前 · 8則留言 · 1分享</span>
          </div>
        </div>
      </div>

      {/* 底部導航 */}
      <div className="bottom-nav">
        <button className="nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
        <button className="nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 21V19a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2"/>
            <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
        <button className="nav-item active">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
        <button className="nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
        <button className="nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default FavoritesPage;