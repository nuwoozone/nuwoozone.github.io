// ============================================================
// app-marketing.js — 학습 페이지 "App 마케팅 완전정복"
// 대상: 앱 마케팅을 처음 배우는 신입 인턴
// ============================================================
(function () {
  'use strict';

  var QUIZ = [
    {
      q: '광고 클릭과 앱의 첫 실행을 연결해 여러 매체 성과를 같은 기준으로 보는 도구는?',
      options: ['MMP', '앱스토어', 'DSP', 'CRM'],
      answer: 0,
      why: 'MMP는 광고 터치포인트와 앱 설치·실행·인앱 이벤트를 연결해 매체별 기여를 판정합니다.'
    },
    {
      q: '같은 유저가 광고 A를 조회하고 광고 B를 클릭한 뒤 앱을 설치했습니다. 클릭과 조회가 모두 룩백 윈도우 안이라면 일반적인 우선순위는?',
      options: ['광고 A 조회', '광고 B 클릭', '두 매체에 설치 1건씩', '항상 오가닉'],
      answer: 1,
      why: '일반적으로 클릭 터치포인트가 조회보다 우선합니다. 단, 실제 결과는 MMP·매체의 설정과 정책을 확인해야 합니다.'
    },
    {
      q: '포스트백의 대표적인 데이터 방향은?',
      options: ['광고 매체 → 사용자', 'MMP → 광고 매체', '앱스토어 → 광고 소재', '사용자 → 대행사'],
      answer: 1,
      why: 'MMP가 설치·구매 등 앱 이벤트 정보를 광고 매체에 돌려보내 최적화·정산·오디언스 생성에 활용하게 합니다.'
    },
    {
      q: 'SAN 매체의 특징으로 가장 알맞은 것은?',
      options: ['항상 트래킹 링크만 사용한다', '자체 데이터로 전환 기여를 주장하고 API로 MMP와 연동한다', '앱 이벤트를 수집하지 않는다', '오가닉 설치만 측정한다'],
      answer: 1,
      why: 'Google·Meta 등 SAN은 자체 광고 상호작용 데이터로 전환을 판단하고, MMP는 그 주장과 다른 채널 데이터를 함께 비교합니다.'
    },
    {
      q: '앱이 이미 설치된 사용자가 리타겟팅 광고를 눌러 앱을 다시 연 경우 AppsFlyer 용어는?',
      options: ['리어트리뷰션', '리인게이지먼트', '오가닉 인스톨', '신규 유저 유입'],
      answer: 1,
      why: '앱이 설치된 상태에서 다시 사용하도록 만든 것은 리인게이지먼트입니다. 삭제 후 재설치라면 리어트리뷰션입니다.'
    },
    {
      q: 'AppsFlyer OneLink와 딥링크의 관계를 가장 잘 설명한 것은?',
      options: ['둘은 완전히 같은 URL이다', 'OneLink는 측정·분기하는 입구이고 딥링크는 앱 안의 목적지 정보다', '딥링크가 OS와 설치 여부를 모두 판단한다', 'OneLink는 웹에서만 작동한다'],
      answer: 1,
      why: '딥링크는 앱 내부 화면을 여는 목적지 정보이고, OneLink는 한 HTTPS 링크에서 OS·설치 여부에 따라 이동 경로를 나누고 캠페인 성과를 측정하는 입구입니다.'
    },
    {
      q: '디퍼드 딥링크가 필요한 상황은?',
      options: ['앱이 설치되어 있고 홈 화면만 열 때', '앱이 없는 사용자를 설치 후 원래 광고의 상품 화면으로 보낼 때', '광고비를 계산할 때', '포스트백을 중단할 때'],
      answer: 1,
      why: '디퍼드 딥링크는 앱이 없는 사용자를 스토어로 보낸 뒤, 설치·첫 실행 후에도 광고에서 약속한 특정 콘텐츠로 이어주는 방식입니다.'
    }
  ];

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch];
    });
  }

  function sourceLink(href, label) {
    return '<a class="am-source-link" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">' + esc(label) + ' ↗</a>';
  }

  function buildQuiz() {
    return QUIZ.map(function (item, index) {
      return '<fieldset class="am-quiz-card" data-am-question="' + index + '">' +
        '<legend><span>' + (index + 1) + '</span>' + esc(item.q) + '</legend>' +
        '<div class="am-quiz-options">' + item.options.map(function (option, optionIndex) {
          return '<label><input type="radio" name="am-q-' + index + '" value="' + optionIndex + '">' +
            '<span>' + esc(option) + '</span></label>';
        }).join('') + '</div>' +
        '<div class="am-quiz-feedback" aria-live="polite"></div>' +
      '</fieldset>';
    }).join('');
  }

  function buildHTML() {
    return `
      <div class="am-page">
        <section class="am-hero" aria-labelledby="am-title">
          <div class="am-hero-copy">
            <div class="am-kicker">📘 신입 인턴 기초 과정 · 약 45분</div>
            <h1 id="am-title">App 마케팅 완전정복</h1>
            <p>광고를 본 사람이 앱을 설치하고 구매하기까지, <b>무엇을 어떻게 측정하는지</b> 한 흐름으로 이해합니다. 기술 용어를 외우기 전에 “누가 어떤 데이터를 누구에게 보내는가”부터 익혀보세요.</p>
            <div class="am-hero-badges" aria-label="학습 주제">
              <span>MMP</span><span>딥링크·OneLink</span><span>어트리뷰션</span><span>포스트백</span><span>SAN</span><span>리타겟팅</span>
            </div>
          </div>
          <div class="am-phone-visual" aria-label="앱 광고에서 성과 확인까지의 흐름 그림">
            <div class="am-phone">
              <div class="am-phone-top"></div>
              <div class="am-ad-card"><small>Sponsored</small><b>첫 구매 20% 혜택</b><button type="button" tabindex="-1">앱에서 보기</button></div>
              <div class="am-phone-event"><span>✓</span><div><b>purchase</b><small>₩42,000 · event sent</small></div></div>
            </div>
            <div class="am-signal am-signal-one">광고 클릭</div>
            <div class="am-signal am-signal-two">SDK 이벤트</div>
            <div class="am-signal am-signal-three">성과 리포트</div>
          </div>
        </section>

        <nav class="am-jump" aria-label="App 마케팅 학습 목차">
          <button type="button" data-am-target="am-web-app">1. 웹과 앱</button><button type="button" data-am-target="am-ecosystem">2. 생태계</button><button type="button" data-am-target="am-deeplink">3. 딥링크</button>
          <button type="button" data-am-target="am-attribution">4. 어트리뷰션</button><button type="button" data-am-target="am-postback">5. 포스트백</button><button type="button" data-am-target="am-san">6. SAN</button>
          <button type="button" data-am-target="am-retargeting">7. 리타겟팅</button><button type="button" data-am-target="am-kpi">8. KPI</button><button type="button" data-am-target="am-quiz">9. 퀴즈</button>
        </nav>

        <section class="am-section" id="am-web-app">
          <div class="am-section-head"><span class="am-step">01</span><div><p>먼저 이 차이부터</p><h2>웹 마케팅과 앱 마케팅은 무엇이 다를까?</h2></div></div>
          <div class="am-compare-grid">
            <article><div class="am-card-icon">🌐</div><h3>웹</h3><p>링크 클릭 후 같은 브라우저에서 페이지가 열립니다. 쿠키·URL 파라미터·웹 분석 도구를 중심으로 방문과 전환을 연결합니다.</p><ul><li>대표 시작점: 페이지 방문</li><li>주요 추적: UTM, 쿠키, 웹 SDK</li><li>전환 예: 문의, 회원가입, 구매</li></ul></article>
            <article class="is-app"><div class="am-card-icon">📱</div><h3>앱</h3><p>광고 클릭과 앱스토어, 설치, 첫 실행 사이가 끊어질 수 있습니다. 그래서 앱 SDK와 MMP가 연결 고리 역할을 합니다.</p><ul><li>대표 시작점: 설치 후 첫 실행</li><li>주요 추적: MMP SDK, 광고 ID, 딥링크</li><li>전환 예: 가입, 구독, 인앱 구매</li></ul></article>
          </div>
          <div class="am-note"><b>핵심 한 문장</b><span>웹은 “방문”을 바로 관찰하기 쉽지만, 앱은 <b>광고 → 스토어 → 설치 → 실행</b> 구간을 이어 붙이는 측정 장치가 더 필요합니다.</span></div>
        </section>

        <section class="am-section" id="am-ecosystem">
          <div class="am-section-head"><span class="am-step">02</span><div><p>등장인물 지도</p><h2>앱 마케팅 데이터는 어떻게 흐를까?</h2></div></div>
          <div class="am-flow" role="img" aria-label="광고 매체에서 앱과 MMP를 거쳐 다시 광고 매체로 전달되는 데이터 흐름">
            <div class="am-flow-node"><span>①</span><b>광고 매체</b><small>노출·클릭 데이터</small></div>
            <div class="am-flow-arrow"><b>광고</b><i>→</i></div>
            <div class="am-flow-node"><span>②</span><b>사용자</b><small>클릭·설치·실행</small></div>
            <div class="am-flow-arrow"><b>스토어</b><i>→</i></div>
            <div class="am-flow-node"><span>③</span><b>광고주 앱</b><small>가입·구매 이벤트</small></div>
            <div class="am-flow-arrow"><b>SDK</b><i>→</i></div>
            <div class="am-flow-node is-mmp"><span>④</span><b>MMP</b><small>매칭·기여 판정</small></div>
            <div class="am-flow-return"><span>포스트백: 설치·구매 결과를 매체로 전달 ↩</span></div>
          </div>
          <div class="am-term-grid">
            <article><b>MMP</b><span>Mobile Measurement Partner. 여러 매체 데이터를 한 기준으로 연결해 “어느 광고가 전환에 기여했는가”를 판단하는 측정 파트너입니다.</span></article>
            <article><b>SDK</b><span>앱 안에 넣는 측정 코드 묶음입니다. 첫 실행, 회원가입, 구매 같은 이벤트를 MMP로 보냅니다.</span></article>
            <article><b>인앱 이벤트</b><span>사용자가 앱 안에서 한 행동입니다. install만 보지 말고 signup, add_to_cart, purchase처럼 사업 목표와 연결해 설계합니다.</span></article>
            <article><b>딥링크</b><span>앱의 특정 화면으로 바로 이동시키는 링크입니다. 앱이 없다면 설치 후 원래 화면으로 보내는 디퍼드 딥링크가 쓰입니다.</span></article>
          </div>
          <div class="am-beginner-box"><span>💡</span><div><b>UTM과 MMP 링크는 같은 것인가요?</b><p>둘 다 “유입 출처를 구분하는 링크”라는 목적은 비슷하지만, UTM은 주로 웹 분석용 파라미터이고 MMP 트래킹 링크는 앱 설치·첫 실행과 광고 터치포인트를 연결하도록 설계됩니다. 앱 캠페인에서는 매체 연동 방식과 MMP 가이드를 먼저 확인하세요.</p></div></div>
          <figure class="am-reference-figure">
            <div class="am-reference-image"><img src="images/app-store-journey.png" alt="광고를 본 사용자가 앱스토어를 거쳐 앱을 설치하고 실행하는 과정" loading="lazy"></div>
            <figcaption><b>광고에서 앱 사용까지</b><span>광고 클릭 → 앱스토어 이동 → 설치 → 첫 실행 → 인앱 화면. 웹과 달리 단계가 여러 환경에 나뉘기 때문에 SDK와 MMP가 광고 접점과 앱 행동을 이어 줍니다.</span></figcaption>
          </figure>
        </section>

        <section class="am-section" id="am-deeplink">
          <div class="am-section-head"><span class="am-step">03</span><div><p>한 번 누르고 알맞은 화면까지</p><h2>딥링크와 OneLink: 목적지와 안내 데스크</h2></div></div>
          <p class="am-lead"><b>딥링크는 앱 안에서 열 화면을 알려주는 ‘목적지 주소’</b>이고, <b>OneLink는 기기·OS·앱 설치 여부를 확인해 적절한 길로 보내는 ‘측정 가능한 입구’</b>입니다. 둘은 경쟁하는 링크가 아니라 한 사용자 여정에서 함께 일합니다.</p>

          <div class="am-link-concept-grid">
            <article class="is-deep"><span>DESTINATION</span><div class="am-link-icon">⌖</div><h3>딥링크</h3><p>앱을 열어 홈이 아닌 상품·기획전처럼 <b>특정 화면으로 이동</b>시키는 규칙입니다.</p><code>kshop://goWeb?url=...</code><small>앱이 없다면 URI 스킴만으로는 설치 이후 여정까지 보장하기 어렵습니다.</small></article>
            <article class="is-one"><span>SMART ENTRANCE</span><div class="am-link-icon">1</div><h3>AppsFlyer OneLink</h3><p>광고에 넣는 하나의 HTTPS 링크입니다. <b>OS·설치 여부별 이동과 어트리뷰션</b>을 함께 처리합니다.</p><code>https://brand.onelink.me/...</code><small>템플릿은 라우팅 규칙의 기본 틀이고, 광고에는 실제 클릭 가능한 커스텀 링크를 사용합니다.</small></article>
            <article class="is-deferred"><span>AFTER INSTALL</span><div class="am-link-icon">↪</div><h3>디퍼드 딥링크</h3><p>앱이 없는 사용자를 스토어로 보낸 뒤, <b>설치·첫 실행 후 원래 목적지</b>로 이어주는 동작입니다.</p><code>광고 → 스토어 → 설치 → 상품 화면</code><small>AppsFlyer SDK와 앱 내부 라우팅 구현이 함께 준비되어야 합니다.</small></article>
          </div>

          <div class="am-url-anatomy">
            <div class="am-anatomy-copy"><span>URL SCHEME 해부하기</span><h3>주소 안에 또 다른 주소를 넣는 구조</h3><p>KT알파 쇼핑 예시의 <code>kshop://goWeb?url=...</code>은 앱에게 “K쇼핑 앱을 열고, goWeb 기능으로, 이 웹 URL을 보여줘”라고 전달하는 명령에 가깝습니다.</p></div>
            <div class="am-anatomy-code" role="img" aria-label="K쇼핑 딥링크의 URI 스킴, 경로, 파라미터, 인코딩된 값 구분">
              <code><mark class="is-scheme">kshop://</mark><mark class="is-route">goWeb</mark><mark class="is-key">?url=</mark><mark class="is-value">https%3A%2F%2Fwww.kshop.co.kr%2F...</mark></code>
              <div class="am-anatomy-legend"><span><i class="is-scheme"></i><b>URI 스킴</b><small>어떤 앱을 열지</small></span><span><i class="is-route"></i><b>라우트</b><small>어떤 기능으로 보낼지</small></span><span><i class="is-key"></i><b>키</b><small>뒤 값의 이름</small></span><span><i class="is-value"></i><b>인코딩된 값</b><small>실제 쇼핑몰 URL</small></span></div>
            </div>
            <div class="am-encoding-note"><b>URL 인코딩은 암호화가 아닙니다</b><p>바깥 URL의 구분자인 <code>?</code>·<code>&amp;</code>·<code>=</code>와 안쪽 쇼핑몰 URL의 기호가 섞이지 않도록 안전한 문자로 바꾸는 과정입니다.</p><div><span><code>%3A</code> = :</span><span><code>%2F</code> = /</span><span><code>%3F</code> = ?</span><span><code>%3D</code> = =</span></div></div>
          </div>

          <div class="am-kshop-case">
            <div class="am-kshop-case-head"><span>KT알파 쇼핑 × 카카오모먼트</span><h3>실무 링크가 만들어지는 4단계</h3><p>아래 주소와 ID는 구조를 설명하기 위한 예시입니다. 실제 집행 시에는 광고주가 전달한 원본과 사전 합의된 앱 라우팅 규칙을 사용합니다.</p></div>
            <div class="am-link-build-flow">
              <article><em>STEP 1</em><h4>원본 쇼핑몰 URL 확인</h4><code>https://www.kshop.co.kr/display/specialplan/detail?spdpId=2000000000</code><p>PC·모바일 웹에서 목적 페이지가 정상적으로 열리는지 먼저 확인합니다.</p></article>
              <div class="am-build-arrow"><span>URL 값 인코딩</span><i>→</i></div>
              <article><em>STEP 2</em><h4>안쪽 URL 인코딩</h4><code>https%3A%2F%2Fwww.kshop.co.kr%2Fdisplay%2Fspecialplan%2Fdetail%3FspdpId%3D2000000000</code><p>쇼핑몰 URL이 바깥 딥링크의 파라미터 값으로 안전하게 들어가도록 변환합니다.</p></article>
              <div class="am-build-arrow"><span>앱 규칙과 결합</span><i>→</i></div>
              <article><em>STEP 3</em><h4>앱 딥링크 완성</h4><code>kshop://goWeb?url=https%3A%2F%2Fwww.kshop.co.kr%2Fdisplay%2F...</code><p><code>kshop://</code> 스킴과 <code>goWeb</code> 라우트에 인코딩한 URL을 넣습니다.</p></article>
              <div class="am-build-arrow"><span>AppsFlyer에서 생성</span><i>→</i></div>
              <article class="is-final"><em>STEP 4</em><h4>OneLink를 광고 URL로 사용</h4><code>https://brand.onelink.me/ABCD/offer?pid=kakao_moment&amp;c=summer_benefit</code><p>OneLink에 매체·캠페인과 딥링크 정보를 설정하고, 생성된 HTTPS 링크를 카카오모먼트 소재에 입력합니다.</p></article>
            </div>
          </div>

          <div class="am-deferred-visual">
            <div class="am-deferred-title"><span>한 OneLink, 두 사용자 여정</span><h3>앱 설치 여부에 따라 길이 갈립니다</h3></div>
            <div class="am-deferred-start"><b>카카오모먼트 광고</b><i>→</i><strong>OneLink 클릭</strong><i>→</i><span>앱이 설치되어 있나요?</span></div>
            <div class="am-deferred-paths">
              <article><em>YES · 딥링크</em><div><span>앱 실행</span><i>→</i><b>기획전·상품 화면</b></div><p>앱을 바로 열고 전달된 목적지 값에 따라 해당 화면으로 이동합니다.</p></article>
              <article><em>NO · 디퍼드 딥링크</em><div><span>앱스토어</span><i>→</i><span>설치·첫 실행</span><i>→</i><b>기획전·상품 화면</b></div><p>설치 전 클릭 정보를 SDK가 이어받고, 앱이 목적지 값을 해석해 원래 화면을 엽니다.</p></article>
            </div>
          </div>

          <div class="am-link-map-wrap">
            <div class="am-link-map-title"><span>실무 입력값 대응표</span><h3>내가 가진 값이 어디에 들어가는지 확인하기</h3></div>
            <div class="am-link-map-row is-head"><b>보유 정보</b><b>역할</b><b>OneLink·앱에서의 대응</b></div>
            <div class="am-link-map-row"><strong>원본 쇼핑몰 URL</strong><p>최종적으로 보여줄 웹 콘텐츠</p><p><code>url</code> 파라미터의 값으로 인코딩</p></div>
            <div class="am-link-map-row"><strong><code>kshop://goWeb</code></strong><p>앱을 열고 웹뷰 기능을 호출하는 URI 스킴·라우트</p><p>기존 구현에서는 전체 URI를 <code>af_dp</code> 등에 설정할 수 있음</p></div>
            <div class="am-link-map-row"><strong>캠페인 정보</strong><p>어느 광고에서 들어왔는지 구분</p><p><code>pid</code> = 매체, <code>c</code> = 캠페인 등</p></div>
            <div class="am-link-map-row"><strong>앱 내부 목적지 값</strong><p>앱 코드가 어떤 화면을 열지 판단</p><p>최신 UDL 구조에서는 개발팀과 합의한 <code>deep_link_value</code> 중심으로 전달</p></div>
          </div>

          <div class="am-link-current-note"><span>현재 권장 구조와 기존 실무 방식</span><div><h3><code>af_dp</code>와 <code>deep_link_value</code>를 같은 값으로 생각하지 마세요</h3><p>KT알파 사례처럼 완성된 URI 스킴을 앱 라우팅에 사용하는 기존 구조는 계속 작동할 수 있습니다. 다만 AppsFlyer의 현재 권장 방식은 <b>iOS Universal Links·Android App Links로 앱을 열고, UDL이 전달한 <code>deep_link_value</code>를 앱이 해석해 화면을 이동</b>하는 것입니다. <code>af_dp</code>의 URI 스킴은 주로 앱 실행 폴백으로 안내됩니다. 실제 필드와 인코딩 횟수는 광고주 앱의 기존 구현을 기준으로 개발팀·MMP 담당자와 확인하세요.</p></div></div>
          <div class="am-footnote"><sup>테스트 메모</sup><p>OneLink 생성 후에는 링크 문자열만 보지 말고 <b>Android·iOS × 앱 설치·미설치</b> 조합을 각각 테스트하세요. 카카오톡·카카오모먼트의 인앱 브라우저, 앱스토어 이동, 설치 후 첫 실행, 최종 기획전·상품 페이지까지 확인해야 링크 QA가 끝납니다.</p></div>
        </section>

        <section class="am-section" id="am-attribution">
          <div class="am-section-head"><span class="am-step">04</span><div><p>가장 중요한 개념</p><h2>어트리뷰션: 누구의 성과로 인정할까?</h2></div></div>
          <p class="am-lead">어트리뷰션은 설치나 구매 같은 전환에 기여한 광고 터치포인트를 정하는 과정입니다. Airbridge는 LTA(Last Touch Attribution)를 기반으로 하며, 룩백 윈도우 안의 후보를 우선순위와 시간 순서로 평가합니다.</p>
          <div class="am-timeline" role="img" aria-label="광고 조회와 클릭 뒤 앱 설치가 발생하는 라스트 터치 예시">
            <div class="am-time-item is-view"><time>10:00</time><span>👀 Meta 광고 조회</span><small>후보 터치포인트</small></div>
            <div class="am-time-line"></div>
            <div class="am-time-item is-click"><time>12:00</time><span>👆 Google 광고 클릭</span><small>클릭 우선 · 더 최근</small></div>
            <div class="am-time-line"></div>
            <div class="am-time-item is-win"><time>12:15</time><span>📲 설치 후 첫 실행</span><small>Google에 기여</small></div>
            <div class="am-time-line"></div>
            <div class="am-time-item"><time>13:00</time><span>✅ 회원가입</span><small>후속 이벤트</small></div>
          </div>
          <div class="am-three-cards">
            <article><span>①</span><h3>룩백 윈도우</h3><p>전환이 일어나기 전, 어디까지의 클릭·조회를 후보로 볼지 정한 기간입니다.</p></article>
            <article><span>②</span><h3>위닝 터치포인트</h3><p>규칙에 따라 최종 기여를 인정받은 하나의 터치포인트입니다.</p></article>
            <article><span>③</span><h3>어트리뷰션 윈도우 <small>Airbridge</small></h3><p>타겟 이벤트 뒤의 가입·구매 등 후속 이벤트를 같은 위닝 터치포인트 성과로 연결하는 기간입니다.</p></article>
          </div>
          <div class="am-window-directions">
            <article class="am-direction-card is-before">
              <div class="am-direction-copy"><span>AIRBRIDGE · BEFORE</span><h3>룩백 윈도우는 타겟 이벤트의 ‘이전’을 봅니다</h3><p>앱 설치가 발생했을 때, 과거의 어떤 광고 접점까지 후보로 살펴볼지 정합니다.</p></div>
              <div class="am-dir-track" role="img" aria-label="앱 설치 이전의 광고 접점을 살펴보는 룩백 윈도우">
                <div class="am-dir-bracket"><span>룩백 윈도우</span></div>
                <div class="am-dir-event is-out"><i>AD</i><b>A 광고</b><small>범위 밖</small></div>
                <div class="am-dir-event"><i>AD</i><b>B 광고</b><small>클릭</small></div>
                <div class="am-dir-event is-win"><i>AD</i><b>C 광고</b><small>최근 클릭</small></div>
                <div class="am-dir-event is-target"><i>↓</i><b>앱 설치</b><small>타겟 이벤트</small></div>
              </div>
              <strong class="am-direction-question">질문: 누가 설치에 기여했나?</strong>
            </article>
            <article class="am-direction-card is-after">
              <div class="am-direction-copy"><span>AIRBRIDGE · AFTER</span><h3>어트리뷰션 윈도우는 타겟 이벤트의 ‘이후’를 봅니다</h3><p>설치 뒤 발생한 행동 중 어디까지 같은 위닝 터치포인트의 성과로 연결할지 정합니다.</p></div>
              <div class="am-dir-track" role="img" aria-label="앱 설치 이후의 후속 행동을 살펴보는 어트리뷰션 윈도우">
                <div class="am-dir-bracket"><span>어트리뷰션 윈도우</span></div>
                <div class="am-dir-event is-target"><i>↓</i><b>앱 설치</b><small>타겟 이벤트</small></div>
                <div class="am-dir-event"><i>✓</i><b>회원가입</b><small>후속 이벤트</small></div>
                <div class="am-dir-event"><i>□</i><b>상품 조회</b><small>후속 이벤트</small></div>
                <div class="am-dir-event is-out"><i>₩</i><b>구매</b><small>범위 밖</small></div>
              </div>
              <strong class="am-direction-question">질문: 설치 뒤 어떤 행동까지 함께 볼까?</strong>
            </article>
          </div>
          <div class="am-rule"><b>이해를 돕기 위한 판정 순서</b><ol><li>룩백 윈도우 밖의 터치포인트 제외</li><li>보통 클릭을 조회보다 우선</li><li>같은 우선순위라면 전환에 더 가까운 터치포인트 확인</li><li>MMP·매체별 예외와 설정 확인</li></ol></div>

          <div class="am-window-answer"><span>먼저 결론</span><div><h3>설치 전은 거의 같은 개념, 설치 후를 묶는 방식이 다릅니다</h3><p>두 제품 모두 “광고를 클릭하거나 본 뒤 얼마 안에 설치해야 이 광고의 성과로 볼까?”를 정합니다. 이 <b>설치 전 후보 기간의 역할은 거의 같습니다.</b></p></div></div>
          <div class="am-window-compare">
            <div class="am-window-title"><span>같은 질문으로 비교하기</span><h3>용어보다 ‘언제, 무엇을 묶는 기간인지’를 먼저 보세요</h3></div>
            <div class="am-window-row is-head"><b>질문</b><b>Airbridge</b><b>AppsFlyer</b></div>
            <div class="am-window-row"><strong>설치 전<br><small>어떤 광고까지 후보?</small></strong><p><b>룩백 윈도우</b><br>설치 전의 클릭·조회 가운데 어디까지 후보로 볼지 정합니다.</p><p><b>클릭/조회 룩백 윈도우</b><br>역할은 Airbridge와 거의 같습니다. 클릭과 조회 기간을 따로 설정할 수 있습니다.</p></div>
            <div class="am-window-row"><strong>설치 후<br><small>인앱 이벤트는?</small></strong><p><b>어트리뷰션 윈도우</b><br>설치 같은 타겟 이벤트 뒤 일정 기간의 구매·가입 등을 위닝 터치포인트에 연결합니다.</p><p><b>일반 UA에는 같은 설치 후 윈도우가 없습니다.</b><br>보통 설치 때 정해진 매체 정보가 이후 인앱 이벤트에 사용자 생애 동안 이어집니다.</p></div>
            <div class="am-window-row"><strong>리타겟팅·재설치<br><small>다시 들어온 사용자는?</small></strong><p>재활성화 조건과 별도의 룩백·어트리뷰션 윈도우를 적용할 수 있습니다.</p><p><b>리인게이지먼트 윈도우</b>와 <b>리어트리뷰션 윈도우</b>를 별도로 사용합니다.</p></div>
          </div>
          <div class="am-memory-rule">
            <article><span>Airbridge</span><div><b>광고</b><i>← 룩백 →</i><b>설치</b><i>→ 어트리뷰션 윈도우 →</i><b>구매·가입</b></div></article>
            <article><span>AppsFlyer · 일반 UA</span><div><b>광고</b><i>← 클릭/조회 룩백 →</i><b>설치</b><i>→ 설치 때 붙은 매체 이름표 유지 →</i><b>구매·가입</b></div></article>
          </div>
          <div class="am-raw-explain"><span>RAW DATA에서 계속 보이는 이유</span><div><h3>다시 어트리뷰션한 것이 아니라, 설치 때 붙은 이름표가 계속 따라갑니다</h3><p>첫 실행 때 생성된 <code>appsflyer_id</code>는 설치 당시의 <code>media_source</code>·campaign 정보와 연결됩니다. 같은 설치에서 일어난 인앱 이벤트도 이 연결을 사용하므로, 설치 후 시간이 많이 지나도 Raw Data에 원래 설치 매체가 표시될 수 있습니다. <b>무기한으로 새 광고를 다시 판정한다는 뜻은 아닙니다.</b> 단, 실제 데이터 조회·보관 가능 기간은 계약과 개인정보 정책, 리포트 종류에 따라 달라질 수 있습니다.</p></div></div>
          <div class="am-footnote"><sup>용어 메모</sup><p>AppsFlyer 문서에서 ‘어트리뷰션’이라는 말은 넓게 쓰이지만, 일반 UA 인앱 이벤트에 Airbridge의 설치 후 <b>어트리뷰션 윈도우와 같은 설정</b>이 있다는 뜻은 아닙니다. 설치 전 룩백, 일반 인앱 이벤트 연결, 리타겟팅·재설치 윈도우를 나누어 확인하세요.</p></div>
        </section>

        <section class="am-section" id="am-postback">
          <div class="am-section-head"><span class="am-step">05</span><div><p>데이터가 다시 돌아가는 길</p><h2>포스트백: 매체에 성과 신호 보내기</h2></div></div>
          <div class="am-postback-visual" role="img" aria-label="앱 이벤트가 MMP를 거쳐 광고 매체로 포스트백되는 흐름">
            <div class="am-pb-app"><span>📱</span><b>광고주 앱</b><small>install · signup · purchase</small></div>
            <div class="am-pb-arrow"><span>SDK 이벤트</span><b>→</b></div>
            <div class="am-pb-mmp"><span>🔗</span><b>MMP</b><small>기여 판정 + 전송 규칙</small></div>
            <div class="am-pb-arrow is-red"><span>포스트백</span><b>→</b></div>
            <div class="am-pb-media"><span>📣</span><b>광고 매체</b><small>학습 · 정산 · 오디언스</small></div>
          </div>
          <div class="am-use-grid">
            <article><span>💳</span><div><h3>정산</h3><p>CPI·CPA 캠페인에서 매체가 실제 설치·행동과 기여 여부를 확인합니다.</p></div></article>
            <article><span>🧠</span><div><h3>최적화</h3><p>어떤 사용자가 설치·구매했는지 학습해 전환 가능성이 높은 사람에게 광고를 노출합니다.</p></div></article>
            <article><span>🎯</span><div><h3>리타겟팅</h3><p>설치자·구매자 등 이벤트 기준 오디언스를 만들거나 제외하는 데 활용합니다.</p></div></article>
          </div>
          <div class="am-warning"><span>⚠️</span><p><b>많이 보내는 것이 정답은 아닙니다.</b> 정산 목적이면 해당 매체가 기여한 이벤트만, 리타겟팅 오디언스 목적이면 기여 매체와 관계없이 더 넓은 이벤트가 필요할 수 있습니다. 개인정보·동의·플랫폼 정책과 매체별 전송 옵션을 함께 확인하세요.</p></div>
        </section>

        <section class="am-section" id="am-san">
          <div class="am-section-head"><span class="am-step">06</span><div><p>자주 만나는 예외</p><h2>SAN 매체는 왜 숫자가 다를까?</h2></div></div>
          <p class="am-lead">SAN(Self-Attributing Network)은 자체 광고 데이터로 전환 기여를 계산하고 그 결과를 API로 MMP에 전달하는 매체입니다. 대표적으로 Google Ads, Meta, TikTok, Apple Ads 등이 있습니다.</p>
          <div class="am-san-grid">
            <article class="is-san"><div class="am-san-label">SAN</div><h3>자체 기여 주장</h3><div class="am-mini-flow"><span>사용자</span><i>→</i><span>매체 내부 데이터</span><i>→</i><span>API 응답</span></div><ul><li>일반 트래킹 링크를 쓰지 않는 연동이 많음</li><li>매체 고유 윈도우·조회 전환 규칙이 존재</li><li>매체 화면과 MMP 숫자가 다를 수 있음</li></ul></article>
            <article><div class="am-san-label">Non-SAN</div><h3>MMP 트래킹 링크 중심</h3><div class="am-mini-flow"><span>광고 클릭</span><i>→</i><span>MMP 링크</span><i>→</i><span>앱 실행</span></div><ul><li>클릭·노출 데이터를 MMP에 전달</li><li>MMP가 통합 규칙으로 기여 판정</li><li>상대적으로 터치포인트 확인이 쉬움</li></ul></article>
          </div>
          <div class="am-note"><b>숫자가 다를 때 확인할 5가지</b><span>① 조회 전환 포함 여부 ② 클릭·조회 룩백 윈도우 ③ 설치/이벤트 발생 시각 기준 ④ 타임존 ⑤ 중복 제거와 리타겟팅 분류</span></div>
        </section>

        <section class="am-section" id="am-retargeting">
          <div class="am-section-head"><span class="am-step">07</span><div><p>기존 사용자를 다시 움직이기</p><h2>리타겟팅·리인게이지먼트·리어트리뷰션</h2></div></div>
          <div class="am-path-grid">
            <article><div class="am-path-top"><span>앱이 설치되어 있음</span><b>리인게이지먼트</b></div><div class="am-path"><span>광고 클릭</span><i>→</i><span>딥링크</span><i>→</i><span>앱 재실행</span></div><p>휴면 사용자가 리타겟팅 광고를 통해 기존 앱을 다시 열고 행동합니다.</p></article>
            <article><div class="am-path-top"><span>앱을 삭제한 상태</span><b>리어트리뷰션</b></div><div class="am-path"><span>광고 클릭</span><i>→</i><span>스토어</span><i>→</i><span>재설치</span></div><p>과거 사용자가 앱을 다시 설치합니다. AppsFlyer에서는 리타겟팅 재설치라고도 설명합니다.</p></article>
          </div>
          <div class="am-reattribution-box">
            <div class="am-reattribution-head"><span>APPSFLYER · EASY VIEW</span><h3>리어트리뷰션 윈도우 쉽게 보기</h3><p><b>최초 설치부터 시작해</b>, 재설치를 언제 다시 ‘새 설치’로 평가할지 구분하는 기간입니다. 기본값은 90일이며 1~24개월 범위에서 설정할 수 있습니다.</p></div>
            <div class="am-reattribution-timeline" role="img" aria-label="최초 설치 후 리어트리뷰션 윈도우 안과 밖에서 재설치가 다르게 집계되는 흐름">
              <div class="am-reattribution-band"><span>리어트리뷰션 윈도우 · 기본 90일</span><small>설정 가능: 1~24개월</small></div>
              <div class="am-reattribution-point is-first"><i>1</i><b>최초 설치·첫 실행</b><small>윈도우 시작</small></div>
              <div class="am-reattribution-point"><i>2</i><b>일반 재설치</b><small>새 설치로 다시 집계하지 않음</small></div>
              <div class="am-reattribution-point is-retarget"><i>3</i><b>리타겟팅 후 재설치</b><small>리어트리뷰션</small></div>
              <div class="am-reattribution-point is-after"><i>4</i><b>윈도우 종료 후 재설치</b><small>새 설치로 다시 평가</small></div>
            </div>
            <div class="am-simple-decision">
              <div class="am-decision-start"><span>리타겟팅 광고 클릭</span><i>→</i><b>현재 기기에 앱이 있나요?</b></div>
              <div class="am-decision-paths">
                <article><strong>YES</strong><span>앱 열기</span><i>→</i><b>리인게이지먼트</b><small>재설치가 아니므로 리어트리뷰션 윈도우의 영향을 받지 않음</small></article>
                <article><strong>NO</strong><span>스토어에서 재설치</span><i>→</i><b>리어트리뷰션</b><small>리타겟팅 캠페인에 반응해 윈도우 안에서 재설치한 경우</small></article>
              </div>
            </div>
            <div class="am-reattribution-note"><b>핵심 구분</b><p><strong>리어트리뷰션 윈도우는 리인게이지먼트에 영향을 주지 않습니다.</strong> 앱이 이미 설치되어 있으면 리인게이지먼트, 앱을 삭제했다가 리타겟팅 광고를 거쳐 다시 설치하면 리어트리뷰션으로 이해하면 쉽습니다.</p></div>
          </div>
          <div class="am-vendor-table-wrap">
            <table class="am-vendor-table">
              <thead><tr><th>상황</th><th>AppsFlyer에서 자주 쓰는 표현</th><th>Airbridge에서 확인할 표현</th></tr></thead>
              <tbody>
                <tr><td>앱이 있는 사용자가 광고로 다시 실행</td><td>Re-engagement<br><small>리인게이지먼트</small></td><td>Deeplink Open<br><small>휴면 조건 충족 시 재활성화 이벤트</small></td></tr>
                <tr><td>삭제한 사용자가 재설치</td><td>Re-attribution<br><small>리어트리뷰션</small></td><td>App Install<br><small>휴면 조건 충족 시 재활성화 이벤트</small></td></tr>
                <tr><td>기여 후 이벤트를 묶는 기간</td><td>Re-engagement window</td><td>Attribution window / 기여 기간</td></tr>
              </tbody>
            </table>
          </div>
          <div class="am-footnote"><sup>각주</sup><p>위 표는 개념 이해를 돕기 위한 요약이며 1:1 용어 번역이 아닙니다. 특히 Airbridge의 <b>재활성화</b>는 설정한 비활성화 윈도우 동안 전환이 없던 휴면 사용자가 App Install·Deeplink Open·Direct Open을 발생시킨 경우를 별도 조건으로 판정합니다. 실제 캠페인에서는 사용 중인 제품의 최신 도움말과 대시보드 필드명을 우선하세요.</p></div>
        </section>

        <section class="am-section" id="am-kpi">
          <div class="am-section-head"><span class="am-step">08</span><div><p>숫자로 읽는 사용자 여정</p><h2>앱 마케터의 기본 퍼널과 KPI</h2></div></div>
          <div class="am-funnel" role="img" aria-label="노출부터 구매까지 앱 마케팅 퍼널">
            <div style="--w:100%"><b>노출 100,000</b><span>광고가 보임</span></div>
            <div style="--w:84%"><b>클릭 2,000</b><span>CTR 2%</span></div>
            <div style="--w:68%"><b>설치 800</b><span>Click→Install 40%</span></div>
            <div style="--w:52%"><b>가입 400</b><span>Install→Signup 50%</span></div>
            <div style="--w:36%"><b>구매 80</b><span>구매 CVR 10%</span></div>
          </div>
          <div class="am-kpi-grid">
            <article><b>CPI</b><span>광고비 ÷ 설치 수</span><small>설치 한 건을 데려오는 비용</small></article>
            <article><b>CAC</b><span>광고비 ÷ 신규 고객 수</span><small>실제 고객 확보 비용</small></article>
            <article><b>ROAS</b><span>광고 매출 ÷ 광고비 × 100</span><small>광고비 대비 매출</small></article>
            <article><b>Retention</b><span>D+n 재방문자 ÷ 설치자</span><small>D1·D7·D30 잔존율</small></article>
            <article><b>LTV</b><span>사용자 생애 동안의 가치</span><small>CAC와 함께 봐야 할 장기 지표</small></article>
            <article><b>Event CVR</b><span>이벤트 사용자 ÷ 기준 사용자</span><small>설치→가입, 가입→구매 등</small></article>
          </div>
          <div class="am-case"><div><span>실무 질문</span><h3>CPI가 싼 캠페인이 항상 좋은가요?</h3></div><p>아닙니다. 설치는 많아도 가입·구매·리텐션이 낮으면 가치가 작은 유저일 수 있습니다. <b>CPI → 가입 CPA → 구매 CAC → ROAS/LTV</b> 순서로 퍼널 아래까지 확인하세요.</p></div>
        </section>

        <section class="am-section">
          <div class="am-section-head"><span class="am-step">✓</span><div><p>첫 캠페인 전</p><h2>인턴 실무 체크리스트</h2></div></div>
          <div class="am-checklist">
            <label><input type="checkbox" data-am-check="event"><span><b>핵심 이벤트 정의</b> install만이 아니라 signup·purchase 등 목표 이벤트를 적었다.</span></label>
            <label><input type="checkbox" data-am-check="sdk"><span><b>SDK·이벤트 테스트</b> 개발팀과 테스트 디바이스로 이벤트가 실제 수집되는지 확인했다.</span></label>
            <label><input type="checkbox" data-am-check="link"><span><b>OneLink·딥링크 테스트</b> Android·iOS와 앱 설치·미설치 조합에서 최종 목적지가 의도대로 열린다.</span></label>
            <label><input type="checkbox" data-am-check="window"><span><b>기여 기간 확인</b> 클릭·조회 룩백 윈도우와 리타겟팅 조건을 기록했다.</span></label>
            <label><input type="checkbox" data-am-check="postback"><span><b>포스트백 범위 확인</b> 어떤 이벤트를 어떤 매체에 전송하는지 검토했다.</span></label>
            <label><input type="checkbox" data-am-check="qa"><span><b>수치 차이 대비</b> 타임존·윈도우·SAN·조회 전환 등 비교 기준을 맞췄다.</span></label>
          </div>
          <p class="am-save-note" id="amCheckStatus">체크 상태는 이 브라우저에 자동 저장됩니다.</p>
        </section>

        <section class="am-section" id="am-quiz">
          <div class="am-section-head"><span class="am-step">09</span><div><p>7문제로 마무리</p><h2>개념 확인 미니 퀴즈</h2></div></div>
          <div class="am-quiz-list">${buildQuiz()}</div>
          <div class="am-quiz-actions"><button type="button" class="am-primary-btn" id="amQuizSubmit">정답 확인하기</button><button type="button" class="am-secondary-btn" id="amQuizReset">다시 풀기</button><strong id="amQuizScore" aria-live="polite"></strong></div>
        </section>

        <section class="am-section am-sources">
          <div class="am-section-head"><span class="am-step">↗</span><div><p>더 깊게 공부하기</p><h2>공식 가이드와 참고 자료</h2></div></div>
          <p class="am-lead">본문은 개념 이해를 돕기 위해 아래 자료를 학습 순서에 맞춰 재구성했습니다. 실제 설정값과 정책은 바뀔 수 있으므로 캠페인 적용 전 최신 가이드를 다시 확인하세요.</p>
          <div class="am-source-grid">
            <article><span>PDF</span><h3>어트리뷰션의 이해</h3><p>설치 로데이터 예시, MMP 원리, 딥링킹·코호트 분석 참고.</p>${sourceLink('https://drive.google.com/file/d/1fQdcQs7OUw3_cU3hbfqA1chM_v7bCiOL/view?usp=drive_link', 'Google Drive 자료')}</article>
            <article><span>Airbridge</span><h3>GA4와 MMP의 차이</h3><p>앱 캠페인에서 MMP가 담당하는 측정·최적화 역할.</p>${sourceLink('https://www.airbridge.io/ko/blog/google-analytics-vs-airbridge', '가이드 보기')}</article>
            <article><span>Airbridge</span><h3>MMP 포스트백</h3><p>정산·최적화·리타겟팅 목적과 전송 범위.</p>${sourceLink('https://www.airbridge.io/ko/blog/mmp-postback', '가이드 보기')}</article>
            <article><span>Adjust</span><h3>SAN 이해하기</h3><p>SAN과 일반 네트워크의 데이터 전달·기여 방식 차이.</p>${sourceLink('https://www.adjust.com/glossary/self-attributing-network/', '가이드 보기')}</article>
            <article><span>Airbridge</span><h3>어트리뷰션 모델</h3><p>LTA, 유저 여정, 룩백·어트리뷰션 윈도우 개념.</p>${sourceLink('https://help.airbridge.io/ko/guides/airbridge-attribution-model', '가이드 보기')}</article>
            <article><span>Airbridge</span><h3>어트리뷰션 시나리오</h3><p>클릭·조회와 타겟·후속 이벤트의 판정 예시.</p>${sourceLink('https://help.airbridge.io/ko/guides/attribution-scenario', '가이드 보기')}</article>
            <article><span>Airbridge</span><h3>재활성화 트래킹</h3><p>휴면 사용자, 비활성화 윈도우와 재활성화 이벤트 기준.</p>${sourceLink('https://help.airbridge.io/ko/guides/reactivation-tracking', '가이드 보기')}</article>
            <article><span>AppsFlyer</span><h3>어트리뷰션 모델</h3><p>오가닉·논오가닉, 클릭·조회 룩백, 측정 방식.</p>${sourceLink('https://support.appsflyer.com/hc/ko/articles/207447053', '가이드 보기')}</article>
            <article><span>AppsFlyer</span><h3>인앱 이벤트와 LTV</h3><p>설치 매체와 이후 인앱 이벤트가 AppsFlyer ID로 연결되는 방식.</p>${sourceLink('https://support.appsflyer.com/hc/ko/articles/115005544169', '가이드 보기')}</article>
            <article><span>AppsFlyer</span><h3>리타겟팅 어트리뷰션</h3><p>리인게이지먼트와 리어트리뷰션 구분.</p>${sourceLink('https://support.appsflyer.com/hc/ko/articles/207033786', '가이드 보기')}</article>
            <article><span>AppsFlyer</span><h3>리어트리뷰션 윈도우</h3><p>최초 설치 이후 재설치가 새 설치 또는 리어트리뷰션으로 판정되는 기간.</p>${sourceLink('https://support.appsflyer.com/hc/en-us/articles/115002587066-Set-up-re-attribution-window', '가이드 보기')}</article>
            <article><span>AppsFlyer</span><h3>OneLink 가이드</h3><p>템플릿·커스텀 링크, 설치 여부별 리디렉션과 딥링킹 설정.</p>${sourceLink('https://support.appsflyer.com/hc/ko/articles/115005248543-%EC%9B%90%EB%A7%81%ED%81%AC-%EA%B0%80%EC%9D%B4%EB%93%9C', '가이드 보기')}</article>
            <article><span>AppsFlyer</span><h3>OneLink 링크 구조</h3><p><code>pid</code>·<code>c</code>·<code>af_dp</code> 등 링크 파라미터의 역할.</p>${sourceLink('https://support.appsflyer.com/hc/en-us/articles/207447163-About-link-structure-and-parameters', '파라미터 보기')}</article>
            <article><span>AppsFlyer</span><h3>OneLink 문제 해결</h3><p>UDL·<code>deep_link_value</code>와 URI 스킴 폴백의 권장 사용 방식.</p>${sourceLink('https://support.appsflyer.com/hc/ko/articles/360014821438-%EC%9B%90%EB%A7%81%ED%81%AC-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0-%EB%B0%8F-FAQ', 'FAQ 보기')}</article>
            <article><span>참고</span><h3>OneLink 딥링킹 예시</h3><p>OneLink 화면 구성과 앱 개발 측 딥링킹 흐름을 함께 살펴보는 참고 글.</p>${sourceLink('https://velog.io/@gudrmsglgl/AppsFlyer-OneLink%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-DeepLinking', '참고 글 보기')}</article>
            <article><span>참고</span><h3>딥링크·앱링크·OneLink 비교</h3><p>세 링크 개념을 사용자 이동 관점에서 비교한 입문용 참고 글.</p>${sourceLink('https://carpe08.tistory.com/706', '참고 글 보기')}</article>
            <article><span>AppsFlyer</span><h3>용어집</h3><p>SDK, 디바이스 ID, 인앱 이벤트, 리타겟팅 용어 확인.</p>${sourceLink('https://support.appsflyer.com/hc/ko/articles/360000732237', '용어집 보기')}</article>
          </div>
          <p class="am-updated">자료 확인일: 2026년 8월 6일 · 제품별 설정과 용어는 최신 공식 문서를 우선합니다.</p>
        </section>
      </div>`;
  }

  function bindQuiz(root) {
    var submit = root.querySelector('#amQuizSubmit');
    var reset = root.querySelector('#amQuizReset');
    if (submit) submit.addEventListener('click', function () {
      var score = 0;
      QUIZ.forEach(function (item, index) {
        var card = root.querySelector('[data-am-question="' + index + '"]');
        var selected = card.querySelector('input:checked');
        var feedback = card.querySelector('.am-quiz-feedback');
        card.classList.remove('is-correct', 'is-wrong');
        if (!selected) {
          feedback.innerHTML = '<b>답을 선택해주세요.</b>';
          return;
        }
        var isCorrect = Number(selected.value) === item.answer;
        if (isCorrect) score += 1;
        card.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
        feedback.innerHTML = '<b>' + (isCorrect ? '정답입니다! ' : '다시 확인해보세요. ') + '</b>' + esc(item.why);
      });
      var scoreEl = root.querySelector('#amQuizScore');
      if (scoreEl) scoreEl.textContent = score + ' / ' + QUIZ.length + ' 정답';
      submit.textContent = score === QUIZ.length ? '완벽해요! 🎉' : '정답 다시 확인하기';
    });
    if (reset) reset.addEventListener('click', function () {
      root.querySelectorAll('.am-quiz-card').forEach(function (card) {
        card.classList.remove('is-correct', 'is-wrong');
        card.querySelectorAll('input').forEach(function (input) { input.checked = false; });
        card.querySelector('.am-quiz-feedback').textContent = '';
      });
      root.querySelector('#amQuizScore').textContent = '';
      root.querySelector('#amQuizSubmit').textContent = '정답 확인하기';
    });
  }

  function bindChecklist(root) {
    var storageKey = 'playd_app_marketing_checklist_v1';
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch (_) { saved = {}; }
    var boxes = Array.from(root.querySelectorAll('[data-am-check]'));
    function paint() {
      var done = boxes.filter(function (box) { return box.checked; }).length;
      var status = root.querySelector('#amCheckStatus');
      if (status) status.textContent = done === boxes.length ? '체크 완료! 첫 캠페인을 시작할 준비가 됐습니다. 🎉' : done + ' / ' + boxes.length + ' 완료 · 체크 상태는 이 브라우저에 자동 저장됩니다.';
    }
    boxes.forEach(function (box) {
      box.checked = Boolean(saved[box.dataset.amCheck]);
      box.addEventListener('change', function () {
        saved[box.dataset.amCheck] = box.checked;
        try { localStorage.setItem(storageKey, JSON.stringify(saved)); } catch (_) {}
        paint();
      });
    });
    paint();
  }

  function bindJumpNavigation(root) {
    root.querySelectorAll('[data-am-target]').forEach(function (button) {
      button.addEventListener('click', function () {
        var target = root.querySelector('#' + button.dataset.amTarget);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function renderAppMarketing() {
    var root = document.getElementById('page-app-marketing');
    if (!root) return;
    root.innerHTML = buildHTML();
    bindJumpNavigation(root);
    bindQuiz(root);
    bindChecklist(root);
  }

  window.renderAppMarketing = renderAppMarketing;
})();
