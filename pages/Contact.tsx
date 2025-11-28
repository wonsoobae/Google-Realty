import React, { useState } from 'react';
import { SectionTitle, BodyText } from '../components/Typography';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 animate-fade-in">
      <div>
        <SectionTitle>Get in Touch</SectionTitle>
        <BodyText className="mb-8">
          새로운 기회, 기술 자문, 혹은 단순히 기술과 조직에 대한 이야기를 나누고 싶으시다면 언제든 연락 주세요.
          가장 빠른 확인이 가능한 채널은 이메일입니다.
        </BodyText>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-4">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-primary">Email</h4>
              <p className="text-gray-600">{PROFILE.email}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-4">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-primary">LinkedIn</h4>
              <p className="text-gray-600">{PROFILE.linkedin}</p>
            </div>
          </div>
          
           <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-4">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-primary">Schedule Meeting</h4>
              <a href="#" className="text-blue-600 hover:underline">Calendly 바로가기</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
        <h3 className="font-serif text-xl font-bold text-primary mb-6">Send a Message</h3>
        
        {formStatus === 'success' ? (
          <div className="text-center py-12">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">메시지가 전송되었습니다.</h4>
            <p className="text-gray-600">확인 후 24시간 이내에 회신 드리겠습니다.</p>
            <button onClick={() => setFormStatus('idle')} className="mt-6 text-primary underline">다시 보내기</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
              <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="홍길동" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Company / Organization</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="회사명" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
              <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="email@example.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
              <textarea required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="문의 내용을 입력해주세요."></textarea>
            </div>
            <button 
              type="submit" 
              disabled={formStatus === 'submitting'}
              className="w-full py-3 bg-primary text-white font-bold rounded hover:bg-accent transition-colors disabled:opacity-50"
            >
              {formStatus === 'submitting' ? '전송 중...' : '메시지 보내기'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
