import React from 'react';
import './HistoryPage.css';
import searchIcon from '../pic/search.png';

function DivinationHistory() {
  return (
    <div className="history-page">
      <div className="header">
        <div className="back">&#8592;</div>
        <h1 className="title">占卜歷史</h1>
        <div className="setting">&#9881;</div>
      </div>

      <div className="search-bar">
        <img src={searchIcon} alt="search" className="search-icon" />
        <input type="text" placeholder="搜尋運勢記錄..." />
      </div>

      <div className="record-list">
        <div className="record-card">
          <div className="record-header">
            <span className="record-title">感情運勢諮詢</span>
            <span className="record-time">今天 14:32</span>
          </div>
          <div className="record-content">
            為什麼水瓶男總是不回我的訊息！抽到的牌：高級女祭司、權杖王牌、力量牌⋯⋯
          </div>
          <div className="record-tags">
            <span>感情</span><span>塔羅牌</span>
          </div>
        </div>

        <div className="record-card">
          <div className="record-header">
            <span className="record-title">事業發展指引</span>
            <span className="record-time">昨天 16:45</span>
          </div>
          <div className="record-content">
            最近工作上遇到一些困難，抽了新未來的發展方向。抽到的牌：皇皇、聖杯騎士、聖杯國王⋯⋯
          </div>
          <div className="record-tags">
            <span>事業</span><span>塔羅牌</span>
          </div>
        </div>

        <div className="record-card">
          <div className="record-header">
            <span className="record-title">健康運勢分析</span>
            <span className="record-time">昨天 19:30</span>
          </div>
          <div className="record-content">
            早上起床覺得有點疲憊，就想看看健康狀況如何。抽到的牌：世界、命運之輪、太陽⋯⋯
          </div>
          <div className="record-tags">
            <span>健康</span><span>解籤</span>
          </div>
        </div>

        <div className="record-card">
          <div className="record-header">
            <span className="record-title">財運預測</span>
            <span className="record-time">二週前 11:15</span>
          </div>
          <div className="record-content">
            想知道近期的投資運勢和財務狀況。抽到的牌：錢幣十、太陽、命運之輪⋯⋯
          </div>
          <div className="record-tags">
            <span>財運</span><span>塔羅牌</span>
          </div>
        </div>

        <div className="record-card">
          <div className="record-header">
            <span className="record-title">人際關係指導</span>
            <span className="record-time">昨天 16:45</span>
          </div>
          <div className="record-content">
            和朋友之間出現了一些誤會，抽了解如何改善關係。根據你的MBTI類型INFJ⋯⋯
          </div>
          <div className="record-tags">
            <span>人際關係</span><span>MBTI</span>
          </div>
        </div>

        <div className="record-card">
          <div className="record-header">
            <span className="record-title">月運勢總覽</span>
            <span className="record-time">昨天 16:45</span>
          </div>
          <div className="record-content">
            想了解這個月整體運勢如何，感受好像會有很明顯不同的轉折與挑戰，特別是在工作方面⋯⋯
          </div>
          <div className="record-tags">
            <span>整體運</span><span>塔羅牌</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DivinationHistory;
