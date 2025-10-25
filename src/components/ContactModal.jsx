import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

const ContactModal = ({ isOpen, onClose, title = "서비스 신청하기" }) => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('https://script.google.com/a/macros/keystoneclub.co.kr/s/AKfycbxzi16NQkfhIVu06BGEtZ8jMl8-GX-ts0VNz_-CZMU2KJFmayv60r5nx6Hq3IkZshU0ZA/exec', {
        method: 'POST',
        mode: 'no-cors', // CORS 문제 해결
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyName: formData.company,
          managerName: formData.name,
          phoneNumber: formData.phone,
          timestamp: new Date().toISOString()
        })
      });

      // no-cors 모드에서는 응답을 읽을 수 없으므로 성공으로 간주
      setMessage({ 
        type: 'success', 
        text: '✅ 신청이 완료되었습니다. 곧 연락드리겠습니다.' 
      });
      setFormData({ company: '', name: '', phone: '' });
      
      // 3초 후 모달 닫기
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Form submission error:', error);
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setMessage({ 
          type: 'error', 
          text: '❌ 네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.' 
        });
      } else {
        setMessage({ 
          type: 'error', 
          text: '❌ 오류가 발생했습니다. 다시 시도해주세요.' 
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 오버레이 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* 모달 컨테이너 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 닫기 버튼 */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <X size={20} className="text-gray-500" />
              </button>

              {/* 헤더 */}
              <div className="p-6 pb-4">
                <h2 className="text-2xl font-bold text-center mb-2" style={{ color: '#1F2937' }}>
                  {title}
                </h2>
                <p className="text-center text-gray-600 text-sm">
                  정보를 입력하시면 빠른 시간 내에 연락드리겠습니다
                </p>
              </div>

              {/* 폼 */}
              <form onSubmit={handleSubmit} className="px-6 pb-6">
                <div className="space-y-4">
                  {/* 업체명 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      업체명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-200"
                      placeholder="회사명을 입력해주세요"
                    />
                  </div>

                  {/* 담당자명 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      담당자명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-200"
                      placeholder="담당자명을 입력해주세요"
                    />
                  </div>

                  {/* 전화번호 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      전화번호 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-200"
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>

                {/* 메시지 표시 영역 */}
                {message.text && (
                  <div className={`mt-4 p-3 rounded-xl text-sm font-medium ${
                    message.type === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {message.text}
                  </div>
                )}

                {/* 개인정보 동의 */}
                <div className="mt-4">
                  <label className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                    />
                    <span className="text-xs text-gray-600 leading-relaxed">
                      개인정보 수집 및 이용에 동의합니다. 수집된 정보는 상담 목적으로만 사용되며, 상담 완료 후 안전하게 폐기됩니다.
                    </span>
                  </label>
                </div>

                {/* 제출 버튼 */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={!isLoading ? { scale: 1.02 } : {}}
                  whileTap={!isLoading ? { scale: 0.98 } : {}}
                  className={`w-full mt-6 py-4 text-white font-semibold rounded-xl transition-all duration-200 ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      전송 중...
                    </div>
                  ) : (
                    '신청하기'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;