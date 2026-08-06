// ============================================================
// app-marketing-setup.js — App 마케팅 실무 세팅 가이드
// KT알파 쇼핑 · 카카오모먼트 · 당근 링크 세팅 예시
// ============================================================
(function () {
  'use strict';

  function buildHTML() {
    return `
      <div class="ams-page">
        <section class="ams-hero" aria-labelledby="ams-title">
          <div class="ams-hero-copy">
            <div class="ams-kicker">PRACTICAL SETUP GUIDE · KT알파 쇼핑</div>
            <h1 id="ams-title">App 마케팅<br><span>실무 세팅 가이드</span></h1>
            <p>업무시트의 이름과 URL을 어떤 순서로 만들고, 왜 카카오와 당근의 최종 링크가 달라지는지 실제 작업 흐름으로 익힙니다.</p>
            <div class="ams-hero-actions"><button type="button" data-ams-target="ams-process">6단계부터 보기</button><button type="button" class="is-quiet" data-go-page="app-marketing">개념편으로 돌아가기</button></div>
          </div>
          <div class="ams-sheet-stack" aria-label="캠페인 빌더, 원링크 생성, 매체 세팅 시트를 겹쳐 놓은 그림">
            <div class="ams-sheet is-back"><span>③ 당근 세팅 링크</span><div></div><div></div><div></div></div>
            <div class="ams-sheet is-mid"><span>② 광고주 UTM</span><div></div><div></div><div></div></div>
            <div class="ams-sheet is-front"><span>① OneLink + 파라미터</span><div></div><div></div><div></div></div>
          </div>
        </section>

        <div class="ams-scope-note"><b>이 가이드의 기준</b><p>제공된 KT알파 쇼핑 업무시트 구조를 교육용 예시로 재구성했습니다. 실제 URL·캠페인명·ID는 예시값으로 바꿨으며, 매체 공통 필수 규칙이 아닌 <strong>현재 광고주와 운영팀이 합의한 업무 프로세스</strong>는 별도로 표시합니다.</p></div>

        <nav class="ams-jump" aria-label="App 마케팅 실무 세팅 가이드 목차">
          <button type="button" data-ams-target="ams-process">1. 전체 과정</button><button type="button" data-ams-target="ams-builder">2. 캠페인 빌더</button><button type="button" data-ams-target="ams-deeplink">3. 딥링크</button><button type="button" data-ams-target="ams-onelink">4. OneLink</button><button type="button" data-ams-target="ams-kakao">5. 카카오</button><button type="button" data-ams-target="ams-daangn">6. 당근</button><button type="button" data-ams-target="ams-launch">7. 매체 세팅·QA</button>
        </nav>

        <section class="ams-section" id="ams-process">
          <div class="ams-section-head"><span>01</span><div><p>BIG PICTURE</p><h2>처음부터 매체 등록까지 6단계</h2></div></div>
          <p class="ams-lead">이 과정의 핵심은 <b>같은 캠페인 계층을 업무시트 → AppsFlyer → 광고주 시트 → 매체 대시보드까지 끊김 없이 전달</b>하는 것입니다.</p>
          <div class="ams-process-flow">
            <article><em>1</em><div><span>KT알파쇼핑 APP 업무시트</span><h3>캠페인 빌더 작성</h3><p>캠페인·광고그룹·소재명을 먼저 확정해 모든 도구가 같은 이름을 쓰게 합니다.</p></div></article>
            <i>↓</i>
            <article><em>2</em><div><span>목적지 준비</span><h3>원본 URL 인코딩·딥링크 작성</h3><p>최종 상품·기획전 URL을 앱이 해석할 수 있는 <code>kshop://goWeb?url=...</code> 형태로 만듭니다.</p></div></article>
            <i>↓</i>
            <article><em>3</em><div><span>AppsFlyer</span><h3>OneLink 생성</h3><p>설치 여부별 라우팅과 딥링크 정보를 가진 기본 OneLink를 생성합니다.</p></div></article>
            <i>↓</i>
            <article><em>4</em><div><span>시트 ① 또는 ③</span><h3>매체별 파라미터 결합</h3><p>캠페인·광고그룹·소재 이름과 ID 값을 붙여 AppsFlyer에서 같은 계층으로 분석할 수 있게 합니다.</p></div></article>
            <i>↓</i>
            <article class="is-kakao"><em>5</em><div><span>카카오만 · 시트 ②</span><h3>광고주 UTM 결합</h3><p>광고주 웹 분석·리포팅 규칙에 맞춰 UTM을 추가하고 최종 URL을 확정합니다.</p></div></article>
            <i>↓</i>
            <article class="is-final"><em>6</em><div><span>카카오모먼트·당근</span><h3>매체 대시보드 세팅</h3><p>업무시트의 이름·소재·최종 URL을 그대로 옮긴 뒤 설치·미설치 환경을 QA합니다.</p></div></article>
          </div>
          <div class="ams-why"><b>왜 이렇게 여러 번 나눌까요?</b><p><strong>딥링크</strong>는 어디로 보낼지, <strong>OneLink와 <code>pid/c/af_*</code></strong>는 AppsFlyer에서 누구의 성과로 볼지, <strong>UTM</strong>은 광고주의 웹 분석 도구에서 유입을 어떻게 분류할지 담당합니다. 서로 목적이 달라 한 링크 안에서 층층이 조립됩니다.</p></div>
        </section>

        <section class="ams-section" id="ams-builder">
          <div class="ams-section-head"><span>02</span><div><p>NAMING FIRST</p><h2>캠페인 빌더를 가장 먼저 작성하기</h2></div></div>
          <p class="ams-lead">URL부터 만들면 나중에 이름을 여러 번 고치게 됩니다. 먼저 매체 대시보드와 AppsFlyer Raw Data에서 공통으로 사용할 세 단계 이름을 확정합니다.</p>
          <div class="ams-builder-grid">
            <article><span>CAMPAIGN</span><h3>캠페인명</h3><code id="amsCodeCampaign">260801_aos_ua_kakao_cpi_install</code><p>날짜·OS·UA/리타겟팅·매체·목적을 구분합니다.</p></article>
            <article><span>AD SET / GROUP</span><h3>광고그룹명</h3><code id="amsCodeAdset">benefit_banner_join</code><p>타깃·지면·상품군·메시지 등 운영 단위를 구분합니다.</p></article>
            <article><span>AD / CREATIVE</span><h3>소재명</h3><code id="amsCodeAd">image_item_join_01</code><p>형태·상품·메시지·버전으로 실제 소재를 식별합니다.</p></article>
          </div>
          <div class="ams-name-map">
            <div class="ams-name-map-head"><b>업무시트</b><b>AppsFlyer 파라미터</b><b>리포트 필드</b></div>
            <div><strong>캠페인명</strong><code>c</code><span>campaign</span></div>
            <div><strong>광고그룹명</strong><code>af_adset</code><span>adset</span></div>
            <div><strong>소재명</strong><code>af_ad</code><span>ad</span></div>
            <div><strong>캠페인·그룹·소재 ID</strong><code>af_c_id · af_adset_id · af_ad_id</code><span>ID 기준 조인·검수</span></div>
          </div>
          <div class="ams-tip"><span>TIP</span><p>이름은 사람이 읽기 위한 값, ID는 시스템에서 대상을 정확히 구분하기 위한 값입니다. 이름이 같아도 ID가 다를 수 있으므로 업무시트에 둘 다 남기는 편이 안전합니다.</p></div>
        </section>

        <section class="ams-section" id="ams-deeplink">
          <div class="ams-section-head"><span>03</span><div><p>DESTINATION</p><h2>원본 URL을 앱 딥링크로 바꾸기</h2></div></div>
          <div class="ams-encoding-why">
            <article><span>그대로 넣으면</span><code>kshop://goWeb?url=https://.../detail?spdpId=123&amp;utm_source=kakao</code><p>바깥 딥링크와 안쪽 쇼핑몰 URL의 <code>?</code>·<code>&amp;</code>·<code>=</code>이 섞여, 앱이 값의 시작과 끝을 잘못 읽을 수 있습니다.</p></article>
            <i>→</i>
            <article class="is-safe"><span>인코딩해서 넣으면</span><code>kshop://goWeb?url=https%3A%2F%2F...%3FspdpId%3D123</code><p>쇼핑몰 URL 전체가 <b>하나의 안전한 값</b>으로 전달되어 상품·기획전 주소가 중간에 잘리지 않습니다.</p></article>
          </div>
          <div class="ams-encoding-note"><b>한 문장으로 기억하기</b><p>딥링크는 ‘주소 안에 또 다른 주소’를 넣는 구조입니다. 그래서 <strong>안쪽에 넣을 원본 URL을 포장하는 과정</strong>이 URL 인코딩입니다.</p></div>
          <div class="ams-url-steps">
            <article><em>A</em><h3>원본 URL</h3><div class="ams-code-row"><code id="amsCodeOriginal">https://www.kshop.co.kr/display/specialplan/detail?spdpId=2000000000</code><button type="button" data-copy-target="amsCodeOriginal">복사</button></div><p>먼저 웹에서 목적 페이지가 정상적으로 열리는지 확인합니다.</p></article>
            <i>↓ URL 값만 인코딩</i>
            <article><em>B</em><h3>URL 인코딩</h3><div class="ams-code-row"><code id="amsCodeEncoded">https%3A%2F%2Fwww.kshop.co.kr%2Fdisplay%2Fspecialplan%2Fdetail%3FspdpId%3D2000000000</code><button type="button" data-copy-target="amsCodeEncoded">복사</button></div><p>안쪽 URL의 <code>?</code>·<code>&amp;</code>·<code>=</code>이 바깥 딥링크 구조를 깨지 않게 만듭니다.</p></article>
            <i>↓ 앱 스킴과 결합</i>
            <article class="is-final"><em>C</em><h3>딥링크</h3><div class="ams-code-row"><code id="amsCodeDeep">kshop://goWeb?url=https%3A%2F%2Fwww.kshop.co.kr%2Fdisplay%2Fspecialplan%2Fdetail%3FspdpId%3D2000000000</code><button type="button" data-copy-target="amsCodeDeep">복사</button></div><p>K쇼핑 앱의 <code>goWeb</code> 라우트가 인코딩된 쇼핑몰 URL을 받아 해당 화면을 엽니다.</p></article>
          </div>
          <div class="ams-danger"><b>가장 자주 생기는 오류</b><ul><li>이미 인코딩된 URL을 다시 인코딩해 <code>%</code>가 <code>%25</code>로 바뀜</li><li>원본 URL 전체가 아니라 일부만 복사되어 상품·기획전 ID가 누락됨</li><li>OneLink 안의 딥링크 설정과 시트에서 붙인 딥링크가 서로 다른 목적지를 가리킴</li></ul></div>
        </section>

        <section class="ams-section" id="ams-onelink">
          <div class="ams-section-head"><span>04</span><div><p>APPSFLYER</p><h2>대시보드에서 OneLink 생성하기</h2></div></div>
          <div class="ams-dashboard-card">
            <div class="ams-dashboard-top"><span>AppsFlyer</span><b>Engage › OneLink Management › New link</b></div>
            <div class="ams-dashboard-grid">
              <article><em>1</em><h3>템플릿 선택</h3><p>KT알파 쇼핑 앱의 iOS·Android 라우팅이 설정된 승인 템플릿을 선택합니다.</p></article>
              <article><em>2</em><h3>미디어 소스·캠페인</h3><p><code>pid</code>와 캠페인명을 입력합니다. 페이드 미디어는 활성화된 파트너 PID를 업무시트 기준으로 확인합니다.</p></article>
              <article><em>3</em><h3>리타겟팅 여부</h3><p>UA인지 리타겟팅인지 목적을 확인하고, 필요한 경우 <code>is_retargeting=true</code>와 관련 윈도우를 설정합니다.</p></article>
              <article><em>4</em><h3>딥링크·리디렉션</h3><p>앱 설치자는 목적 화면, 미설치자는 스토어와 설치 후 목적 화면으로 이어지는지 설정합니다.</p></article>
              <article><em>5</em><h3>짧은 OneLink 생성</h3><p>생성된 HTTPS 링크를 복사해 시트 ①의 <b>원링크</b> 열에 입력합니다.</p></article>
            </div>
          </div>
          <div class="ams-layer-box">
            <div><span>BASE LINK</span><code>https://brand.onelink.me/ABCD/offer</code></div>
            <i>+</i>
            <div><span>ATTRIBUTION</span><code>?pid=kakao_int&amp;c=...&amp;af_adset=...&amp;af_ad=...</code></div>
            <i>+</i>
            <div><span>IDENTIFIERS</span><code>&amp;af_c_id=...&amp;af_adset_id=...&amp;af_ad_id=...</code></div>
            <i>=</i>
            <div class="is-result"><span>TRACKABLE FINAL LINK</span><b>매체·캠페인·그룹·소재 단위 분석 가능</b></div>
          </div>
          <div class="ams-caution"><span>중복 파라미터 주의</span><p>짧은 OneLink 뒤에 값을 덧붙일 수 있지만, 링크 내부에 이미 같은 파라미터가 저장되어 있으면 새 값이 기대대로 덮어써지지 않을 수 있습니다. 시트에서 추가할 값과 AppsFlyer UI에서 고정할 값을 팀 기준으로 나누세요.</p></div>
        </section>

        <section class="ams-section" id="ams-kakao">
          <div class="ams-section-head"><span>05</span><div><p>KAKAO MOMENT</p><h2>카카오 최종 URL: 같은 링크에 이름표 두 번 붙이기</h2></div></div>
          <p class="ams-lead">카카오에서는 링크를 두 번 새로 만드는 것이 아닙니다. <b>AppsFlyer에서 성과를 찾는 이름표</b>를 먼저 붙이고, 같은 링크에 <b>광고주 리포트용 이름표</b>를 한 번 더 붙입니다.</p>
          <div class="ams-sheet-summary">
            <article><span>1단계 · 시트 ①</span><h3>앱 성과용 이름표 붙이기</h3><p>OneLink에 캠페인·광고그룹·소재 값을 붙여 AppsFlyer에서 성과를 찾을 수 있게 합니다.</p></article>
            <i>→</i>
            <article><span>2단계 · 시트 ②</span><h3>광고주용 이름표 붙이기</h3><p>1단계에서 만든 URL을 붙여 넣고 UTM을 더합니다. 시트가 출력한 값이 카카오에 넣을 최종 URL입니다.</p></article>
          </div>

          <div class="ams-table-card">
            <div class="ams-table-title"><span>시트 ① 재구성</span><h3>카카오모먼트 OneLink + 파라미터</h3></div>
            <div class="ams-table-scroll"><table><thead><tr><th>원링크</th><th>미디어</th><th>캠페인</th><th>광고그룹</th><th>광고</th><th>캠페인 ID</th><th>광고그룹 ID</th><th>광고 ID</th><th>최종 URL</th></tr></thead><tbody><tr><td><code>.../ABCD/offer</code></td><td><code>kakao_int</code></td><td>260801_..._install</td><td>benefit_banner</td><td>image_join_01</td><td><code>{campaign_id}</code></td><td><code>{adgroup_id}</code></td><td><code>{creative_id}</code></td><td class="is-output">OneLink + <code>pid/c/af_*</code></td></tr></tbody></table></div>
          </div>

          <div class="ams-code-breakdown">
            <div class="ams-code-row"><code id="amsCodeKakaoAf">https://brand.onelink.me/ABCD/offer?pid=kakao_int&amp;c=260801_aos_ua_kakao_cpi_install&amp;af_adset=benefit_banner_join&amp;af_ad=image_item_join_01&amp;af_c_id={campaign_id}&amp;af_adset_id={adgroup_id}&amp;af_ad_id={creative_id}</code><button type="button" data-copy-target="amsCodeKakaoAf">예시 복사</button></div>
            <div class="ams-param-legend"><span><code>pid</code> 미디어 소스</span><span><code>c</code> 캠페인명</span><span><code>af_adset</code> 광고그룹명</span><span><code>af_ad</code> 소재명</span><span><code>*_id</code> 매체 ID</span></div>
          </div>

          <div class="ams-table-card is-utm">
            <div class="ams-table-title"><span>시트 ② 재구성</span><h3>카카오 광고주 UTM 붙이기</h3></div>
            <div class="ams-table-scroll"><table><thead><tr><th>이벤트</th><th>캠페인</th><th>그룹</th><th>소재명</th><th>OneLink URL</th><th>UTM</th><th>URL + UTM</th></tr></thead><tbody><tr><td>회원가입</td><td>260801_..._install</td><td>benefit_banner</td><td>image_join_01</td><td><code>...&amp;af_ad=...</code></td><td><code>utm_source=kakao_moment&amp;utm_medium=paid_social&amp;...</code></td><td class="is-output">카카오 입력용 최종 URL</td></tr></tbody></table></div>
          </div>

          <div class="ams-dual-measure">
            <article><span>AppsFlyer 이름표</span><h3><code>pid · c · af_adset · af_ad</code></h3><p>설치·구매가 어느 캠페인, 광고그룹, 소재에서 왔는지 AppsFlyer에서 찾을 때 사용합니다.</p></article>
            <article><span>광고주 리포트 이름표</span><h3><code>utm_source · utm_medium · utm_campaign · utm_content</code></h3><p>웹페이지나 앱 안의 웹 화면이 열렸을 때, 광고주 분석 도구에서 같은 유입을 찾을 때 사용합니다.</p></article>
          </div>
          <div class="ams-caution"><span>마지막 확인</span><p>UTM을 붙였다고 자동으로 수집되는 것은 아닙니다. 테스트 링크를 눌러 <b>최종 웹페이지 주소에 UTM이 남아 있는지</b>, 그리고 광고주 분석 도구에 방문이 들어오는지 확인하세요.</p></div>
          <div class="ams-inference"><b>왜 카카오만 한 단계를 더 거치나요?</b><p>현재 KT알파 쇼핑 업무시트에서는 카카오 유입을 광고주 리포트에서도 찾을 수 있도록 별도 UTM 규칙을 사용하기 때문입니다. <strong>카카오모먼트 자체가 모든 앱 광고에 UTM을 의무로 요구하는 것은 아닙니다.</strong></p></div>
        </section>

        <section class="ams-section" id="ams-daangn">
          <div class="ams-section-head"><span>06</span><div><p>DAANGN</p><h2>당근 최종 URL: 한 시트에서 조립하기</h2></div></div>
          <p class="ams-lead">당근 시트는 캠페인·광고그룹·소재 이름과 각 ID, AppsFlyer 파라미터를 한 행에서 연결해 최종 URL을 바로 출력하는 구조입니다.</p>
          <div class="ams-table-card is-daangn">
            <div class="ams-table-title"><span>시트 ③ 재구성</span><h3>당근 세팅 링크</h3></div>
            <div class="ams-table-scroll"><table><thead><tr><th>원링크</th><th>미디어</th><th>캠페인</th><th>캠페인 ID</th><th>광고그룹</th><th>광고그룹 ID</th><th>광고</th><th>광고 ID</th><th>리타겟팅</th><th>최종 URL</th></tr></thead><tbody><tr><td><code>.../ABCD/offer</code></td><td><code>{daangn_pid}</code></td><td>260801_..._install</td><td><code>{campaign_id}</code></td><td>benefit_local</td><td><code>{adgroup_id}</code></td><td>image_join_01</td><td><code>{ad_id}</code></td><td><code>false</code></td><td class="is-output">당근 입력용 최종 URL</td></tr></tbody></table></div>
          </div>
          <div class="ams-daangn-flow">
            <article><em>1</em><h3>OneLink 입력</h3><p>AppsFlyer에서 만든 기본 링크를 시트의 원링크 열에 붙입니다.</p></article><i>→</i>
            <article><em>2</em><h3>당근 계층값 입력</h3><p>캠페인·광고그룹·소재 이름과 매체에서 확인한 ID를 대응시킵니다.</p></article><i>→</i>
            <article><em>3</em><h3>목적 구분</h3><p>UA/리타겟팅 여부와 필요한 AppsFlyer 옵션이 맞는지 확인합니다.</p></article><i>→</i>
            <article><em>4</em><h3>최종 URL 사용</h3><p>시트가 출력한 링크를 당근 광고의 랜딩 URL에 입력합니다.</p></article>
          </div>
          <div class="ams-inference"><b>당근에는 왜 별도 UTM 시트가 없나요?</b><p>제공된 프로세스에서는 당근 시트가 AppsFlyer 분석에 필요한 매체 계층값을 한 번에 조립하고, 광고주가 당근용 별도 UTM 단계를 요구하지 않는 것으로 보입니다. <strong>당근은 UTM을 쓰면 안 된다는 의미가 아니며</strong>, 광고주 리포팅 정책이 바뀌면 카카오와 같은 UTM 단계가 추가될 수 있습니다.</p></div>
        </section>

        <section class="ams-section" id="ams-launch">
          <div class="ams-section-head"><span>07</span><div><p>LAUNCH & QA</p><h2>매체 대시보드 세팅과 최종 검수</h2></div></div>
          <div class="ams-launch-grid">
            <article><span>카카오모먼트</span><ol><li>업무시트의 캠페인·그룹·소재명으로 생성</li><li>목적·최적화 이벤트·예산·기간 설정</li><li>시트 ②의 <b>URL + UTM</b> 최종값 입력</li><li>매체 ID가 필요한 시트라면 생성 후 ID 역기입</li></ol></article>
            <article><span>당근</span><ol><li>업무시트의 캠페인·그룹·소재명으로 생성</li><li>목적·타깃·지역·예산·기간 설정</li><li>시트 ③의 <b>최종 URL</b> 입력</li><li>매체 ID·리타겟팅 값이 URL과 일치하는지 확인</li></ol></article>
          </div>
          <div class="ams-macro-note"><b>ID 값은 언제 넣나요?</b><p>업무시트가 매체의 동적 매크로를 사용하는 경우에는 승인된 매크로 문법을 그대로 유지합니다. 실제 숫자 ID를 쓰는 구조라면 매체에서 캠페인·그룹·소재를 생성한 뒤 ID를 시트에 역기입하고 최종 URL을 다시 만들어야 합니다. 두 방식을 한 링크에서 섞지 마세요.</p></div>

          <div class="ams-qa-board">
            <div class="ams-qa-title"><span>PRE-LAUNCH CHECK</span><h3>세팅 완료 전 12개 항목</h3><p id="amsQaStatus">체크 상태는 이 브라우저에 자동 저장됩니다.</p></div>
            <div class="ams-qa-list">
              <label><input type="checkbox" data-ams-check="name"><span><b>네이밍 일치</b> 업무시트·AppsFlyer·매체의 캠페인/그룹/소재명이 같다.</span></label>
              <label><input type="checkbox" data-ams-check="original"><span><b>원본 URL</b> 상품·기획전 페이지가 웹에서 정상적으로 열린다.</span></label>
              <label><input type="checkbox" data-ams-check="encode"><span><b>인코딩</b> 이중 인코딩과 잘린 파라미터가 없다.</span></label>
              <label><input type="checkbox" data-ams-check="deep"><span><b>딥링크</b> <code>kshop://goWeb</code>와 목적 URL이 정확하다.</span></label>
              <label><input type="checkbox" data-ams-check="pid"><span><b>미디어 소스</b> 승인된 <code>pid</code>와 매체가 일치한다.</span></label>
              <label><input type="checkbox" data-ams-check="params"><span><b>파라미터</b> <code>c/af_adset/af_ad</code>가 빌더 이름과 같다.</span></label>
              <label><input type="checkbox" data-ams-check="ids"><span><b>ID·매크로</b> ID 값 또는 매크로 문법이 빈칸 없이 정확하다.</span></label>
              <label><input type="checkbox" data-ams-check="retarget"><span><b>캠페인 유형</b> UA/리타겟팅 설정과 <code>is_retargeting</code>이 맞다.</span></label>
              <label><input type="checkbox" data-ams-check="utm"><span><b>카카오 UTM</b> 광고주 시트의 UTM이 누락·중복되지 않았다.</span></label>
              <label><input type="checkbox" data-ams-check="delimiter"><span><b>URL 문법</b> 첫 파라미터는 <code>?</code>, 이후는 <code>&amp;</code>로 연결된다.</span></label>
              <label><input type="checkbox" data-ams-check="route"><span><b>사용자 여정</b> Android·iOS에서 설치·미설치 조합을 테스트했다.</span></label>
              <label><input type="checkbox" data-ams-check="report"><span><b>측정 확인</b> AppsFlyer 클릭·딥링크와 광고주 UTM 유입이 정상 수집된다.</span></label>
            </div>
          </div>
          <div class="ams-final-rule"><span>최종 원칙</span><p><b>시트의 최종 URL을 임의로 손대지 않습니다.</b> 수정이 필요하면 원본 값이 있는 열로 돌아가 다시 생성하고, 변경한 링크는 설치·미설치 환경에서 재검수합니다.</p></div>
        </section>

        <section class="ams-section ams-sources">
          <div class="ams-section-head"><span>↗</span><div><p>REFERENCE</p><h2>공식 파라미터 확인</h2></div></div>
          <div class="ams-source-grid">
            <article><span>AppsFlyer</span><h3>링크 구조 및 파라미터</h3><p><code>pid</code>·<code>c</code>·<code>af_adset</code>·<code>af_ad</code>와 ID 필드의 역할.</p><a href="https://support.appsflyer.com/hc/ko/articles/207447163-%EB%A7%81%ED%81%AC-%EA%B5%AC%EC%A1%B0-%EB%B0%8F-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0-%EC%86%8C%EA%B0%9C" target="_blank" rel="noopener noreferrer">공식 문서 보기 ↗</a></article>
            <article><span>AppsFlyer</span><h3>OneLink 문제 해결</h3><p>짧은 링크에 파라미터를 추가할 때의 중복값과 덮어쓰기 주의사항.</p><a href="https://support.appsflyer.com/hc/ko/articles/360014821438-%EC%9B%90%EB%A7%81%ED%81%AC-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0-%EB%B0%8F-FAQ" target="_blank" rel="noopener noreferrer">공식 문서 보기 ↗</a></article>
            <article><span>개념편</span><h3>App 마케팅 완전정복</h3><p>딥링크·OneLink·디퍼드 딥링크와 어트리뷰션의 기본 개념.</p><button type="button" data-go-page="app-marketing">개념편 열기 →</button></article>
          </div>
          <p class="ams-updated">업무시트 구조 확인 및 가이드 작성: 2026년 8월 6일 · 실제 세팅에서는 최신 광고주 시트와 AppsFlyer 설정을 우선합니다.</p>
        </section>
      </div>`;
  }

  function bindJump(root) {
    root.querySelectorAll('[data-ams-target]').forEach(function (button) {
      button.addEventListener('click', function () {
        var target = root.querySelector('#' + button.dataset.amsTarget);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function bindPageLinks(root) {
    root.querySelectorAll('[data-go-page]').forEach(function (button) {
      button.addEventListener('click', function () {
        if (typeof window.showPage === 'function') window.showPage(button.dataset.goPage, button);
      });
    });
  }

  function bindCopy(root) {
    root.querySelectorAll('[data-copy-target]').forEach(function (button) {
      button.addEventListener('click', function () {
        var target = root.querySelector('#' + button.dataset.copyTarget);
        if (!target) return;
        var value = target.textContent || '';
        var original = button.textContent;
        var done = function () {
          button.textContent = '복사됨 ✓';
          window.setTimeout(function () { button.textContent = original; }, 1400);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value).then(done).catch(function () {});
        }
      });
    });
  }

  function bindChecklist(root) {
    var key = 'playd_app_marketing_setup_qa_v1';
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch (_) { saved = {}; }
    var boxes = Array.from(root.querySelectorAll('[data-ams-check]'));
    function paint() {
      var done = boxes.filter(function (box) { return box.checked; }).length;
      var status = root.querySelector('#amsQaStatus');
      if (status) status.textContent = done === boxes.length ? '12 / 12 완료 · 매체 등록 전 최종 URL을 한 번 더 열어보세요. ✓' : done + ' / ' + boxes.length + ' 완료 · 체크 상태는 이 브라우저에 자동 저장됩니다.';
    }
    boxes.forEach(function (box) {
      box.checked = Boolean(saved[box.dataset.amsCheck]);
      box.addEventListener('change', function () {
        saved[box.dataset.amsCheck] = box.checked;
        try { localStorage.setItem(key, JSON.stringify(saved)); } catch (_) {}
        paint();
      });
    });
    paint();
  }

  function renderAppMarketingSetup() {
    var root = document.getElementById('page-app-marketing-setup');
    if (!root) return;
    root.innerHTML = buildHTML();
    bindJump(root);
    bindPageLinks(root);
    bindCopy(root);
    bindChecklist(root);
  }

  window.renderAppMarketingSetup = renderAppMarketingSetup;
})();
