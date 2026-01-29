
import { Project } from './types';

/**
 * 이미지 로딩 전략:
 * 사용자의 파일 구조에 맞춰 /public/images/ 경로를 사용합니다.
 */
const IMAGE_BASE = "/public/images/";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Residential Project 01',
    category: 'RESIDENTIAL',
    location: 'Seoul',
    imageUrl: `${IMAGE_BASE}1.png`,
    subImages: [
      `${IMAGE_BASE}1_1.png`,
      `${IMAGE_BASE}1_2.png`,
      `${IMAGE_BASE}1_3.png`
    ],
    description: '디자인뮤가 제안하는 고품격 주거 공간 프로젝트입니다. 공간의 효율성과 미학적 가치를 동시에 추구합니다.'
  },
  {
    id: 2,
    title: 'Residential Project 02',
    category: 'RESIDENTIAL',
    location: 'Gyeonggi',
    imageUrl: `${IMAGE_BASE}2.png`,
    subImages: [
      `${IMAGE_BASE}2_1.png`,
      `${IMAGE_BASE}2_2.png`
    ],
    description: '삶의 질을 높이는 감각적인 인테리어 솔루션입니다. 자연 친화적인 소재와 모던한 디자인의 조화를 경험하세요.'
  },
  {
    id: 3,
    title: 'Residential Project 03',
    category: 'RESIDENTIAL',
    location: 'Incheon',
    imageUrl: `${IMAGE_BASE}3.png`,
    subImages: [
      `${IMAGE_BASE}3_1.png`
    ],
    description: '사용자의 라이프스타일을 반영한 맞춤형 주거 설계 프로젝트입니다.'
  },
  {
    id: 4,
    title: 'Residential Project 04',
    category: 'RESIDENTIAL',
    location: 'Seoul',
    imageUrl: `${IMAGE_BASE}4.png`,
    subImages: [],
    description: '미니멀리즘을 기반으로 한 깔끔하고 정돈된 주거 공간입니다.'
  },
  {
    id: 5,
    title: 'Residential Project 05',
    category: 'RESIDENTIAL',
    location: 'Busan',
    imageUrl: `${IMAGE_BASE}5.png`,
    subImages: [],
    description: '클래식한 우아함과 현대적인 편리함이 공존하는 공간입니다.'
  },
  {
    id: 6,
    title: 'Residential Project 06',
    category: 'RESIDENTIAL',
    location: 'Seoul',
    imageUrl: `${IMAGE_BASE}6.png`,
    subImages: [],
    description: '창의적인 공간 구성을 통해 새로운 주거 문화를 제시합니다.'
  }
];
