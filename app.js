/**
 * Udio Lyric Generator - app.js
 * Smart Recommendation Engine Version
 */

class UdioGenerator {
    constructor() {
        this.data = typeof UDIO_DATA !== 'undefined' ? UDIO_DATA : null;
        this.segmentCounter = 1;
        this.segments = [{ id: Date.now(), title: "시작 세그먼트", lyrics: "", type: 'initial' }];
        this.activeSegmentId = this.segments[0].id;
        this.suggestedStyles = [];

        this.initElements();
        if (this.data) this.initApp();
    }

    initElements() {
        this.editor = document.getElementById('lyric-editor');
        this.timeline = document.getElementById('segment-timeline');
        this.tagContainer = document.getElementById('tag-container');
        this.stylesContainer = document.getElementById('styles-container');
        this.tipsContainer = document.getElementById('tips-container');
        this.templatesContainer = document.getElementById('templates-container');
        this.hintText = document.getElementById('workflow-hint');
        this.lineCounter = document.getElementById('line-counter');
        this.currentLabel = document.getElementById('current-segment-label');
        this.tagSearch = document.getElementById('tag-search');

        this.pStrength = document.getElementById('rec-p-strength');
        this.lStrength = document.getElementById('rec-l-strength');
        this.clarity = document.getElementById('rec-clarity');

        this.toastContainer = document.getElementById('toast-container');
    }

    initApp() {
        this.renderAll();
        this.renderTimeline();
        this.bindEvents();
        this.updateUI();
        this.initAdSense();
    }

