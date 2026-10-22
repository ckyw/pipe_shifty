# 공식 근거 및 원본 이미지 기록

조회일: **2026-10-16 (UTC)**. 공식 문서 내용과 원본 이미지 픽셀을 확인했다. 문서는 이후 변경될 수 있고 이미지 속 날짜·지점·시각·직무는 PIPE 운영 정보가 아니다.

## 공식 문서

| ID | 공식 문서 | 이번 가이드에 적용한 근거 |
|---|---|---|
| S01 | [출퇴근 기록하기](https://shiftee.io/ko/help/article/clockInOut) | 홈 일정→장소·인증→출근 시각 확인, QR 카메라와 추가 인증, 웹 출퇴근 조건 |
| S02 | [Clock In and Out](https://shiftee.io/en/help/article/clockInOut) | 공식 영어 이미지와 영문 용어 대조 |
| S03 | [출퇴근 인증 방식 FAQ](https://shiftee.io/ko/help/article/locationInformationForClockInOrOut) | 좌표+WiFi는 하나 인증이면 가능, QR 이후 추가 좌표/WiFi, 일반 좌표 인증 위치 폐기 |
| S04 | [생성 요청](https://shiftee.io/ko/help/article/createAttendanceRequest) | 기록이 없고 중복되지 않을 때 생성, 회사 설정·플랜, 요청/내 요청 |
| S05 | [수정 요청](https://shiftee.io/ko/help/article/editAttendanceRequest) | 기존 기록·퇴근 누락 수정, 회사 설정·플랜, 수정 후 상태 확인 |
| S06 | [근무지 외 출퇴근 요청](https://shiftee.io/ko/help/article/clockInOutRequest) | 회사 허용 조건, 승인 대기와 승인 후 상태, 요청 당시 위치가 승인 처리에 표시될 수 있음; 실시간 추적 아님 |
| S07 | [모바일 위치 정확도](https://shiftee.io/ko/help/article/howToImproveMobileLocationAccuracy) | 정확한 위치·앱 사용 중 권한·내 위치 갱신·기종별 차이 |
| S08 | [직장 합류](https://shiftee.io/ko/help/article/joinCompany) | 최신 12자리, 기존 6자리 별도 경로; 코드는 수집하지 않음 |
| S09 | [언어 변경](https://shiftee.io/ko/help/article/languageSetting) | 한국어/영어, 개인 계정의 언어 설정; 가이드 전환과 실제 앱 전환 구분 |
| S10 | [무일정 근무](https://shiftee.io/ko/help/article/clockInOutOnCall) | 회사 설정 조건·예정 일정 연결 필요 가능성 |
| S11 | [휴게시간](https://shiftee.io/ko/help/article/attendanceBreakTime) | 자동/수동 구분, 수동은 회사 설정·모바일·근무 중·장소 반경 조건 |
| S12 | [앱 자동화](https://shiftee.io/ko/help/article/howToUseShortcutsForClockInAndOut) | 앱 열기 자동화이며 자동 출퇴근 대행이 아님 |

회사별 실제 설정·계약 플랜·승인 규칙·허용 장소는 조사하지 않았고 확정하지 않았다. 운영 계정이나 직원 근태 데이터는 조회하지 않았으며 가이드에 개인정보·비밀값을 사용하거나 수집하지 않는다.

## 사용한 원본 이미지

네 장만 저장했다. 다운로드 원본 PNG를 변경·합성하지 않았다. 화면에서는 CSS 뷰포트로 일부 패널을 보이고 별도 테두리를 얹는다. 전체 원본 링크를 제공한다.

| 파일 | 출처 페이지 | 원본 이미지 URL | 원본 크기 | 직접 본 화면·사용 |
|---|---|---|---|---|
| `assets/clock-ko.png` | S01 | [원본](https://shiftee.s3.ap-northeast-2.amazonaws.com/website/contents/helpArticles/ko/attendance/clockInOut/mob_clockIn.png) | 3892×2250 | 왼쪽 홈 출근 버튼, 가운데 지도·장소·출근 버튼, 오른쪽 출근 성공·시각·퇴근 버튼·출퇴근기록 탭 |
| `assets/clock-en.png` | S02 | [원본](https://shiftee.s3.ap-northeast-2.amazonaws.com/website/contents/helpArticles/en/attendance/clockInOut/mob_clockInOut.png) | 3953×2250 | 왼쪽 Home/Clock In, 오른쪽 Currently Working/Clocked In/Clock Out/Attendance 사용. 가운데 Clock In On-Call은 일반 출근 안내에 사용하지 않음 |
| `assets/qr-ko.png` | S01 | [원본](https://shiftee.s3.ap-northeast-2.amazonaws.com/website/contents/helpArticles/ko/attendance/clockInOut/mob_qr-code.png) | 4012×2250 | 왼쪽 장소 확인, 가운데 카메라와 예시 QR, 오른쪽 출근 성공·출근 시각 |
| `assets/qr-en.png` | S02 | [원본](https://shiftee.s3.ap-northeast-2.amazonaws.com/website/contents/helpArticles/en/attendance/clockInOut/mob_qr-code.png) | 4012×2250 | 공식 영어 QR 화면의 대응 패널; 한글 이미지 텍스트를 영어로 합성하지 않음 |

조회일은 모두 2026-10-16. QR 이미지는 각각 약 10MB이므로 최초 화면에서 미리 불러오지 않고 해당 안내 선택 시 로드한다. 경량화를 위해 임의 화질 변경이나 앱 UI 재합성을 하지 않았다.

## 단계와 이미지의 대응

- 일반 출근 1: 홈 출근 버튼. 2: 한국어 장소 선택과 하단 출근 버튼. 3: 출근 후 시각.
- 영어 일반 출근 2: 영어 원본 가운데가 **On-Call**이므로 한국어 장소 패널로 대체. 영어로 한국어 스크린샷임과 대체 이유를 명시한다.
- QR 1/2/3: 장소 확인/카메라 스캔/출근 후 시각. 원본 QR은 학습 예시이고 실제 출퇴근에 스캔하지 않도록 명시한다.
- 퇴근 1: 출근 후 카드의 퇴근 버튼. 2: 같은 **퇴근 전** 이미지의 출퇴근기록 탭 위치. 실제 퇴근 완료 화면으로 오인하지 않도록 표시한다.
- 생성·수정 요청: 공식 이미지 대신 절차 요약 도표를 사용하고 앱 화면이 아님을 표시한다. 실제 제출·승인 UI는 구현하지 않는다.

이미지 패널의 시작/폭(원본 전체 대비 %)은 `guide.js`의 `images` 객체에 있고, 강조영역은 각 단계의 `spot`에 있다. 브라우저 캡처와 원본을 함께 보고 의미·위치를 검증한다.

## 이용 범위

시프티 공식 도움말에 공개되어 있다는 사실만으로 이미지 재배포 허용을 단정하지 않는다. 이 공개 소스 저장소의 가이드는 **검토용 프로토타입**이며 직원용 사이트 배포는 수행하지 않았다. 저장소의 코드·이미지는 공개적으로 접근할 수 있다. 저장소 공개가 시프티 이미지의 재배포 권리 확인을 뜻하지는 않는다. 직원 공유·사이트 공개 전에 이미지 이용 권리와 공유 범위를 확인해야 한다.

## 회원가입 안내 추가 근거

2026-10-19 조회: [시프티 회원가입 공식 도움말](https://shiftee.io/ko/help/article/signUp). 앱 시작 화면의 가입하기, 웹 상단 회원가입, Google 계정 연동 가입과 별도 시프티 이메일 인증 불필요, 이메일 가입 시 10자 이상 영문·숫자·특수문자 비밀번호와 메일 본인 인증, 3분 후 스팸함 확인을 반영했습니다. Google 계정 사용 권장은 사용자가 지정한 온보딩 방식입니다.

회원가입은 공식 앱 스크린샷을 새로 가져오지 않고 4단계 텍스트 절차로 제공합니다. 가입 후 직장 합류 단계는 기존 S08 근거를 유지합니다. 문의 연락처는 사용자가 이 작업에서 공개 표시하도록 지정한 내용입니다.

## 2026-10-22 QR 미사용 운영 반영

사용자가 PIPE는 QR을 사용하지 않는다고 확인했습니다. 현재 매뉴얼은 QR 절차·QR 카메라 도움말·이미지 참조를 제거했으며, 공식 문서의 일반적인 QR 지원 설명을 PIPE 직원의 필수 절차로 안내하지 않습니다. 위 QR 원본 이미지·단계 대응 내용은 과거 버전의 출처 기록입니다. 원본 파일은 보존하지만 현재 매뉴얼에서 로드하지 않습니다.

## 2026-10-22 Google 전용 모바일 회원가입 이미지

사용자 요청에 따라 현행 가입 안내는 모바일 Google 계정 연동으로 한정합니다. 위 2026-10-19의 PC·이메일 가입 설명은 과거 변경 근거이며 현재 페이지에서 제거했습니다. 회원가입 공식 문서의 모바일 STEP 3 및 `mob_signUp2.png`는 이메일 가입 전용이므로 사용하지 않습니다.

| 현재 파일 | 사용자 지정 출처 | 원본 이미지 URL | 크기 | 현재 표시 범위 |
| --- | --- | --- | --- | --- |
| assets/signup-ko.png | [회원가입 모바일](https://shiftee.io/ko/help/article/signUp#%EB%AA%A8%EB%B0%94%EC%9D%BC_1) | [mob_signUp1.png](https://shiftee.s3.ap-northeast-2.amazonaws.com/website/contents/helpArticles/ko/getting_started/signUp/mob_signUp1.png) | 2566×2250 | 1단계: 왼쪽 시작 화면, 2·3단계: 오른쪽 Google 버튼만 CSS 확대 |
| assets/join-ko.png | [직원 시작 가이드](https://shiftee.io/ko/help/article/gettingStartedGuideForStaff) | [mob_joinCompany.png](https://shiftee.s3.ap-northeast-2.amazonaws.com/website/contents/helpArticles/ko/getting_started/gettingStartedGuideForStaff/mob_joinCompany.png) | 309×609 | 4단계: 모바일 직원용 직장 합류 화면 전체 |

조회·다운로드일: 2026-10-22. 다운로드 원본을 변환하지 않았고 표시 범위만 CSS로 지정했습니다. 회원가입 왼쪽 패널은 원본 x=0~1118, Google 영역은 x=59.1~65.5%, y=79.4~87.4%입니다. Google 영역은 이메일 버튼 아래에서 시작하며 Apple 등 옆 버튼 앞에서 끝나도록 원본을 직접 확인했습니다.

원본 SHA-256:

- signup-ko.png: `d67159e827e7c3177e5ded3add2c471295443fbac3ea50f0e0d4dd4ea9d2a554`
- join-ko.png: `ea990cc1978097a5b997c2322e99e2f48d8851bf5ea01c856bfd34e690288f8f`

직원 시작 가이드의 합류 화면은 이전 6자리 코드 예시입니다. 최신 [직장 합류하기](https://shiftee.io/ko/help/article/joinCompany)에서는 12자리 입력과 이전 6자리 별도 경로를 함께 안내하므로, 본문은 최신 절차를 유지하고 원본 이미지의 연식을 설명합니다. 원본 이미지의 회사·코드는 PIPE 운영 정보가 아닙니다.
