import { useState, useEffect } from 'react';
import { Phone, Calculator, X, ChevronUp } from 'lucide-react';

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero 섹션을 지나면 나타나도록 (대략 600px 스크롤 후)
      const scrollY = window.scrollY;
      if (scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false); // 위로 스크롤하면 확장 메뉴도 닫기
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-16 opacity-0 scale-95 pointer-events-none'
      }`}
      style={{
        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
      }}
    >
      {/* 확장된 메뉴 */}
      {isExpanded && (
        <div className="mb-4 space-y-3 transform transition-all duration-300 ease-out animate-in slide-in-from-bottom">
          {/* 전화 상담 버튼 */}
          <button className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg transition-all hover:shadow-xl">
            <Phone size={18} />
            <span className="font-medium">전화상담: 1588-9999</span>
          </button>
          
          {/* 견적 받기 버튼 */}
          <button className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-full shadow-lg border transition-all hover:shadow-xl">
            <Calculator size={18} />
            <span className="font-medium">무료 견적받기</span>
          </button>
        </div>
      )}

      {/* 메인 플로팅 버튼 */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-110 flex items-center justify-center transform ${
          isExpanded 
            ? 'bg-gray-600 hover:bg-gray-700 text-white rotate-180' 
            : 'bg-blue-500 hover:bg-blue-600 text-white hover:rotate-12'
        }`}
        style={{ 
          animation: !isExpanded ? 'bounce 2s infinite' : 'none'
        }}
      >
        {isExpanded ? (
          <X size={24} />
        ) : (
          <div className="relative">
            <Phone size={20} />
            {/* 알림 점 */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        )}
      </button>

      {/* 툴팁 (처음 방문자용) */}
      {!isExpanded && isVisible && (
        <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-90 animate-pulse">
          무료 상담받기
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default FloatingCTA;