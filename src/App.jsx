import React from 'react';
import { Layers, Cpu, Wrench, ChevronLeft, Hexagon } from 'lucide-react';
import './index.css';

// Image paths from public folder / external
const heroImage = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'; // High quality Unsplash 3D abstract
const servicesBg = 'https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?q=80&w=2564&auto=format&fit=crop'; // 3D printer
const contactBg = 'https://images.unsplash.com/photo-1589254066007-898d52d910d3?q=80&w=2564&auto=format&fit=crop'; // Robotic arm and mechanics
const modelImage1 = './model.png';

function App() {
  return (
    <>
      <header className="header">
        <div className="logo-container" onClick={() => window.scrollTo(0,0)}>
          <Hexagon className="logo-icon" size={64} />
          <div className="logo-text">ISRAROBOTS</div>
        </div>
        <nav className="nav-links">
          <a href="#services">שירותים</a>
          <a href="#portfolio">עבודות</a>
          <a href="#contact">צור קשר</a>
        </nav>
      </header>

      <section className="hero">
        <div 
          className="hero-bg" 
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="hero-content">
          <h1>המקום שבו <span>רעיונות</span> מקבלים צורה</h1>
          <p>שירותי תכנון מודלים והדפסות תלת-ממד מקצועיים. מדיוק הנדסי ועד לעיצוב אומנותי – אנחנו הופכים את החזון שלך למוצר מוחשי בטכנולוגיות המתקדמות ביותר</p>
          <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView()}>
            בקש הצעת מחיר <ChevronLeft size={20} style={{ verticalAlign: 'middle', marginRight: '8px' }} />
          </button>
        </div>
      </section>

      <section id="services" className="hero" style={{ minHeight: 'auto', padding: '6rem 5%' }}>
        <div 
          className="hero-bg purple-overlay" 
          style={{ backgroundImage: `url('${servicesBg}')` }}
        />
        <div className="hero-content" style={{ maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'right' }}>השירותים <span>שלנו</span></h2>
          <div className="services-grid">
            <div className="service-card glass-card">
              <Layers className="service-icon" size={48} />
              <h3>תכנון ומידול 3D</h3>
              <p>המרת רעיונות, סקיצות או שרטוטים למודלים תלת-ממדיים מדויקים המוכנים להדפסה או לייצור</p>
            </div>
            <div className="service-card glass-card">
              <Cpu className="service-icon" size={48} />
              <h3>הדפסה מתקדמת</h3>
              <p>הדפסה במגוון חומרים (PLA, ABS, PETG, חומרים גמישים) ברזולוציה גבוהה וגימור מושלם</p>
            </div>
            <div className="service-card glass-card">
              <Wrench className="service-icon" size={48} />
              <h3>אב טיפוס ורובוטיקה</h3>
              <p>ייצור חלקים מכניים לרובוטיקה ופיתוח אבות טיפוס פונקציונליים עבור מיזמים וסטארטאפים</p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section" style={{ background: 'var(--bg-card)' }}>
        <h2 className="section-title">דוגמאות <span>מהסטודיו</span></h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={modelImage1} alt="3D Model Gear" />
            <div className="gallery-overlay">
              <h3>חלק מכני מורכב</h3>
              <p>הדפסה ברזולוציה גבוהה לחלקי רובוטיקה</p>
            </div>
          </div>
          <div className="gallery-item" style={{ background: '#0a0f16', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3 style={{ color: 'var(--text-muted)' }}>פרויקט בקרוב...</h3>
          </div>
          <div className="gallery-item" style={{ background: '#0a0f16', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h3 style={{ color: 'var(--text-muted)' }}>פרויקט בקרוב...</h3>
          </div>
        </div>
      </section>

      <section id="contact" className="hero" style={{ minHeight: 'auto', padding: '6rem 5%' }}>
        <div 
          className="hero-bg cyan-overlay" 
          style={{ backgroundImage: `url('${contactBg}')` }}
        />
        <div className="hero-content" style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'right' }}>בואו נדבר על <span>הפרויקט</span> שלכם</h2>
          <div className="contact-container glass-card">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>שם מלא</label>
                <input type="text" className="form-control" placeholder="ישראל ישראלי" />
              </div>
              <div className="form-group">
                <label>אימייל</label>
                <input type="email" className="form-control" placeholder="example@email.com" />
              </div>
              <div className="form-group">
                <label>ספר לנו על הרעיון שלך</label>
                <textarea className="form-control" placeholder="אני מעוניין להדפיס..."></textarea>
              </div>
              <button type="submit" className="submit-btn">שלח פנייה</button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} ISRAROBOTS. כל הזכויות שמורות</p>
      </footer>
    </>
  );
}

export default App;
