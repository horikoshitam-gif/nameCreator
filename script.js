/**
 * Event Promotion Naming Tool V5 - URL-Driven Estimation
 */

// --- DICTIONARIES ---

// Comprehensive ISO-3166 Countries (Japanese + English + Abbreviations)
const COUNTRY_MAP = {
    // ===== ASIA =====
    '日本': 'JP', 'japan': 'JP', 'jpn': 'JP',
    'シンガポール': 'SG', 'singapore': 'SG', 'sgp': 'SG',
    'インド': 'IN', 'india': 'IN', 'ind': 'IN',
    'タイ': 'TH', 'thailand': 'TH', 'tha': 'TH',
    'ベトナム': 'VN', 'vietnam': 'VN', 'vnm': 'VN',
    'インドネシア': 'ID', 'indonesia': 'ID', 'idn': 'ID',
    'マレーシア': 'MY', 'malaysia': 'MY', 'mys': 'MY',
    'フィリピン': 'PH', 'philippines': 'PH', 'phl': 'PH',
    '韓国': 'KR', '大韓民国': 'KR', 'korea': 'KR', 'south korea': 'KR', 'kor': 'KR',
    '中国': 'CN', 'china': 'CN', 'chn': 'CN',
    '台湾': 'TW', 'taiwan': 'TW', 'twn': 'TW',
    '香港': 'HK', 'hong kong': 'HK', 'hkg': 'HK',
    'マカオ': 'MO', 'macau': 'MO', 'macao': 'MO',
    'バングラデシュ': 'BD', 'bangladesh': 'BD', 'bgd': 'BD',
    'パキスタン': 'PK', 'pakistan': 'PK', 'pak': 'PK',
    'スリランカ': 'LK', 'sri lanka': 'LK', 'lka': 'LK',
    'ネパール': 'NP', 'nepal': 'NP', 'npl': 'NP',
    'ミャンマー': 'MM', 'myanmar': 'MM', 'burma': 'MM', 'mmr': 'MM',
    'カンボジア': 'KH', 'cambodia': 'KH', 'khm': 'KH',
    'ラオス': 'LA', 'laos': 'LA', 'lao': 'LA',
    'モンゴル': 'MN', 'mongolia': 'MN', 'mng': 'MN',
    '北朝鮮': 'KP', 'north korea': 'KP', 'prk': 'KP',

    // ===== MIDDLE EAST =====
    'アラブ首長国連邦': 'AE', 'uae': 'AE', 'united arab emirates': 'AE', 'are': 'AE',
    'サウジアラビア': 'SA', 'saudi arabia': 'SA', 'sau': 'SA',
    'イスラエル': 'IL', 'israel': 'IL', 'isr': 'IL',
    'トルコ': 'TR', 'turkey': 'TR', 'türkiye': 'TR', 'tur': 'TR',
    'イラン': 'IR', 'iran': 'IR', 'irn': 'IR',
    'イラク': 'IQ', 'iraq': 'IQ', 'irq': 'IQ',
    'カタール': 'QA', 'qatar': 'QA', 'qat': 'QA',
    'クウェート': 'KW', 'kuwait': 'KW', 'kwt': 'KW',
    'バーレーン': 'BH', 'bahrain': 'BH', 'bhr': 'BH',
    'オマーン': 'OM', 'oman': 'OM', 'omn': 'OM',
    'ヨルダン': 'JO', 'jordan': 'JO', 'jor': 'JO',
    'レバノン': 'LB', 'lebanon': 'LB', 'lbn': 'LB',
    'シリア': 'SY', 'syria': 'SY', 'syr': 'SY',
    'イエメン': 'YE', 'yemen': 'YE', 'yem': 'YE',
    'アフガニスタン': 'AF', 'afghanistan': 'AF', 'afg': 'AF',

    // ===== EUROPE =====
    'イギリス': 'UK', 'uk': 'UK', 'united kingdom': 'UK', 'great britain': 'UK', 'gbr': 'UK', 'england': 'UK',
    'ドイツ': 'DE', 'germany': 'DE', 'deu': 'DE',
    'フランス': 'FR', 'france': 'FR', 'fra': 'FR',
    'イタリア': 'IT', 'italy': 'IT', 'ita': 'IT',
    'スペイン': 'ES', 'spain': 'ES', 'esp': 'ES',
    'オランダ': 'NL', 'netherlands': 'NL', 'nld': 'NL', 'holland': 'NL',
    'ベルギー': 'BE', 'belgium': 'BE', 'bel': 'BE',
    'スイス': 'CH', 'switzerland': 'CH', 'che': 'CH',
    'オーストリア': 'AT', 'austria': 'AT', 'aut': 'AT',
    'スウェーデン': 'SE', 'sweden': 'SE', 'swe': 'SE',
    'ノルウェー': 'NO', 'norway': 'NO', 'nor': 'NO',
    'デンマーク': 'DK', 'denmark': 'DK', 'dnk': 'DK',
    'フィンランド': 'FI', 'finland': 'FI', 'fin': 'FI',
    'アイルランド': 'IE', 'ireland': 'IE', 'irl': 'IE',
    'ポーランド': 'PL', 'poland': 'PL', 'pol': 'PL',
    'ポルトガル': 'PT', 'portugal': 'PT', 'prt': 'PT',
    'ギリシャ': 'GR', 'greece': 'GR', 'grc': 'GR',
    'チェコ': 'CZ', 'czech': 'CZ', 'czechia': 'CZ', 'cze': 'CZ',
    'ハンガリー': 'HU', 'hungary': 'HU', 'hun': 'HU',
    'ルーマニア': 'RO', 'romania': 'RO', 'rou': 'RO',
    'ブルガリア': 'BG', 'bulgaria': 'BG', 'bgr': 'BG',
    'クロアチア': 'HR', 'croatia': 'HR', 'hrv': 'HR',
    'スロバキア': 'SK', 'slovakia': 'SK', 'svk': 'SK',
    'スロベニア': 'SI', 'slovenia': 'SI', 'svn': 'SI',
    'セルビア': 'RS', 'serbia': 'RS', 'srb': 'RS',
    'ウクライナ': 'UA', 'ukraine': 'UA', 'ukr': 'UA',
    'ロシア': 'RU', 'russia': 'RU', 'rus': 'RU',
    'ベラルーシ': 'BY', 'belarus': 'BY', 'blr': 'BY',
    'リトアニア': 'LT', 'lithuania': 'LT', 'ltu': 'LT',
    'ラトビア': 'LV', 'latvia': 'LV', 'lva': 'LV',
    'エストニア': 'EE', 'estonia': 'EE', 'est': 'EE',
    'ルクセンブルク': 'LU', 'luxembourg': 'LU', 'lux': 'LU',
    'アイスランド': 'IS', 'iceland': 'IS', 'isl': 'IS',

    // ===== AMERICAS =====
    'アメリカ': 'US', '米国': 'US', 'usa': 'US', 'us': 'US', 'united states': 'US',
    'カナダ': 'CA', 'canada': 'CAN',
    'メキシコ': 'MX', 'mexico': 'MX', 'mex': 'MX',
    'ブラジル': 'BR', 'brazil': 'BR', 'bra': 'BR',
    'アルゼンチン': 'AR', 'argentina': 'AR', 'arg': 'AR',
    'チリ': 'CL', 'chile': 'CL', 'chl': 'CL',
    'コロンビア': 'CO', 'colombia': 'CO', 'col': 'CO',
    'ペルー': 'PE', 'peru': 'PE', 'per': 'PE',
    'ベネズエラ': 'VE', 'venezuela': 'VE', 'ven': 'VE',
    'エクアドル': 'EC', 'ecuador': 'EC', 'ecu': 'EC',
    'ウルグアイ': 'UY', 'uruguay': 'UY', 'ury': 'UY',
    'パラグアイ': 'PY', 'paraguay': 'PY', 'pry': 'PY',
    'ボリビア': 'BO', 'bolivia': 'BO', 'bol': 'BO',
    'キューバ': 'CU', 'cuba': 'CU', 'cub': 'CU',
    'パナマ': 'PA', 'panama': 'PA', 'pan': 'PA',
    'コスタリカ': 'CR', 'costa rica': 'CR', 'cri': 'CR',
    'プエルトリコ': 'PR', 'puerto rico': 'PR', 'pri': 'PR',

    // ===== OCEANIA =====
    'オーストラリア': 'AU', 'australia': 'AU', 'aus': 'AU',
    'ニュージーランド': 'NZ', 'new zealand': 'NZ', 'nzl': 'NZ',
    'フィジー': 'FJ', 'fiji': 'FJ', 'fji': 'FJ',

    // ===== AFRICA =====
    '南アフリカ': 'ZA', 'south africa': 'ZA', 'zaf': 'ZA',
    'エジプト': 'EG', 'egypt': 'EG', 'egy': 'EG',
    'モロッコ': 'MA', 'morocco': 'MA', 'mar': 'MA',
    'ナイジェリア': 'NG', 'nigeria': 'NG', 'nga': 'NG',
    'ケニア': 'KE', 'kenya': 'KE', 'ken': 'KE',
    'エチオピア': 'ET', 'ethiopia': 'ET', 'eth': 'ET',
    'ガーナ': 'GH', 'ghana': 'GH', 'gha': 'GH',
    'タンザニア': 'TZ', 'tanzania': 'TZ', 'tza': 'TZ',
    'アルジェリア': 'DZ', 'algeria': 'DZ', 'dza': 'DZ',
    'チュニジア': 'TN', 'tunisia': 'TN', 'tun': 'TN',

    // ===== SPECIAL =====
    'グローバル': 'Global', 'global': 'Global', '世界': 'Global', 'worldwide': 'Global'
};

