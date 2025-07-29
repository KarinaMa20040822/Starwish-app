import React from 'react';
import './FavoritesPage.css';
import searchIcon from '../pic/search.png';



function FavoritePostsPage() {
  return (
    <div className="favorite-page">
      <div className="header">
        <div className="back">&#8592;</div>
        <h1 className="title">收藏紀錄</h1>
        <div className="setting">&#9881;</div>
      </div>

    <div className="search-bar">
      <img src={searchIcon} alt="search" className="search-icon" />
      <input type="text" placeholder="搜尋收藏的貼文" />
    </div>


      <div className="count">共 5 則收藏貼文</div>
      <div className="post-list">
        <div className="post-card">
          <div className="avatar-row">
            <img src="/images/avatar1.png" alt="avatar" className="avatar" />
            <div className="info">
              <div className="author">水瓶感小精靈</div>
              <div className="time">20 分鐘前</div>
            </div>
          </div>
          <div className="text">今天太星象火星相位，水瓶應用差別方式多吸水，記得照顧自己的情緒~推薦使用薰衣草精油協助放鬆</div>
          <img src="/images/post1.png" alt="post-img" className="post-image" />
          <div className="stats">14 喜歡 2 評論 2 分享</div>
        </div>

        <div className="post-card">
          <div className="avatar-row">
            <img src="/images/avatar2.png" alt="avatar" className="avatar" />
            <div className="info">
              <div className="author">處女座研究社</div>
              <div className="time">1 小時前</div>
            </div>
          </div>
          <div className="text">【本月運勢分析】處女座迎來挑戰月。的情緒穩度，同理與溝通能力將被考驗。幸運色：紫水晶、黃水晶</div>
          <img src="/images/post2.png" alt="post-img" className="post-image" />
          <div className="stats">42 喜歡 15 評論 8 分享</div>
        </div>

        <div className="post-card">
          <div className="avatar-row">
            <img src="/images/avatar3.png" alt="avatar" className="avatar" />
            <div className="info">
              <div className="author">金牛座王</div>
              <div className="time">3 小時前</div>
            </div>
          </div>
          <div className="text">今日財運佳，適合制定理財計畫與收支控管📈記得避免衝動性購物哦～</div>
          <div className="stats">23 喜歡 7 評論 1 分享</div>
        </div>
      </div>

      <div className="bottom-nav">
        <div className="icon">🏠</div>
        <div className="icon">👥</div>
        <div className="icon active">📁</div>
        <div className="icon">📨</div>
      </div>
    </div>
  );
}

export default FavoritePostsPage;
