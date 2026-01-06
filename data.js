const UDIO_DATA = {
    "tags": {
        "구조 지시어 (Structure)": [
            { "label": "Verse", "tag": "[verse]", "desc": "기본 절" },
            { "label": "Verse 1", "tag": "[Verse 1]", "desc": "첫 번째 절" },
            { "label": "Verse 2", "tag": "[verse 2]", "desc": "두 번째 절" },
            { "label": "Verse 1 (Voice 1)", "tag": "[Verse 1: Voice 1]", "desc": "화자 1의 첫 번째 절" },
            { "label": "Pre-chorus", "tag": "[pre-chorus]", "desc": "후렴 전 빌드업" },
            { "label": "Chorus", "tag": "[chorus]", "desc": "메인 후렴" },
            { "label": "Chorus 1", "tag": "[Chorus 1]", "desc": "첫 번째 후렴" },
            { "label": "Chorus (Repeat 2x)", "tag": "[Chorus: Repeat 2x]", "desc": "후렴 2회 반복" },
            { "label": "Refrain", "tag": "[Refrain]", "desc": "반복되는 짧은 구절" },
            { "label": "Hook", "tag": "[hook]", "desc": "귓가를 사로잡는 반복구" },
            { "label": "Intro", "tag": "[intro]", "desc": "도입부" },
            { "label": "Outro", "tag": "[outro]", "desc": "종결부" },
            { "label": "Fade Out", "tag": "[fade out]", "desc": "서서히 작아지는 마무리" },
            { "label": "Abrupt Stop", "tag": "[Abrupt Stop]", "desc": "갑작스러운 정지 (Short stop)" }
        ],
        "전환 및 변화 (Transitions)": [
            { "label": "Bridge", "tag": "[bridge]", "desc": "전환 구간 (브릿지)" },
            { "label": "Dialogue Bridge", "tag": "[Dialogue Bridge]", "desc": "대화형 브릿지" },
            { "label": "Breakdown", "tag": "[breakdown]", "desc": "사운드를 비우는 구간" },
            { "label": "Interlude", "tag": "[interlude]", "desc": "연주 중심 간주" },
            { "label": "Dialogue Interlude", "tag": "[Dialogue Interlude]", "desc": "대화형 간주" },
            { "label": "Build-up", "tag": "[buildup]", "desc": "점점 고조되는 빌드업" },
            { "label": "Drop", "tag": "[Drop]", "desc": "강렬한 드랍" },
            { "label": "Pre-drop", "tag": "[Pre-drop]", "desc": "드랍 직전 구간" },
            { "label": "Post-drop", "tag": "[Post-drop]", "desc": "드랍 직후 구간" },
            { "label": "Interlude Drop", "tag": "[interlude drop]", "desc": "간주 중 드랍 효과" },
            { "label": "Anticipation Pause", "tag": "[Anticipation Pause]", "desc": "드랍 전 짧은 정적" },
            { "label": "Sample", "tag": "[sample]", "desc": "샘플링 사운드" },
            { "label": "Dance Interlude", "tag": "[dance interlude]", "desc": "댄스 브레이크" },
            { "label": "Rhythmic Flow (Sync)", "tag": "[Rhythmic flow with syncopation]", "desc": "당김음 리듬" }
        ],
        "보컬 특성 및 화자 (Vocals)": [
            { "label": "Verse 1 (Female)", "tag": "[Verse1:female]", "desc": "여성 보컬 지정" },
            { "label": "Male Vocal", "tag": "[male vocal]", "desc": "남성 보컬" },
            { "label": "Chorus (Male)", "tag": "[Chorus: Male]", "desc": "남성 보컬 후렴" },
            { "label": "Two Male Vocals", "tag": "[Chorus: Two male vocalists]", "desc": "남성 2인 보컬" },
            { "label": "Duet", "tag": "[Chorus: Duet]", "desc": "남녀 듀엣" },
            { "label": "All Together", "tag": "[All together:]", "desc": "떼창/합창" },
            { "label": "Spoken World", "tag": "[spoken]", "desc": "나레이션" },
            { "label": "Spoken (Voice 1)", "tag": "[voice 1, spoken]", "desc": "첫 번째 화자" },
            { "label": "Spoken (Voice 2)", "tag": "[voice 2, spoken]", "desc": "두 번째 화자" },
            { "label": "Spoken Verse (Male)", "tag": "[Spoken Verse 1: Male voice]", "desc": "남성 나레이션 절" },
            { "label": "Spoken (Female)", "tag": "[Spoken: Female voice]", "desc": "여성 나레이션" },
            { "label": "Buildup (Male)", "tag": "[Buildup: Male vocal]", "desc": "남성 빌드업 보컬" },
            { "label": "Detective", "tag": "[Detective (Speaking)]", "desc": "형사 캐릭터톤" }
        ],
        "감정 및 보컬 효과 (Vocal FX)": [
            { "label": "Emotional", "tag": "[Emotional]", "desc": "호소력 짙은 감정" },
            { "label": "Scream", "tag": "[scream]", "desc": "비명/스크림" },
            { "label": "Cry", "tag": "[cry]", "desc": "울음 섞인 목소리" },
            { "label": "Whisper", "tag": "[Whisper]", "desc": "속삭이는 보컬" },
            { "label": "Whispers in Dark", "tag": "[Whispers in the dark]", "desc": "어둠 속 속삭임" },
            { "label": "Breakdown (Screaming)", "tag": "[breakdown (screaming)]", "desc": "스크리밍 브레이크다운" },
            { "label": "Vocal Fry", "tag": "[Vocal Fry]", "desc": "거칠게 긁히는 목소리" },
            { "label": "Auto-tune", "tag": "[Auto-tune]", "desc": "오토튠 효과" },
            { "label": "Vocoder", "tag": "[Vocoder]", "desc": "전자적 보코더" },
            { "label": "Backing Vocals", "tag": "[Backing Vocals]", "desc": "배경 코러스" },
            { "label": "B-Vocals", "tag": "[B-Vocals]", "desc": "짧은 백보컬" },
            { "label": "Call and Response", "tag": "[Call and Response]", "desc": "선창과 후창" }
        ],
        "악기 및 사운드 (Inst/Sound)": [
            { "label": "Guitar Solo", "tag": "[guitar solo]", "desc": "전기 기타 솔로" },
            { "label": "Saxophone", "tag": "[saxophone]", "desc": "색소폰 솔로" },
            { "label": "Violin Solo", "tag": "[violin solo]", "desc": "바이올린 솔로" },
            { "label": "Instrumental Solo", "tag": "[Instrumental Solo]", "desc": "악기 솔로" },
            { "label": "Instrumental Break", "tag": "[Instrumental Break]", "desc": "악기 연주 구간" },
            { "label": "Classical Piano", "tag": "[classical piano]", "desc": "클래식 피아노" },
            { "label": "Organ", "tag": "[organ]", "desc": "오르간 연주" },
            { "label": "Bass Piano", "tag": "[bass piano]", "desc": "베이스 피아노" },
            { "label": "Harmonica Break", "tag": "[Harmonica Break]", "desc": "하모니카 간주" },
            { "label": "Inst: Attack", "tag": "[Instrumental: attack]", "desc": "강한 어택" },
            { "label": "Inst: Release", "tag": "[Instrumental: release]", "desc": "긴 릴리즈" },
            { "label": "Solo Inst Start", "tag": "[Solo Instrumental Start]", "desc": "독주로 시작" },
            { "label": "Double Time Drum", "tag": "[Double Time Drumming]", "desc": "2배속 비트" },
            { "label": "Drum Fill", "tag": "[Drum Fill]", "desc": "드럼 필인" },
            { "label": "No Drums", "tag": "[No Drums]", "desc": "드럼 제외" },
            { "label": "Acapella", "tag": "[Acapella]", "desc": "무반주" }
        ],
        "음악 스타일 및 효과 (Style/FX)": [
            { "label": "Record Scratch", "tag": "[record scratching]", "desc": "레코드 긁는 소리" },
            { "label": "Vinyl Scratch", "tag": "[vinyl scratching]", "desc": "바이닐 질감" },
            { "label": "DJ Scratch", "tag": "[dj scratching]", "desc": "DJ 스크래칭" },
            { "label": "Train Sound", "tag": "[Intro: Chugging train sound]", "desc": "기차 소리 인트로" },
            { "label": "Gunfire", "tag": "[Chorus: Distant gunfire]", "desc": "멀리서 들리는 총성" },
            { "label": "Street Noise", "tag": "[Verse 1: With street noise]", "desc": "거리 소음과 함께" },
            { "label": "Reverb: Heavy", "tag": "[Reverb: Heavy]", "desc": "강한 잔향" },
            { "label": "Lo-fi Quality", "tag": "[Lo-fi Quality]", "desc": "빈티지 음질" },
            { "label": "Live Performance", "tag": "[Live Performance]", "desc": "공연장 느낌" },
            { "label": "Concert Ambience", "tag": "[Concert Ambience]", "desc": "현장 소음" },
            { "label": "High Energy", "tag": "[high energy, upbeat, fast-paced Balkan brass instrumental, exciting and exhilarating]", "desc": "폭발적인 에너지" }
        ],
        "태그 퀵 리스트 (복사용)": [
            { "label": "Quick List 1", "tag": "[Verse] [Verse 1] [Verse 2] [Verse 1: Voice 1] [Chorus] [Chorus 1] [Chorus: Two male vocalists] [Spoken Verse 1: Male voice] [Spoken: Female voice] [Buildup: Male vocal] [Chorus: Repeat 2x] [Bridge] [Pre-chorus]", "desc": "주요 구조 태그 모음" },
            { "label": "Quick List 2", "tag": "[Pre-drop] [Drop] [Post-drop] [All together:] [Hook] [Intro: Chugging train sound] [Chorus: Distant gunfire] [Verse 1: With street noise] [Instrumental Break] [Whispers in the dark] [Dialogue Bridge]", "desc": "특수 효과 태그 모음" },
            { "label": "Quick List 3", "tag": "[Detective (Speaking)] [Instrumental Solo] [Whisper] [Dialogue Interlude] [Abrupt Stop] [Vocal Fry]", "desc": "캐릭터 및 기법 태그 모음" }
        ]
    },
    "styles": [
        {
            "category": "Electronic / Club",
            "items": [
                { "name": "Berlin Techno", "prompt": "Berlin Techno, Minimal, Dark, Industrial, 135 BPM, Heavy kick, Underground club vibe", "keywords": ["techno", "minimal", "industrial", "클럽", "기계", "다크"] },
                { "name": "Liquid DnB", "prompt": "Liquid Drum and Bass, Fast breakbeats, Soulful, Lush pads, Deep bass, 175 BPM", "keywords": ["speed", "fast", "drum and bass", "비트", "빠른", "질주"] },
                { "name": "Acid Techno", "prompt": "Acid Techno, Roland TB-303, Squelchy synths, Rave, 90s style, High energy", "keywords": ["rave", "acid", "90s", "전자음", "광란"] },
                { "name": "Tropical House", "prompt": "Tropical House, Summer vibe, Marimba, Relaxed, 110 BPM, Kygo style", "keywords": ["summer", "tropical", "beach", "바다", "여름", "트로피컬"] }
            ]
        },
        {
            "category": "Hip-Hop / Urban",
            "items": [
                { "name": "90s Boom Bap", "prompt": "90s East Coast Hip Hop, Boom bap, Jazzy, Soulful, Vinyl texture, Gritty", "keywords": ["rap", "hip hop", "boom bap", "힙합", "랩", "비트", "라임", "올드스쿨"] },
                { "name": "Modern Trap", "prompt": "Modern Trap, Heavy 808 bass, Autotune vocals, Dark ambience, Sharp snares", "keywords": ["trap", "808", "bass", "트랩", "플렉스", "돈", "flex", "현대적"] },
                { "name": "G-Funk", "prompt": "West Coast G-Funk, Funky bass, High-pitched synths, Laid back, 90s style", "keywords": ["90s hip hop", "g-funk", "west coast", "여유", "캘리포니아"] },
                { "name": "Lo-fi Hip Hop", "prompt": "Lo-fi Hip Hop, Mellow, Chill, Jazzy, Coffee shop ambience, Rainy day vibe", "keywords": ["chill", "lo-fi", "sleep", "study", "조용한", "공부", "카페", "잔잔한"] }
            ]
        },
        {
            "category": "Rock / Metal",
            "items": [
                { "name": "Classic 70s Rock", "prompt": "70s Classic Rock, Overdriven guitars, Hammond organ, Hard rock, Led Zeppelin style", "keywords": ["rock", "guitar", "70s", "록", "기타", "롸롹", "전기기타", "클래식락"] },
                { "name": "90s Grunge", "prompt": "Grunge, 90s, Nirvana style, Distorted guitars, Raw energy, Angst", "keywords": ["grunge", "90s rock", "분노", "거친", "락", "너바나"] },
                { "name": "Stadium Anthem", "prompt": "Stadium Rock, Epic, Powerful drums, Crowd cheering atmosphere, 80s Pop Rock", "keywords": ["epic", "stadium", "power", "웅장한", "떼창"] },
                { "name": "Symphonic Metal", "prompt": "Symphonic Metal, Orchestral, Epic, Operatic female vocals, Heavy riffs", "keywords": ["metal", "epic", "opera", "메탈", "철학", "심포니", "오페라"] }
            ]
        },
        {
            "category": "Pop / Ballad / Soul",
            "items": [
                { "name": "Emotional Ballad", "prompt": "Emotional Ballad, Soft piano, Strings, Heartfelt vocals, Sad atmosphere", "keywords": ["ballad", "love", "sad", "사랑", "이별", "슬픈", "발라드", "눈물", "그리움"] },
                { "name": "Modern K-Pop", "prompt": "K-Pop, Catchy hook, Dance-pop, Polished, High energy, Idol style", "keywords": ["k-pop", "dance", "idol", "아이돌", "댄스", "케이팝", "스타", "중독성"] },
                { "name": "City Pop", "prompt": "Japanese City Pop, 80s, Funky bass, Urban, Nostalgic, Summery", "keywords": ["city pop", "summer", "urban", "도시", "휴가", "시티팝", "세련된", "레트로"] }
            ]
        }
    ],
    "tips": [
        { "title": "프롬프트 중요도 법칙", "desc": "스타일 창 맨 앞 단어가 가장 큰 영향을 끼칩니다. [K-Pop, Techno] 처럼 이질적인 장르를 섞어보세요." },
        { "title": "단어 분절 (발음 교정)", "desc": "AI가 발음을 뭉개면 'Utili-zation', 'Peta-flops', 'Back-propa-gation' 처럼 음절을 쪼개 기록하세요." },
        { "title": "약어 및 숫자 표기", "desc": "AMD는 'ay-em-dee', 991은 'nine hundred ninety one' 처럼 소리나는 대로 적으면 정확해집니다." },
        { "title": "추임새 활용", "desc": "Hmmmm, Ohhh woah, ahhhhh, oooooh 처럼 비어휘적 음소로 감정을 풍부하게 표현하세요." },
        { "title": "섹션 제어 전략", "desc": "특정 구간에서 악기를 빼려면 [No Drums]나 [Acapella]를, 애드리브 방지는 [Instrumental Break]를 활용하세요." },
        { "title": "괄호 ( ) 에코 효과", "desc": "가사에 소괄호를 치면 почти 항상 멋진 에코(Echo) 효과나 하모니가 생성됩니다." },
        { "title": "리믹스 변화도 (Variance)", "desc": "슬라이더를 낮추면 멜로디 유지, 높이면 대폭 변경됩니다. Seed 번호 고정 시 질감이 유지됩니다." },
        { "title": "워크플로우 법칙", "desc": "섹션당 6~8줄이 적당하며, 초기 설정 태그(장르, 보컬)를 명확히 하십시오." }
    ],
    "templates": [
        { "name": "시티 힙합 (City Hip-Hop)", "content": "[Intro: Record Scratch]\n(Yo, check the mic 1, 2)\n[Verse 1: Rhythmic flow with syncopation]\n희뿌연 도시의 밤, 가로등 아래 멈춘 시간\n[Chorus: Duet]\n흐르는 비트 위에 마음을 던져 (Throw it all)" },
        { "name": "감성 발라드 (Ballad)", "content": "[Intro: classical piano]\n[Verse: Verse1:female]\n창밖에 비친 너의 기억이 너무나 선명해서 (너무 선명해)\n[Chorus: Emotional]\n우리 다시 만날 수 있을까, 흩어진 계절 속에서" },
        { "name": "하드 락 (Hard Rock)", "content": "[Intro: Instrumental: attack]\n[Verse: Heavy drumming]\n심장을 때리는 베이스, 불타는 무대 위로 (Go!)\n[Chorus: Scream]\n자유를 향해 소리 질러! (Burn it up!)" },
        { "name": "미드나잇 재즈 (Smooth Jazz)", "content": "[Intro: Saxophone]\n[Verse: Spoken Verse 1: Male voice]\n위스키 한 잔에 녹아든 낮은 조명, 그리고 너의 웃음소리.\n[Chorus: Female voice]\n스모키한 공기 속에 번지는 블루스 (Midnight blues)" },
        { "name": "R&B (Neo-Soul)", "content": "[Intro: Synth pad]\n[Verse: Vocal Fry, soft]\n어색한 침묵 끝에 건네는 서투른 진심\n[Chorus: Backing Vocals]\n말하지 않아도 느껴지는 너와 나의 Soul (My baby)" },
        { "name": "영화 오프닝 (Cinematic)", "content": "[Intro: Grand Orchestral strings]\n[Spoken: Detective (Speaking)]\n그날 이후, 세상은 다시는 예전 같지 않았습니다.\n[Chorus: Choir]\n(Gloria, In Excelsis...)\n[Instrumental Break]" }
    ]
};
