import React, { useState } from "react";
import "./Social1.css";
import { FaSearch, FaPlus } from "react-icons/fa";

function Social1() {
  const [activeTab, setActiveTab] = useState("熱門");
  const tabs = ["熱門", "最新", "關注", "我的星座"];


  return (
    <div className="social1-container">
      {/* Header */}
      <div className="header">
        <h1 className="title">星願社群</h1>
        <div className="setting">&#9881;</div>
      </div>

      {/* Search bar */}
      <div className="social-search">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="搜尋星座、話題..." />
      </div>

      {/* Tabs */}
      <div className="social-tabs">
        {tabs.map((tab) => (
          <span
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Posts */}
      <div className="post-list">
        <div className="post-card">
            <div className="post-header">
            <img src="/images/avatar1.png" alt="avatar" className="avatar" />
            <div>
                <div className="username">水瓶座小精靈</div>
                <div className="post-time">20分鐘前</div>
            </div>
            </div>
            <div className="post-content">
            今天水星與火星相位，水瓶座朋友別忘了多喝水，記得照顧自己的情緒～推薦使用薰衣草精油幫助放鬆
            </div>
                <img src="/images/avatar1.png" alt="avatar" className="avatar" />
            <div className="post-footer">14 讚 ・ 3 留言 ・ 2 分享</div>
        </div>

        <div className="post-card">
            <div className="post-header">
            <img src="/images/avatar1.png" alt="avatar" className="avatar" />
            <div>
                <div className="username">處女座研究社</div>
                <div className="post-time">1小時前</div>
            </div>
            </div>
            <div className="post-content">
            【本月運勢分析】處女座將迎來事業上的重要機會，同時健康方面需多注意。幸運水晶：紫水晶、黃水晶
            </div>
                <img src="/images/avatar1.png" alt="avatar" className="avatar" />
            <div className="post-footer">42 讚 ・ 15 留言 ・ 8 分享</div>
        </div>

        <div className="hot-topics-section">
            <div className="hot-topics-title">熱門話題</div>
            <div className="hot-topics-list">
                <span className="hot-topic">#金牛座新月</span>
                <span className="hot-topic">#星座相位解析</span>
                <span className="hot-topic">#水晶選擇</span>
            </div>
</div>

    </div>
      {/* Floating Add Button */}
      <div className="add-button">
        <FaPlus />
      </div>


    </div>
  );
}

export default Social1;
