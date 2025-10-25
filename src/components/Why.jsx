import { motion } from 'framer-motion';

const Why = () => {
  const cards = [
    {
      icon: "🚨",
      title: "투명한 폐기물 처리",
      problem: "불명확한 처리 비용",
      solution: "적법 처리, 모든 증빙 제시"
    },
    {
      icon: "💰", 
      title: "정확한 견적 체계",
      problem: "추가 비용 발생",
      solution: "표준 단가, 계약서 그대로"
    },
    {
      icon: "⚠️",
      title: "안전한 해체 기술",
      problem: "구조 손상 위험",
      solution: "정밀 절단, 손상률 0%"
    },
    {
      icon: "🔧",
      title: "전문적 작업 방식", 
      problem: "소음 민원 발생",
      solution: "저소음 장비, 전문 공법"
    }
  ];


  return (
    <section id="why" className="section bg-gray-50">
      <div className="container">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4xl"
        >
          <h2 className="heading-2 mb-md">왜 타운어스인가?</h2>
          <p className="text-lg text-gray-600">일반 업체와 확실히 다른 이유</p>
        </motion.div>

        {/* 4개 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg place-items-center max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white p-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* 아이콘 */}
              <div className="text-4xl mb-lg text-center">
                {card.icon}
              </div>

              {/* 제목 */}
              <h3 className="heading-4 text-center mb-md text-primary">
                {card.title}
              </h3>

              {/* 문제점 */}
              <div className="mb-md">
                <div className="text-xs font-semibold text-red-600 mb-xs uppercase tracking-wide">
                  기존 문제
                </div>
                <p className="text-sm text-gray-600">
                  {card.problem}
                </p>
              </div>

              {/* 해결책 */}
              <div>
                <div className="text-xs font-semibold text-secondary mb-xs uppercase tracking-wide">
                  타운어스 해결책
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {card.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4xl text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-2xl max-w-2xl mx-auto">
            <h3 className="heading-3 mb-lg text-primary">
              프리미엄 철거의 차이를 경험하세요
            </h3>
            <p className="text-gray-600 mb-xl">
              투명한 가격, 완벽한 시공으로 새로운 시작을 함께하겠습니다.
            </p>
            <button className="btn-primary">
              무료 상담 받기
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;