import { useState } from 'react';
import { Award, Calculator, Shield, ChevronLeft, ChevronRight, Users, CheckCircle } from 'lucide-react';

const How = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const differentiators = [
    {
      icon: <Award size={40} className="text-blue-500" />,
      title: "국내 최고 기술력",
      subtitle: "20년+ 경력의 대기업 협력 전문가",
      details: [
        "한샘, 리바트 등 대기업 공식 협력사",
        "안전관리자 상주, 전문 기술자팀 구성",
        "시공 이후까지 고려한 정밀 해체",
        "벽체·배관·전기 구조 손상 0%"
      ],
      examples: [
        "벽체 철거 시 정밀 절단으로 기둥/골조 보존",
        "배관 제거 시 후속 배치 고려한 깔끔 정리",
        "전기 라인 제거 시 차후 배선 경로 확보"
      ],
      stats: { label: "구조 손상률", value: "0%", description: "정밀 절단 공법" }
    },
    {
      icon: <Calculator size={40} className="text-blue-500" />,
      title: "투명한 가격 체계",
      subtitle: "품목별 표준단가로 명확한 계산",
      details: [
        "인력단위 견적 X → 품목별 단가 O",
        "벽체·천장·바닥 ㎡당 명확한 단가",
        "배관 m당, 폐기물 ton당 투명 공개",
        "숨겨진 비용 0%, 추가 청구 없음"
      ],
      examples: [
        "벽체·마감 철거: 5,000~8,000원/㎡",
        "금속 배관 철거: 8,000원/m",
        "폐기물 처리: 면적별 패키지 단가"
      ],
      stats: { label: "견적 정확도", value: "100%", description: "계약서 = 최종비용" }
    },
    {
      icon: <Shield size={40} className="text-blue-500" />,
      title: "적법한 폐기물 처리",
      subtitle: "정식 허가업체로 법적 기준 완벽 준수",
      details: [
        "폐기물 수집·운반 정식 허가업체",
        "모든 폐기물 적법 절차로 처리",
        "환경 규제 완벽 준수로 고객 보호",
        "처리 증명서 및 관련 서류 제공"
      ],
      examples: [
        "폐기물 처리 증명서 발급",
        "건설폐기물 처리장 반입 기록 제공",
        "인허가 서류 필요시 즉시 제출"
      ],
      stats: { label: "법적 준수율", value: "100%", description: "정식 허가업체" }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % differentiators.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + differentiators.length) % differentiators.length);
  };

  const currentItem = differentiators[currentSlide];

  return (
    <section id="how" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">우리는 이렇게 다릅니다</h2>
          <p className="text-xl text-gray-500">3가지 핵심 차별점으로 업계 최고 서비스 제공</p>
        </div>

        {/* 슬라이더 컨테이너 */}
        <div className="relative max-w-4xl mx-auto">
          {/* 메인 카드 */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* 왼쪽: 아이콘 & 기본 정보 */}
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  {currentItem.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {currentItem.title}
                </h3>
                <p className="text-lg text-blue-600 font-medium mb-6">
                  {currentItem.subtitle}
                </p>
                
                {/* 통계 */}
                <div className="inline-block bg-blue-50 rounded-xl p-4 mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {currentItem.stats.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {currentItem.stats.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {currentItem.stats.description}
                  </div>
                </div>
              </div>

              {/* 오른쪽: 상세 내용 */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users size={20} className="text-blue-500" />
                  주요 특징
                </h4>
                <ul className="space-y-3 mb-6">
                  {currentItem.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-bold text-gray-900 mb-4">구체적 예시</h4>
                <div className="bg-white rounded-xl p-4 space-y-2">
                  {currentItem.examples.map((example, index) => (
                    <div key={index} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-blue-500">▶</span>
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 네비게이션 버튼 */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-blue-500 hover:shadow-xl transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-blue-500 hover:shadow-xl transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* 슬라이드 인디케이터 */}
        <div className="flex justify-center gap-2 mt-8">
          {differentiators.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* 하단 요약 */}
        <div className="mt-16 text-center">
          <div className="simple-card bg-gradient-to-r from-gray-50 to-blue-50 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">믿을 수 있는 이유</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500 mb-2">20+년</div>
                <div className="text-sm text-gray-600">전문가 경력</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500 mb-2">100%</div>
                <div className="text-sm text-gray-600">투명한 견적</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500 mb-2">0건</div>
                <div className="text-sm text-gray-600">구조 손상</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;