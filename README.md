# PIPE · Shiftee staff guide

한국어·영어 직원용 인터랙티브 출퇴근 학습 가이드입니다. 공식 앱 화면과 단계별 강조로 출근·QR·퇴근·기록 정정을 설명합니다.

**교육용 프로토타입입니다. 실제 출퇴근이나 요청을 전송하지 않습니다.** PIPE의 인증·휴게·승인자·운영 시각과 기능 허용 여부는 아직 확인 전입니다.

## 로컬 확인

저장소 폴더에서 사용 중인 포트를 먼저 확인하고 빈 loopback 포트로 실행하세요. 기존 다른 프로젝트의 서버를 종료하지 마세요.

```sh
lsof -nP -iTCP:8795 -sTCP:LISTEN
python3 -m http.server 8795 --bind 127.0.0.1
```

브라우저에서 `http://127.0.0.1:8795/`를 여세요. 런타임 패키지 설치·빌드·계정·DB·API 키가 필요하지 않습니다.

## 정적 호스팅

루트 `index.html`, `styles.css`, `guide.js`, `assets/`와 `sources.md`를 같은 상대 구조로 제공하면 됩니다. 절대 사이트 경로를 사용하지 않으므로 저장소 하위 경로에서도 동작하도록 구성했습니다. JavaScript와 이미지 파일의 정적 제공이 필요합니다.

GitHub Pages를 추후 사용할 경우, 저장소 관리자가 별도로 **Settings → Pages → Deploy from a branch → main / (root)**를 선택할 수 있습니다. 공개 저장소에서는 GitHub Free에서도 지원됩니다. 이 작업은 Pages를 활성화하거나 사이트를 배포하지 않습니다. 실제 공개 전 회사 정책·공유 범위·이미지 이용 권리를 확인하세요.

- [GitHub Pages 생성 공식 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [게시 원본 설정 공식 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 포함 파일

- `index.html`, `styles.css`, `guide.js`: 화면·모바일 스타일·한국어/영어 콘텐츠와 탐색 상태.
- `assets/clock-ko.png`, `clock-en.png`, `qr-ko.png`, `qr-en.png`: 시프티 공식 앱 화면 원본.
- `assets/pipe-logo.webp`: 사용자가 제공한 PIPE 로고 원본. 비율·디자인·원본 바이트를 변경하지 않았습니다.
- `sources.md`: 공식 도움말 12개·원본 이미지 URL·조회일·사용 범위.
- `checks/verify.cjs`: 이미 설치된 Playwright와 Chrome을 사용하는 브라우저 검증.
- `verification.md`: 실제 검증 결과와 확인하지 못한 항목.
- `.gitignore`: 로컬 테스트 결과·의존성·자격증명 제외.
- `.nojekyll`: 추후 Pages에서 원본 정적 파일 구조를 그대로 제공하기 위한 표시이며 Pages를 활성화하지 않습니다.

내부 운영 프로젝트의 코드·계정 설정·직원 정보·작업 명세·브라우저 캡처/로그는 포함하지 않습니다.

## 검증

이미 사용 가능한 Playwright 모듈 경로와 위 미리보기 주소를 지정합니다. 테스트 실행을 위해 새 패키지를 자동 설치하지 않습니다.

```sh
SHIFTEE_PLAYWRIGHT_PATH=/path/to/existing/playwright SHIFTEE_PREVIEW_URL=http://127.0.0.1:8795/ node checks/verify.cjs
```

독립 저장소 검증은 **22개 그룹 PASS, 기본 select 키보드 조작 1개 확인 불가**이며 프로젝트 하위 경로 검증도 PASS입니다. 검증 결과와 캡처는 Git에서 제외된 `output/playwright/`에 생성됩니다. 실제 기기·스크린리더 검증과 기본 select의 사용자 키보드 동작은 별도 확인이 필요합니다. [검증 기록](verification.md)을 참고하세요.

## 이미지 출처와 권리

앱 화면은 [시프티 한국어 공식 도움말](https://shiftee.io/ko/help/article/clockInOut)과 [영어 공식 도움말](https://shiftee.io/en/help/article/clockInOut)의 예시이며 2026-10-16에 조회했습니다. [원본 URL·화면 대응 기록](sources.md)을 유지합니다.

공개 도움말이라는 이유만으로 이미지 재배포 허용을 단정하지 않습니다. 시프티 이미지의 재배포 권리는 아직 확인되지 않았습니다. 가이드는 검토용 프로토타입이며, 직원 공유·사이트 공개 전에 이용 권리를 확인해야 합니다. 이 저장소에 모든 제3자 이미지의 재사용을 허용하는 포괄적 라이선스를 부여하지 않습니다.

QR 원본은 약 10MB씩입니다. 첫 화면에서 미리 로드하지 않으며 QR 안내 선택 시 로드합니다. 배포 전 이용 권리와 모바일용 경량화 방식을 검토하세요.
