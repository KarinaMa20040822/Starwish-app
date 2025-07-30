// src/pages/Social2.js
import React from "react";
import "./Social2.css";
import {  FaHeart, FaShare, FaCommentDots } from "react-icons/fa";

function Social2() {
  return (
    <div className="social2-container">
      {/* Header */}
      <div className="header">
        <div className="back">&#8592;</div>
        <h1 className="title">星願社群</h1>
        <div className="setting">&#9881;</div>
      </div>

      {/* Post Card */}
      <div className="social2-post-card">
        {/* Post Header */}
        <div className="post-header">
          <img src="/images/avatar1.png" alt="avatar" className="avatar" />
          <div className="post-info">
            <div className="username">水瓶座小精靈</div>
            <div className="post-time">20分鐘前</div>
          </div>
          <button className="follow-btn">關注</button>
        </div>

        {/* Post Content */}
        <div className="post-content">
          今天水星與火星相位，水瓶座朋友別忘了多喝水，記得照顧自己的情緒～
          推薦使用薰衣草精油幫助放鬆
        </div>

        <img
          src="/images/lavender-oil.jpg"
          alt="post"
          className="post-image"
        />

        <div className="post-footer">
          <span><FaHeart /> 14 讚</span>
          <span><FaCommentDots /> 3 留言</span>
          <span><FaShare /> 2 分享</span>
        </div>

        {/* Comment Section */}
        <div className="comment-section">
          <div className="comment">
            <img src="/images/avatar2.png" alt="user" className="comment-avatar" />
            <div>
              <div className="comment-user">雙子小仙子</div>
              <div className="comment-text">今天用了薰衣草精油，果然超舒服的！</div>
              <div className="comment-time">10分鐘前</div>
            </div>
          </div>
          <div className="comment">
            <img src="/images/avatar3.png" alt="user" className="comment-avatar" />
            <div>
              <div className="comment-user">射手很難搞</div>
              <div className="comment-text">請問有沒有推薦的精油品牌呢？</div>
              <div className="comment-time">15分鐘前</div>
            </div>
          </div>
          <div className="comment">
            <img src="/images/avatar4.png" alt="user" className="comment-avatar" />
            <div>
              <div className="comment-user">摩羯深得你心</div>
              <div className="comment-text">太貼心了實用</div>
              <div className="comment-time">17分鐘前</div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Box */}
      <div className="comment-input">
        <input type="text" placeholder="發表留言..." />
        <button className="send-btn">↑</button>
      </div>

    </div>
  );
}

export default Social2;
