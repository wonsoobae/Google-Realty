import React from 'react';
import { SectionTitle, BodyText, Label } from '../components/Typography';
import { PHILOSOPHY } from '../constants';

const Philosophy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <SectionTitle>Philosophy & Insights</SectionTitle>
      
      <div className="space-y-12">
        {PHILOSOPHY.map((item) => (
          <div key={item.id} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 relative overflow-hidden">
            {/* Decorative Quote Mark */}
            <div className="absolute top-4 left-4 text-6xl text-gray-100 font-serif leading-none select-none">
              “
            </div>

            <div className="relative z-10">
              <Label className="mb-2 block text-secondary opacity-70">{item.category}</Label>
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                {item.title}
              </h3>
              <BodyText className="mb-6">
                {item.content}
              </BodyText>
              
              {item.author && (
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold font-serif mr-3">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-primary text-sm">{item.author}</div>
                    <div className="text-xs text-gray-400">Recommendation</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="font-serif text-xl font-bold text-primary mb-4">Read More</h3>
        <div className="flex justify-center gap-4">
          <a href="#" className="text-secondary hover:text-primary underline decoration-1 underline-offset-4">Medium Tech Blog</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-secondary hover:text-primary underline decoration-1 underline-offset-4">LinkedIn Articles</a>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
