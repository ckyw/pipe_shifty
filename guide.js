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
  const flowOrder = ['signup', 'clock-in', 'clock-out', 'correction'];
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
          note: pair('관리자가 안내한 출퇴근 장소와 인증 방식을 확인하세요.', 'Check the timeclock areas and verification methods provided by your administrator.'),
          image: 'clock', forceKo: true, pane: 1, spot: { ko: [4,88,92,7], en: [4,88,92,7] }, alt: pair('한국어 출근 장소 선택 화면과 하단 출근하기 버튼', 'Korean timeclock-area selection screen; the bottom button is Clock In'), src: 'auth' },
        { title: pair('출근 시각이 남았는지 확인해요', 'Look for your clock-in time'), chip: pair('기록 확인', 'Check record'),
          body: pair('출근 후에는 버튼이 퇴근하기로 바뀌고 출근 시각이 표시됩니다. 실제 앱에서 기록을 확인하세요.', 'After clock-in, the button changes to Clock Out and a clock-in time appears. Check that record in the real app.'),
          note: pair('앱이 열리거나 버튼을 눌렀다는 것만으로 기록되었다고 판단하지 마세요. 기록이 없으면 누락 안내를 확인하세요.', 'Opening the app or tapping a button is not proof of a saved record. If it is missing, see the missing-record help.'),
          image: 'clock', pane: 2, spot: { ko: [6,44,88,7], en: [6,35,88,7] }, alt: pair('출근 후 현재 근무중 카드의 출근 시각과 퇴근하기 버튼', 'After clock-in: the Currently Working card shows a clock-in time and Clock Out'), src: 'clock' },
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
    { title: pair('실제 앱 언어 바꾸기', 'Change the actual app language'), body: pair('이 페이지의 언어 선택 메뉴는 가이드만 바꿉니다. 시프티 앱에서는 더보기 → 내 계정 → 언어에서 한국어 또는 영어를 선택하고 저장하세요. 개인 계정 설정이며 회사 전체 언어를 바꾸지 않습니다.', 'This page’s language menu changes only the guide. In Shiftee, open More → My Account → Language, choose Korean or English and save. This is a personal account setting; it does not change the company language.'), src: 'language' },
    { title: pair('요청과 기록 구분하기', 'Tell requests and records apart'), body: pair('보내기는 요청 제출입니다. 승인 대기·승인·거절 상태를 확인하고, 승인 후 실제 기록까지 확인하세요. 회사에 없는 기능이나 정해지지 않은 승인자를 임의로 선택하지 마세요.', 'Sending submits a request. Check whether it is pending, approved or rejected, then check the actual record after approval. Do not assume a feature is enabled or choose an unconfirmed approver.'), src: 'create' },
  ];
  const policies = [
    pair('출퇴근 장소·인증 수단·좌표 반경·등록 WiFi', 'Timeclock areas, methods, coordinate radius and registered WiFi'),
    pair('근무일정·운영 시각·자정 넘는 근무 처리', 'Shift schedules, working times and overnight-work handling'),
    pair('휴게의 자동/수동 방식과 시작·종료 기준', 'Automatic or manual breaks and start/end rules'),
    pair('무일정 근무·웹 출퇴근 허용 여부와 플랜', 'On-Call and web attendance permissions and plan'),
    pair('생성·수정·근무지 외 요청 허용, 승인권자·사유·제출 기한', 'Create/edit/offsite request permissions, approvers, reasons and deadlines'),
    pair('문의 담당자·직원 공유 범위·공식 이미지 이용 권리', 'Support contact, staff sharing scope and rights to use official images'),
  ];
  const images = {
    'signup-ko': { file:'signup-ko.png', width:2566, height:2250, panes:[[0,1118/2566*100],[59.1,6.4,79.4,8]] },
    'join-ko': { file:'join-ko.png', width:309, height:609, panes:[[0,100]] },
    'clock-ko': { file: 'clock-ko.png', width: 3892, height: 2250, panes: [[0,28.7],[35.65,28.7],[71.3,28.7]] },
    'clock-en': { file: 'clock-en.png', width: 3953, height: 2250, panes: [[0,27.7],[35.8,28.2],[71.7,28.3]] },
  };

  const five = (ko, en, zh, es, uz) => ({ko,en,zh,es,uz});
  copy.contact = five('문의하기','Contact','联系我们','Contacto','Bog‘lanish');
  copy.kakaoId = five('카카오톡 ID','KakaoTalk ID','KakaoTalk ID','ID de KakaoTalk','KakaoTalk ID');
  copy.languageZh = five('중국어로 가이드 읽기','Read this guide in Chinese','用中文阅读指南','Leer la guía en chino','Qo‘llanmani xitoy tilida o‘qish');
  copy.languageEs = five('스페인어로 가이드 읽기','Read this guide in Spanish','用西班牙语阅读指南','Leer la guía en español','Qo‘llanmani ispan tilida o‘qish');
  copy.languageUz = five('우즈베크어로 가이드 읽기','Read this guide in Uzbek','用乌兹别克语阅读指南','Leer la guía en uzbeko','Qo‘llanmani o‘zbek tilida o‘qish');
  copy.languageMn = five('몽골어로 가이드 읽기','Read this guide in Mongolian','用蒙古语阅读指南','Leer la guía en mongol','Qo‘llanmani mo‘g‘ul tilida o‘qish');
  source.signup = {slug:'signUp',title:five('회원가입','Sign up','注册账号','Crear una cuenta','Ro‘yxatdan o‘tish')};
  copy.imageSignupKo = {"ko": "한국어 공식 모바일 시작 화면입니다. 앱 버전에 따라 버튼 이름이 다를 수 있습니다.", "en": "Official Korean mobile start screen. Button labels may vary by app version.", "zh": "韩语官方手机开始页面。按钮名称可能因应用版本而异。", "es": "Pantalla móvil oficial en coreano. Los nombres pueden variar según la versión.", "uz": "Koreyscha rasmiy mobil boshlang‘ich oyna. Tugma nomlari versiyaga qarab farq qilishi mumkin.", "mn": "Албан ёсны солонгос утасны эхлэх дэлгэц. Товчны нэр аппын хувилбараас хамаарч өөр байж болно."};
  copy.imageJoinKo = {"ko": "직원 시작 가이드의 한국어 공식 모바일 이미지입니다. 이미지 속 회사·코드는 예시이며 PIPE의 실제 정보가 아닙니다.", "en": "Official Korean mobile image from the staff getting-started guide. Its company and code are examples, not PIPE data.", "zh": "员工开始指南中的韩语官方手机图片。公司和代码均为示例，并非 PIPE 实际信息。", "es": "Imagen móvil oficial en coreano de la guía de empleados. La empresa y el código son ejemplos, no datos de PIPE.", "uz": "Xodimlar qo‘llanmasidagi koreyscha rasmiy mobil rasm. Kompaniya va kod namuna, PIPE ma’lumoti emas.", "mn": "Ажилтны эхлэх гарын авлагын албан ёсны солонгос утасны зураг. Байгууллага, код нь жишээ бөгөөд PIPE-ийн бодит мэдээлэл биш."};
  source.staff = {"slug": "gettingStartedGuideForStaff", "title": {"ko": "직원 시작 가이드", "en": "Staff getting-started guide", "zh": "员工开始指南", "es": "Guía de inicio para empleados", "uz": "Xodimlar uchun boshlang‘ich qo‘llanma", "mn": "Ажилтны эхлэх гарын авлага"}};
  flows.signup = {
  "name": {
    "ko": "처음 시작하기 · 회원가입",
    "en": "Getting started · Sign up",
    "zh": "开始使用 · 注册",
    "es": "Primeros pasos · Registro",
    "uz": "Boshlash · Ro‘yxatdan o‘tish",
    "mn": "Эхлэх · Бүртгүүлэх"
  },
  "short": {
    "ko": "회원가입부터",
    "en": "Sign up first",
    "zh": "先注册账号",
    "es": "Crear una cuenta",
    "uz": "Avval ro‘yxatdan o‘ting",
    "mn": "Эхлээд бүртгүүлэх"
  },
  "sub": {
    "ko": "Google로 가입 → PIPE 합류",
    "en": "Google sign-up → join PIPE",
    "zh": "Google 注册 → 加入 PIPE",
    "es": "Registro con Google → unirse a PIPE",
    "uz": "Google orqali → PIPE’ga qo‘shilish",
    "mn": "Google-ээр бүртгүүлэх → PIPE-д нэгдэх"
  },
  "steps": [
    {
      "chip": {
        "ko": "가입 시작",
        "en": "Start sign-up",
        "zh": "开始注册",
        "es": "Iniciar registro",
        "uz": "Ro‘yxatni boshlash",
        "mn": "Бүртгэл эхлэх"
      },
      "title": {
        "ko": "1단계 · 앱에서 계정 만들기를 눌러요",
        "en": "Step 1 · Create an account in the app",
        "zh": "第1步 · 在应用中创建账号",
        "es": "Paso 1 · Crea una cuenta en la app",
        "uz": "1-qadam · Ilovada hisob yarating",
        "mn": "1-р алхам · Апп дээр бүртгэл үүсгээрэй"
      },
      "body": {
        "ko": "휴대폰에서 시프티 앱을 열고 시작 화면의 계정 만들기를 선택하세요. 앱 버전에 따라 가입하기로 표시될 수 있습니다.",
        "en": "Open Shiftee on your phone and choose Create Account on the start screen. Some app versions may call it Sign Up.",
        "zh": "在手机上打开 Shiftee，在开始页面选择创建账号。部分版本可能显示为注册。",
        "es": "Abre Shiftee en tu móvil y selecciona Crear cuenta en la pantalla inicial. Según la versión puede aparecer como Registrarse.",
        "uz": "Telefoningizda Shiftee’ni oching va boshlang‘ich oynada Hisob yaratish tugmasini tanlang. Ayrim versiyalarda Ro‘yxatdan o‘tish deb ko‘rsatilishi mumkin.",
        "mn": "Утсан дээрээ Shiftee-г нээж эхлэх дэлгэцийн бүртгэл үүсгэх товчийг сонгоорой. Аппын хувилбараас хамаарч бүртгүүлэх гэж харагдаж болно."
      },
      "note": {
        "ko": "아래 단계는 모바일 앱에서 Google 계정을 연동해 가입하는 방법입니다. 실제 가입은 시프티 앱에서 진행하세요.",
        "en": "These steps show mobile sign-up with a Google account. Complete the actual registration in the Shiftee app.",
        "zh": "以下步骤仅介绍在手机应用中关联 Google 账号注册。请在 Shiftee 应用内完成实际注册。",
        "es": "Estos pasos muestran el registro móvil con Google. Completa el registro real en la app Shiftee.",
        "uz": "Bu qadamlar mobil ilovada Google hisobini ulab ro‘yxatdan o‘tishni ko‘rsatadi. Haqiqiy ro‘yxatdan o‘tishni Shiftee ilovasida bajaring.",
        "mn": "Эдгээр алхам нь утасны апп дээр Google бүртгэл холбож бүртгүүлэхийг харуулна. Бодит бүртгэлээ Shiftee апп дээр хийгээрэй."
      },
      "image": "signup",
      "forceKo": true,
      "pane": 0,
      "spot": {
        "ko": [
          8,
          78,
          84,
          7
        ]
      },
      "alt": {
        "ko": "시프티 공식 모바일 시작 화면의 계정 만들기 버튼",
        "en": "Official Shiftee mobile start screen with Create Account",
        "zh": "Shiftee 官方手机开始页面的创建账号按钮",
        "es": "Pantalla móvil oficial de Shiftee con Crear cuenta",
        "uz": "Shiftee rasmiy mobil boshlang‘ich oynasidagi Hisob yaratish tugmasi",
        "mn": "Shiftee-ийн албан ёсны утасны эхлэх дэлгэцийн бүртгэл үүсгэх товч"
      },
      "imageNote": "imageSignupKo",
      "src": "signup"
    },
    {
      "chip": {
        "ko": "Google 선택",
        "en": "Choose Google",
        "zh": "选择 Google",
        "es": "Elegir Google",
        "uz": "Google’ni tanlash",
        "mn": "Google сонгох"
      },
      "title": {
        "ko": "Google 연동 아이디로 가입해요",
        "en": "Sign up with your Google account",
        "zh": "关联 Google 账号注册",
        "es": "Regístrate con tu cuenta de Google",
        "uz": "Google hisobingiz bilan ro‘yxatdan o‘ting",
        "mn": "Google бүртгэлээ холбож бүртгүүлээрэй"
      },
      "body": {
        "ko": "가입 화면에서 Google 로고 버튼을 누르고, 본인의 Gmail 계정을 선택해 로그인하세요.",
        "en": "Tap the Google logo on the sign-up screen, then select your own Gmail account and sign in.",
        "zh": "在注册页面点击 Google 标志按钮，选择本人的 Gmail 账号并登录。",
        "es": "Pulsa el logotipo de Google en el registro, selecciona tu propia cuenta de Gmail e inicia sesión.",
        "uz": "Ro‘yxat oynasida Google logotipini bosing, o‘zingizning Gmail hisobingizni tanlang va kiring.",
        "mn": "Бүртгүүлэх дэлгэцийн Google лого дээр дарж, өөрийн Gmail бүртгэлээ сонгоод нэвтрээрэй."
      },
      "note": {
        "ko": "(name).pipecompany@gmail.com Google 계정으로 진행하고, 이후 시프티에 접속할 때도 같은 계정을 사용하세요.",
        "en": "Use the Google account (name).pipecompany@gmail.com and keep using that account for future Shiftee logins.",
        "zh": "请使用 (name).pipecompany@gmail.com Google 账号，以后登录 Shiftee 时也使用同一账号。",
        "es": "Usa la cuenta de Google (name).pipecompany@gmail.com y la misma cuenta para entrar después en Shiftee.",
        "uz": "(name).pipecompany@gmail.com Google hisobidan foydalaning. Keyingi safar Shiftee’ga kirishda ham shu hisobni ishlating.",
        "mn": "(name).pipecompany@gmail.com Google бүртгэлийг ашиглаж, дараа Shiftee-д нэвтрэхдээ мөн тэр бүртгэлээ хэрэглээрэй."
      },
      "image": "signup",
      "forceKo": true,
      "pane": 1,
      "crop": "google",
      "spot": {
        "ko": [
          5,
          6,
          90,
          88
        ]
      },
      "alt": {
        "ko": "시프티 공식 모바일 가입 화면에서 Google 로고 버튼만 확대한 이미지",
        "en": "Google logo button enlarged from Shiftee’s official mobile sign-up screen",
        "zh": "从 Shiftee 官方手机注册页面放大的 Google 标志按钮",
        "es": "Botón de Google ampliado desde el registro móvil oficial de Shiftee",
        "uz": "Shiftee rasmiy mobil ro‘yxat oynasidan kattalashtirilgan Google tugmasi",
        "mn": "Shiftee-ийн албан ёсны утасны бүртгэлийн дэлгэцээс томруулсан Google товч"
      },
      "src": "signup",
      "hideImageCaption": true
    },
    {
      "chip": {
        "ko": "Google 가입 완료",
        "en": "Finish with Google",
        "zh": "完成 Google 注册",
        "es": "Completar con Google",
        "uz": "Google orqali yakunlash",
        "mn": "Google-ээр дуусгах"
      },
      "title": {
        "ko": "Google 로그인을 마치고 앱으로 돌아와요",
        "en": "Finish Google sign-in and return to the app",
        "zh": "完成 Google 登录后返回应用",
        "es": "Termina el acceso con Google y vuelve a la app",
        "uz": "Google orqali kirishni tugatib ilovaga qayting",
        "mn": "Google нэвтрэлтийг дуусгаад апп руу буцаарай"
      },
      "body": {
        "ko": "Google 화면의 확인 절차를 완료한 뒤 시프티 앱으로 돌아오세요. 가입한 Google 계정으로 시프티에 로그인했는지 확인하세요.",
        "en": "Complete the confirmation steps on Google, then return to Shiftee. Check that you are signed in with the Google account you used to register.",
        "zh": "完成 Google 页面上的确认步骤，然后返回 Shiftee。确认已使用注册时的 Google 账号登录。",
        "es": "Completa las confirmaciones de Google y vuelve a Shiftee. Comprueba que has entrado con la cuenta de Google usada para registrarte.",
        "uz": "Google oynasidagi tasdiqlashni tugatib Shiftee’ga qayting. Ro‘yxatdan o‘tgan Google hisobingiz bilan kirganingizni tekshiring.",
        "mn": "Google дэлгэцийн баталгаажуулах алхмуудыг дуусгаад Shiftee рүү буцаарай. Бүртгүүлсэн Google бүртгэлээрээ нэвтэрснээ шалгаарай."
      },
      "note": {
        "ko": "이미지는 Google 선택 예시이며 가입 완료 화면이 아닙니다. 로그인했다면 다음 단계에서 PIPE 직장에 합류하세요.",
        "en": "The image illustrates choosing Google; it is not a sign-up success screen. Once signed in, continue to join PIPE.",
        "zh": "图片仅示意选择 Google，并非注册成功页面。登录后请继续下一步加入 PIPE。",
        "es": "La imagen muestra la selección de Google, no una confirmación de registro. Tras entrar, continúa para unirte a PIPE.",
        "uz": "Rasm Google tanlash namunasidir, ro‘yxat tugaganini ko‘rsatmaydi. Kirgach, keyingi qadamda PIPE’ga qo‘shiling.",
        "mn": "Зураг нь Google сонгох жишээ бөгөөд бүртгэл амжилттай дууссан дэлгэц биш. Нэвтэрсний дараа дараагийн алхмаар PIPE-д нэгдээрэй."
      },
      "image": "signup",
      "forceKo": true,
      "pane": 1,
      "crop": "google",
      "spot": {
        "ko": [
          5,
          6,
          90,
          88
        ]
      },
      "alt": {
        "ko": "Google 연동 가입 시 선택하는 공식 Google 버튼 예시",
        "en": "Official Google button used for linked-account sign-up",
        "zh": "关联 Google 注册时使用的官方按钮示例",
        "es": "Ejemplo oficial del botón de registro con Google",
        "uz": "Google hisobini ulab ro‘yxatdan o‘tish uchun rasmiy tugma namunasi",
        "mn": "Google бүртгэл холбож бүртгүүлэх албан ёсны товчны жишээ"
      },
      "src": "signup",
      "hideImageCaption": true
    },
    {
      "chip": {
        "ko": "PIPE 합류",
        "en": "Join PIPE",
        "zh": "加入 PIPE",
        "es": "Unirse a PIPE",
        "uz": "PIPE’ga qo‘shiling",
        "mn": "PIPE-д нэгдэх"
      },
      "title": {
        "ko": "같은 Google 계정으로 PIPE에 합류해요",
        "en": "Join PIPE with the same Google account",
        "zh": "使用同一 Google 账号加入 PIPE",
        "es": "Únete a PIPE con la misma cuenta de Google",
        "uz": "Xuddi shu Google hisobi bilan PIPE’ga qo‘shiling",
        "mn": "Мөн тэр Google бүртгэлээр PIPE-д нэгдээрэй"
      },
      "body": {
        "ko": "시프티 앱에서 직원용 직장 합류하기를 선택하세요. 관리자가 전달한 합류코드를 입력하고 합류하기를 누르세요.",
        "en": "In Shiftee, choose Join Company for employees. Enter the invitation code from your administrator and choose Join.",
        "zh": "在 Shiftee 中选择员工加入公司，输入管理员提供的邀请码，然后点击加入。",
        "es": "En Shiftee, elige Unirse a una empresa para empleados. Introduce el código del administrador y pulsa Unirse.",
        "uz": "Shiftee’da xodimlar uchun kompaniyaga qo‘shilishni tanlang. Administrator bergan taklif kodini kiriting va qo‘shilish tugmasini bosing.",
        "mn": "Shiftee дээр ажилтны Байгууллагад нэгдэх сонголтыг нээгээрэй. Администратороос авсан урилгын кодыг оруулаад нэгдэх товчийг дарна."
      },
      "note": {
        "ko": "공식 이미지는 이전 6자리 코드 화면입니다. 실제로 받은 12자리 코드를 사용하고, 기존 6자리 코드를 받았다면 앱의 별도 경로를 이용하세요. 코드 문의는 상단 CK Park에게 해주세요.",
        "en": "This official image shows the older 6-digit screen. Use the 12-digit code you actually received; older 6-digit codes use a separate option in the app. Contact CK Park above if needed.",
        "zh": "官方图片为旧6位码界面。请使用实际收到的12位码；若收到旧6位码，请使用应用中的单独入口。需要帮助请联系顶部的 CK Park。",
        "es": "La imagen oficial muestra la pantalla antigua de 6 dígitos. Usa el código real de 12 dígitos; los antiguos de 6 tienen una opción aparte en la app. Consulta a CK Park si necesitas ayuda.",
        "uz": "Rasmiy rasm eski 6 xonali kod oynasidir. Haqiqatan olgan 12 xonali kodni ishlating; eski 6 xonali kod bo‘lsa, ilovadagi alohida variantdan foydalaning. Savollar uchun yuqoridagi CK Park bilan bog‘laning.",
        "mn": "Албан ёсны зураг нь хуучин 6 оронтой кодын дэлгэц. Бодитоор авсан 12 оронтой кодоо ашиглаарай. Хуучин 6 оронтой код бол аппын тусдаа сонголтоор оруулна. Асуулт гарвал дээрх CK Park-тай холбогдоорой."
      },
      "image": "join",
      "forceKo": true,
      "pane": 0,
      "spot": {
        "ko": [
          22,
          52,
          58,
          12
        ]
      },
      "alt": {
        "ko": "시프티 직원 시작 가이드의 공식 모바일 직장 합류 화면",
        "en": "Official mobile Join Company screenshot from Shiftee’s employee getting-started guide",
        "zh": "Shiftee 员工开始指南中的官方手机加入公司界面",
        "es": "Pantalla móvil oficial para unirse a una empresa de la guía de empleados de Shiftee",
        "uz": "Shiftee xodimlar boshlang‘ich qo‘llanmasidagi rasmiy mobil kompaniyaga qo‘shilish oynasi",
        "mn": "Shiftee ажилтны эхлэх гарын авлагын албан ёсны утасны байгууллагад нэгдэх дэлгэц"
      },
      "imageNote": "imageJoinKo",
      "src": "staff"
    }
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

  const state = { language: 'ko', flow: 'signup', steps: { signup: 0, 'clock-in': 0, 'clock-out': 0, correction: 0 }, issue: 'gps', requestKind: 'create' };
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
    $('language-select').value = state.language;
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
    const hideCaption = step.hideImageCaption === true;
    document.querySelector('#screen-figure .sample-label').hidden = hideCaption;
    $('image-note').hidden = hideCaption;
    const isCorrection = !step.image;
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
    const [left, width, top = 0, height = 100] = info.panes[step.pane];
    const frame = $('screen-window');
    frame.dataset.crop = step.crop || '';
    frame.style.setProperty('--pane-ratio', String(info.width * width / (info.height * height)));
    frame.style.setProperty('--image-height', `${10000 / height}%`);
    frame.style.setProperty('--image-top', `${-top / height * 100}%`);
    frame.style.setProperty('--image-left', `${-left / width * 100}%`);
    const img = $('app-screen');
    img.alt = local(step.alt);
    // lang applies to the accessible alt text, not text baked into the pixels.
    img.lang = state.language === 'zh' ? 'zh-Hans' : state.language;
    if (img.getAttribute('src') !== `assets/${info.file}`) img.src = `assets/${info.file}`;
    const [x,y,w,h] = step.spot[imageLanguage];
    Object.assign($('spotlight').style, { left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%` });
    $('spot-number').textContent = String(currentIndex() + 1);
    const notes = hideCaption ? [] : [t(step.imageNote || (step.forceKo ? 'imageKoFallback' : imageLanguage === 'ko' ? 'imageKo' : 'imageEn'))];
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
    const match = /^#(signup|clock-in|clock-out|correction)\/(\d{1,2})$/.exec(window.location.hash);
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
  $('language-select').addEventListener('change', event => {
    const language = event.target.value;
    if (!['ko','en','zh','es','uz','mn'].includes(language) || state.language === language) return;
    state.language = language; render(); announce();
  });
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