    bindEvents() {
        this.editor.oninput = (e) => {
            const activeSeg = this.segments.find(s => s.id === this.activeSegmentId);
            activeSeg.lyrics = e.target.value;
            this.updateUI();
            this.analyzeLyrics(activeSeg.lyrics); // 스마트 매칭 엔진 가동

            const activeCard = this.timeline.querySelector('.segment-card.active .seg-preview');
            if (activeCard) {
                activeCard.innerText = activeSeg.lyrics.substring(0, 30) + (activeSeg.lyrics.length > 30 ? '...' : '');
            }
        };

        document.getElementById('btn-add-segment').onclick = () => this.addSegment();
        document.getElementById('btn-copy-lyrics').onclick = () => this.copyLyrics();

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.onclick = () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                document.getElementById(`${btn.dataset.target}-container`).classList.add('active');
            };
        });

        this.tagSearch.oninput = (e) => this.renderAll(e.target.value);
    }

    // [핵심] 가사 분석 매칭 엔진
    analyzeLyrics(text) {
        if (!text.trim()) {
            this.suggestedStyles = [];
            this.renderStyles();
            return;
        }

        const lowerText = text.toLowerCase();
        const suggestions = [];

        this.data.styles.forEach(cat => {
            cat.items.forEach(item => {
                const matchCount = item.keywords.filter(kw => lowerText.includes(kw.toLowerCase())).length;
                if (matchCount > 0) {
                    suggestions.push({ ...item, score: matchCount });
                }
            });
        });

        // 점수 순 정렬
        this.suggestedStyles = suggestions.sort((a, b) => b.score - a.score).slice(0, 5);
        this.renderStyles(this.tagSearch.value);
    }

    renderAll(filter = '') {
        this.renderTags(filter);
        this.renderStyles(filter);
        this.renderProTips(filter);
        this.renderTemplates(filter);
    }

    renderStyles(filter = '') {
        this.stylesContainer.innerHTML = '';
        if (!this.data) return;
        const searchLower = filter.toLowerCase();

        // 1. 가사 기반 추천 섹션 렌더링
        if (this.suggestedStyles.length > 0 && !filter) {
            const recoDiv = document.createElement('div');
            recoDiv.className = 'style-category-group recommendation-area';
            recoDiv.innerHTML = `<h4>✨ 현재 가사와 어울리는 스타일</h4>`;
            this.suggestedStyles.forEach(style => {
                recoDiv.appendChild(this.createStyleCard(style, true));
            });
            this.stylesContainer.appendChild(recoDiv);
        }

        // 2. 전체 리스트 렌더링
        this.data.styles.forEach(cat => {
            const filteredItems = cat.items.filter(i =>
                i.name.toLowerCase().includes(searchLower) ||
                i.prompt.toLowerCase().includes(searchLower)
            );

            if (filteredItems.length === 0) return;

            const catDiv = document.createElement('div');
            catDiv.className = 'style-category-group';
            catDiv.innerHTML = `<h4>${cat.category}</h4>`;

            filteredItems.forEach(style => {
                catDiv.appendChild(this.createStyleCard(style));
            });
            this.stylesContainer.appendChild(catDiv);
        });
    }

    createStyleCard(style, isRecommended = false) {
        const card = document.createElement('div');
        card.className = `tip-card style-card ${isRecommended ? 'recommended' : ''}`;
        card.innerHTML = `
            <h5>${style.name} ${isRecommended ? '<span class="match-badge">Match</span>' : ''}</h5>
            <p class="prompt-text">${style.prompt}</p>
        `;
        card.onclick = () => {
            navigator.clipboard.writeText(style.prompt).then(() => {
                const p = card.querySelector('.prompt-text');
                const original = p.innerText;
                p.innerText = "✅ 복사 완료! 우디오 'Style' 창에 붙여넣으세요.";
                p.style.color = "var(--accent-pink)"; // 강조 색상 변경
                setTimeout(() => {
                    p.innerText = original;
                    p.style.color = ""; // 원상 복구
                }, 2500);
            });
        };
        return card;
    }

    renderTags(filter = '') {
        this.tagContainer.innerHTML = '';
        if (!this.data) return;
        const searchLower = filter.toLowerCase();

        for (const [category, tags] of Object.entries(this.data.tags)) {
            const filteredTags = tags.filter(t =>
                t.label.toLowerCase().includes(searchLower) ||
                t.tag.toLowerCase().includes(searchLower) ||
                (t.desc && t.desc.toLowerCase().includes(searchLower))
            );
            if (filteredTags.length === 0) continue;

            const catDiv = document.createElement('div');
            catDiv.className = 'tag-category';
            catDiv.innerHTML = `<h4>${category}</h4>`;

            const listDiv = document.createElement('div');
            listDiv.className = 'tag-list';
            filteredTags.forEach(t => {
                const btn = document.createElement('button');
                btn.className = 'tag-pill';
                btn.innerText = t.label;
                btn.title = t.desc;
                btn.onclick = () => this.insertTag(t.tag);
                listDiv.appendChild(btn);
            });
            catDiv.appendChild(listDiv);
            this.tagContainer.appendChild(catDiv);
        }
    }

    renderProTips(filter = '') {
        this.tipsContainer.innerHTML = '';
        const searchLower = filter.toLowerCase();
        this.data.tips.filter(t => t.title.toLowerCase().includes(searchLower) || t.desc.toLowerCase().includes(searchLower))
            .forEach(tip => {
                const card = document.createElement('div');
                card.className = 'tip-card';
                card.innerHTML = `<h5>${tip.title}</h5><p>${tip.desc}</p>`;
                this.tipsContainer.appendChild(card);
            });
    }

    renderTemplates(filter = '') {
        this.templatesContainer.innerHTML = '';
        const searchLower = filter.toLowerCase();
        this.data.templates.filter(t => t.name.toLowerCase().includes(searchLower) || t.content.toLowerCase().includes(searchLower))
            .forEach(tmp => {
                const card = document.createElement('div');
                card.className = 'template-card';
                card.innerHTML = `<h5>${tmp.name}</h5><p>${tmp.content.substring(0, 50)}...</p>`;
                card.onclick = () => {
                    this.editor.value = tmp.content;
                    this.editor.focus();
                    const activeSeg = this.segments.find(s => s.id === this.activeSegmentId);
                    if (activeSeg) activeSeg.lyrics = tmp.content;
                    this.updateUI();
                    this.renderTimeline();
                    this.analyzeLyrics(tmp.content); // 템플릿 적용 시에도 즉시 분석
                };
                this.templatesContainer.appendChild(card);
            });
    }

    renderTimeline() {
        this.timeline.innerHTML = '';
        this.segments.forEach((seg, index) => {
            const card = document.createElement('div');
            card.className = `segment-card ${seg.id === this.activeSegmentId ? 'active' : ''}`;
            card.innerHTML = `
                <div class="seg-header">
                    <span class="seg-num">#${index + 1}</span>
                    <span class="seg-title">${seg.title}</span>
                    ${index > 0 ? `<button class="btn-delete" data-id="${seg.id}">×</button>` : ''}
                </div>
                <div class="seg-preview">${seg.lyrics.substring(0, 30)}...</div>
            `;
            const del = card.querySelector('.btn-delete');
            if (del) del.onclick = (e) => { e.stopPropagation(); this.deleteSegment(seg.id); };
            card.onclick = () => this.setActiveSegment(seg.id);
            this.timeline.appendChild(card);
        });
    }

    setActiveSegment(id) {
        this.activeSegmentId = id;
        const activeSeg = this.segments.find(s => s.id === id);
        this.editor.value = activeSeg.lyrics;
        this.updateUI();
        this.renderTimeline();
        this.analyzeLyrics(activeSeg.lyrics);

        // 모바일 대응: 세그먼트 전환 시 에디터로 스크롤
        if (window.innerWidth <= 768) {
            this.editor.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => this.editor.focus(), 500);
        }
    }

    addSegment() {
        this.segmentCounter++;
        const newSeg = { id: Date.now(), title: `확장 세그먼트 ${this.segmentCounter}`, lyrics: "", type: 'extend' };
        this.segments.push(newSeg);
        this.setActiveSegment(newSeg.id);
    }

    insertTag(tag) {
        const start = this.editor.selectionStart;
        const end = this.editor.selectionEnd;
        const text = this.editor.value;
        this.editor.value = text.substring(0, start) + tag + "\n" + text.substring(end);

        // 커서 위치 조정
        const newCursorPos = start + tag.length + 1;
        this.editor.setSelectionRange(newCursorPos, newCursorPos);

        this.editor.focus();
        this.editor.dispatchEvent(new Event('input'));

        // 모바일 보정: 태그 삽입 후 에디터가 화면에서 벗어나지 않게 처리
        if (window.innerWidth <= 768) {
            this.editor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    updateUI() {
        const activeSeg = this.segments.find(s => s.id === this.activeSegmentId);
        const lines = activeSeg.lyrics.split('\n').filter(l => l.trim() !== '').length;
        this.lineCounter.innerText = `${lines} / 6 줄`;
        this.lineCounter.style.color = lines > 6 ? 'var(--accent-pink)' : 'var(--text-dim)';

        const workflow = {
            initial: {
                hint: "1. 메인 프롬프트를 작성하고 우디오 'Create' 버튼을 누르세요. \n2. 가사는 32초당 약 6줄이 적당합니다. \n*커뮤니티 추천: Clarity를 낮추면 더 창의적인 결과가 나옵니다.",
                p: "60%", l: "70%", c: "15%"
            },
            extend: {
                hint: "1. 우디오 라이브러리에서 곡의 'Extend' 버튼을 누르세요. \n2. 'Extension Placement'에서 'Add After'를 선택하세요. \n3. 일관성을 위해 Lyric Strength를 높이는 것이 정석입니다.",
                p: "60%", l: "100%", c: "10%"
            }
        }[activeSeg.type];

        this.hintText.innerText = workflow.hint;
        this.pStrength.innerText = workflow.p;
        this.lStrength.innerText = workflow.l;
        this.clarity.innerText = workflow.c;
        this.currentLabel.innerText = `세그먼트: ${activeSeg.title}`;
    }

    deleteSegment(id) {
        this.segments = this.segments.filter(s => s.id !== id);
        if (this.activeSegmentId === id) this.setActiveSegment(this.segments[0].id);
        else this.renderTimeline();
    }

    copyLyrics() {
        navigator.clipboard.writeText(this.editor.value).then(() => {
            this.showToast('가사가 클립보드에 복사되었습니다! ✨');
        });
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerText = message;
        this.toastContainer.appendChild(toast);

        // 애니메이션 종료 후 요소 제거 (3초 후)
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    // [수익화] 애드센스 동적 초기화 (렌더링 순서 보장)
    initAdSense() {
        if (typeof ADSENSE_CONFIG !== 'undefined') {
            const container = document.getElementById('main-ad-container');
            if (!container) return;

            // 앱 렌더링이 끝난 후 약간의 지연을 두어 자연스럽게 표시
            setTimeout(() => {
                container.style.display = 'flex';
                const ins = document.createElement('ins');
                ins.className = "adsbygoogle";
                ins.style.display = "block";
                ins.style.width = "100%";
                ins.setAttribute('data-ad-client', ADSENSE_CONFIG.client);
                ins.setAttribute('data-ad-slot', ADSENSE_CONFIG.slot);
                ins.setAttribute('data-ad-format', 'horizontal');
                ins.setAttribute('data-full-width-responsive', 'true');

                container.appendChild(ins);
                try {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                } catch (e) {
                    console.error("AdSense push error:", e);
                }
            }, 500); // 0.5초 지연
        }
    }
}

window.onload = () => { window.app = new UdioGenerator(); };
