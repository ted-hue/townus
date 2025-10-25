import { useEffect } from 'react';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import Why from './components/sections/Why';
import How from './components/sections/How';
import What from './components/sections/What';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';

function App() {
  // 스크롤 복원 및 페이지 로드 시 맨 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      {/* 헤더 네비게이션 */}
      <Header />
      
      {/* 메인 콘텐츠 */}
      <main>
        {/* Hero 섹션 */}
        <Hero />
        
        {/* Why 섹션 - 4가지 문제점 */}
        <Why />
        
        {/* How 섹션 - 3가지 차별점 */}
        <How />
        
        {/* What 섹션 - 6가지 서비스 */}
        <What />
        
        {/* Process 섹션 - 3단계 진행과정 */}
        <Process />
        
        {/* Testimonials 섹션 - 고객 후기 */}
        <Testimonials />
        
        {/* CTA 섹션 - 최종 행동 유도 */}
        <CTA />
      </main>
      
      {/* 푸터 */}
      <Footer />
    </div>
  );
}

export default App;