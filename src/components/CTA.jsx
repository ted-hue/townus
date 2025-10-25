import { motion } from 'framer-motion';

const CTA = () => {
  const ctaOptions = [
    {
      icon: "☎️",
      title: "전화 상담",
      phone: "02-XXXX-XXXX",
      hours: ["평일 09:00 ~ 18:00", "주말 상담 가능 (사전 예약)"],
      cta: "지금 전화하기"
    },
    {
      icon: "💬",
      title: "카톡 상담",
      description: "사진 업로드 후 즉시 피드백",
      hours: ["평일 평균 응답 시간: 1시간 이내"],
      cta: "카톡으로 문의하기"
    },
    {
      icon: "📝",
      title: "온라인 견적 신청",
      description: "폼 작성 후 3일 내 연락",
      hours: ["이름, 전화번호, 위치 입력"],
      cta: "온라인 신청하기"
    }
  ];

  return (
    <section 
      id="contact" 
      className="section"
      style={{ backgroundColor: '#1A3A52' }}
    >
      <div className="container">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4xl"
        >
          <h2 className="text-[36px] font-bold text-white">
            지금 바로 시작하세요
          </h2>
        </motion.div>

        {/* CTA 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -4,
                backgroundColor: 'rgba(255,255,255,1)',
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="rounded-xl p-7 text-center transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
              }}
            >
              {/* 아이콘 */}
              <div className="text-[44px] mb-lg">
                {option.icon}
              </div>

              {/* 타이틀 */}
              <h3 
                className="text-lg font-semibold mb-md"
                style={{ color: '#1A3A52' }}
              >
                {option.title}
              </h3>

              {/* 전화번호 또는 설명 */}
              {option.phone ? (
                <div 
                  className="text-base font-medium mb-md"
                  style={{ color: '#2563EB' }}
                >
                  {option.phone}
                </div>
              ) : (
                <div 
                  className="text-base mb-md"
                  style={{ color: '#1A3A52' }}
                >
                  {option.description}
                </div>
              )}

              {/* 운영 시간 */}
              <div className="space-y-1 mb-2xl">
                {option.hours.map((hour, hourIndex) => (
                  <div
                    key={hourIndex}
                    className="text-sm"
                    style={{ color: '#6B7280' }}
                  >
                    {hour}
                  </div>
                ))}
              </div>

              {/* CTA 버튼 */}
              <motion.button
                whileHover={{ 
                  backgroundColor: '#1d4ed8',
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-white font-semibold rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: '#2563EB',
                  padding: '12px 24px'
                }}
              >
                {option.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* 하단 추가 정보 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-4xl"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-md">
              무료 상담, 무료 견적
            </h3>
            <p className="text-lg text-white/80 mb-lg">
              어떤 방법이든 편하신 대로 연락주세요. 전문가가 친절히 상담해드립니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
              <span>✓ 24시간 내 답변</span>
              <span>✓ 정확한 견적 제공</span>
              <span>✓ 투명한 가격 정책</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;