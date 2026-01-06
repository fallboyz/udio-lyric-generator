const UDIO_DATA = {
    "tags": {
        "구조 지시어 (Structure)": [
            { "label": "Verse", "tag": "[verse]", "desc": "곡의 이야기를 전개하고 정보를 전달하는 일반적인 절 섹션입니다." },
            { "label": "Verse 1", "tag": "[Verse 1]", "desc": "노래의 가장 첫 번째 이야기를 시작하는 도입 단계의 절입니다." },
            { "label": "Verse 2", "tag": "[verse 2]", "desc": "첫 번째 후렴 이후 새로운 전개를 보여주는 두 번째 절입니다." },
            { "label": "Verse 1 (Voice 1)", "tag": "[Verse 1: Voice 1]", "desc": "여러 화자가 등장할 때, 첫 번째 캐릭터가 부르는 절임을 명시합니다." },
            { "label": "Pre-chorus", "tag": "[pre-chorus]", "desc": "절과 후렴 사이에서 긴장감을 고조시키며 후렴을 준비하는 빌드업 구간입니다." },
            { "label": "Chorus", "tag": "[chorus]", "desc": "곡의 메인 테마와 핵심 멜로디가 반복되어 가장 강조되는 후렴구입니다." },
            { "label": "Chorus 1", "tag": "[Chorus 1]", "desc": "곡 전체에서 처음으로 등장하는 메인 후렴 섹션입니다." },
            { "label": "Chorus (Repeat 2x)", "tag": "[Chorus: Repeat 2x]", "desc": "에너지를 극대화하기 위해 후렴구를 연속으로 두 번 반복하도록 지시합니다." },
            { "label": "Refrain", "tag": "[Refrain]", "desc": "절과 절 사이에 반복되는 아주 짧은 문구나 반복적인 선율 구간입니다." },
            { "label": "Hook", "tag": "[hook]", "desc": "대중의 귀를 사로잡는 강력한 중독성을 가진 짧은 멜로디나 문구입니다." },
            { "label": "Intro", "tag": "[intro]", "desc": "곡이 본격적으로 시작되기 전 분위기를 잡는 짧은 도입부 연주 및 보컬 구간입니다." },
            { "label": "Outro", "tag": "[outro]", "desc": "곡의 모든 전개가 끝나고 서서히 여운을 남기며 마무리하는 종결부입니다." },
            { "label": "Fade Out", "tag": "[fade out]", "desc": "음량이 점차 줄어들며 자연스럽게 사라지듯 곡을 끝맺는 기법입니다." },
            { "label": "Abrupt Stop", "tag": "[Abrupt Stop]", "desc": "진행되던 사운드를 갑자기 뚝 끊어서 강렬한 반전이나 여운을 주는 마무리입니다." }
        ],
        "전환 및 변화 (Transitions)": [
            { "label": "Bridge", "tag": "[bridge]", "desc": "곡의 중반부에서 분위기를 완전히 바꾸어 신선함을 주는 전환 섹션입니다." },
            { "label": "Dialogue Bridge", "tag": "[Dialogue Bridge]", "desc": "노래 대신 두 명 이상의 화자가 대화를 나누는 형태의 전환 구간입니다." },
            { "label": "Breakdown", "tag": "[breakdown]", "desc": "악기 구성을 최소화하여 에너지를 비워냈다가 다시 고조시키기 위한 휴지기입니다." },
            { "label": "Interlude", "tag": "[interlude]", "desc": "보컬 없이 악기 연주만으로 구성되어 곡의 흐름을 이어주는 간주 구간입니다." },
            { "label": "Dialogue Interlude", "tag": "[Dialogue Interlude]", "desc": "곡 중간에 짧은 대사나 나레이션이 삽입되는 연주 구간입니다." },
            { "label": "Build-up", "tag": "[buildup]", "desc": "사운드를 점차 두텁게 쌓아올려 다음 섹션에 대한 기대감을 높이는 장치입니다." },
            { "label": "Drop", "tag": "[Drop]", "desc": "에너지가 폭발적으로 터져 나오는 구간으로, 주로 EDM이나 힙합에서 사용됩니다." },
            { "label": "Pre-drop", "tag": "[Pre-drop]", "desc": "강력한 드랍이 터지기 직전, 긴장감을 극도로 끌어올리는 짧은 구간입니다." },
            { "label": "Post-drop", "tag": "[Post-drop]", "desc": "에너지가 터진 직후, 그 여운을 이어가며 리듬을 강조하는 구간입니다." },
            { "label": "Interlude Drop", "tag": "[interlude drop]", "desc": "간주 중간에 갑작스럽게 에너지를 떨어뜨리거나 강조점을 주는 효과입니다." },
            { "label": "Anticipation Pause", "tag": "[Anticipation Pause]", "desc": "드랍이나 후렴 직전에 아주 짧은 정적을 주어 타격감을 극대화합니다." },
            { "label": "Sample", "tag": "[sample]", "desc": "다른 노래나 외부 음원을 가져와 섞은 듯한 샘플링 사운드 효과를 줍니다." },
            { "label": "Dance Interlude", "tag": "[dance interlude]", "desc": "가사가 멈추고 강렬한 댄스 비트와 퍼포먼스용 사운드가 강조되는 구간입니다." },
            { "label": "Rhythmic Flow (Sync)", "tag": "[Rhythmic flow with syncopation]", "desc": "의도적으로 비트를 밀고 당기는 '싱코페이션' 리듬감을 부여합니다." }
        ],
        "보컬 특성 및 화자 (Vocals)": [
            { "label": "Verse 1 (Female)", "tag": "[Verse1:female]", "desc": "첫 번째 절의 목소리를 여성 보컬로 명시하여 고정합니다." },
            { "label": "Male Vocal", "tag": "[male vocal]", "desc": "전반적인 보컬의 음색을 남성으로 설정합니다." },
            { "label": "Chorus (Male)", "tag": "[Chorus: Male]", "desc": "메인 후렴 부분을 남성 보컬이 부르도록 지시합니다." },
            { "label": "Two Male Vocals", "tag": "[Chorus: Two male vocalists]", "desc": "두 명의 남성 보컬이 화음을 맞추거나 교차하며 노래하게 합니다." },
            { "label": "Duet", "tag": "[Chorus: Duet]", "desc": "남녀 보컬이 서로 대화를 주고받거나 함께 노래하는 듀엣 구성입니다." },
            { "label": "All Together", "tag": "[All together:]", "desc": "모든 보컬이 합쳐져 떼창이나 웅장한 합창 효과를 냅니다." },
            { "label": "Spoken Word", "tag": "[spoken]", "desc": "멜로디 없이 말하듯이 정보를 전달하는 나레이션 스타일입니다." },
            { "label": "Spoken (Voice 1)", "tag": "[voice 1, spoken]", "desc": "여러 명 중 첫 번째 화자가 말하는 목소리를 구현합니다." },
            { "label": "Spoken (Voice 2)", "tag": "[voice 2, spoken]", "desc": "두 번째 화자가 첫 번째 화자에게 대답하거나 말을 시작합니다." },
            { "label": "Spoken Verse (Male)", "tag": "[Spoken Verse 1: Male voice]", "desc": "남성 보컬이 절 전체를 랩이나 나레이션 형태로 읊게 합니다." },
            { "label": "Spoken (Female)", "tag": "[Spoken: Female voice]", "desc": "여성 보컬의 차분하거나 지적인 나레이션 목소리를 구현합니다." },
            { "label": "Buildup (Male)", "tag": "[Buildup: Male vocal]", "desc": "남성 보컬이 점점 고조되는 감정으로 빌드업 구간을 가창합니다." },
            { "label": "Detective", "tag": "[Detective (Speaking)]", "desc": "영화 속 형사 캐릭터처럼 무겁고 진지한 연기 톤의 보컬을 부여합니다." }
        ],
        "감정 및 보컬 효과 (Vocal FX)": [
            { "label": "Emotional", "tag": "[Emotional]", "desc": "곡에 호소력을 더하고 가창자의 감정이 깊게 배어 나오도록 유도합니다." },
            { "label": "Scream", "tag": "[scream]", "desc": "격정적인 감정 폭발이나 강렬한 사운드를 위해 지르는 듯한 창법을 부여합니다." },
            { "label": "Cry", "tag": "[cry]", "desc": "목소리에 떨림과 애절함을 담아 금방이라도 울 것 같은 보컬 톤을 연출합니다." },
            { "label": "Whisper", "tag": "[Whisper]", "desc": "귀에 대고 말하는 듯한 아주 작고 세밀한 보컬로 신비로움을 더합니다." },
            { "label": "Whispers in Dark", "tag": "[Whispers in the dark]", "desc": "어둠 속 속삭임으로 낮은 톤의 긴장감과 비밀스러운 분위기를 조성합니다." },
            { "label": "Breakdown (Screaming)", "tag": "[breakdown (screaming)]", "desc": "연주가 격렬해지는 구간에서 강렬한 스크리밍을 삽입하여 카타르시스를 줍니다." },
            { "label": "Vocal Fry", "tag": "[Vocal Fry]", "desc": "목소리를 낮게 긁어서 내는 거친 질감을 통해 섹시하거나 고뇌하는 톤을 만듭니다." },
            { "label": "Auto-tune", "tag": "[Auto-tune]", "desc": "피치를 기계적으로 보정하여 현대적이고 트렌디한 전자 보컬 효과를 선보입니다." },
            { "label": "Vocoder", "tag": "[Vocoder]", "desc": "보컬을 신시사이저 소리에 합성하여 독특하고 차가운 로봇 사운드를 생성합니다." },
            { "label": "Backing Vocals", "tag": "[Backing Vocals]", "desc": "메인 보컬을 뒤에서 받쳐주는 화음이나 코러스를 풍부하게 레이어링합니다." },
            { "label": "B-Vocals", "tag": "[B-Vocals]", "desc": "곡 중간중간 추임새처럼 짧게 들어가는 백보컬을 삽입하여 공간을 채웁니다." },
            { "label": "Call and Response", "tag": "[Call and Response]", "desc": "한 명이 선창하면 다른 이들이 대답하듯 노래하는 리드미컬한 소통 구조입니다." }
        ],
        "악기 및 사운드 (Inst/Sound)": [
            { "label": "Guitar Solo", "tag": "[guitar solo]", "desc": "화려하고 기술적인 전기 기타 연주를 곡의 중심에 배치하여 에너지를 높입니다." },
            { "label": "Saxophone", "tag": "[saxophone]", "desc": "부드럽고 감각적인 색소폰 연주로 재지하거나 로맨틱한 분위기를 만듭니다." },
            { "label": "Violin Solo", "tag": "[violin solo]", "desc": "섬세하고 애절한 바이올린 선율로 고전적인 아름다움이나 깊은 슬픔을 표현합니다." },
            { "label": "Instrumental Solo", "tag": "[Instrumental Solo]", "desc": "특정 악기가 전면에 나서서 화려한 기량을 뽐내는 독주 구간을 만듭니다." },
            { "label": "Instrumental Break", "tag": "[Instrumental Break]", "desc": "보컬이 잠시 멈추고 악기들의 합주로만 이루어지는 리듬 중심의 전환 구간입니다." },
            { "label": "Classical Piano", "tag": "[classical piano]", "desc": "정갈하고 깊이 있는 클래식 스타일의 피아노 음색으로 곡의 품격을 높입니다." },
            { "label": "Organ", "tag": "[organ]", "desc": "교회나 올드스쿨 락 느낌의 웅장하고 풍성한 오르간 사운드를 부여합니다." },
            { "label": "Bass Piano", "tag": "[bass piano]", "desc": "낮은 음역대의 피아노 건반 소리로 묵직하고 단단한 베이스 라인을 형성합니다." },
            { "label": "Harmonica Break", "tag": "[Harmonica Break]", "desc": "애수 어린 하모니카 연주로 블루지하거나 포크적인 서정성을 더합니다." },
            { "label": "Inst: Attack", "tag": "[Instrumental: attack]", "desc": "악기 연주의 시작 부분을 날카롭고 강렬하게 타격하여 강한 인상을 줍니다." },
            { "label": "Inst: Release", "tag": "[Instrumental: release]", "desc": "연주의 여음을 길게 남겨 몽환적이거나 웅장한 잔향의 여운을 연출합니다." },
            { "label": "Solo Inst Start", "tag": "[Solo Instrumental Start]", "desc": "아무런 반주 없이 하나의 악기만으로 곡을 시작하여 몰입감을 극대화합니다." },
            { "label": "Double Time Drum", "tag": "[Double Time Drumming]", "desc": "기존 템포보다 드럼 비트를 2배 빠르게 쪼개어 박진감과 속도감을 줍니다." },
            { "label": "Drum Fill", "tag": "[Drum Fill]", "desc": "섹션 전환 시 드럼의 기교 있는 연주로 곡의 흐름을 다이나믹하게 이어줍니다." },
            { "label": "No Drums", "tag": "[No Drums]", "desc": "의도적으로 비트를 제거하여 고요하거나 성스러운 분위기, 혹은 긴장감을 연출합니다." },
            { "label": "Acapella", "tag": "[Acapella]", "desc": "모든 악기 반주를 배제하고 오직 목소리만으로 노래하는 무반주 섹션입니다." }
        ],
        "음악 스타일 및 효과 (Style/FX)": [
            { "label": "Record Scratch", "tag": "[record scratching]", "desc": "레코드를 긁는 듯한 소리로 힙합이나 올드스쿨적인 아날로그 감성을 더합니다." },
            { "label": "Vinyl Scratch", "tag": "[vinyl scratching]", "desc": "오래된 LP판에서 나는 듯한 노이즈와 특유의 질감을 입혀 빈티지한 느낌을 줍니다." },
            { "label": "DJ Scratch", "tag": "[dj scratching]", "desc": "전문적인 DJ의 화려한 스크래칭 기술을 곡 중간에 삽입하여 리듬감을 살립니다." },
            { "label": "Train Sound", "tag": "[Intro: Chugging train sound]", "desc": "칙칙폭폭 거리는 기차 소리를 배경에 깔아 독특한 여행이나 향수의 분위기를 냅니다." },
            { "label": "Gunfire", "tag": "[Chorus: Distant gunfire]", "desc": "멀리서 들리는 총성 효과음으로 긴박함이나 거친 전쟁의 분위기를 묘사합니다." },
            { "label": "Street Noise", "tag": "[Verse 1: With street noise]", "desc": "웅성거리는 거리의 소음을 섞어 실제 거리에서 부르는 듯한 현장감을 줍니다." },
            { "label": "Reverb: Heavy", "tag": "[Reverb: Heavy]", "desc": "아주 넓은 거대 홀에서 소리가 울리는 듯한 강하고 깊은 잔향 효과를 부여합니다." },
            { "label": "Lo-fi Quality", "tag": "[Lo-fi Quality]", "desc": "의도적으로 음질을 낮추고 노이즈를 섞어 따뜻하고 편안한 아날로그 감성을 연출합니다." },
            { "label": "Live Performance", "tag": "[Live Performance]", "desc": "실제 공연장에서 녹음한 듯한 생생한 현장감과 울림을 재현합니다." },
            { "label": "Concert Ambience", "tag": "[Concert Ambience]", "desc": "대규모 콘서트장의 넓은 공간감과 웅성거리는 팬들의 소리를 배경에 깔아줍니다." },
            { "label": "High Energy", "tag": "[high energy, upbeat, fast-paced Balkan brass instrumental, exciting and exhilarating]", "desc": "곡의 에너지를 폭발적으로 끌어올려 매우 흥분되고 박진감 넘치는 분위기를 만듭니다." }
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
