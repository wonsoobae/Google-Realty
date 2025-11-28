import React from 'react';
import { SectionTitle, BodyText, Label } from '../components/Typography';
import { PROFILE, METRICS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      
      {/* Intro Hero */}
      <section className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <Label className="block mb-2 text-secondary">Executive Summary</Label>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary leading-tight mb-6">
            기술과 비즈니스의 균형,<br />
            20년의 통찰로 증명합니다.
          </h2>
          <BodyText className="mb-8 text-lg md:text-xl">
            {PROFILE.summary}
          </BodyText>
          <div className="flex gap-4">
             <Link to="/contact" className="px-6 py-3 bg-primary text-white font-sans font-medium rounded hover:bg-accent transition-colors">
               커피챗 요청하기
             </Link>
             <Link to="/experience" className="px-6 py-3 border border-primary text-primary font-sans font-medium rounded hover:bg-gray-50 transition-colors">
               경력 자세히 보기
             </Link>
          </div>
        </div>
        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-sm shadow-inner grayscale opacity-90 hover:grayscale-0 transition-all duration-700">
           {/* Placeholder for Profile Image */}
           <img 
            src="https://picsum.photos/400/500?grayscale" 
            alt="Profile" 
            className="object-cover w-full h-full"
           />
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8 border-t border-b border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="p-4">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">
                {metric.value}
              </div>
              <div className="font-sans text-xs md:text-sm text-gray-500 uppercase tracking-wide">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Competencies (Brief) */}
      <section>
        <SectionTitle>Core Competencies</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
             <h4 className="font-serif text-xl font-bold text-primary mb-3">Strategic Leadership</h4>
             <p className="font-sans text-gray-600 text-sm leading-relaxed">
               비즈니스 목표에 부합하는 기술 전략 수립 및 C-Level 커뮤니케이션, 기술 부채 관리 및 ROI 중심 의사결정.
             </p>
           </div>
           <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
             <h4 className="font-serif text-xl font-bold text-primary mb-3">Scalable Architecture</h4>
             <p className="font-sans text-gray-600 text-sm leading-relaxed">
               MSA, Cloud-Native, 고가용성 시스템 설계. 트래픽 급증 상황에서도 안정적인 서비스 운영 경험 보유.
             </p>
           </div>
           <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
             <h4 className="font-serif text-xl font-bold text-primary mb-3">Agile Team Building</h4>
             <p className="font-sans text-gray-600 text-sm leading-relaxed">
               자율과 책임을 중시하는 엔지니어링 문화 조성. 멘토링 시스템 구축 및 우수 인재 영입/유지 전략 실행.
             </p>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
