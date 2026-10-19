/* Local educational guide. No employee data, storage, permissions or API calls. */
(() => {
  'use strict';
  const pair = (ko, en) => ({ ko, en });
  const copy = {
    skip: pair('단계 안내로 건너뛰기', 'Skip to the step guide'),
    brandCaption: pair('직원 가이드', 'Staff guide'),
    homeLabel: pair('PIPE 가이드 첫 단계', 'First step of the PIPE guide'),
    languageLabel: pair('가이드 언어', 'Guide language'),
    languageKo: pair('한국어로 가이드 읽기', 'Read this guide in Korean'),
    languageEn: pair('영어로 가이드 읽기', 'Read this guide in English'),
    eyebrow: pair('시프티 · 교육용 가이드', 'SHIFTEE · A LEARNING GUIDE'),
    title: pair('출퇴근, 한 번에 익혀요.', 'Your shift. A clear start.'),
    intro: pair('앱 화면을 보며 하나씩 따라가세요. 필요한 안내를 고르면 지금 할 일을 알려드려요.', 'Learn one step at a time with real app examples. Choose a guide to see what to do in Shiftee.'),
    prototype: pair('내부 검토용', 'INTERNAL PREVIEW'),
    training: pair('교육용 화면입니다. 여기서는 출퇴근이나 요청이 전송되지 않아요. 실제 기록은 시프티 앱에서 해주세요.', 'This is a learning guide. It does not send attendance records or requests. Record your attendance in the Shiftee app.'),
    chooseFlow: pair('무엇을 알아볼까요?', 'What do you need?'),
    flowNav: pair('안내 선택', 'Choose a guide'),
    helpJump: pair('잘 안 되나요? 상황별 도움', 'Need help? Find your situation'),
    companyNote: pair('PIPE의 인증·휴게·승인 방식은 확인 중입니다. 화면 속 시각과 장소는 공식 예시예요.', 'PIPE’s verification, break and approval settings are still under review. Times and places in images are official examples.'),
    restart: pair('이 안내 처음부터', 'Restart this guide'),
    stepNav: pair('단계 선택', 'Choose a step'),
    progressLabel: pair('안내 진행', 'Guide progress'),
    requestChoice: pair('어떤 상황인가요?', 'Which situation applies?'),
    createChoice: pair('출근 기록이 아예 없어요', 'There is no clock-in record'),
    editChoice: pair('기록이 있거나 퇴근만 빠졌어요', 'A record exists / clock-out is missing'),
    officialExample: pair('공식 앱 예시 · 조작할 수 없는 이미지', 'OFFICIAL EXAMPLE · IMAGE ONLY'),
    fullImage: pair('원본 전체 이미지 보기 (새 탭)', 'View the full original image (new tab)'),
    diagramLabel: pair('절차 요약 · 앱 화면이 아닙니다', 'PROCESS OVERVIEW · NOT AN APP SCREEN'),
    noSubmission: pair('이 가이드에는 실제 보내기·승인 기능이 없습니다.', 'This guide cannot submit or approve requests.'),
    whatToDo: pair('시프티 앱에서 할 일', 'WHAT TO DO IN SHIFTEE'),
    remember: pair('기억해 주세요', 'KEEP IN MIND'),
    completion: pair('안내의 마지막 단계예요. 실제 기록이 완료되었다는 뜻은 아닙니다.', 'You reached the last guide step. This does not mean that an attendance record has been saved.'),
    previous: pair('이전 단계', 'Previous step'),
    next: pair('다음 단계', 'Next step'),
    lastStep: pair('안내 마지막 단계', 'Last guide step'),
    helpTitle: pair('막히는 부분을 함께 확인해요.', 'Let’s work through it.'),
    helpSubtitle: pair('상황을 고르면 확인할 순서를 볼 수 있어요.', 'Choose your situation for a short checklist.'),
    issueLabel: pair('지금 어떤 상황인가요?', 'What is happening?'),
    helpScope: pair('기기·앱 버전에 따라 메뉴 이름은 다를 수 있어요.', 'Menu names can vary by device and app version.'),
    readyTitle: pair('처음이라면, 이것부터.', 'New here? Start with these.'),
    needsReview: pair('회사 확인 필요', 'CONFIRM WITH PIPE'),
    policyTitle: pair('PIPE 운영 기준은 아직 확인 중이에요.', 'PIPE’s operating rules are still under review.'),
    policyIntro: pair('아래 항목을 관리자가 확인한 뒤 직원용 안내를 확정할 수 있습니다.', 'An administrator needs to confirm these items before this becomes the staff guide.'),
    footerTraining: pair('직원 교육용 · 내부 검토 프로토타입', 'Staff learning guide · internal review prototype'),
    rights: pair('앱 이미지는 시프티 공식 도움말의 예시입니다. 이미지 재배포 권리는 확인되지 않았으며 외부 공개 전 확인이 필요합니다.', 'App images are examples from Shiftee’s official help. Redistribution permission has not been confirmed; check before any public release.'),
    sourcesFile: pair('출처·조회일·이미지 기록', 'Sources, access date and image record'),
    imageLoading: pair('앱 예시 이미지를 불러오는 중이에요. 아래 설명은 바로 읽을 수 있어요.', 'Loading the app example. You can read the instructions while it loads.'),
    imageError: pair('이미지를 불러오지 못했어요. 단계 설명을 읽거나 공식 도움말을 열어주세요.', 'The image could not load. Read the step instructions or open the official help.'),
    imageKo: pair('한국어 공식 화면의 일부입니다. 시각·장소·일정은 PIPE 정보가 아닌 예시입니다.', 'This is part of an official Korean screenshot. Times, places and shifts are examples, not PIPE settings.'),
    imageEn: pair('영어 공식 화면의 일부입니다. 시각·장소·일정은 예시입니다.', 'This is part of an official English screenshot. Times, places and shifts are examples, not PIPE settings.'),
    imageKoFallback: pair('한국어 공식 장소 선택 화면입니다. 화면 속 장소는 예시입니다.', 'Korean screenshot: select your timeclock area. The English article’s middle image shows On-Call, so this guide uses the Korean example for this step.'),
    qrExample: pair('이미지의 QR은 공식 도움말 예시입니다. 실제 출퇴근용으로 스캔하지 마세요.', 'The QR code shown is an official help example. Do not scan it for attendance.'),
    beforeOut: pair('이 이미지는 퇴근 전 화면입니다. 실제 퇴근 완료 화면을 보여주는 것은 아닙니다.', 'This image shows the screen before clock-out, not a completed clock-out.'),
    sourceKo: pair('공식 도움말 (새 탭)', 'Official help in Korean (new tab)'),
    sourceEn: pair('공식 영어 도움말 (새 탭)', 'Official help in English (new tab)'),
    indexGuide: pair('01 / 안내', '01 / GUIDE'),
    indexHelp: pair('02 / 도움', '02 / HELP'),
    indexReady: pair('03 / 시작 준비', '03 / BEFORE YOU START'),
    pageTitle: pair('PIPE · 시프티 직원 가이드', 'PIPE · Shiftee staff guide'),
    resetAnnouncement: pair('현재 안내를 처음부터 보여드립니다.', 'This guide has been restarted.'),
  };

  const source = {
    clock: { slug: 'clockInOut', title: pair('출퇴근 기록하기', 'Clock in and out') },
    auth: { slug: 'locationInformationForClockInOrOut', title: pair('출퇴근 인증 방식', 'Timeclock verification methods') },
    create: { slug: 'createAttendanceRequest', title: pair('출퇴근기록 생성 요청', 'Request a new attendance record') },
    edit: { slug: 'editAttendanceRequest', title: pair('출퇴근기록 수정 요청', 'Request an attendance edit') },
    offsite: { slug: 'clockInOutRequest', title: pair('근무지 외 출퇴근 요청', 'Offsite clock-in/out requests') },
    gps: { slug: 'howToImproveMobileLocationAccuracy', title: pair('모바일 위치 정확도', 'Mobile location accuracy') },
    join: { slug: 'joinCompany', title: pair('직장 합류하기', 'Join a company') },
    language: { slug: 'languageSetting', title: pair('언어 변경하기', 'Change your app language') },
    oncall: { slug: 'clockInOutOnCall', title: pair('무일정 근무', 'On-Call attendance') },
    breaks: { slug: 'attendanceBreakTime', title: pair('휴게시간 기록하기', 'Record break time') },
    automation: { slug: 'howToUseShortcutsForClockInAndOut', title: pair('앱 자동화', 'App-opening automation') },
  };
  const flowOrder = ['signup', 'clock-in', 'qr', 'clock-out', 'correction'];
  const flows = {
    'clock-in': {
      name: pair('출근 기록 알아보기', 'Learn to clock in'), short: pair('출근하기', 'Clock in'), sub: pair('일정 → 인증 → 확인', 'Shift → verify → check'),
      steps: [
        { title: pair('오늘 일정부터 확인해요', 'Start with today’s shift'), chip: pair('일정 확인', 'Check shift'),
          body: pair('시프티 앱 홈에서 출근할 일정을 확인하고 출근하기를 선택하세요.', 'In Shiftee Home, check the shift you will work, then choose Clock In.'),
          note: pair('시간과 지점이 맞는지 확인하세요. 일정이 없거나 다르면 아래 상황별 도움을 먼저 확인해 주세요.', 'Check the time and team. If the shift is missing or incorrect, use the help section below first.'),
          image: 'clock', pane: 0, spot: { ko: [24,35,69,7], en: [26,27,69,7] }, alt: pair('시프티 홈의 오늘 근무 카드와 출근하기 버튼', 'Shiftee Home with today’s work card and the Clock In button'), src: 'clock' },
        { title: pair('장소와 인증을 확인해요', 'Check the place and verification'), chip: pair('장소·인증', 'Verify place'),
          body: pair('출근할 장소를 확인하고 회사에 설정된 인증을 진행하세요. 좌표와 WiFi를 함께 설정했다면 둘 중 하나만 인증되어도 가능합니다.', 'Check your timeclock area and use its configured verification. If both coordinates and WiFi are enabled, either one can verify attendance.'),
          note: pair('PIPE가 사용할 인증 수단과 장소는 미확정입니다. QR이 필요한 경우에는 QR 안내를 따로 확인하세요.', 'PIPE’s verification methods and areas are not yet confirmed. If QR is required, use the QR guide.'),
          image: 'clock', forceKo: true, pane: 1, spot: { ko: [4,88,92,7], en: [4,88,92,7] }, alt: pair('한국어 출근 장소 선택 화면과 하단 출근하기 버튼', 'Korean timeclock-area selection screen; the bottom button is Clock In'), src: 'auth' },
        { title: pair('출근 시각이 남았는지 확인해요', 'Look for your clock-in time'), chip: pair('기록 확인', 'Check record'),
          body: pair('출근 후에는 버튼이 퇴근하기로 바뀌고 출근 시각이 표시됩니다. 실제 앱에서 기록을 확인하세요.', 'After clock-in, the button changes to Clock Out and a clock-in time appears. Check that record in the real app.'),
          note: pair('앱이 열리거나 버튼을 눌렀다는 것만으로 기록되었다고 판단하지 마세요. 기록이 없으면 누락 안내를 확인하세요.', 'Opening the app or tapping a button is not proof of a saved record. If it is missing, see the missing-record help.'),
          image: 'clock', pane: 2, spot: { ko: [6,44,88,7], en: [6,35,88,7] }, alt: pair('출근 후 현재 근무중 카드의 출근 시각과 퇴근하기 버튼', 'After clock-in: the Currently Working card shows a clock-in time and Clock Out'), src: 'clock' },
      ],
    },
    qr: {
      name: pair('QR 인증 알아보기', 'Learn QR verification'), short: pair('QR이 필요할 때', 'When QR is required'), sub: pair('장소 → 스캔 → 추가 인증', 'Place → scan → verify'),
      steps: [
        { title: pair('QR이 필요한 장소인지 확인해요', 'Check whether this area requires QR'), chip: pair('장소 확인', 'Check area'),
          body: pair('회사에서 QR 인증을 설정한 장소라면, 앱에서 출근할 장소를 확인한 뒤 출근하기를 선택하세요.', 'If your company requires QR at this area, check the area in Shiftee and choose Clock In.'),
          note: pair('모든 회사가 QR을 쓰는 것은 아닙니다. PIPE의 QR 사용 여부와 비치 장소는 관리자 확인이 필요해요.', 'QR is not required by every company. Ask PIPE to confirm whether and where it will be used.'),
          image: 'qr', pane: 0, spot: { ko: [4,87,92,8], en: [4,88,92,8] }, alt: pair('QR 인증 전 장소·일정을 확인하고 출근하기를 누르는 한국어 앱 화면', 'Official English app screen before QR scanning, with Clock In at the bottom'), src: 'clock' },
        { title: pair('앱 카메라로 현장 QR을 읽어요', 'Scan the on-site QR in the app'), chip: pair('QR 스캔', 'Scan QR'),
          body: pair('시프티 앱의 카메라 접근을 허용하고 현장에 비치된 QR을 스캔하세요.', 'Allow camera access for Shiftee and scan the QR code displayed at your workplace.'),
          note: pair('이 가이드는 카메라를 열지 않습니다. 이미지 속 예시 QR이 아닌 회사가 안내한 현장 QR을 사용하세요.', 'This guide does not open your camera. Use the on-site code provided by your company, not the example shown here.'),
          image: 'qr', pane: 1, spot: { ko: [13,31,74,36], en: [13,31,74,36] }, alt: pair('카메라 인식 테두리 안에 QR 인증 안내물이 있는 공식 한국어 예시', 'Official English example of a QR sign inside the camera scanning frame'), src: 'clock' },
        { title: pair('추가 인증과 기록까지 확인해요', 'Complete verification and check the record'), chip: pair('추가 인증·확인', 'Verify & check'),
          body: pair('QR 스캔 후 회사가 설정한 좌표 또는 WiFi 추가 인증을 완료해야 합니다. 이후 실제 앱에서 출근 시각을 확인하세요.', 'After scanning, complete the additional coordinates or WiFi verification configured by your company. Then check your clock-in time in the real app.'),
          note: pair('QR을 읽었다고 출근이 끝난 것은 아닙니다. 추가 인증 실패나 승인 대기 상태라면 기록을 다시 확인해 주세요.', 'Scanning alone does not finish clock-in. If verification fails or approval is pending, check the status again.'),
          image: 'qr', pane: 2, spot: { ko: [5,44,90,7], en: [5,41,90,7] }, alt: pair('QR 인증 후 출근 성공 알림과 출근 시각이 보이는 한국어 앱 예시', 'English app example showing a successful clock-in notification and clock-in time'), src: 'auth' },
      ],
    },
    'clock-out': {
      name: pair('퇴근 기록 알아보기', 'Learn to clock out'), short: pair('퇴근하기', 'Clock out'), sub: pair('퇴근 선택 → 기록 확인', 'Clock out → check record'),
      steps: [
        { title: pair('근무를 마치면 퇴근하기를 선택해요', 'At the end of work, choose Clock Out'), chip: pair('퇴근 선택', 'Clock out'),
          body: pair('실제 시프티 앱의 현재 근무중 카드에서 퇴근하기를 선택하고 설정된 인증 절차를 진행하세요.', 'In the real Shiftee app, choose Clock Out on the Currently Working card and follow the configured verification.'),
          note: pair('퇴근 시각과 휴게 처리 방식은 PIPE 기준을 확인해야 해요. 이 가이드는 특정 시각이나 휴게 규칙을 정하지 않습니다.', 'Confirm PIPE’s work-end and break rules. This guide does not set working times or a break policy.'),
          image: 'clock', pane: 2, spot: { ko: [24,35,69,7], en: [26,27,69,7] }, alt: pair('퇴근 전 현재 근무중 카드의 초록색 퇴근하기 버튼', 'The green Clock Out button in the Currently Working card, before clock-out'), src: 'clock' },
        { title: pair('실제 퇴근 기록을 확인해요', 'Check the saved clock-out record'), chip: pair('기록 확인', 'Check record'),
          body: pair('앱의 출퇴근기록에서 날짜와 출근·퇴근 시각을 확인하세요. 출근 기록은 있고 퇴근만 빠졌다면 수정 요청을 확인하세요.', 'In Attendance, check the date and both times. If a clock-in exists but clock-out is missing, look at an edit request.'),
          note: pair('이미지는 출퇴근기록 탭 위치를 보여주는 퇴근 전 예시입니다. 승인 요청이 대기 중이면 완료로 보지 말고 내 요청 상태도 확인하세요.', 'The image shows the Attendance tab before clock-out. If a request is pending, check My Requests as well; pending is not approved.'),
          image: 'clock', pane: 2, spot: { ko: [60,92,20,7], en: [60,92,20,7] }, alt: pair('퇴근 전 예시 화면 하단의 출퇴근기록 탭 위치', 'The Attendance tab at the bottom of a pre-clock-out example screen'), src: 'edit' },
      ],
    },
    correction: { name: pair('기록 누락·정정 알아보기', 'Understand missing records and edits'), short: pair('기록이 빠졌을 때', 'A record is missing'), sub: pair('생성 / 수정 → 승인 확인', 'Create / edit → check approval'), steps: [] },
  };

  const correctionSteps = {
    create: [
      { title: pair('기록이 없다면 생성 요청이에요', 'No record? Use a create request'), chip: pair('유형 확인', 'Choose type'), body: pair('출근 기록 자체가 없고 중복 기록도 없다면 출퇴근기록 생성 요청을 확인하세요.', 'If there is no clock-in record and no duplicate attendance record, check the option to request a new attendance record.'), note: pair('요청 기능은 회사 설정과 플랜에 따라 다릅니다. 이미 기록이 있거나 퇴근만 빠졌다면 생성 대신 수정을 확인하세요.', 'Request availability depends on company settings and plan. If a record exists or only clock-out is missing, look at an edit instead.'), src: 'create' },
      { title: pair('날짜·실제 시각·사유를 준비해요', 'Prepare the date, actual times and reason'), chip: pair('요청 준비', 'Prepare request'), body: pair('앱 요청 탭에서 출퇴근기록 요청 → 생성을 선택하세요. 기록할 날짜·시간을 확인하고, 회사가 정한 승인권자와 필요한 사유를 입력해 보내세요.', 'In the app’s Request tab, choose an attendance request, then create. Check the date and times, then use the company’s approver and required reason before sending.'), note: pair('출근만 생성하고 계속 근무 중이라면 현재 근무중 옵션을 확인하세요. PIPE 승인자·사유 작성 기준·제출 기한은 미확정입니다.', 'If creating only a clock-in while still working, check the Currently Working option. PIPE’s approver, reason requirements and deadline are unconfirmed.'), src: 'create' },
      { title: pair('보냈다면, 승인 상태와 기록을 확인해요', 'After sending, check approval and the record'), chip: pair('상태 확인', 'Check status'), body: pair('요청 탭의 내 요청에서 상태를 확인하세요. 승인 대기는 승인 완료와 다릅니다. 승인 처리 후에는 실제 출퇴근기록에도 반영되었는지 확인하세요.', 'Check My Requests in the Request tab. Pending approval is different from approved. After approval, check that the attendance record reflects it.'), note: pair('거절되거나 계속 대기 중이면 사유와 상태를 확인하고 회사 담당자에게 문의하세요. 이 화면은 요청 전송·승인을 처리하지 않습니다.', 'If rejected or still pending, review the reason and status and contact your company. This page does not send or approve requests.'), src: 'create' },
    ],
    edit: [
      { title: pair('기존 기록이 있으면 수정 요청이에요', 'Existing record? Use an edit request'), chip: pair('유형 확인', 'Choose type'), body: pair('출근·퇴근 시각이 틀렸거나 출근 후 퇴근만 누락했다면 기존 출퇴근기록의 수정 요청을 확인하세요.', 'If a time is wrong, or clock-in exists but clock-out is missing, look at an edit request for the existing attendance record.'), note: pair('기록 자체가 없으면 생성 요청 대상입니다. 수정 요청도 회사 설정과 플랜에 따라 사용할 수 있어요.', 'If no attendance record exists, use a create request. Edit requests also depend on company settings and plan.'), src: 'edit' },
      { title: pair('수정할 날짜·시각·사유를 확인해요', 'Check the date, corrected times and reason'), chip: pair('수정 준비', 'Prepare edit'), body: pair('앱 요청 탭에서 출퇴근기록 요청 → 수정을 선택하고 날짜와 출근·퇴근 시각을 확인하세요. 승인에 필요한 사유를 적고 보내세요.', 'In Request, choose an attendance request, then edit. Check the date and clock-in/out times, add the required reason and send in the app.'), note: pair('임의 시각을 넣지 말고 실제 근무를 기준으로 확인하세요. PIPE 승인자·제출 기한은 회사에 확인해야 합니다.', 'Check against the actual work performed. Confirm PIPE’s approver and submission deadline with the company.'), src: 'edit' },
      { title: pair('승인 후 실제 수정 내역까지 확인해요', 'After approval, check the actual edit'), chip: pair('상태 확인', 'Check status'), body: pair('내 요청에서 승인 대기·승인·거절 상태를 구분하세요. 승인 후 출퇴근기록을 열어 날짜와 수정된 시간을 확인하세요.', 'Distinguish pending, approved and rejected in My Requests. After approval, open Attendance and check the date and corrected times.'), note: pair('요청을 보냈다는 안내만으로 수정이 완료되었다고 판단하지 마세요. 반영이 안 되면 회사 담당자에게 상태를 알려주세요.', 'A sent request is not a completed edit. If the change is not reflected, tell your company the request status.'), src: 'edit' },
    ],
  };

  const issues = [
    { id: 'gps', name: pair('위치가 다르거나 인증이 안 돼요', 'Location is wrong / verification fails'), title: pair('먼저 위치 정확도를 확인해요', 'Check location accuracy first'), summary: pair('장소 안에 있는데 위치 인증이 실패한다면 기기 설정과 앱 지도를 확인해 주세요.', 'If you are at the area but location verification fails, check your device settings and the map in Shiftee.'), actions: [pair('시프티의 앱 사용 중 위치 접근과 정확한 위치 설정을 확인하세요.', 'Check location permission while using Shiftee and the precise-location setting.'),pair('지도에서 내 위치 버튼을 눌러 위치를 갱신하세요. 기종별 위치 정확도 설정도 확인하세요.', 'Refresh using the map’s current-location button and check your device’s accuracy settings.'),pair('계속 실패하면 실제 지점·인증 실패 상황을 회사 담당자에게 알려주세요. 반경은 임의로 정하지 않습니다.', 'If it still fails, tell your company the area and what failed. This guide does not set a distance radius.')], src: 'gps' },
    { id: 'wifi', name: pair('WiFi가 연결됐는데 인증이 안 돼요', 'WiFi is connected but verification fails'), title: pair('회사에 등록된 WiFi인지 확인해요', 'Check whether this is the registered WiFi'), summary: pair('인터넷 연결과 시프티에 등록된 WiFi 인증은 다를 수 있어요.', 'An internet connection may not be the WiFi registered for Shiftee verification.'), actions: [pair('회사에서 안내한 WiFi에 연결했는지 확인하세요. PIPE의 등록 네트워크는 확인이 필요합니다.', 'Check that you are on the WiFi provided by the company. PIPE’s registered network is unconfirmed.'),pair('좌표와 WiFi를 모두 설정한 장소는 둘 중 하나가 인증되면 됩니다.', 'If the area has both coordinates and WiFi configured, either method can verify attendance.'),pair('임의 네트워크나 반경을 기준으로 판단하지 말고 계속 실패하면 담당자에게 문의하세요.', 'Do not assume a network or radius. Contact your company if verification still fails.')], src: 'auth' },
    { id: 'qr', name: pair('QR 카메라가 안 열리거나 스캔이 안 돼요', 'QR camera or scanning does not work'), title: pair('카메라와 추가 인증을 따로 확인해요', 'Check the camera and additional verification'), summary: pair('QR 인증은 스캔 후 회사가 설정한 좌표 또는 WiFi 추가 인증이 함께 진행됩니다.', 'QR scanning is followed by the coordinates or WiFi verification configured by the company.'), actions: [pair('시프티 앱의 카메라 접근 허용 여부를 확인하세요.', 'Check camera permission for the Shiftee app.'),pair('공식 예시 이미지가 아닌 현장 QR을 앱 카메라로 읽으세요.', 'Scan the on-site QR in the app, not an example in this guide.'),pair('스캔 뒤에도 안 되면 추가 인증과 요청 상태를 확인하고 회사 담당자에게 문의하세요.', 'If it still fails after scanning, check additional verification and request status, then ask your company.')], src: 'clock' },
    { id: 'schedule', name: pair('오늘 근무일정이 없어요', 'Today’s shift is missing'), title: pair('일정과 무일정 허용 여부를 확인해요', 'Confirm the shift and On-Call permission'), summary: pair('일정이 없다고 항상 출근할 수 있는 것은 아닙니다. 무일정 출퇴근은 회사 설정에 따라 달라요.', 'A missing shift does not always allow clock-in. On-Call attendance depends on company settings.'), actions: [pair('맞는 회사·조직/지점·날짜를 확인하세요.', 'Check the company, team and date.'),pair('PIPE의 무일정 허용 여부와 일정 누락 처리 방법을 담당자에게 확인하세요.', 'Ask PIPE whether On-Call is allowed and how a missing shift should be handled.'),pair('무일정으로 기록하면 예정 일정과 연결이 필요할 수 있으니, 임의로 새 일정과 기록을 중복 생성하지 마세요.', 'On-Call records may need linking to a planned shift. Avoid creating duplicate shifts or records.')], src: 'oncall' },
    { id: 'missing', name: pair('출근·퇴근 기록을 빠뜨렸어요', 'I missed a clock-in or clock-out'), title: pair('기존 기록 유무로 요청을 나눠요', 'Choose the request by whether a record exists'), summary: pair('출근 기록이 아예 없으면 생성 요청, 기존 기록이 있거나 퇴근만 누락했으면 수정 요청을 확인하세요.', 'If there is no clock-in record, look at a create request. If a record exists or only clock-out is missing, look at an edit request.'), actions: [pair('먼저 출퇴근기록에서 날짜와 기존 기록을 확인하세요.', 'First check the date and existing record in Attendance.'),pair('위의 기록 누락·정정 안내에서 해당 유형을 선택하세요.', 'Choose the matching type in the missing-record guide above.'),pair('요청 기능·승인권자·제출 기한은 회사에 확인하세요. 요청 전송과 승인 완료는 별개입니다.', 'Confirm request availability, approver and deadline with your company. Sending is separate from approval.')], src: 'edit' },
    { id: 'pending', name: pair('요청을 보냈는데 아직 대기 중이에요', 'My request is still pending'), title: pair('요청 전송과 승인 완료는 달라요', 'A sent request is not an approved request'), summary: pair('내 요청에서 상태와 사유를 확인하고 승인 후 실제 기록에 반영됐는지도 확인하세요.', 'Check the status and reason in My Requests, then check the actual record after approval.'), actions: [pair('승인 대기 중인 요청을 완료된 기록으로 생각하지 마세요.', 'Do not treat a pending request as an approved record.'),pair('거절 사유나 계속 대기하는 상황은 회사 담당자에게 문의하세요. 승인 시점을 임의로 약속할 수 없습니다.', 'Ask your company about rejection reasons or delays. This guide cannot promise an approval time.')], src: 'create' },
    { id: 'offsite', name: pair('근무지 밖에서 출퇴근해야 해요', 'I need to clock in or out offsite'), title: pair('근무지 외 요청은 회사 설정이 필요해요', 'Offsite requests need company permission'), summary: pair('근무지 외 출퇴근 요청은 회사가 허용할 때만 사용할 수 있습니다.', 'Offsite clock-in/out requests are available only when the company enables them.'), actions: [pair('요청을 보내기 전에 PIPE의 허용 여부와 승인권자를 확인하세요.', 'Confirm PIPE’s permission and approver before sending.'),pair('일반 좌표 인증의 위치는 인증 후 폐기되지만, 근무지 외 요청은 요청 당시 위치가 승인자에게 표시될 수 있습니다.', 'Normal coordinate verification discards the location after verification. An offsite request can show its submission location to the approver.'),pair('근무지 외 요청이 실시간 위치 추적을 뜻하는 것은 아닙니다. 대기와 승인 완료를 구분하세요.', 'An offsite request is not live location tracking. Distinguish pending from approved.')], src: 'offsite' },
    { id: 'break', name: pair('휴게 시작·종료 버튼이 없어요', 'I cannot find the break buttons'), title: pair('수동 휴게는 조건부 기능이에요', 'Manual breaks are a conditional feature'), summary: pair('자동 휴게와 수동 휴게는 다릅니다. PIPE가 사용할 방식과 기준은 아직 미확정입니다.', 'Automatic and manual breaks are different. PIPE’s method and rules are not yet confirmed.'), actions: [pair('회사가 수동 휴게를 켠 경우, 모바일에서 출근 후 근무 중일 때 사용할 수 있어요.', 'If the company enables manual breaks, they are available on mobile after clock-in while working.'),pair('수동 휴게는 출퇴근 장소 반경 내에서 시작·종료해야 합니다. 실제 설정을 담당자에게 확인하세요.', 'Manual breaks must start and end within the timeclock-area radius. Confirm the actual settings with your company.'),pair('버튼이 없다고 휴게시간이 자동 적용된 것으로 판단하지 마세요.', 'A missing button does not prove that an automatic break has been applied.')], src: 'breaks' },
    { id: 'web', name: pair('PC 웹에서도 출퇴근할 수 있나요?', 'Can I clock in or out on the web?'), title: pair('웹 출퇴근은 회사 설정·플랜을 확인해요', 'Web clock-in/out depends on settings and plan'), summary: pair('공식 안내상 웹 출퇴근은 Standard 이상 플랜과 회사 설정이 필요하며 WiFi 방식만 지원합니다.', 'Official help says web clock-in/out needs a Standard-or-higher plan, company enablement and WiFi verification.'), actions: [pair('PIPE가 웹 출퇴근을 허용했는지와 등록 WiFi를 확인하세요.', 'Confirm whether PIPE enables web attendance and which WiFi is registered.'),pair('이 HTML 가이드는 시프티 웹앱이 아니며 어떤 기록도 전송하지 않습니다.', 'This HTML guide is not the Shiftee web app and sends no records.')], src: 'clock' },
    { id: 'automation', name: pair('앱이 자동으로 열리면 출근된 건가요?', 'If the app opens automatically, am I clocked in?'), title: pair('앱 열기 자동화와 출퇴근 기록은 달라요', 'Opening the app is different from clocking in'), summary: pair('공식 자동화 안내는 휴대폰이 시프티 앱을 열도록 돕는 기능입니다. 대신 출퇴근을 기록하는 기능이 아닙니다.', 'The official automation guide helps your phone open Shiftee. It does not record attendance on your behalf.'), actions: [pair('앱이 열리면 직접 출근·퇴근 절차를 진행하세요.', 'When the app opens, complete the clock-in/out steps yourself.'),pair('실제 출퇴근 시각이 기록되었는지 앱에서 확인하세요.', 'Check that the actual attendance times were saved in the app.')], src: 'automation' },
  ];

  const ready = [
    { title: pair('회사에 합류하기', 'Join your company'), body: pair('관리자에게 받은 12자리 합류코드를 실제 앱의 직원용 직장 합류하기에서 입력하세요. 기존 6자리 코드는 입력창 아래의 6자리 코드 경로를 이용하세요. 코드를 못 받았다면 회사에 문의해 주세요.', 'Enter the 12-digit invitation code from your administrator in the app’s employee Join Company screen. For an older 6-digit code, use the separate 6-digit-code option below the field. Ask your company if no code arrived.'), src: 'join' },
    { title: pair('실제 앱 언어 바꾸기', 'Change the actual app language'), body: pair('이 페이지의 언어 버튼은 가이드만 바꿉니다. 시프티 앱에서는 더보기 → 내 계정 → 언어에서 한국어 또는 영어를 선택하고 저장하세요. 개인 계정 설정이며 회사 전체 언어를 바꾸지 않습니다.', 'This page’s language buttons change only the guide. In Shiftee, open More → My Account → Language, choose Korean or English and save. This is a personal account setting; it does not change the company language.'), src: 'language' },
    { title: pair('요청과 기록 구분하기', 'Tell requests and records apart'), body: pair('보내기는 요청 제출입니다. 승인 대기·승인·거절 상태를 확인하고, 승인 후 실제 기록까지 확인하세요. 회사에 없는 기능이나 정해지지 않은 승인자를 임의로 선택하지 마세요.', 'Sending submits a request. Check whether it is pending, approved or rejected, then check the actual record after approval. Do not assume a feature is enabled or choose an unconfirmed approver.'), src: 'create' },
  ];
  const policies = [
    pair('출퇴근 장소·인증 수단·좌표 반경·등록 WiFi·QR 비치', 'Timeclock areas, methods, coordinate radius, registered WiFi and QR placement'),
    pair('근무일정·운영 시각·자정 넘는 근무 처리', 'Shift schedules, working times and overnight-work handling'),
    pair('휴게의 자동/수동 방식과 시작·종료 기준', 'Automatic or manual breaks and start/end rules'),
    pair('무일정 근무·웹 출퇴근 허용 여부와 플랜', 'On-Call and web attendance permissions and plan'),
    pair('생성·수정·근무지 외 요청 허용, 승인권자·사유·제출 기한', 'Create/edit/offsite request permissions, approvers, reasons and deadlines'),
    pair('문의 담당자·직원 공유 범위·공식 이미지 이용 권리', 'Support contact, staff sharing scope and rights to use official images'),
  ];
  const images = {
    'clock-ko': { file: 'clock-ko.png', width: 3892, height: 2250, panes: [[0,28.7],[35.65,28.7],[71.3,28.7]] },
    'clock-en': { file: 'clock-en.png', width: 3953, height: 2250, panes: [[0,27.7],[35.8,28.2],[71.7,28.3]] },
    'qr-ko': { file: 'qr-ko.png', width: 4012, height: 2250, panes: [[0,27.8],[36.1,27.8],[72.2,27.8]] },
    'qr-en': { file: 'qr-en.png', width: 4012, height: 2250, panes: [[0,27.8],[36.1,27.8],[72.2,27.8]] },
  };

  const five = (ko, en, zh, es, uz) => ({ko,en,zh,es,uz});
  copy.contact = five('문의하기','Contact','联系我们','Contacto','Bog‘lanish');
  copy.kakaoId = five('카카오톡 ID','KakaoTalk ID','KakaoTalk ID','ID de KakaoTalk','KakaoTalk ID');
  copy.languageZh = five('중국어로 가이드 읽기','Read this guide in Chinese','用中文阅读指南','Leer la guía en chino','Qo‘llanmani xitoy tilida o‘qish');
  copy.languageEs = five('스페인어로 가이드 읽기','Read this guide in Spanish','用西班牙语阅读指南','Leer la guía en español','Qo‘llanmani ispan tilida o‘qish');
  copy.languageUz = five('우즈베크어로 가이드 읽기','Read this guide in Uzbek','用乌兹别克语阅读指南','Leer la guía en uzbeko','Qo‘llanmani o‘zbek tilida o‘qish');
  copy.languageMn = five('몽골어로 가이드 읽기','Read this guide in Mongolian','用蒙古语阅读指南','Leer la guía en mongol','Qo‘llanmani mo‘g‘ul tilida o‘qish');
  source.signup = {slug:'signUp',title:five('회원가입','Sign up','注册账号','Crear una cuenta','Ro‘yxatdan o‘tish')};
  flows.signup = {
    name: five('처음 시작하기 · 회원가입','Getting started · Sign up','开始使用 · 注册','Primeros pasos · Registro','Boshlash · Ro‘yxatdan o‘tish'),
    short: five('회원가입부터','Sign up first','先注册账号','Crear una cuenta','Avval ro‘yxatdan o‘ting'),
    sub: five('Google 가입 권장 → 직장 합류','Google recommended → join PIPE','推荐 Google → 加入公司','Google recomendado → unirse','Google tavsiya etiladi → qo‘shiling'),
    steps: [
      {chip:five('가입 화면','Open sign-up','打开注册页','Abrir registro','Ro‘yxat oynasi'),title:five('1단계 · 시프티 회원가입을 시작해요','Step 1 · Start your Shiftee account','第1步 · 开始注册 Shiftee','Paso 1 · Crea tu cuenta de Shiftee','1-qadam · Shiftee hisobini yarating'),
       body:five('시프티 앱 시작 화면에서 가입하기를 선택하세요. PC에서는 shiftee.io 상단의 회원가입을 선택하세요.','In the Shiftee app, choose Sign Up on the start screen. On a computer, open shiftee.io and choose Sign Up at the top.','在 Shiftee 应用开始页面选择注册。使用电脑时，打开 shiftee.io 并点击顶部的注册。','En la pantalla inicial de la app Shiftee, elige Registrarse. En un ordenador, abre shiftee.io y selecciona el registro en la parte superior.','Shiftee ilovasining boshlang‘ich oynasida ro‘yxatdan o‘tishni tanlang. Kompyuterda shiftee.io saytining yuqorisidagi ro‘yxatdan o‘tish tugmasini bosing.'),
       note:five('이 페이지는 가입 안내입니다. 계정이나 비밀번호는 실제 시프티·Google 화면에서만 입력하세요.','This page only explains registration. Enter account details and passwords only on the actual Shiftee or Google screens.','本页面仅提供注册说明。请只在真正的 Shiftee 或 Google 页面输入账号和密码。','Esta página solo explica el registro. Introduce tus datos y contraseñas únicamente en las pantallas reales de Shiftee o Google.','Bu sahifa faqat ro‘yxatdan o‘tishni tushuntiradi. Hisob va parol ma’lumotlarini faqat haqiqiy Shiftee yoki Google oynalarida kiriting.'),src:'signup'},
      {chip:five('Google로 가입','Use Google','使用 Google','Usar Google','Google orqali'),title:five('Google 계정으로 가입하는 방법을 권장해요','We recommend signing up with Google','推荐使用 Google 账号注册','Recomendamos registrarse con Google','Google hisobidan foydalanishni tavsiya qilamiz'),
       body:five('가입 방법에서 Google 계정 연동을 선택하고, 본인의 Gmail 계정으로 로그인하세요. Google 화면에서 안내하는 확인 절차를 완료하세요.','Choose the Google account option and sign in with your own Gmail account. Complete the confirmation steps shown by Google.','选择 Google 账号关联，并使用本人的 Gmail 账号登录。按照 Google 页面提示完成确认。','Selecciona la opción de Google e inicia sesión con tu propia cuenta de Gmail. Completa las confirmaciones que muestre Google.','Google hisobini ulash variantini tanlang va o‘zingizning Gmail hisobingiz bilan kiring. Google ko‘rsatgan tasdiqlash bosqichlarini bajaring.'),
       note:five('Google 계정 연동 가입은 시프티의 별도 이메일 본인 인증이 필요하지 않습니다. 이후에도 같은 Google 계정으로 로그인하세요.','Google-linked sign-up does not require Shiftee’s separate email verification. Use the same Google account when you log in again.','关联 Google 注册无需另行进行 Shiftee 邮箱身份验证。以后也请使用同一个 Google 账号登录。','El registro vinculado a Google no requiere la verificación de correo separada de Shiftee. Usa la misma cuenta de Google para volver a entrar.','Google orqali ro‘yxatdan o‘tishda Shiftee’ning alohida email tasdig‘i talab qilinmaydi. Keyingi safar ham aynan shu Google hisobidan foydalaning.'),src:'signup'},
      {chip:five('가입 확인','Check account','确认账号','Confirmar cuenta','Hisobni tekshiring'),title:five('가입을 마치고 같은 계정으로 로그인해요','Finish registration and sign in','完成注册并登录','Completa el registro e inicia sesión','Ro‘yxatdan o‘tishni tugating va kiring'),
       body:five('화면에 추가 정보나 동의 항목이 표시되면 확인해 가입을 마치세요. Google 계정을 쓰지 않고 이메일로 가입했다면, 시프티 인증 메일의 본인 인증 버튼까지 눌러야 합니다.','Complete any additional information or consent shown on screen. If you sign up by email instead of Google, you must also use the verification button in Shiftee’s email.','如页面要求补充资料或同意条款，请确认并完成注册。如果不用 Google 而使用邮箱注册，还需要点击 Shiftee 验证邮件中的身份验证按钮。','Completa los datos o consentimientos adicionales que aparezcan. Si te registras por correo en lugar de Google, pulsa también el botón de verificación del mensaje de Shiftee.','Ekrandagi qo‘shimcha ma’lumot yoki rozilik bandlarini yakunlang. Google o‘rniga email bilan ro‘yxatdan o‘tsangiz, Shiftee yuborgan xatdagi tasdiqlash tugmasini ham bosing.'),
       note:five('이메일 가입은 영문·숫자·특수문자를 조합한 10자 이상 비밀번호가 필요합니다. 인증 메일이 3분 안에 오지 않으면 스팸함을 확인하세요.','Email sign-up requires a password of at least 10 characters combining letters, numbers and special characters. Check spam if the verification email has not arrived within 3 minutes.','邮箱注册需要至少10位、包含字母、数字和特殊符号的密码。如果3分钟内未收到验证邮件，请查看垃圾邮件。','El registro por correo requiere una contraseña de al menos 10 caracteres con letras, números y símbolos. Revisa el correo no deseado si el mensaje no llega en 3 minutos.','Email bilan ro‘yxatdan o‘tishda harf, raqam va maxsus belgilardan iborat kamida 10 belgili parol kerak. Tasdiq xati 3 daqiqada kelmasa, spam papkasini tekshiring.'),src:'signup'},
      {chip:five('PIPE 합류','Join PIPE','加入 PIPE','Unirse a PIPE','PIPE’ga qo‘shiling'),title:five('가입 후 PIPE 직장에 합류해요','After sign-up, join PIPE','注册后加入 PIPE 公司','Después del registro, únete a PIPE','Ro‘yxatdan o‘tgach PIPE’ga qo‘shiling'),
       body:five('시프티에 로그인한 뒤 직원용 직장 합류하기에서 관리자가 전달한 합류코드를 입력하세요. 가입만으로 회사 합류가 완료되지는 않습니다.','After signing in, choose the employee Join Company option and enter the invitation code from your administrator. Signing up alone does not join you to the company.','登录后，在员工加入公司选项中输入管理员提供的邀请码。仅注册账号并不代表已加入公司。','Tras iniciar sesión, elige Unirse a una empresa para empleados e introduce el código del administrador. Registrarse no te incorpora automáticamente a la empresa.','Kirgandan so‘ng xodimlar uchun kompaniyaga qo‘shilish bo‘limida administrator bergan taklif kodini kiriting. Faqat hisob yaratish kompaniyaga qo‘shilganingizni anglatmaydi.'),
       note:five('현재 합류코드는 12자리이며, 기존 6자리 코드는 별도 입력 경로를 이용하세요. 코드나 계정 문제는 상단 CK Park 문의 정보를 확인하세요.','Current invitation codes have 12 digits; older 6-digit codes use a separate option. For code or account questions, use CK Park’s contact details at the top.','当前邀请码为12位，旧6位码请使用单独的输入入口。邀请码或账号有问题时，请查看顶部 CK Park 的联系方式。','Los códigos actuales tienen 12 dígitos; los antiguos de 6 usan otra opción. Para dudas sobre códigos o cuentas, consulta el contacto de CK Park en la parte superior.','Hozirgi taklif kodi 12 xonali; eski 6 xonali kod uchun alohida variant bor. Kod yoki hisob bo‘yicha savollar uchun yuqoridagi CK Park aloqa ma’lumotidan foydalaning.'),src:'join'}
    ]
  };
  // Full guide translations use stable content paths; no remote translation service.
  function addTranslations(value, path = '') {
    if (!value || typeof value !== 'object') return;
    if (typeof value.ko === 'string' && typeof value.en === 'string') {
      const extra = window.PIPE_GUIDE_TRANSLATIONS[path];
      if (extra) Object.assign(value, extra);
      for (const language of ['ko','en','zh','es','uz','mn']) {
        if (typeof value[language] !== 'string' || !value[language].trim()) throw new Error(`Missing translation: ${path}/${language}`);
      }
      return;
    }
    Object.entries(value).forEach(([key, child]) => addTranslations(child, path ? `${path}.${key}` : key));
  }
  addTranslations({copy,source,flows,correctionSteps,issues,ready,policies});

  const state = { language: 'ko', flow: 'signup', steps: { signup: 0, 'clock-in': 0, qr: 0, 'clock-out': 0, correction: 0 }, issue: 'gps', requestKind: 'create' };
  const $ = id => document.getElementById(id);
  const local = value => value[state.language];
  const t = key => local(copy[key]);
  const stepsFor = flow => flow === 'correction' ? correctionSteps[state.requestKind] : flows[flow].steps;
  const currentSteps = () => stepsFor(state.flow);
  const currentIndex = () => state.steps[state.flow];
  const currentStep = () => currentSteps()[currentIndex()];
  const element = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  function sourceLink(node, key, language = 'ko') {
    node.href = `https://shiftee.io/${language}/help/article/${source[key].slug}`;
    node.textContent = `${t(language === 'en' ? 'sourceEn' : 'sourceKo')} · ${local(source[key].title)}`;
    node.hreflang = language;
  }
  function announce(prefix = '') {
    $('announcement').textContent = `${prefix} ${local(flows[state.flow].name)}. ${currentIndex() + 1} / ${currentSteps().length}. ${local(currentStep().title)}`.trim();
  }
  function focusStep() { $('step-title').focus({ preventScroll: true }); $('guide').scrollIntoView({ block: 'start', behavior: 'auto' }); }
  function renderStatic() {
    document.documentElement.lang = state.language === 'zh' ? 'zh-Hans' : state.language;
    document.title = t('pageTitle');
    document.querySelector('meta[name="description"]').content = t('training');
    document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
    document.querySelectorAll('[data-label]').forEach(node => { node.setAttribute('aria-label', t(node.dataset.label)); });
    document.querySelectorAll('[data-lang]').forEach(node => {
      node.setAttribute('aria-pressed', String(node.dataset.lang === state.language));
      node.setAttribute('aria-label', t({ko:'languageKo',en:'languageEn',zh:'languageZh',es:'languageEs',uz:'languageUz',mn:'languageMn'}[node.dataset.lang]));
    });
  }
  function renderFlows() {
    $('flow-list').replaceChildren(...flowOrder.map((id, index) => {
      const button = element('button', undefined, 'flow-button');
      button.type = 'button'; button.dataset.flow = id;
      button.setAttribute('aria-pressed', String(state.flow === id));
      const number = element('span', String(index + 1).padStart(2, '0'), 'flow-number'); number.setAttribute('aria-hidden', 'true');
      const text = element('span', undefined, 'flow-text');
      text.append(element('strong', local(flows[id].short)), element('small', local(flows[id].sub)));
      button.append(number, text); return button;
    }));
  }
  function imageStatus() {
    const img = $('app-screen'), windowNode = $('screen-window');
    const loaded = img.complete && img.naturalWidth > 0;
    const failed = img.complete && img.naturalWidth === 0;
    windowNode.classList.toggle('loading', !img.complete);
    windowNode.classList.toggle('failed', failed);
    $('image-message').textContent = loaded ? '' : t(failed ? 'imageError' : 'imageLoading');
  }
  function renderImage(step) {
    const isCorrection = ['signup','correction'].includes(state.flow);
    $('screen-figure').hidden = isCorrection;
    $('request-diagram').hidden = !isCorrection;
    if (isCorrection) {
      $('request-timeline').replaceChildren(...currentSteps().map((s, index) => {
        const li = element('li', local(s.chip));
        if (index === currentIndex()) li.setAttribute('aria-current', 'step');
        return li;
      }));
      return;
    }
    const imageLanguage = step.forceKo || state.language === 'ko' ? 'ko' : 'en';
    const info = images[`${step.image}-${imageLanguage}`];
    const [left, width] = info.panes[step.pane];
    const frame = $('screen-window');
    frame.style.setProperty('--pane-ratio', String(info.width * width / 100 / info.height));
    frame.style.setProperty('--image-left', `${-left / width * 100}%`);
    const img = $('app-screen');
    img.alt = local(step.alt);
    // lang applies to the accessible alt text, not text baked into the pixels.
    img.lang = state.language === 'zh' ? 'zh-Hans' : state.language;
    if (img.getAttribute('src') !== `assets/${info.file}`) img.src = `assets/${info.file}`;
    const [x,y,w,h] = step.spot[imageLanguage];
    Object.assign($('spotlight').style, { left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` });
    $('spot-number').textContent = String(currentIndex() + 1);
    const notes = [t(step.forceKo ? 'imageKoFallback' : imageLanguage === 'ko' ? 'imageKo' : 'imageEn')];
    if (step.image === 'qr') notes.push(t('qrExample'));
    if (state.flow === 'clock-out') notes.push(t('beforeOut'));
    $('image-note').textContent = notes.join(' ');
    $('full-image').href = `assets/${info.file}`;
    imageStatus();
  }
  function renderLesson() {
    const steps = currentSteps(), index = currentIndex(), step = steps[index];
    $('flow-name').textContent = local(flows[state.flow].name);
    $('step-count').textContent = `${String(index+1).padStart(2,'0')} / ${String(steps.length).padStart(2,'0')}`;
    $('step-title').textContent = local(step.title);
    $('step-list').replaceChildren(...steps.map((s, n) => {
      const b = element('button', `${n+1}. ${local(s.chip)}`, 'step-chip');
      b.type = 'button'; b.dataset.step = String(n);
      if (n === index) b.setAttribute('aria-current', 'step');
      return b;
    }));
    $('progress').setAttribute('aria-label', t('progressLabel'));
    $('progress').setAttribute('aria-valuemax', String(steps.length));
    $('progress').setAttribute('aria-valuenow', String(index+1));
    $('progress').setAttribute('aria-valuetext', `${index+1} / ${steps.length}: ${local(step.title)}`);
    $('progress-fill').style.width = `${(index+1)/steps.length*100}%`;
    $('step-description').textContent = local(step.body);
    $('step-note').textContent = local(step.note);
    $('request-options').hidden = state.flow !== 'correction';
    document.querySelectorAll('[data-request]').forEach(b => {
      b.textContent = t(b.dataset.request === 'create' ? 'createChoice' : 'editChoice');
      b.setAttribute('aria-pressed', String(b.dataset.request === state.requestKind));
    });
    $('previous').disabled = index === 0;
    $('next').disabled = index === steps.length-1;
    $('next').textContent = t(index === steps.length-1 ? 'lastStep' : 'next');
    $('completion-note').hidden = index !== steps.length-1;
    if (state.flow === 'signup') $('completion-note').textContent = local(step.note);
    sourceLink($('step-source'), step.src, state.language === 'en' && step.src === 'clock' && !step.forceKo ? 'en' : 'ko');
    renderImage(step);
  }
  function renderIssue() {
    const issue = issues.find(item => item.id === state.issue);
    $('issue-title').textContent = local(issue.title);
    $('issue-summary').textContent = local(issue.summary);
    $('issue-actions').replaceChildren(...issue.actions.map(action => element('li', local(action))));
    sourceLink($('issue-source'), issue.src);
  }
  function renderSupporting() {
    $('issue').replaceChildren(...issues.map(issue => {
      const option = element('option', local(issue.name)); option.value = issue.id; return option;
    }));
    $('issue').value = state.issue;
    renderIssue();
    $('ready-cards').replaceChildren(...ready.map((card,index) => {
      const article = element('article', undefined, 'ready-card');
      article.append(element('span', String(index+1).padStart(2,'0'), 'card-number'), element('h3', local(card.title)), element('p', local(card.body)));
      const a = element('a', undefined, 'source-link'); a.target = '_blank'; a.rel = 'noopener'; sourceLink(a,card.src); article.append(a); return article;
    }));
    $('policy-list').replaceChildren(...policies.map(policy => element('li', local(policy))));
  }
  function render() { renderStatic(); renderFlows(); renderLesson(); renderSupporting(); }
  function syncHash(replace = false) {
    const hash = `#${state.flow}/${currentIndex()}`;
    if (window.location.hash !== hash) window.history[replace ? 'replaceState' : 'pushState'](null,'',hash);
  }
  function readHash() {
    if (['#guide', '#help'].includes(window.location.hash)) return;
    const match = /^#(signup|clock-in|qr|clock-out|correction)\/(\d{1,2})$/.exec(window.location.hash);
    state.flow = match ? match[1] : 'signup';
    const parsed = match ? Number(match[2]) : 0;
    state.steps[state.flow] = Math.min(Math.max(0, parsed), stepsFor(state.flow).length - 1);
    syncHash(true);
  }
  function navigate(flow, index) {
    if (!flowOrder.includes(flow)) return;
    const nextIndex = Math.min(Math.max(0,index),stepsFor(flow).length-1);
    if (flow === state.flow && currentIndex() === nextIndex) return;
    state.flow = flow; state.steps[flow] = nextIndex;
    syncHash(); render(); focusStep(); announce();
  }
  $('app-screen').addEventListener('load', imageStatus);
  $('app-screen').addEventListener('error', imageStatus);
  document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => {
    if (state.language === b.dataset.lang) return;
    state.language = b.dataset.lang; render(); announce();
  }));
  $('flow-list').addEventListener('click', e => {
    const button = e.target.closest('[data-flow]');
    if (button) navigate(button.dataset.flow, state.steps[button.dataset.flow]);
  });
  $('step-list').addEventListener('click', e => {
    const button = e.target.closest('[data-step]');
    if (button) navigate(state.flow, Number(button.dataset.step));
  });
  $('previous').addEventListener('click', () => navigate(state.flow,currentIndex()-1));
  $('next').addEventListener('click', () => navigate(state.flow,currentIndex()+1));
  $('restart').addEventListener('click', () => {
    state.steps[state.flow] = 0; syncHash(); render(); focusStep(); announce(t('resetAnnouncement'));
  });
  document.querySelectorAll('[data-request]').forEach(b => b.addEventListener('click', () => {
    if (state.requestKind === b.dataset.request) return;
    state.requestKind = b.dataset.request; renderLesson(); announce();
  }));
  $('issue').addEventListener('change', e => {
    if (!issues.some(issue => issue.id === e.target.value)) return;
    state.issue = e.target.value; renderIssue();
    $('announcement').textContent = local(issues.find(issue => issue.id === state.issue).title);
  });
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#help') {
      $('help-heading').focus({ preventScroll: true });
      $('help').scrollIntoView({ block: 'start', behavior: 'auto' });
      return;
    }
    if (window.location.hash === '#guide') { focusStep(); return; }
    readHash(); render(); focusStep(); announce();
  });
  readHash(); render();
})();
