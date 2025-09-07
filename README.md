# YouTube-1 🎥

YouTube 채널 영상 추출 및 AI 분석 도구

## 📋 프로젝트 소개

이 프로젝트는 YouTube 채널의 영상을 추출하고, AI 모델을 활용하여 콘텐츠를 분석하는 TypeScript 기반 웹 애플리케이션입니다.

## ✨ 주요 기능

- 🎬 **YouTube 영상 추출**: YouTube video extractor app 설정
- 🤖 **AI 엔드포인트 통합**: AI 모델용 커스텀 API 엔드포인트
- 📝 **스크립트 생성**: 제목 및 스크립트 자동 생성 기능
- ⚡ **TypeScript 기반**: 98.7% TypeScript로 구성된 안정적인 코드베이스

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn
- YouTube Data API 키 (선택사항)

### 설치

```bash
# 저장소 클론
git clone https://github.com/bongjabaseu-netizen/YouTube-1.git
cd YouTube-1

# 의존성 설치
npm install
```

### 환경 설정

프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
# YouTube API (선택사항)
YOUTUBE_API_KEY=your_youtube_api_key_here

# AI API 키 (필요시)
OPENAI_API_KEY=your_openai_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

### 개발 서버 실행

```bash
# 개발 모드로 실행
npm run dev

# 또는 yarn 사용
yarn dev
```

브라우저에서 `http://localhost:3000`으로 접속하세요.

### 프로덕션 빌드

```bash
# 프로덕션용 빌드
npm run build

# 빌드된 파일 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
YouTube-1/
├── components/          # React 컴포넌트
│   └── ...             # AI 모델 커스텀 엔드포인트
├── services/           # API 서비스 레이어
│   └── ...             # AI 모델 엔드포인트
├── utils/              # 유틸리티 함수
│   └── ...             # 제목 및 스크립트 생성 기능
├── .gitignore          # Git 무시 파일
├── App.tsx             # 메인 애플리케이션 컴포넌트
├── index.html          # HTML 엔트리 포인트
├── index.tsx           # TypeScript 엔트리 포인트
├── metadata.json       # 프로젝트 메타데이터
├── package.json        # npm 패키지 설정
├── README.md           # 프로젝트 문서
├── tsconfig.json       # TypeScript 설정
├── types.ts            # TypeScript 타입 정의
└── vite.config.ts      # Vite 설정 파일
```

## 🔧 기술 스택

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Language**: TypeScript (98.7%), HTML (1.3%)
- **AI Integration**: Custom API endpoints for AI models
- **Package Manager**: npm/yarn

## 📝 주요 파일 설명

| 파일명 | 설명 | 최근 수정 |
|--------|------|----------|
| `App.tsx` | 메인 애플리케이션 컴포넌트 | yesterday |
| `components/` | AI 모델용 커스텀 API 엔드포인트 | yesterday |
| `services/` | AI 모델 API 서비스 | yesterday |
| `utils/` | 제목 및 스크립트 생성 유틸리티 | 2 days ago |
| `.gitignore` | YouTube video extractor 앱 설정 | 4 days ago |
| `tsconfig.json` | YouTube video extractor 앱 설정 | 4 days ago |

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면:

1. 이 저장소를 Fork 하세요
2. 새로운 Feature 브랜치를 생성하세요 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push 하세요 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성하세요

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 👨‍💻 개발자

- **GitHub**: [@bongjabaseu-netizen](https://github.com/bongjabaseu-netizen)

## 🔗 관련 링크

- [Google AI Studio 템플릿](https://github.com/google-gemini/aistudio-repository-template)
- [YouTube Data API 문서](https://developers.google.com/youtube/v3)

---

⭐ 이 프로젝트가 도움이 되었다면 별표를 눌러주세요!