// Full 50 US States
const US_STATE_MAP = {
    // Japanese Name -> US-XX
    'アラバマ': 'US-AL', 'アラスカ': 'US-AK', 'アリゾナ': 'US-AZ', 'アーカンソー': 'US-AR',
    'カリフォルニア': 'US-CA', 'コロラド': 'US-CO', 'コネチカット': 'US-CT', 'デラウェア': 'US-DE',
    'フロリダ': 'US-FL', 'ジョージア': 'US-GA', 'ハワイ': 'US-HI', 'アイダホ': 'US-ID',
    'イリノイ': 'US-IL', 'インディアナ': 'US-IN', 'アイオワ': 'US-IA', 'カンザス': 'US-KS',
    'ケンタッキー': 'US-KY', 'ルイジアナ': 'US-LA', 'メイン': 'US-ME', 'メリーランド': 'US-MD',
    'マサチューセッツ': 'US-MA', 'ミシガン': 'US-MI', 'ミネソタ': 'US-MN', 'ミシシッピ': 'US-MS',
    'ミズーリ': 'US-MO', 'モンタナ': 'US-MT', 'ネブラスカ': 'US-NE', 'ネバダ': 'US-NV',
    'ニューハンプシャー': 'US-NH', 'ニュージャージー': 'US-NJ', 'ニューメキシコ': 'US-NM',
    'ニューヨーク': 'US-NY', 'ノースカロライナ': 'US-NC', 'ノースダコタ': 'US-ND',
    'オハイオ': 'US-OH', 'オクラホマ': 'US-OK', 'オレゴン': 'US-OR', 'ペンシルベニア': 'US-PA',
    'ロードアイランド': 'US-RI', 'サウスカロライナ': 'US-SC', 'サウスダコタ': 'US-SD',
    'テネシー': 'US-TN', 'テキサス': 'US-TX', 'ユタ': 'US-UT', 'バーモント': 'US-VT',
    'バージニア': 'US-VA', 'ワシントン': 'US-WA', 'ウェストバージニア': 'US-WV',
    'ウィスコンシン': 'US-WI', 'ワイオミング': 'US-WY',
    // English Name -> US-XX
    'alabama': 'US-AL', 'alaska': 'US-AK', 'arizona': 'US-AZ', 'arkansas': 'US-AR',
    'california': 'US-CA', 'colorado': 'US-CO', 'connecticut': 'US-CT', 'delaware': 'US-DE',
    'florida': 'US-FL', 'georgia': 'US-GA', 'hawaii': 'US-HI', 'idaho': 'US-ID',
    'illinois': 'US-IL', 'indiana': 'US-IN', 'iowa': 'US-IA', 'kansas': 'US-KS',
    'kentucky': 'US-KY', 'louisiana': 'US-LA', 'maine': 'US-ME', 'maryland': 'US-MD',
    'massachusetts': 'US-MA', 'michigan': 'US-MI', 'minnesota': 'US-MN', 'mississippi': 'US-MS',
    'missouri': 'US-MO', 'montana': 'US-MT', 'nebraska': 'US-NE', 'nevada': 'US-NV',
    'new hampshire': 'US-NH', 'new jersey': 'US-NJ', 'new mexico': 'US-NM', 'new york': 'US-NY',
    'north carolina': 'US-NC', 'north dakota': 'US-ND', 'ohio': 'US-OH', 'oklahoma': 'US-OK',
    'oregon': 'US-OR', 'pennsylvania': 'US-PA', 'rhode island': 'US-RI', 'south carolina': 'US-SC',
    'south dakota': 'US-SD', 'tennessee': 'US-TN', 'texas': 'US-TX', 'utah': 'US-UT',
    'vermont': 'US-VT', 'virginia': 'US-VA', 'washington': 'US-WA', 'west virginia': 'US-WV',
    'wisconsin': 'US-WI', 'wyoming': 'US-WY',
    // Abbreviation -> US-XX
    'al': 'US-AL', 'ak': 'US-AK', 'az': 'US-AZ', 'ar': 'US-AR', 'ca': 'US-CA', 'co': 'US-CO',
    'ct': 'US-CT', 'de': 'US-DE', 'fl': 'US-FL', 'ga': 'US-GA', 'hi': 'US-HI', 'id': 'US-ID',
    'il': 'US-IL', 'in': 'US-IN', 'ia': 'US-IA', 'ks': 'US-KS', 'ky': 'US-KY', 'la': 'US-LA',
    'me': 'US-ME', 'md': 'US-MD', 'ma': 'US-MA', 'mi': 'US-MI', 'mn': 'US-MN', 'ms': 'US-MS',
    'mo': 'US-MO', 'mt': 'US-MT', 'ne': 'US-NE', 'nv': 'US-NV', 'nh': 'US-NH', 'nj': 'US-NJ',
    'nm': 'US-NM', 'ny': 'US-NY', 'nc': 'US-NC', 'nd': 'US-ND', 'oh': 'US-OH', 'ok': 'US-OK',
    'or': 'US-OR', 'pa': 'US-PA', 'ri': 'US-RI', 'sc': 'US-SC', 'sd': 'US-SD', 'tn': 'US-TN',
    'tx': 'US-TX', 'ut': 'US-UT', 'vt': 'US-VT', 'va': 'US-VA', 'wa': 'US-WA', 'wv': 'US-WV',
    'wi': 'US-WI', 'wy': 'US-WY'
};

const STOPWORDS = new Set(['lp', 'landing', 'event', 'seminar', 'webinar', 'thanks', 'thankyou', 'form', 'register', 'apply', 'ja', 'en', 'jp', 'sg', 'us', 'index', 'html', 'htm', 'php']);
const ACRONYMS = new Set(['AI', 'DX', 'HR', 'IT', 'UI', 'UX', 'PR', 'GLP']);

// --- STATE ---
const state = {
    lpUrl: '',
    date: '',
    mode: '',
    eventName: '',
    target: '', // New
    regionTags: [],
    segmentTags: [],
    patterns: [],
    sizes: [],
    // UTM
    sources: [], // Array of strings (valid tags only)
    medium: 'paid_social', // v3.0 Default
    language: 'en', // v3.2 Default
    // Suggestions
    dateSuggested: false,
    modeSuggested: false,
    nameSuggested: false,
    // Outputs
    campaignName: '', adGroupNames: [], adNames: [], utmRows: [], fullUrlRows: []
};

// --- DOM ---
const el = {
    lpUrl: document.getElementById('lpUrl'),
    eventDate: document.getElementById('eventDate'),
    modeToggle: document.getElementById('modeToggle'),
    modeBtns: document.querySelectorAll('#modeToggle .toggle-btn'),
    eventNameInput: document.getElementById('eventNameInput'),
    eventNameChips: document.getElementById('eventNameChips'),
    dateSuggested: document.getElementById('dateSuggested'),
    modeSuggested: document.getElementById('modeSuggested'),
    nameSuggested: document.getElementById('nameSuggested'),
    regionInput: document.getElementById('regionInput'),
    regionTags: document.getElementById('regionTags'),
    regionContainer: document.getElementById('regionTagContainer'),
    targetInput: document.getElementById('targetInput'), // New
    segmentInput: document.getElementById('segmentInput'),
    segmentTags: document.getElementById('segmentTags'),
    segmentContainer: document.getElementById('segmentTagContainer'),
    segmentQuickAdd: document.getElementById('segmentQuickAdd'),
    patternChips: document.getElementById('patternChips'),
    sizeChips: document.getElementById('sizeChips'),
    // UTM
    sourceInput: document.getElementById('sourceInput'),
    sourceTags: document.getElementById('sourceTags'), // Container for tags
    sourceTagContainer: document.getElementById('sourceTagContainer'),
    sourceError: document.getElementById('sourceError'),
    sourceQuickAdd: document.getElementById('sourceQuickAdd'),
    mediumChips: document.getElementById('mediumChips'),
    // Results
    campaignResult: document.getElementById('campaignResult'),
    adGroupResult: document.getElementById('adGroupResult'),
    adResult: document.getElementById('adResult'),
    adResult: document.getElementById('adResult'),
    utmResult: document.getElementById('utmResult'),
    fullUrlResult: document.getElementById('fullUrlResult'), // New for v2.3
    mediumDescription: document.getElementById('mediumDescription'), // v3.1
    languageToggle: document.getElementById('languageToggle'), // v3.2
    countPreview: document.getElementById('countPreview'),
    warnMessage: document.getElementById('warnMessage'),
    downloadCsvBtn: document.getElementById('downloadCsvBtn'),
    copyAllBtn: document.getElementById('copyAllBtn'),
    // Popover
    editPopover: document.getElementById('editPopover'),
    popoverSuggestions: document.getElementById('popoverSuggestions'),
    popoverInput: document.getElementById('popoverInput'),
    popoverConfirm: document.getElementById('popoverConfirm'),
    popoverCancel: document.getElementById('popoverCancel')
};

let popoverTarget = null; // { stateKey, idx }

// --- INIT ---
function init() {
    el.lpUrl.addEventListener('input', debounce(handleUrlInput, 400));
    el.eventDate.addEventListener('change', (e) => { state.date = e.target.value; state.dateSuggested = false; el.dateSuggested.classList.add('hidden'); updatePreview(); });
    el.modeBtns.forEach(btn => btn.addEventListener('click', () => { setMode(btn.dataset.mode, false); updatePreview(); }));
    el.eventNameInput.addEventListener('input', (e) => { state.eventName = sanitizeName(e.target.value); state.nameSuggested = false; el.nameSuggested.classList.add('hidden'); updatePreview(); });

    setupTagInput(el.regionInput, el.regionContainer, 'regionTags', normalizeRegion);
    setupTagInput(el.segmentInput, el.segmentContainer, 'segmentTags', (t) => ({ text: t, code: null, valid: true }));
    el.segmentQuickAdd.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => { addTag('segmentTags', btn.dataset.segment, t => ({ text: t, code: null, valid: true })); renderTags('segmentTags', el.segmentTags); updatePreview(); }));

    el.targetInput.addEventListener('input', (e) => { state.target = sanitizeName(e.target.value); updatePreview(); });

    setupSourceInput();

    // Setup Medium Chips
    const mediumDescriptions = {
        paid_social: 'SNSのフィード広告（Meta / LinkedIn 等）',
        paid_video: '動画広告（YouTube / SNS動画枠）',
        display: 'バナー広告（GDN / Yahoo 等）',
        cpc: '検索広告（Google / Yahoo 検索）'
    };

    setupSingleChip(el.mediumChips, (val) => {
        state.medium = val;
        if (el.mediumDescription && mediumDescriptions[val]) {
            el.mediumDescription.textContent = mediumDescriptions[val];
        }
        updatePreview();
    });
    // Set initial active state for default medium
    Array.from(el.mediumChips.querySelectorAll('.chip')).forEach(c => {
        if (c.dataset.value === state.medium) c.classList.add('active');
    });
    // Set initial description
    if (el.mediumDescription && mediumDescriptions[state.medium]) {
        el.mediumDescription.textContent = mediumDescriptions[state.medium];
    }

    setupMultiChips(el.patternChips, v => state.patterns = v);
    setupMultiChips(el.sizeChips, v => state.sizes = v);

    // v3.2 Language Toggle
    setupToggle(el.languageToggle, v => state.language = v);

    setupCopyButtons();
    setupPopover();
    updatePreview();
}

// --- URL ESTIMATION ---
function handleUrlInput() {
    state.lpUrl = el.lpUrl.value.trim();
    if (state.lpUrl.length < 10) return;

    try {
        const urlObj = new URL(state.lpUrl);
        const fullStr = state.lpUrl.toLowerCase();

        // 1. Date Estimation (YYYYMMDD or YYYY-MM-DD in path/params)
        const dateMatch = fullStr.match(/(\d{4})[-\/]?(\d{2})[-\/]?(\d{2})/);
        if (dateMatch) {
            const estDate = `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}`;
            el.eventDate.value = estDate;
            state.date = estDate;
            state.dateSuggested = true;
            el.dateSuggested.classList.remove('hidden');
        }

        // 2. Mode Estimation
        let estMode = null;
        if (/webinar|online|virtual|zoom|teams|remote/.test(fullStr)) estMode = 'Online';
        else if (/offline|onsite|venue|hall|tokyo|osaka|singapore|new york/.test(fullStr)) estMode = 'Offline';
        if (estMode) {
            setMode(estMode, true);
        }

        // 3. Event Name Estimation (Path slug, excluding dates)
        const pathParts = urlObj.pathname.split('/').filter(p => p && p.length > 2 && !STOPWORDS.has(p.toLowerCase()));
        let slugCandidates = pathParts.map(formatEventName).filter(n => n.length > 2 && !/^\d+$/.test(n));

        // From params
        ['event', 'title', 'name', 'seminar'].forEach(k => {
            if (urlObj.searchParams.has(k)) slugCandidates.push(formatEventName(urlObj.searchParams.get(k)));
        });

        slugCandidates = [...new Set(slugCandidates)];
        if (slugCandidates.length > 0) {
            // Show as chips
            el.eventNameChips.innerHTML = '';
            slugCandidates.forEach(n => {
                const span = document.createElement('span');
                span.className = 'chip suggested';
                span.textContent = n;
                span.onclick = () => { el.eventNameInput.value = n; state.eventName = n; state.nameSuggested = true; el.nameSuggested.classList.remove('hidden'); updatePreview(); };
                el.eventNameChips.appendChild(span);
            });
        }

        updatePreview();
    } catch (e) { /* Invalid URL, do nothing */ }
}

function formatEventName(str) {
    // Decode, split, PascalCase, remove dates
    let s = decodeURIComponent(str);
    // Remove date patterns
    s = s.replace(/\d{4}[-\/]?\d{2}[-\/]?\d{2}/g, '');
    s = s.replace(/\d{8}/g, ''); // YYYYMMDD
    const words = s.split(/[-_\s]+/).filter(w => w && !STOPWORDS.has(w.toLowerCase()));
    return words.map(w => {
        const up = w.toUpperCase();
        if (ACRONYMS.has(up)) return up;
        return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    }).join('');
}

function setMode(mode, isSuggested) {
    state.mode = mode;
    state.modeSuggested = isSuggested;
    el.modeBtns.forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
    if (isSuggested) el.modeSuggested.classList.remove('hidden');
    else el.modeSuggested.classList.add('hidden');
}

// --- REGION NORMALIZATION ---
function normalizeRegion(text) {
    const clean = text.trim();
    const key = clean.toLowerCase().replace(/[\(\)（）州]/g, ' ').replace(/\s+/g, ' ').trim();

    // Check US States first (priority)
    if (US_STATE_MAP[key]) return { text: clean, code: US_STATE_MAP[key], valid: true };
    // Check Countries
    if (COUNTRY_MAP[key]) return { text: clean, code: COUNTRY_MAP[key], valid: true };

    // Check 2-letter abbrevs
    if (/^[a-z]{2}$/i.test(key)) {
        if (US_STATE_MAP[key.toLowerCase()]) return { text: clean, code: US_STATE_MAP[key.toLowerCase()], valid: true };
        // Assume country code
        return { text: clean, code: key.toUpperCase(), valid: true };
    }

    // Unconfirmed
    return { text: clean, code: null, valid: false };
}

// --- TAG INPUT ---
function setupTagInput(input, container, stateKey, normalizer) {
    container.addEventListener('click', () => input.focus());
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (e.isComposing) return; // Fix: Ignore IME confirm
            e.preventDefault();
            const parts = input.value.split(/[,、]+/).map(s => s.trim()).filter(s => s);
            parts.forEach(p => addTag(stateKey, p, normalizer));
            input.value = ''; // Ensure clear
            renderTags(stateKey, document.getElementById(stateKey));
            updatePreview();
            // Keep focus for continuous input
            input.focus();
        }
        if (e.key === 'Backspace' && !input.value && state[stateKey].length) {
            state[stateKey].pop();
            renderTags(stateKey, document.getElementById(stateKey));
            updatePreview();
        }
    });
    input.addEventListener('blur', () => {
        if (input.value.trim()) {
            addTag(stateKey, input.value.trim(), normalizer);
            input.value = '';
            renderTags(stateKey, document.getElementById(stateKey));
            updatePreview();
        }
    });
}

function addTag(key, text, normalizer) {
    const norm = normalizer(text);
    if (!state[key].some(t => t.text === norm.text)) state[key].push(norm);
}

function renderTags(key, container) {
    container.innerHTML = '';
    state[key].forEach((tag, idx) => {
        const div = document.createElement('div');
        div.className = `tag-chip ${tag.valid ? 'valid' : 'unconfirmed'}`;
        let html = `<span>${tag.text}</span>`;
        if (tag.code) html += `<span class="code">${tag.code}</span>`;
        else html += `<span class="code" style="color:#fbbf24">要確定</span>`;
        html += `<span class="material-icons-round remove">close</span>`;
        div.innerHTML = html;
        div.querySelector('.remove').onclick = (e) => { e.stopPropagation(); state[key].splice(idx, 1); renderTags(key, container); updatePreview(); };
        // Click to edit unconfirmed
        if (!tag.valid) {
            div.style.cursor = 'pointer';
            div.onclick = (e) => { if (!e.target.classList.contains('remove')) openPopover(key, idx, div); };
        }
        container.appendChild(div);
    });
}

// --- POPOVER FOR UNCONFIRMED ---
function setupPopover() {
    el.popoverConfirm.onclick = confirmPopover;
    el.popoverCancel.onclick = closePopover;
    el.popoverInput.addEventListener('keydown', e => { if (e.key === 'Enter') confirmPopover(); if (e.key === 'Escape') closePopover(); });
    document.addEventListener('click', (e) => { if (!el.editPopover.contains(e.target) && !e.target.closest('.tag-chip.unconfirmed')) closePopover(); });
}

function openPopover(stateKey, idx, chipEl) {
    popoverTarget = { stateKey, idx };
    const tag = state[stateKey][idx];
    const rect = chipEl.getBoundingClientRect();
    el.editPopover.style.top = `${rect.bottom + 8}px`;
    el.editPopover.style.left = `${Math.min(rect.left, window.innerWidth - 240)}px`;

    // Generate suggestions based on input text
    el.popoverSuggestions.innerHTML = '';
    const suggestions = findSimilarCodes(tag.text);
    if (suggestions.length > 0) {
        suggestions.forEach(s => {
            const btn = document.createElement('button');
            btn.className = 'sug-chip';
            btn.textContent = s;
            btn.onclick = () => confirmWithCode(s);
            el.popoverSuggestions.appendChild(btn);
        });
    } else {
        el.popoverSuggestions.innerHTML = '<span style="color:var(--text-muted);font-size:11px;">候補なし</span>';
    }

    el.popoverInput.value = '';
    el.editPopover.classList.remove('hidden');
}

// Find similar country/state codes based on partial text match
function findSimilarCodes(text) {
    const lower = text.toLowerCase();
    const codes = new Set();

    // Check if it looks like a 2-3 letter code already
    if (/^[a-z]{2,3}$/i.test(text)) {
        codes.add(text.toUpperCase());
    }

    // Search in country map for partial matches
    Object.entries(COUNTRY_MAP).forEach(([key, val]) => {
        if (key.includes(lower) || lower.includes(key.substring(0, 3))) {
            codes.add(val);
        }
    });

    // Search in US state map
    Object.entries(US_STATE_MAP).forEach(([key, val]) => {
        if (key.includes(lower)) {
            codes.add(val);
        }
    });

    return Array.from(codes).slice(0, 5); // Max 5 suggestions
}

function confirmWithCode(code) {
    if (!popoverTarget) return;
    const tag = state[popoverTarget.stateKey][popoverTarget.idx];
    tag.code = code;
    tag.valid = true;
    renderTags(popoverTarget.stateKey, document.getElementById(popoverTarget.stateKey));
    updatePreview();
    closePopover();
    // Return focus to region input for continuous input
    if (popoverTarget.stateKey === 'regionTags') {
        el.regionInput.focus();
    }
}

function confirmPopover() {
    if (!popoverTarget) return;
    const newText = el.popoverInput.value.trim();
    if (newText) {
        const norm = normalizeRegion(newText);
        state[popoverTarget.stateKey][popoverTarget.idx] = norm;
        renderTags(popoverTarget.stateKey, document.getElementById(popoverTarget.stateKey));
        updatePreview();
    }
    closePopover();
    // Return focus to region input for continuous input
    if (popoverTarget.stateKey === 'regionTags') {
        el.regionInput.focus();
    }
}

function closePopover() {
    el.editPopover.classList.add('hidden');
    popoverTarget = null;
}

function setupSourceInput() {
    const addSource = (text) => {
        const norm = text.trim().toLowerCase();
        if (!norm) return;

        // Validation: a-z0-9_-
        if (!/^[a-z0-9_-]+$/.test(norm)) {
            el.sourceError.classList.remove('hidden');
            setTimeout(() => el.sourceError.classList.add('hidden'), 3000);
            return;
        }

        // Duplicate check
        if (!state.sources.includes(norm)) {
            state.sources.push(norm);
            renderSourceTags();
            updatePreview();
        }
        el.sourceInput.value = '';
        el.sourceError.classList.add('hidden');
    };

    el.sourceInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (e.isComposing) return; // Fix: Ignore IME confirm
            e.preventDefault();
            addSource(el.sourceInput.value);
        }
    });

    el.sourceInput.addEventListener('blur', () => {
        if (el.sourceInput.value.trim()) {
            addSource(el.sourceInput.value);
        }
    });

    el.sourceQuickAdd.querySelectorAll('button').forEach(btn => btn.addEventListener('click', (e) => {
        e.preventDefault(); // Safety
        console.log('Source Quick Add Clicked:', btn.dataset.source);
        addSource(btn.dataset.source);
    }));
}

function renderSourceTags() {
    el.sourceTags.innerHTML = '';
    state.sources.forEach(tag => {
        const div = document.createElement('div');
        div.className = 'tag-chip valid';
        div.innerHTML = `<span>${tag}</span><span class="material-icons-round remove">close</span>`;
        div.querySelector('.remove').addEventListener('click', (e) => {
            e.stopPropagation();
            state.sources = state.sources.filter(t => t !== tag);
            renderSourceTags();
            updatePreview();
        });
        el.sourceTags.appendChild(div);
    });
}

function setupSingleChip(container, setter) {
    container.querySelectorAll('.chip').forEach(c => c.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Single Chip Clicked:', c.dataset.value);
        container.querySelectorAll('.chip').forEach(x => x.classList.remove('active'));
        c.classList.add('active');
        setter(c.dataset.value);
        updatePreview();
    }));
}

// --- MULTI CHIPS ---
function setupMultiChips(container, setter) {
    // Remove existing listeners to be safe (though this function is called once)
    // cloneNode approach or just adding listener.
    // The previous issue might be CSS related or toggle logic. 
    // Ensure 'chip' class exists and toggle 'active' works.
    container.querySelectorAll('.chip').forEach(c => {
        // Use onclick property to avoid duplicate listeners if init called multiple times
        c.onclick = (e) => {
            if (e) e.preventDefault();
            console.log('Multi Chip Clicked:', c.dataset.value);
            c.classList.toggle('active');
            const activeValues = Array.from(container.querySelectorAll('.chip.active')).map(x => x.dataset.value);
            setter(activeValues);
            updatePreview();
        };
    });
}

// --- GENERATION ---
function updatePreview() {
    const dateStr = (state.date || '').replace(/-/g, '') || 'YYYYMMDD';
    const modeStr = state.mode || 'Mode';
    const eventStr = state.eventName || 'EventName';

    state.campaignName = `${dateStr}_${modeStr}_${eventStr}`;
    el.campaignResult.textContent = state.campaignName;

    const validRegions = state.regionTags.filter(t => t.valid).map(t => t.code);
    const segments = state.segmentTags.length ? state.segmentTags.map(t => sanitizeName(t.text) || t.text) : [];
    const regions = validRegions.length ? validRegions : ['Region'];

    state.adGroupNames = [];
    if (segments.length > 0) {
        // With segments: DATE_EVENT_REGION_SEGMENT
        regions.forEach(r => segments.forEach(s => state.adGroupNames.push(`${dateStr}_${eventStr}_${r}_${s}`)));
    } else {
        // Without segments: DATE_EVENT_REGION
        regions.forEach(r => state.adGroupNames.push(`${dateStr}_${eventStr}_${r}`));
    }
    el.adGroupResult.textContent = state.adGroupNames.join('\n');

    const patterns = state.patterns.length ? state.patterns : ['Pat'];
    const sizes = state.sizes.length ? state.sizes : ['Size'];
    state.adNames = [];
    patterns.forEach(p => sizes.forEach(sz => state.adNames.push(`${dateStr}_${eventStr}_${p}_${sz}`)));
    el.adResult.textContent = state.adNames.join('\n');

    // UTM Generation
    state.utmRows = [];
    state.fullUrlRows = [];

    if (state.sources.length === 0) {
        state.utmRows.push('Warning: utm_source is required.');
        el.fullUrlResult.textContent = '';
        el.downloadCsvBtn.disabled = true;
        el.copyAllBtn.disabled = true;
    } else {
        el.downloadCsvBtn.disabled = false;
        el.copyAllBtn.disabled = false;

        const medium = state.medium || 'paid_social';

        // v2.4 Change: Outer Loop is Source to group output
        state.sources.forEach(source => {
            // Add Header for Preview
            const header = `=== ${source} ===`;
            state.utmRows.push(state.utmRows.length > 0 ? `\n${header}` : header);
            state.fullUrlRows.push(state.fullUrlRows.length > 0 ? `\n${header}` : header);

            // Regions -> Segments -> Patterns -> Sizes
            regions.forEach(r => {
                // v3.2 Campaign Naming
                const langSuffix = state.language === 'jp' ? '-jp' : '';
                const regionPart = `${r}${langSuffix}`;
                const modeStr = state.mode || 'online';
                const utmCampaign = `${dateStr}_${regionPart}_${modeStr}_${eventStr}`.toLowerCase();
                const currentSegments = segments.length ? segments : [''];

                currentSegments.forEach(seg => {
                    patterns.forEach(p => {
                        sizes.forEach(sz => {
                            const cleanSz = sz.replace(/:/g, '');
                            // v3.0 utm_content: {target}_{segment}_{pattern}_{size} (Fixed 4 parts, 'na' if empty)
                            const targetStr = state.target || 'na';
                            const segmentStr = seg || 'na';
                            const contentParts = [targetStr, segmentStr, p, cleanSz].map(x => x.toString().toLowerCase());
                            const utmContent = contentParts.join('_');

                            // Params
                            const params = [
                                `utm_source=${source}`,
                                `utm_medium=${medium}`,
                                `utm_campaign=${utmCampaign}`,
                                `utm_content=${utmContent}`
                            ];
                            const utmString = params.join('&');
                            state.utmRows.push(utmString);

                            // Full URL
                            let fullUrl = '';
                            if (state.lpUrl) {
                                const separator = state.lpUrl.includes('?') ? '&' : '?';
                                fullUrl = `${state.lpUrl}${separator}${utmString}`;
                            } else {
                                fullUrl = `(LP_URL_REQUIRED)${utmString}`;
                            }
                            state.fullUrlRows.push(fullUrl);
                        });
                    });
                });
            });
        });
    }
    el.utmResult.textContent = state.utmRows.join('\n');
    el.fullUrlResult.textContent = state.fullUrlRows.join('\n');

    // Count is total data rows (excluding headers)
    const totalRows = state.sources.length * regions.length * (segments.length || 1) * patterns.length * sizes.length;
    el.countPreview.textContent = `Total: ${totalRows} items`;

    const hasUnconfirmed = state.regionTags.some(t => !t.valid);
    if (hasUnconfirmed) { el.warnMessage.textContent = '⚠️ 未確定の地域があります。クリックして確定してください。'; el.warnMessage.classList.remove('hidden'); }
    else if (totalRows > 300) { el.warnMessage.textContent = '⚠️ 生成数が多すぎます。'; el.warnMessage.classList.remove('hidden'); }
    else el.warnMessage.classList.add('hidden');
}

