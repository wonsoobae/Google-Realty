import React from 'react';
import { SectionTitle, BodyText } from '../components/Typography';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

const Expertise: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <SectionTitle>Services & Expertise</SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {SERVICES.map((service) => (
          <div key={service.id} className="group p-6 border border-gray-200 rounded-sm hover:shadow-lg hover:border-primary transition-all duration-300 bg-white">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-blue-800 transition-colors">
              {service.title}
            </h3>
            <BodyText className="text-sm md:text-base text-gray-600">
              {service.description}
            </BodyText>
          </div>
        ))}
      </div>

      <div className="bg-primary text-white p-8 rounded-sm shadow-lg text-center">
        <h3 className="font-serif text-2xl font-bold mb-4">기술 자문이 필요하신가요?</h3>
        <p className="font-sans text-gray-200 mb-6 max-w-2xl mx-auto">
          현재 조직이 겪고 있는 기술적 난제나 조직 운영의 어려움에 대해 가벼운 커피챗으로 이야기를 나누어보세요.
          해결의 실마리를 제공해 드립니다.
        </p>
        <Link 
          to="/contact" 
          className="inline-block px-8 py-3 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors"
        >
          제안서 요청하기
        </Link>
      </div>
    </div>
  );
};

export default Expertise;
