import { motion } from 'framer-motion';

const PartnershipBanner = () => {
  const partners = [
    { name: '한샘', logo: '🏢' },
    { name: '리바트', logo: '🏢' },
    { name: '현대리바트', logo: '🏢' },
    { name: '대우건설', logo: '🏗️' },
    { name: 'GS건설', logo: '🏗️' },
    { name: '롯데건설', logo: '🏗️' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20">
        
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
              TRUSTED BY
            </span>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#1F2937' }}>
            대기업이 신뢰하는 파트너
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            20년간 축적된 노하우로 국내 주요 건설사 및 인테리어 기업과 함께하고 있습니다
          </p>
        </motion.div>

        {/* 파트너 로고 그리드 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: 0.1 * index,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 border border-white/50"
            >
              <div className="text-3xl mb-3">{partner.logo}</div>
              <div className="text-sm font-semibold text-gray-700">
                {partner.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 신뢰도 지표 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2" style={{ color: '#005FCC' }}>
                20+년
              </div>
              <div className="text-sm text-gray-600">
                전문 경력
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2" style={{ color: '#005FCC' }}>
                500+
              </div>
              <div className="text-sm text-gray-600">
                완료 프로젝트
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2" style={{ color: '#005FCC' }}>
                100%
              </div>
              <div className="text-sm text-gray-600">
                고객 만족도
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2" style={{ color: '#005FCC' }}>
                0건
              </div>
              <div className="text-sm text-gray-600">
                사고 발생률
              </div>
            </div>
          </div>
        </motion.div>

        {/* 인증 배지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            정식 허가업체
          </div>
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            안전관리 인증
          </div>
          <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
            환경부 승인
          </div>
          <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
            보험 가입
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipBanner;