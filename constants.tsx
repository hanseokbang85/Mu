
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Minimalist Sanctuary',
    category: 'RESIDENTIAL',
    location: 'Seoul, Hannam',
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600",
    subImages: [
      "https://images.unsplash.com/photo-1600566753190-17f0bbc564ce?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
    ],
    description: '여백의 미를 극대화한 한남동 주거 프로젝트입니다. 직선의 미학과 자연광의 조화를 통해 거주자에게 정서적 안정을 제공합니다.'
  },
  {
    id: 2,
    title: 'Modern Heritage',
    category: 'RESIDENTIAL',
    location: 'Seoul, Seongbuk',
    imageUrl: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1600",
    subImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
    ],
    description: '전통적인 소재와 현대적인 디테일이 만난 성북동 단독주택 프로젝트입니다. 우드와 스톤의 질감을 살려 따뜻하면서도 권위 있는 공간을 완성했습니다.'
  },
  {
    id: 3,
    title: 'Urban Penthouse',
    category: 'RESIDENTIAL',
    location: 'Incheon, Songdo',
    imageUrl: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1600",
    subImages: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1200"
    ],
    description: '도시의 스카이라인을 배경으로 한 송도 펜트하우스입니다. 개방감 있는 레이아웃과 프리미엄 가구 배치를 통해 럭셔리 라이프스타일을 구현했습니다.'
  },
  {
    id: 4,
    title: 'Timeless Classic',
    category: 'RESIDENTIAL',
    location: 'Seoul, Gangnam',
    imageUrl: "https://images.unsplash.com/photo-1616489953149-804cc003468b?auto=format&fit=crop&q=80&w=1600",
    subImages: [],
    description: '유행을 타지 않는 클래식한 우아함을 담은 강남 아파트 리모델링 프로젝트입니다.'
  },
  {
    id: 5,
    title: 'Zen Garden House',
    category: 'RESIDENTIAL',
    location: 'Gyeonggi, Pangyo',
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600",
    subImages: [],
    description: '내부 정원을 품은 판교 단독주택입니다. 자연과의 경계를 허무는 디자인을 통해 매일 여행하는 듯한 기분을 선사합니다.'
  },
  {
    id: 6,
    title: 'Artistic Loft',
    category: 'RESIDENTIAL',
    location: 'Seoul, Seongsu',
    imageUrl: "https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?auto=format&fit=crop&q=80&w=1600",
    subImages: [],
    description: '거칠면서도 섬세한 산업 디자인적 요소를 가미한 성수동 로프트입니다.'
  }
];
