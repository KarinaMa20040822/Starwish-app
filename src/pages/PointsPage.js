import React from 'react';
import './PointsPage.css';

function PointsPage() {
  return (
    <div className="points-page">
      <div className="header">
        <div className="back">&#8592;</div>
        <h1 className="title">我的積分</h1>
        <div className="setting">&#9881;</div>
      </div>

      <div className="points-summary">
        <div className="left">
          <img src="../pic/wizard.png" alt="fortune" />
        </div>
        <div className="right">
          <div className="points-value">1,350</div>
          <div className="points-label">當前積分</div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">獲取積分方式</div>

        <div className="points-card">
          <div className="left">
            <div className="icon">
              <img src="/icons/article-icon.png" alt="文章" width="20" />
            </div>
            <div className="text">
              <div className="title">發表文章</div>
              <div className="subtitle">每發表一篇文章可獲得 10 積分</div>
            </div>
          </div>
          <div className="value">+10</div>
        </div>

        <div className="points-card">
          <div className="left">
            <div className="icon">
              <img src="/icons/comment-icon.png" alt="留言" width="20" />
            </div>
            <div className="text">
              <div className="title">發表留言</div>
              <div className="subtitle">每發表一則留言可獲得 5 積分</div>
            </div>
          </div>
          <div className="value">+5</div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">積分統計</div>
        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-icon">📝</div>
            <div className="stat-number">156</div>
            <div className="stat-label">發文次數</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">💬</div>
            <div className="stat-number">23</div>
            <div className="stat-label">留言次數</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">積分用法</div>
        <div className="usage-box">
          <div className="usage-icon">🎁</div>
          <div className="usage-points">5</div>
          <div className="usage-text">積分可兌換一次 AI 降價回覆</div>
        </div>
      </div>
    </div>
  );
}

export default PointsPage;
