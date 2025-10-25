import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import Hero from './components/Hero.jsx'
import TrustedBy from './components/TrustedBy.jsx'
import WhyHow from './components/WhyHow.jsx'
import What from './components/What.jsx'
import Process from './components/Process.jsx'
import Promo from './components/Promo.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import ContactModal from './components/ContactModal.jsx'

// Clean production version
function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("서비스 신청하기");

  const openModal = (title = "서비스 신청하기") => {
    setModalTitle(title);
    setIsContactModalOpen(true);
  };

  const closeModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div>
      {/* 깔끔한 네비게이션 */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(10px)',
        color: '#1f2937', 
        padding: '0 60px', 
        zIndex: 50,
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ 
          fontSize: '1.3rem', 
          fontWeight: '700',
          color: '#005FCC',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 7V21C6 21.5523 6.44772 22 7 22H17C17.5523 22 18 21.5523 18 21V7" stroke="#005FCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 7H19" stroke="#005FCC" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V7H8V4Z" stroke="#005FCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          TownUs
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <a href="#why-how" style={{ 
            color: '#6b7280', 
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#005FCC'}
          onMouseLeave={(e) => e.target.style.color = '#6b7280'}
          >왜 타운어스</a>
          <a href="#what" style={{ 
            color: '#6b7280', 
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#005FCC'}
          onMouseLeave={(e) => e.target.style.color = '#6b7280'}
          >서비스</a>
          <a href="#process" style={{ 
            color: '#6b7280', 
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#005FCC'}
          onMouseLeave={(e) => e.target.style.color = '#6b7280'}
          >프로세스</a>
          <a href="#testimonials" style={{ 
            color: '#6b7280', 
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '500',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#005FCC'}
          onMouseLeave={(e) => e.target.style.color = '#6b7280'}
          >리뷰</a>
          <button 
            onClick={() => openModal("서비스 신청하기")}
            style={{
              backgroundColor: '#005FCC',
              color: '#FFFFFF',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#004FA0';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#005FCC';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            서비스 신청
          </button>
        </div>
      </nav>
      
      <main style={{ paddingTop: '64px' }}>
        <Hero openModal={openModal} />
        <WhyHow />
        <What />
        <Process />
        <Testimonials />
        <Promo openModal={openModal} />
      </main>
      
      <Footer />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeModal}
        title={modalTitle}
      />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
