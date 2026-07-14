import React from 'react';
import '../css/Home.css';

// Icons 
import { 
  FiHome, FiShoppingCart, FiUser, FiArrowRight, FiMapPin, FiSearch, FiHeart, FiClock, FiDollarSign, FiZap, FiCpu, FiShield, FiAward
} from 'react-icons/fi';
import { FaUtensils, FaAppleAlt, FaStar, FaHeart, FaApple, FaGooglePlay } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-wrapper">
      
      {/* --- 1. HEADER --- */}
      <header className="header-container">
        <div className="logo-box">
          <div className="logo-icon"><FaUtensils /></div>
          Food<span>Flow</span>
        </div>

        <nav className="nav-links">
          <a href="#" className="active-link"><FiHome /> Home</a>
          <a href="#"><FiHeart /> Restaurants</a>
          <a href="#"><FiHeart /> Offers</a>
          <a href="#"><FiHeart /> About</a>
        </nav>

        <div className="nav-actions">
          <div className="nav-location"><FiMapPin /> Deliver to: <b>Downtown</b></div>
          <button className="nav-btn"><FiShoppingCart /> Cart</button>
          <button className="nav-btn primary"><FiUser /> Sign In</button>
        </div>
      </header>

      {/* --- 2. HERO SECTION --- */}
      <section className="hero-area">
        <div className="hero-left">
          <div className="hero-badge">
            <FaAppleAlt /> #1 Food Delivery in the City
          </div>

          <h1 className="hero-title">
            Hungry? <br />
            We've got <span className="orange">flavor</span> <br />
            <span className="green">delivered.</span>
          </h1>

          <p className="hero-sub">
            Order from 1000+ hand-picked restaurants. Live tracking, zero-fee delivery on your first order, and dishes that arrive as fresh as the kitchen.
          </p>

          <div className="search-container">
            <div className="search-item border-right">
              <FiMapPin className="icon-orange" />
              <input type="text" placeholder="Downtown" />
            </div>
            <div className="search-item">
              <FiSearch className="icon-gray" />
              <input type="text" placeholder="Search restaurants or dish" />
            </div>
            <div className="search-btn-area">
              <button className="btn-find-food">Find Food <FiArrowRight /></button>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn-order"><FiShoppingCart /> Order Now</button>
            <button className="btn-browse">Browse Menu <FiArrowRight /></button>
          </div>
        </div>

        <div className="hero-right">
          <div className="main-plate-wrap">
            <img src="/Home/Chicken-Biryani-Recipe img.jpg" alt="Food Platter" />
          </div>
          <div className="floating-box f-top-left">
            <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300" alt="Curry" />
          </div>
          <div className="floating-box f-top-right">
            <img src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300" alt="Soup" />
          </div>
          <div className="floating-box f-bottom-left">
            <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300" alt="Snacks" />
          </div>
          <div className="delivery-box">
            <div className="delivery-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '20px', height: '20px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div className="delivery-text">
              <p className="delivery-label">Avg. delivery</p>
              <p className="delivery-time">22 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. STATS --- */}
      <section className="stats-area">
        <div className="stat-box">
          <h2>1000+</h2>
          <p>Restaurants</p>
        </div>
        <div className="stat-box">
          <h2>50K+</h2>
          <p>Happy customers</p>
        </div>
        <div className="stat-box">
          <h2>4.9 <FaStar style={{color: '#FF6B35', fontSize: '18px'}} /></h2>
          <p>Avg. rating</p>
        </div>
      </section>

      {/* --- 4. CATEGORIES --- */}
      <section className="categories-area">
        <div className="cat-header">
          <div>
            <span className="sub-label">EXPLORE</span>
            <h2>Popular categories</h2>
          </div>
          <span>See all <FiArrowRight /></span>
        </div>
        <div className="cat-grid">
          <div className="cat-card">
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400" alt="Pizza" />
            <span>Pizza</span>
          </div>
          <div className="cat-card" style={{ background: '#E0E0E0' }}><span>Burger</span></div>
          <div className="cat-card" style={{ background: '#D0D0D0' }}><span>Biryani</span></div>
          <div className="cat-card" style={{ background: '#C0C0C0' }}><span>Chinese</span></div>
          <div className="cat-card" style={{ background: '#B0B0B0' }}><span>Indian</span></div>
          <div className="cat-card" style={{ background: '#A0A0A0' }}><span>Desserts</span></div>
          <div className="cat-card" style={{ background: '#909090' }}><span>Drinks</span></div>
          <div className="cat-card" style={{ background: '#808080' }}><span>Healthy</span></div>
        </div>
      </section>

      {/* --- 5. RESTAURANTS --- */}
      <section className="trending-area">
        <div className="trending-header">
          <div>
            <span className="sub-label">TRENDING</span>
            <h2>Restaurants your neighbours love</h2>
          </div>
          <span className="view-all">View all <FiArrowRight /></span>
        </div>
        <div className="restaurant-grid">
          <div className="restaurant-card">
            <div className="card-img-wrap">
              <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600" alt="Green Bowl" />
              <span className="promo-badge"><FiDollarSign /> BOGO on bowls</span>
              <button className="favorite-btn"><FaHeart /></button>
            </div>
            <div className="card-body">
              <div className="card-top">
                <h3 className="rest-name">Green Bowl</h3>
                <span className="rest-rating"><FaStar /> 4.6</span>
              </div>
              <p className="rest-desc">Cold-pressed juices & grain bowls</p>
              <div className="rest-meta">
                <span><FiClock /> 22 min</span>
                <span><FiMapPin /> 1.1 km</span>
                <span><FiDollarSign /> $620 for two</span>
              </div>
            </div>
          </div>
          <div className="restaurant-card">
            <div className="card-img-wrap">
              <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=600" alt="Burger Foundry" />
              <span className="promo-badge white-badge">PROMOTED</span>
              <span className="promo-badge orange-bg" style={{ bottom: '50px' }}><FiDollarSign /> Free delivery over $15</span>
              <button className="favorite-btn"><FaHeart /></button>
            </div>
            <div className="card-body">
              <div className="card-top">
                <h3 className="rest-name">The Burger Foundry</h3>
                <span className="rest-rating"><FaStar /> 4.5</span>
              </div>
              <p className="rest-desc">Handcrafted smash burgers & fries</p>
              <div className="rest-meta">
                <span><FiClock /> 20 min</span>
                <span><FiMapPin /> 0.8 km</span>
                <span><FiDollarSign /> $500 for two</span>
              </div>
            </div>
          </div>
          <div className="restaurant-card">
            <div className="card-img-wrap">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600" alt="Wok and Roll" />
              <span className="promo-badge"><FiDollarSign /> 20% OFF</span>
              <button className="favorite-btn"><FaHeart /></button>
            </div>
            <div className="card-body">
              <div className="card-top">
                <h3 className="rest-name orange-text">Wok & Roll</h3>
                <span className="rest-rating"><FaStar /> 4.4</span>
              </div>
              <p className="rest-desc">Sichuan wok noodles & dim sum</p>
              <div className="rest-meta">
                <span><FiClock /> 30 min</span>
                <span><FiMapPin /> 1.9 km</span>
                <span><FiDollarSign /> $550 for two</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. AI CONCIERGE --- */}
      <section className="ai-section-wrapper">
        <div className="ai-inner-container">
          <div className="ai-header">
            <div className="ai-badge">
              <FiCpu /> AI CONCIERGE <span className="ai-sub-text">• POWERED BY GPT-4O</span>
            </div>
            <h2 className="ai-main-title">
              Don't know what to order?<br />
              <span className="orange">Ask our </span><span className="green">AI.</span>
            </h2>
            <p className="ai-desc">
              Describe your mood or craving in plain English — we'll match you with the perfect dishes from your local restaurants.
            </p>
          </div>
          <div className="ai-toggle-row">
            <button className="ai-toggle-btn active"><FiZap /> Recommend for me</button>
            <button className="ai-toggle-btn"><FiSearch /> Smart search</button>
          </div>
          <div className="ai-input-grid">
            <div className="ai-mood-col">
              <label className="ai-label">MOOD</label>
              <div className="ai-pills-wrapper">
                <button className="ai-pill active">Comfort food</button>
                <button className="ai-pill">Healthy</button>
                <button className="ai-pill">Adventurous</button>
                <button className="ai-pill">Quick lunch</button>
                <button className="ai-pill">Fancy dinner</button>
                <button className="ai-pill">Cozy night</button>
              </div>
            </div>
            <div className="ai-input-col">
              <label className="ai-label">WHAT ARE YOU CRAVING?</label>
              <div className="ai-search-bar">
                <input type="text" placeholder="e.g. spicy noodles, something sweet..." className="ai-text-input" />
                <button className="ai-recommend-btn"><FiZap /> Recommend</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. BANNERS --- */}
      <section className="banners-wrapper">
        <div className="banners-grid">
          <div className="banner-card banner-orange">
            <div className="banner-content">
              <span className="banner-label">LIMITED TIME</span>
              <h3 className="banner-title">50% OFF</h3>
              <p className="banner-desc">Your first three orders</p>
              <button className="banner-btn">Claim now</button>
            </div>
            <div className="banner-image-mask">
              <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400" alt="50% Off Curry" />
            </div>
          </div>
          <div className="banner-card banner-teal">
            <div className="banner-content">
              <span className="banner-label">LIMITED TIME</span>
              <h3 className="banner-title">Free Delivery</h3>
              <p className="banner-desc">Weekend feasts on us</p>
              <button className="banner-btn">Order weekend</button>
            </div>
            <div className="banner-image-mask">
              <img src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400" alt="Free Delivery Soup" />
            </div>
          </div>
          <div className="banner-card banner-pink">
            <div className="banner-content">
              <span className="banner-label">LIMITED TIME</span>
              <h3 className="banner-title">Buy 1 Get 1</h3>
              <p className="banner-desc">On premium desserts</p>
              <button className="banner-btn">Grab sweet deal</button>
            </div>
            <div className="banner-image-mask">
              <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400" alt="Buy 1 Get 1 Dessert" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 8. DISHES --- */}
      <section className="dishes-wrapper">
        <div className="dishes-header">
          <span className="sub-label">DELICIOUS</span>
          <h2>Popular dishes right now</h2>
        </div>
        <div className="dishes-grid">
          <div className="dish-card">
            <div className="dish-img-wrap">
              <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600" alt="Truffle Mushroom Pizza" />
            </div>
            <div className="dish-body">
              <div className="dish-top">
                <h3 className="dish-name">Truffle Mushroom Pizza</h3>
                <span className="dish-rating"><FaStar /> 4.9</span>
              </div>
              <p className="dish-desc">Wild mushrooms, black truffle oil,...</p>
              <div className="dish-bottom">
                <span className="dish-price">$18.9</span>
                <button className="dish-order-btn">Order <FiArrowRight /></button>
              </div>
            </div>
          </div>
          <div className="dish-card">
            <div className="dish-img-wrap">
              <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600" alt="Hyderabadi Chicken Biryani" />
            </div>
            <div className="dish-body">
              <div className="dish-top">
                <h3 className="dish-name">Hyderabadi Chicken Biryani</h3>
                <span className="dish-rating"><FaStar /> 4.9</span>
              </div>
              <p className="dish-desc">Long-grain basmati, tender chicken,...</p>
              <div className="dish-bottom">
                <span className="dish-price">$14.5</span>
                <button className="dish-order-btn">Order <FiArrowRight /></button>
              </div>
            </div>
          </div>
          <div className="dish-card">
            <div className="dish-img-wrap">
              <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600" alt="Belgian Chocolate Fondant" />
            </div>
            <div className="dish-body">
              <div className="dish-top">
                <h3 className="dish-name">Belgian Chocolate Fondant</h3>
                <span className="dish-rating"><FaStar /> 4.9</span>
              </div>
              <p className="dish-desc">Warm chocolate cake with a molten...</p>
              <div className="dish-bottom">
                <span className="dish-price">$8.5</span>
                <button className="dish-order-btn">Order <FiArrowRight /></button>
              </div>
            </div>
          </div>
          <div className="dish-card">
            <div className="dish-img-wrap">
              <img src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600" alt="Signature Red Velvet" />
            </div>
            <div className="dish-body">
              <div className="dish-top">
                <h3 className="dish-name">Signature Red Velvet</h3>
                <span className="dish-rating"><FaStar /> 4.8</span>
              </div>
              <p className="dish-desc">Layered red velvet sponge, cream...</p>
              <div className="dish-bottom">
                <span className="dish-price">$6.9</span>
                <button className="dish-order-btn">Order <FiArrowRight /></button>
              </div>
            </div>
          </div>
          <div className="dish-card">
            <div className="dish-img-wrap">
              <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600" alt="Lucknowi Mutton Biryani" />
            </div>
            <div className="dish-body">
              <div className="dish-top">
                <h3 className="dish-name">Lucknowi Mutton Biryani</h3>
                <span className="dish-rating"><FaStar /> 4.8</span>
              </div>
              <p className="dish-desc">Slow-cum cooked mutton, aromatic...</p>
              <div className="dish-bottom">
                <span className="dish-price">$17.5</span>
                <button className="dish-order-btn">Order <FiArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 9. FEATURES --- */}
      <section className="features-wrapper">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-box"><FiZap /></div>
            <h3 className="feature-title">Lightning fast</h3>
            <p className="feature-desc">Avg 22 min delivery city-wide</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box"><FiAward /></div>
            <h3 className="feature-title">Zero-fee delivery</h3>
            <p className="feature-desc">On your first three orders</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box"><FiShield /></div>
            <h3 className="feature-title">Safe & hygienic</h3>
            <p className="feature-desc">FSSAI-verified kitchens only</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box"><FiHeart /></div>
            <h3 className="feature-title">Curated menus</h3>
            <p className="feature-desc">Hand-picked local favourites</p>
          </div>
        </div>
      </section>

      {/* --- 10. TESTIMONIALS --- */}
      <section className="testimonials-wrapper">
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testi-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p className="testi-quote">“The interface feels like Airbnb but for food. Ordering my daily lunch has never been this delightful.”</p>
            <div className="testi-user">
              <img src="https://i.pravatar.cc/150?u=priya" alt="Priya Sharma" />
              <div><h4>Priya Sharma</h4><p>Product Designer</p></div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testi-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p className="testi-quote">“Live tracking is spot-on. My biryani arrived hot in under 25 minutes. Absolute game changer.”</p>
            <div className="testi-user">
              <img src="https://i.pravatar.cc/150?u=james" alt="James Carter" />
              <div><h4>James Carter</h4><p>Software Engineer</p></div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testi-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p className="testi-quote">“The curated restaurant selection is fantastic. Discovered three new favorite places in one week.”</p>
            <div className="testi-user">
              <img src="https://i.pravatar.cc/150?u=ana" alt="Ana Rodriguez" />
              <div><h4>Ana Rodriguez</h4><p>Content Creator</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 11. BOTTOM CTA & NEWSLETTER (NEW) --- */}
      <section className="cta-wrapper">
        <div className="cta-grid">
          
          {/* Left Card: App Promo */}
          <div className="cta-card cta-orange">
            <span className="cta-label">FOODFLOW APP</span>
            <h2 className="cta-title">Get exclusive app-only deals</h2>
            <p className="cta-desc">
              Faster checkout, real-time tracking, and app-only discounts. Available on iOS and Android.
            </p>
            <div className="cta-buttons">
              <button className="store-btn">
                <FaApple /> App Store
              </button>
              <button className="store-btn">
                <FaGooglePlay /> Google Play
              </button>
            </div>
          </div>

          {/* Right Card: Newsletter */}
          <div className="cta-card cta-black">
            <span className="cta-label" style={{ color: '#FFAD33' }}>NEWSLETTER</span>
            <h2 className="cta-title">Weekly recipes & offers</h2>
            <p className="cta-desc">
              Get hand-picked local restaurant highlights, seasonal recipes, and members-only coupons every Friday.
            </p>
            <div className="newsletter-box">
              <input type="email" placeholder="you@foodie.com" className="newsletter-input" />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>

        </div>
      </section>

      {/* --- 12. FOOTER TITLE --- */}
      <section className="footer-wrapper">
        <div className="footer-inner">
          <span className="footer-label">LOVED BY FOOD LOVERS</span>
          <h2 className="footer-title">50,000+ 5-star reviews and counting</h2>
        </div>
      </section>

    </div>
  );
};

export default Home;