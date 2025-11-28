import React from 'react';

export const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h2 className={`font-serif text-3xl md:text-4xl font-bold text-primary mb-8 border-b-2 border-secondary pb-4 ${className}`}>
    {children}
  </h2>
);

export const SubTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h3 className={`font-serif text-xl md:text-2xl font-semibold text-primary mb-4 ${className}`}>
    {children}
  </h2>
);

export const BodyText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`font-sans text-base md:text-lg text-gray-700 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const Label: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`font-sans text-sm font-bold tracking-wider text-muted uppercase ${className}`}>
    {children}
  </span>
);