function sanitizeName(str) {
    if (!str) return '';
    return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0)).replace(/[^a-zA-Z0-9]/g, '');
}

function setupCopyButtons() {
    // Individual copy buttons
    document.querySelectorAll('.copy-icon-btn').forEach(btn => btn.onclick = () => {
        navigator.clipboard.writeText(document.getElementById(btn.dataset.target).textContent);
        const icon = btn.querySelector('.material-icons-round');
        icon.textContent = 'check';
        setTimeout(() => icon.textContent = 'content_copy', 1200);
    });

    // Download CSV button
    el.downloadCsvBtn.onclick = () => {
        const csvContent = generateCSV();
        const filename = generateFilename();
        downloadFile(csvContent, filename);

        const originalHTML = el.downloadCsvBtn.innerHTML;
        el.downloadCsvBtn.innerHTML = '<span class="material-icons-round">check</span> ダウンロード完了';
        setTimeout(() => el.downloadCsvBtn.innerHTML = originalHTML, 2000);
    };

    // Copy to clipboard button
    el.copyAllBtn.onclick = () => {
        const csvContent = generateCSV();
        navigator.clipboard.writeText(csvContent);

        const originalHTML = el.copyAllBtn.innerHTML;
        el.copyAllBtn.innerHTML = '<span class="material-icons-round">check</span> コピー完了';
        setTimeout(() => el.copyAllBtn.innerHTML = originalHTML, 1500);
    };
}

function generateCSV() {
    const header = 'utm_string,full_url'; // v3.0 Reduced Columns
    const rows = [header];

    // We need to regenerate the exact mapping to ensure rows align.
    const dateStr = (state.date || '').replace(/-/g, '') || 'YYYYMMDD';
    const eventStr = state.eventName || 'EventName';
    const validRegions = state.regionTags.filter(t => t.valid).map(t => t.code);
    const regions = validRegions.length ? validRegions : ['Region'];
    const segments = state.segmentTags.length ? state.segmentTags.map(t => sanitizeName(t.text) || t.text) : [];
    const patterns = state.patterns.length ? state.patterns : ['Pat'];
    const sizes = state.sizes.length ? state.sizes : ['Size'];
    const medium = state.medium || 'paid_social';
    const campaignName = `${dateStr}_${state.mode || 'Mode'}_${eventStr}`;

    // Outer Loop: Source (Grouping)
    state.sources.forEach(source => {
        regions.forEach(r => {
            // v3.2 Campaign Naming Logic for CSV
            const langSuffix = state.language === 'jp' ? '-jp' : '';
            const regionPart = `${r}${langSuffix}`;
            const modeStr = state.mode || 'online';
            const utmCampaign = `${dateStr}_${regionPart}_${modeStr}_${eventStr}`.toLowerCase();

            const currentSegments = segments.length ? segments : [''];

            currentSegments.forEach(seg => {
                patterns.forEach(p => {
                    sizes.forEach(sz => {
                        const cleanSz = sz.replace(/:/g, '');
                        // v3.0 Content: force 'na'
                        const targetStr = state.target || 'na';
                        const segmentStr = seg || 'na';
                        const contentParts = [targetStr, segmentStr, p, cleanSz].map(x => x.toString().toLowerCase());
                        const utmContent = contentParts.join('_');

                        const params = [
                            `utm_source=${source}`,
                            `utm_medium=${medium}`,
                            `utm_campaign=${utmCampaign}`,
                            `utm_content=${utmContent}`
                        ];
                        const utmString = params.join('&');

                        let fullUrl = '';
                        if (state.lpUrl) {
                            const separator = state.lpUrl.includes('?') ? '&' : '?';
                            fullUrl = `${state.lpUrl}${separator}${utmString}`;
                        } else {
                            fullUrl = `(LP_URL_REQUIRED)${utmString}`;
                        }

                        rows.push(`${utmString},${fullUrl}`);
                    });
                });
            });
        });
    });

    // Add BOM for Excel support
    return '\uFEFF' + rows.join('\n');
}

function generateFilename() {
    const dateStr = (state.date || '').replace(/-/g, '') || new Date().toISOString().split('T')[0].replace(/-/g, '');
    const eventStr = state.eventName || 'event';
    return `utm_parameters_${dateStr}_${eventStr}.csv`;
}

function downloadFile(content, filename) {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
