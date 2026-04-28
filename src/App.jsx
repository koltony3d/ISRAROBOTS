import React from 'react';
import { Layers, Cpu, PenTool, ArrowLeft, Hexagon } from 'lucide-react';
import './index.css';

// Hero image — Snapmaker U1 Color 3D printer with 3D model on screen
const heroImage = 'https://images.unsplash.com/photo-1756723901890-4d8a4b4cddaf?q=80&w=2564&auto=format&fit=crop';
const contactImage = 'https://images.unsplash.com/photo-1589254066007-898d52d910d3?q=80&w=2564&auto=format&fit=crop'; 

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="container header-content">
          <div className="logo-container" onClick={() => window.scrollTo(0,0)}>
            <Hexagon className="logo-icon" size={28} strokeWidth={2.5} />
            <div className="logo-text">ISRAROBOTS</div>
          </div>
          <nav className="nav-links">
            <a href="#services">שירותים הנדסיים</a>
            <a href="#about">טכנולוגיות</a>
            <a href="#contact" className="nav-btn">צור קשר</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-split">
          <div className="hero-text-content">
            <h1 className="hero-title">מרעיון למוצר — תכנון, מידול והדפסה במקום אחד</h1>
            <p className="hero-subtitle">
              שירותי תכנון מודלים והדפסות תלת-ממד מקצועיים. מדיוק הנדסי ועד לעיצוב אומנותי – אנחנו הופכים את החזון שלך למוצר מוחשי בטכנולוגיות המתקדמות ביותר
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView()}>
                התחלת פרויקט <ArrowLeft size={18} className="btn-icon" />
              </button>
            </div>
          </div>
          <div className="hero-image-container">
            <img src={heroImage} alt="3D Printing and Engineering" className="hero-image" />
          </div>
        </div>
      </section>

      <section id="services" className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">יש לך רעיון? אנחנו נהפוך אותו לאבטיפוס</h2>
            <p className="section-description">מעטפת הנדסית מלאה המותאמת לדרישות התעשייה</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="icon-wrapper">
                <PenTool size={32} />
              </div>
              <h3>תכנון מכני (CAD)</h3>
              <p>המרת רעיונות ושרטוטים למודלים תלת-ממדיים פרמטריים המוכנים לייצור, תוך התחשבות באילוצי חומרים ומכניקה</p>
            </div>
            <div className="service-card">
              <div className="icon-wrapper">
                <Layers size={32} />
              </div>
              <h3>ייצור מתקדם בתלת-ממד</h3>
              <p>הדפסה במגוון פולימרים טכניים (ABS, PETG, PC, ניילון) המבטיחה עמידות מכנית ודיוק מידות ברזולוציה גבוהה</p>
            </div>
            <div className="service-card">
              <div className="icon-wrapper">
                <Cpu size={32} />
              </div>
              <h3>פיתוח אבות-טיפוס</h3>
              <p>ייצור מואץ של מכלולים מכניים לרובוטיקה ואבות-טיפוס פונקציונליים עבור מיזמים טכנולוגיים וחברות חומרה</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-split">
          <div className="contact-image-container">
            <img src={contactImage} alt="Robotics and Mechanics" className="contact-image" />
            <div className="contact-info-overlay">
              <h3>ISRAROBOTS</h3>
              <p>המחלקה להנדסה וייצור</p>
            </div>
          </div>
          <div className="contact-form-container">
            <h2 className="section-title">מתכננים, מדמים ומדפיסים מוצרים</h2>
            <h3 className="contact-form-title">יצירת קשר</h3>
            <p className="contact-subtitle">מלאו את הפרטים ונחזור אליכם עם אפיון והצעת מחיר</p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>שם מלא / חברה</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>אימייל ארגוני</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>פירוט הדרישות הטכניות (מידות, חומרים, כמויות)</label>
                <textarea className="form-control" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">שליחת פנייה</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <div className="logo-container">
            <Hexagon className="logo-icon" size={20} />
            <span className="logo-text-small">ISRAROBOTS</span>
          </div>
          <p>&copy; {new Date().getFullYear()} כל הזכויות שמורות</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
