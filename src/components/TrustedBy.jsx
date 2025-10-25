import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const TrustedBy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    satisfaction: 0
  });

  const targetValues = {
    projects: 2500,
    clients: 1200,
    experience: 20,
    satisfaction: 99
  };

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const frameRate = 60;
      const totalFrames = duration / (1000 / frameRate);

      Object.keys(targetValues).forEach((key) => {
        const target = targetValues[key];
        const increment = target / totalFrames;
        let currentValue = 0;
        let frame = 0;

        const timer = setInterval(() => {
          frame++;
          currentValue = Math.min(currentValue + increment, target);
          
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(currentValue)
          }));

          if (frame >= totalFrames) {
            clearInterval(timer);
            setCounters(prev => ({
              ...prev,
              [key]: target
            }));
          }
        }, 1000 / frameRate);
      });
    }
  }, [isInView]);

  const companies = [
    "현대건설", "대우건설", "GS건설", "포스코건설",
    "대림산업", "롯데건설", "HDC현대산업개발", "삼성물산",
    "SK에코플랜트", "DL이앤씨", "한화건설", "두산건설"
  ];

  const stats = [
    { key: 'projects', value: counters.projects, suffix: '+', label: '완료 프로젝트' },
    { key: 'clients', value: counters.clients, suffix: '+', label: '만족 고객사' },
    { key: 'experience', value: counters.experience, suffix: '년+', label: '업계 경력' },
    { key: 'satisfaction', value: counters.satisfaction, suffix: '%', label: '고객 만족도' }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#F9FAFB' }}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>
            믿을 수 있는 파트너십
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            대기업 공식 협력사로서 검증된 전문성과 신뢰성을 제공합니다
          </p>
        </motion.div>

        {/* 통계 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#005FCC' }}>
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm font-medium" style={{ color: '#6B7280' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 협력사 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-8" style={{ color: '#1F2937' }}>
            주요 협력사
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 + 0.8 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <div className="text-sm font-medium" style={{ color: '#374151' }}>
                  {company}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;