import React, { useState } from 'react';
import './ShoppingApp.css';
import { Settings } from 'lucide-react';

const ShoppingApp = () => {
  const [activeCategory, setActiveCategory] = useState('全部');

  const categories = ['全部', '水晶', '數位', '飾品', '開運物品'];
  
  const categoryIcons = [
    { name: '愛情運', icon: '💕', color: '#ff6b9d' },
    { name: '財運', icon: '💰', color: '#f9ca24' },
    { name: '事業運', icon: '💼', color: '#0abde3' },
    { name: '健康運', icon: '🍀', color: '#7bed9f' }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: '碧璽天然水晶原礦',
      price: 'NT$ 590',
      image: 'https://via.placeholder.com/150x120/deb887/000000?text=碧璽水晶',
      link: 'https://example-shop.com/product1'
    },
    {
      id: 2,
      name: '巴西淨化白水晶-福氣開運胸針',
      price: 'NT$ 390',
      image: 'https://via.placeholder.com/150x120/f5f5dc/000000?text=白水晶',
      link: 'https://example-shop.com/product2'
    }
  ];

  const hotProducts = [
    {
      id: 3,
      name: '水晶純音石花瓶',
      price: 'NT$ 666',
      image: 'https://via.placeholder.com/100x100/e6e6fa/000000?text=花瓶',
      link: 'https://example-shop.com/product3'
    },
    {
      id: 4,
      name: '巴西光芒發晶蓮花',
      price: 'NT$ 1,000',
      image: 'https://via.placeholder.com/100x100/daa520/000000?text=發晶',
      link: 'https://example-shop.com/product4'
    },
    {
      id: 5,
      name: '巴西發晶',
      price: 'NT$ 700',
      image: 'https://via.placeholder.com/100x100/f0e68c/000000?text=發晶',
      link: 'https://example-shop.com/product5'
    }
  ];

  const newProducts = [
    {
      id: 6,
      name: '磁性紫粉水',
      price: 'NT$ 390',
      image: 'https://via.placeholder.com/100x100/dda0dd/000000?text=紫粉水',
      link: 'https://example-shop.com/product6'
    },
    {
      id: 7,
      name: '開運招財新春禮盒',
      price: 'NT$ 666',
      image: 'https://via.placeholder.com/100x100/ff6347/000000?text=禮盒',
      link: 'https://example-shop.com/product7'
    },
    {
      id: 8,
      name: '紫水晶',
      price: 'NT$ 400',
      image: 'https://via.placeholder.com/100x100/9370db/000000?text=紫水晶',
      link: 'https://example-shop.com/product8'
    }
  ];

  const allProducts = [
    {
      id: 9,
      name: '紫水晶洞',
      price: 'NT$ 800',
      image: 'https://via.placeholder.com/100x100/8a2be2/000000?text=紫水晶洞',
      link: 'https://example-shop.com/product9'
    },
    {
      id: 10,
      name: '招財貔貅擺件',
      price: 'NT$ 500',
      image: 'https://via.placeholder.com/100x100/228b22/000000?text=貔貅',
      link: 'https://example-shop.com/product10'
    }
  ];

  const handleProductClick = (product) => {
    window.open(product.link, '_blank');
  };

  return (
    <div className="shopping-app-wrapper">
      <div className="shopping-container">
        <div className="shopping-header">
          <h1 className="shopping-title">星願指引</h1>
          <Settings className="settings-icon" />
        </div>

        <div className="shopping-main">
          <div className="page-title">
            <h2>幸運小物商城</h2>
          </div>

          <div className="shopping-content">
            <div className="hero-section">
              <div className="hero-card">
                <div className="hero-text">
                  <h3>今日幸運推薦</h3>
                  <p>提升你的好運勢</p>
                </div>
                <div className="hero-image">
                  <img src="https://via.placeholder.com/80x60/f0e68c/000000?text=水晶" alt="今日推薦" />
                </div>
              </div>
            </div>

            <div className="category-tabs">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="fortune-categories">
              <h4>幸運分類</h4>
              <div className="fortune-grid">
                {categoryIcons.map((item, index) => (
                  <div key={index} className="fortune-item" style={{ backgroundColor: item.color }}>
                    <span className="fortune-icon">{item.icon}</span>
                    <span className="fortune-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="section">
              <div className="section-header">
                <span className="vip-badge">VIP</span>
                <h4>處女座本月幸運物</h4>
              </div>
              <div className="product-grid-2">
                {featuredProducts.map(product => (
                  <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                    <img src={product.image} alt={product.name} />
                    <h5>{product.name}</h5>
                    <p className="price">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="section">
              <h3>熱門推薦</h3>
              <div className="product-grid-3">
                {hotProducts.map(product => (
                  <div key={product.id} className="product-card small" onClick={() => handleProductClick(product)}>
                    <img src={product.image} alt={product.name} />
                    <h5>{product.name}</h5>
                    <p className="price">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="section">
              <h3>新品上架</h3>
              <div className="product-grid-3">
                {newProducts.map(product => (
                  <div key={product.id} className="product-card small" onClick={() => handleProductClick(product)}>
                    <img src={product.image} alt={product.name} />
                    <h5>{product.name}</h5>
                    <p className="price">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="section">
              <h3>所有商品</h3>
              <div className="product-grid-2">
                {allProducts.map(product => (
                  <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                    <img src={product.image} alt={product.name} />
                    <h5>{product.name}</h5>
                    <p className="price">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="shopping-footer">© 2025 星願指引 | 版權所有</div>
        <div className="shopping-bottom-nav">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="shopping-nav-icon">
              <div className="shopping-nav-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingApp;