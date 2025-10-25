import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = useMemo(() => [
    { name: "왜 타운어스", href: "#why" },
    { name: "우리의 차별점", href: "#how" },
    { name: "서비스", href: "#what" },
    { name: "진행 과정", href: "#process" },
    { name: "후기", href: "#testimonials" }
  ], []);

  // 스크롤 감지 및 현재 섹션 추적
  useEffect(() => {
    const handleScroll = useCallback(() => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);

      // 현재 섹션 추적
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      }
    }, [navLinks]);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 초기 상태 설정

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  }, []);

  const scrollToSection = useCallback((href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80; // 네비 높이만큼 여유
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, []);

  const scrollToContact = useCallback(() => {
    scrollToSection('#contact');
  }, [scrollToSection]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.05)',
        height: '64px'
      }}
      role="navigation"
      aria-label="메인 네비게이션"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* 로고 */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-lg font-semibold transition-colors duration-200"
            style={{ color: '#1A3A52' }}
            aria-label="타운어스 홈으로 이동"
          >
            <span className="text-xl" role="img" aria-label="건설 아이콘">🏗️</span>
            타운어스
          </motion.button>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                whileHover={{ y: -2 }}
                className="text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 relative"
                style={{
                  color: activeSection === link.href ? '#2563EB' : '#374151'
                }}
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: '#2563EB' }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA 버튼 */}
          <div className="hidden md:block">
            <motion.button
              onClick={scrollToContact}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#1d4ed8'
              }}
              whileTap={{ scale: 0.95 }}
              className="text-white font-medium rounded-lg transition-all duration-200"
              style={{
                backgroundColor: '#2563EB',
                padding: '10px 20px'
              }}
            >
              상담받기
            </motion.button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ color: '#374151' }}
              aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block w-full text-left px-3 py-3 text-base font-medium rounded-lg transition-colors duration-200"
                  style={{
                    color: activeSection === link.href ? '#2563EB' : '#374151',
                    backgroundColor: activeSection === link.href ? '#EBF4FF' : 'transparent'
                  }}
                >
                  {link.name}
                </motion.button>
              ))}
              
              <motion.button
                onClick={scrollToContact}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="block w-full text-left px-3 py-3 text-base font-medium rounded-lg text-white mt-4 transition-colors duration-200"
                style={{ backgroundColor: '#2563EB' }}
              >
                상담받기
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;