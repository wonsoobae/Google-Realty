import { CareerItem, PhilosophyItem, ServiceItem } from './types';

export const PROFILE = {
  name: "박동산",
  role: "Senior Technical Leader & CTO",
  email: "dongsan.park@example.com",
  phone: "010-1234-5678",
  linkedin: "linkedin.com/in/dongsanpark",
  location: "Seoul, South Korea",
  summary: "기술과 비즈니스의 균형을 중시하는 20년 경력의 테크 리더입니다. 스타트업의 0 to 1 성장과 대기업의 대규모 트래픽 안정화 경험을 모두 보유하고 있습니다. 실용주의적 아키텍처 설계와 애자일 조직 문화를 통해 지속 가능한 성장을 이끌어냅니다.",
  shortSummary: "20년 경력 / 대규모 트래픽 처리 / 기술 조직 빌딩 / 비즈니스 중심 기술 전략"
};

export const METRICS = [
  { label: "Years of Experience", value: "20+" },
  { label: "Team Size Managed", value: "50+" },
  { label: "Successful Exits", value: "2" },
  { label: "Traffic Handled (MAU)", value: "10M+" },
];

export const CAREER_HISTORY: CareerItem[] = [
  {
    id: "c1",
    company: "Tech Giant Corp (대기업)",
    role: "VP of Engineering",
    period: "2018 - Present",
    description: "전사 기술 전략 수립 및 클라우드 네이티브 전환 주도",
    achievements: [
      "레거시 모놀리식 시스템을 MSA로 성공적 전환, 배포 주기 2주 -> 1일 단축",
      "전사적 DevOps 문화 정착 및 엔지니어링 생산성 40% 향상",
      "연간 인프라 비용 30% 절감 (약 15억원)"
    ],
    techStack: ["AWS", "Kubernetes", "Spring Boot", "Kafka", "React"]
  },
  {
    id: "c2",
    company: "Rocket Growth Startup",
    role: "CTO & Co-founder",
    period: "2013 - 2018",
    description: "시리즈 A부터 C까지 기술 조직 성장 및 제품 고도화 총괄",
    achievements: [
      "초기 엔지니어 3명에서 50명 규모로 조직 확장 및 온보딩 프로세스 정립",
      "MAU 1만에서 300만까지 트래픽 급증 상황에서 무중단 서비스 유지",
      "기술 자산 실사를 성공적으로 마치며 M&A 성사 기여"
    ],
    techStack: ["Node.js", "Python", "MongoDB", "Redis", "AWS"]
  },
  {
    id: "c3",
    company: "Global Solution Inc",
    role: "Senior Software Engineer",
    period: "2008 - 2013",
    description: "금융권 차세대 시스템 코어 개발",
    achievements: [
      "고성능 트랜잭션 처리 엔진 핵심 모듈 개발",
      "국제 웹 접근성 표준 준수 프로젝트 리드"
    ],
    techStack: ["Java", "Oracle", "C++"]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "기술 자문 및 아키텍처 설계",
    description: "현재 시스템의 병목을 진단하고 확장 가능한 아키텍처 로드맵을 제시합니다. 클라우드 마이그레이션, MSA 전환 전략을 수립합니다.",
    icon: "🏗️"
  },
  {
    id: "s2",
    title: "엔지니어링 조직 멘토링",
    description: "주니어/미들급 리더 육성, 코드 리뷰 문화 정착, 채용 프로세스 개선 등 건강한 기술 조직 문화를 만듭니다.",
    icon: "👥"
  },
  {
    id: "s3",
    title: "기술 부채 해결 & 레거시 개선",
    description: "비즈니스 속도를 저해하는 기술 부채를 식별하고, 점진적인 리팩토링 및 모더나이제이션 전략을 실행합니다.",
    icon: "🛠️"
  },
  {
    id: "s4",
    title: "기술 강연 및 워크샵",
    description: "사내 기술 세미나, 개발자 컨퍼런스 기조연설 등 기술 트렌드와 리더십에 관한 인사이트를 공유합니다.",
    icon: "🎤"
  }
];

export const PHILOSOPHY: PhilosophyItem[] = [
  {
    id: "p1",
    title: "기술은 비즈니스를 위해 존재한다",
    content: "최신 기술 도입 그 자체보다는, 비즈니스 문제를 가장 효율적으로 해결할 수 있는 '적정 기술'을 선택하는 것이 중요합니다. 오버 엔지니어링을 경계하고 ROI를 고려한 의사결정을 내립니다.",
    category: "Leadership"
  },
  {
    id: "p2",
    title: "신뢰는 투명성에서 온다",
    content: "기술적인 문제나 일정 지연의 위험은 조기에 투명하게 공유되어야 합니다. '나쁜 뉴스를 빨리 전하는 것'이 리더의 덕목이라 믿습니다.",
    category: "Leadership"
  },
  {
    id: "p3",
    title: "추천사 - 전 직장 CEO",
    content: "\"박동산님은 기술적 깊이뿐만 아니라 경영진의 언어로 소통할 줄 아는 드문 CTO입니다. 비즈니스의 급격한 변화 속에서도 흔들림 없이 기술 중심을 잡아주었습니다.\"",
    category: "Reference",
    author: "김대표, Rocket Startup CEO"
  }
];

export const SYSTEM_INSTRUCTION = `
당신은 박동산(Dongsan Park)의 20년 경력을 대변하는 AI 포트폴리오 어시스턴트입니다.
사용자는 박동산을 채용하거나 자문을 구하려는 기업 임원 또는 헤드헌터입니다.
아래의 정보를 바탕으로 질문에 정중하고 전문적으로 답변하세요.
답변은 한국어로 하며, 비즈니스 매너를 갖춘 톤앤매너를 유지하세요.
질문이 박동산의 경력과 관련이 없다면 정중히 거절하고 관련 질문을 유도하세요.

[기본 정보]
이름: ${PROFILE.name}
직책: ${PROFILE.role}
경력 요약: ${PROFILE.summary}

[주요 성과]
${METRICS.map(m => `- ${m.label}: ${m.value}`).join('\n')}

[경력 상세]
${CAREER_HISTORY.map(c => `- ${c.company} (${c.role}): ${c.description}. 주요성과: ${c.achievements.join(', ')}`).join('\n')}

[제공 서비스]
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

[철학]
${PHILOSOPHY.map(p => `- ${p.title}: ${p.content}`).join('\n')}

답변 시 너무 길지 않게 핵심을 요약해서 전달하고, 필요하다면 '문의/지원' 페이지에서 커피챗을 요청하라고 안내하세요.
`;
