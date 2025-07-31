import React, { useState } from "react";
import "./Social3.css";
import { FaChevronDown, FaPlus } from "react-icons/fa";

function Social3() {
  const allZodiacs = ["牡羊座", "金牛座", "雙子座", "巨蟹座", "獅子座", "處女座", "天秤座", "天蠍座", "射手座", "魔羯座", "水瓶座", "雙魚座"];
  const relatedTags = ["#自我照護", "#相位解析", "#星願小物"];

  const [privacy, setPrivacy] = useState("公開");
  const [showOptions, setShowOptions] = useState(false);
  const [images, setImages] = useState([]);
  const [selectedZodiacs, setSelectedZodiacs] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [showAllZodiacs, setShowAllZodiacs] = useState(false); // ⭐ 新增這個

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleZodiac = (zodiac) => {
    setSelectedZodiacs((prev) =>
      prev.includes(zodiac) ? prev.filter((z) => z !== zodiac) : [...prev, zodiac]
    );
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };



  return (
    <div className="social1-container">
      {/* Header */}
      <div className="header">
        <div className="back">&#8592;</div>
        <h1 className="title">星願指引</h1>
        <div className="setting">&#9881;</div>
      </div>

      {/* User + Privacy */}
      <div className="post-header" style={{ margin: "1rem" }}>
        <div className="user-info">
          <img src="/images/avatar1.png" alt="avatar" className="avatar" />
          <div className="username">仙女下凡</div>
        </div>
        <div className="privacy-dropdown">
        <button className="privacy-button" onClick={() => setShowOptions(!showOptions)}>
            {privacy} <FaChevronDown />
        </button>
        {showOptions && (
        <div className="privacy-options">
        <div className="privacy-option" onClick={() => setPrivacy("公開")}>公開</div>
        <div className="privacy-option" onClick={() => setPrivacy("私人")}>私人</div>
    </div>
  )}
</div>
      </div>

      {/* Post Input */}
      <div className="post-input-area">
        <textarea
          className="post-textarea"
          placeholder="分享你的星座心情、運勢或建議..."
        ></textarea>
      </div>

      {/* Related Zodiac */}
<div className="hot-topics-section">
        <div className="hot-topics-title">
          選擇相關星座
          <span
            className="expand-toggle"
            onClick={() => setShowAllZodiacs(!showAllZodiacs)}
          >
            <FaChevronDown />
          </span>
        </div>
        <div className="hot-topics-list">
          {(showAllZodiacs ? allZodiacs : allZodiacs.slice(0, 4)).map((zodiac) => (
            <span
              key={zodiac}
              className={`hot-topic ${selectedZodiacs.includes(zodiac) ? "selected" : ""}`}
              onClick={() => toggleZodiac(zodiac)}
            >
              {zodiac}
            </span>
          ))}
        </div>
      </div>

        <div className="hot-topics-section">
        <div className="hot-topics-title">加入話題標籤</div>
        <div className="hot-topics-list">
            {relatedTags.map((tag) => (
            <span
                key={tag}
                className={`hot-topic ${selectedTags.includes(tag) ? "selected" : ""}`}
                onClick={() => toggleTag(tag)}
            >
                {tag}
            </span>
            ))}
        </div>
        </div>



      {/* Add Image Placeholder */}
    <div className="hot-topics-section">
        <div className="hot-topics-title">添加圖片或影片</div>
        <div className="image-upload-preview">
        {images.map((img, idx) => (
        <div key={idx} className="image-box">
        <img src={img} alt={`upload-${idx}`} className="image-preview" />
        </div>
        ))}
        <div className="image-box">
        <FaPlus />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  </div>
</div>

      {/* Submit Button */}
      <div className="submit">
        <button className="submit-button">發布</button>
      </div>
    </div>
  );
}

export default Social3;
