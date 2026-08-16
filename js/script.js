const translations = {
    "nav-home": { cz: "Domů", en: "Home" },
    "nav-experience": { cz: "Zkušenosti", en: "Experience" },
    "nav-projects": { cz: "Projekty", en: "Projects" },
    "nav-contact": { cz: "Kontakt", en: "Contact" },
    "hero-greeting": { cz: "Ahoj, já jsem", en: "Hello, I am" },
    "hero-role": { cz: "Software & Hardware Developer", en: "Software & Hardware Developer" },
    "hero-bio": { 
        cz: "Věnuji se vývoji mobilních aplikací, webových řešení a propojování světa hardwaru a softwaru. Rád zkoumám nové technologie, od IoT (ESP32, Matter, KNX) přes moderní architekturu až po databázové systémy.", 
        en: "I specialize in mobile app development, web solutions, and bridging the gap between hardware and software. I love exploring new technologies, from IoT (ESP32, Matter, KNX) and modern architecture to database systems." 
    },
    "hero-btn-work": { cz: "Moje práce", en: "My Work" },
    "scroll-hint": { cz: "Scrolluj dolů", en: "Scroll down" },
    "exp-title": { cz: "Pracovní <span>Zkušenosti</span> & Vzdělání", en: "Work <span>Experience</span> & Education" },
    "exp-subtitle": { cz: "Můj profesní příběh od univerzity po průmysl", en: "My professional journey from university to industry" },
    "projects-title": { cz: "Vybrané <span>Projekty</span>", en: "Selected <span>Projects</span>" },
    "projects-subtitle": { cz: "Od vášně k akademickým úspěchům. Většina mých projektů začala jako čistý osobní koníček.", en: "From passion to academia. Most of my projects started as pure personal hobbies." },
    "filter-all": { cz: "Vše", en: "All" },
    "filter-school": { cz: "Škola", en: "School" },
    "filter-mobile": { cz: "Mobilní", en: "Mobile" },
    "filter-other": { cz: "Hobby", en: "Hobby" },
    "footer-desc": { cz: "Otevřený novým výzvám v oblasti vývoje software a IoT.", en: "Open to new challenges in software development and IoT." },
    "footer-rights": { cz: "© 2026 Michal Paluřík. Všechna práva vyhrazena.", en: "© 2026 Michal Paluřík. All rights reserved." }
};

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('lang') || 'cz';
    let currentTheme = localStorage.getItem('theme') || 'dark';
    const langToggleBtn = document.getElementById('lang-toggle');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const modalOverlay = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close');

    // ==================== BOOT SEQUENCE ====================
    function runBootSequence() {
        const terminal = document.getElementById('boot-terminal');
        const progressBar = document.getElementById('boot-progress');
        const statusEl = document.getElementById('boot-status');
        document.body.style.overflow = 'hidden';

        const lines = [
            { t: '[BIOS] Initializing hardware...', c: 'info', d: 200 },
            { t: '[OK] CPU: ARM Cortex-M4 @ 168MHz', c: 'ok', d: 400 },
            { t: '[OK] RAM: 512KB SRAM allocated', c: 'ok', d: 600 },
            { t: '[OK] Flash: 2MB NOR ready', c: 'ok', d: 750 },
            { t: '[SYS] Loading firmware v2.6.0...', c: 'info', d: 1000 },
            { t: '[OK] GPIO pins configured (48/48)', c: 'ok', d: 1200 },
            { t: '[OK] I2C bus initialized @ 400kHz', c: 'ok', d: 1400 },
            { t: '[OK] SPI interface ready', c: 'ok', d: 1550 },
            { t: '[OK] UART0: 115200 baud', c: 'ok', d: 1700 },
            { t: '[NET] Connecting to network...', c: 'info', d: 1900 },
            { t: '[OK] WiFi: Connected (RSSI: -42dBm)', c: 'ok', d: 2200 },
            { t: '[OK] TCP/IP stack initialized', c: 'ok', d: 2350 },
            { t: '[TEST] Running self-diagnostics...', c: 'warn', d: 2500 },
            { t: '[OK] Sensor array: 12/12 online', c: 'ok', d: 2700 },
            { t: '[OK] ADC calibration: PASS', c: 'ok', d: 2850 },
            { t: '[OK] PWM outputs verified', c: 'ok', d: 3000 },
            { t: '[SYS] Compiling shaders...', c: 'info', d: 3100 },
            { t: '[OK] WebGL context acquired', c: 'ok', d: 3300 },
            { t: '[OK] All systems nominal', c: 'ok', d: 3500 },
            { t: '[BOOT] Portfolio ready. Welcome, user.', c: 'accent', d: 3800 },
        ];

        lines.forEach((line, i) => {
            setTimeout(() => {
                const el = document.createElement('div');
                el.className = 'line ' + line.c;
                el.textContent = line.t;
                terminal.appendChild(el);
                terminal.scrollTop = terminal.scrollHeight;
                progressBar.style.width = Math.min(((i+1)/lines.length)*100, 100) + '%';
                statusEl.textContent = line.t.replace(/\[.*?\]\s*/, '');
            }, line.d);
        });

        setTimeout(() => {
            document.getElementById('loading-screen').classList.add('hidden');
            document.body.classList.add('loaded');
            document.body.style.overflow = '';
            document.getElementById('main-nav').classList.add('visible');
            window.scrollTo(0, 0);
            setTimeout(() => { initParticles(); initScrollAnimations(); }, 200);
        }, 4200);
    }

    // ==================== RENDER EXPERIENCE ====================
    function renderExperience() {
        const c = document.getElementById('timeline-container');
        if (!c || typeof experienceData === 'undefined') return;
        c.innerHTML = '';
        experienceData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'timeline-card';
            card.innerHTML = `
                <span class="timeline-card-type ${item.type}">${item.type === 'work' ? '💼 Work' : '🎓 Education'}</span>
                <div class="timeline-card-icon"><i class="${item.icon}"></i></div>
                <div class="timeline-card-date">${item.date[currentLang]}</div>
                <h3 class="timeline-card-title">${item.title[currentLang]}</h3>
                <div class="timeline-card-company">${item.company}</div>
                <p class="timeline-card-desc">${item.desc[currentLang]}</p>
            `;
            c.appendChild(card);
        });
    }

    // ==================== RENDER PROJECTS ====================
    function renderProjectPanels(filter) {
        const c = document.getElementById('project-panels-container');
        if (!c || typeof projectsData === 'undefined') return;
        c.innerHTML = '';

        let data = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);

        data.forEach(project => {
            const panel = document.createElement('div');
            panel.className = 'project-panel';

            let imgSrc = '';
            if (project.images && project.images.length > 0) {
                imgSrc = project.images.find(i => !i.endsWith('.mp4')) || '';
            }

            const techHTML = project.tech.map(t => '<span>' + t + '</span>').join('');
            const btnText = currentLang === 'cz' ? 'Zobrazit detail →' : 'View details →';

            panel.innerHTML = 
                '<div class="project-panel-inner">' +
                    (imgSrc ? '<div class="project-panel-visual"><img src="' + imgSrc + '" alt="' + project.title[currentLang] + '" loading="lazy"></div>' : '') +
                    '<div class="project-panel-info">' +
                        '<span class="project-panel-badge">' + project.badge[currentLang] + '</span>' +
                        '<h2 class="project-panel-title">' + project.title[currentLang] + '</h2>' +
                        '<p class="project-panel-desc">' + project.shortDesc[currentLang] + '</p>' +
                        '<div class="project-panel-tech">' + techHTML + '</div>' +
                        '<div class="project-panel-cta"><button class="btn btn-primary project-detail-btn">' + btnText + '</button></div>' +
                    '</div>' +
                '</div>';

            panel.querySelector('.project-detail-btn').addEventListener('click', () => openModal(project));
            c.appendChild(panel);
        });
    }

    // ==================== GSAP SCROLL ANIMATIONS ====================
    function initScrollAnimations() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.getAll().forEach(t => t.kill());

        // Hero parallax
        gsap.to('.hero-inner', {
            scrollTrigger: { trigger: '.hero-cinematic', start: 'top top', end: 'bottom top', scrub: true },
            y: 200, opacity: 0, scale: 0.95, ease: 'none'
        });
        gsap.to('.scroll-indicator', {
            scrollTrigger: { trigger: '.hero-cinematic', start: 'top top', end: '30% top', scrub: true },
            opacity: 0, ease: 'none'
        });

        // Section titles
        gsap.utils.toArray('.section-giant-title').forEach(el => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 55%', scrub: 1 },
                y: 80, opacity: 0, scale: 0.92
            });
        });
        gsap.utils.toArray('.section-subtitle').forEach(el => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 92%', end: 'top 65%', scrub: 1 },
                y: 40, opacity: 0
            });
        });

        // Timeline cards
        gsap.utils.toArray('.timeline-card').forEach(card => {
            gsap.from(card, {
                scrollTrigger: { trigger: card, start: 'top 92%', end: 'top 65%', scrub: 1 },
                y: 50, opacity: 0, scale: 0.95
            });
        });

        // Project panels: image slides from one side, info from other
        gsap.utils.toArray('.project-panel').forEach((panel, i) => {
            const vis = panel.querySelector('.project-panel-visual');
            const info = panel.querySelector('.project-panel-info');
            if (vis) {
                gsap.from(vis, {
                    scrollTrigger: { trigger: panel, start: 'top 88%', end: 'top 45%', scrub: 1 },
                    x: i % 2 === 0 ? -100 : 100, opacity: 0, scale: 0.9
                });
            }
            if (info) {
                gsap.from(info, {
                    scrollTrigger: { trigger: panel, start: 'top 85%', end: 'top 45%', scrub: 1 },
                    x: i % 2 === 0 ? 80 : -80, opacity: 0
                });
            }
        });

        ScrollTrigger.refresh();
    }

    // ==================== PARTICLES ====================
    function initParticles() {
        if (typeof particlesJS === 'undefined') return;
        particlesJS('particles-js', {
            particles: { number: { value: 50, density: { enable: true, value_area: 800 } }, color: { value: "#3b82f6" }, shape: { type: "circle" }, opacity: { value: 0.4 }, size: { value: 3, random: true }, line_linked: { enable: true, distance: 150, color: "#3b82f6", opacity: 0.3, width: 1 }, move: { enable: true, speed: 1, direction: "none", random: true, out_mode: "out" } },
            interactivity: { detect_on: "window", events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true }, modes: { grab: { distance: 150, line_linked: { opacity: 0.6 } }, push: { particles_nb: 2 } } },
            retina_detect: true
        });
    }

    // ==================== CURSOR ====================
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');
    if (cursorDot && cursorOutline && window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', e => {
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
            cursorOutline.animate({ left: e.clientX + 'px', top: e.clientY + 'px' }, { duration: 500, fill: "forwards" });
        });
        document.body.addEventListener('mouseover', e => { if (e.target.closest('a, button, .timeline-card')) cursorOutline.classList.add('hovered'); });
        document.body.addEventListener('mouseout', e => { if (e.target.closest('a, button, .timeline-card')) cursorOutline.classList.remove('hovered'); });
    }

    // ==================== MODAL ====================
    function openModal(project) {
        document.getElementById('modal-badge').textContent = project.badge[currentLang];
        document.getElementById('modal-title').textContent = project.title[currentLang];
        document.getElementById('modal-desc').innerHTML = project.longDesc[currentLang].replace(/\n/g, '<br>');
        document.getElementById('modal-tech').innerHTML = project.tech.map(t => '<span>' + t + '</span>').join('');

        const vc = document.getElementById('modal-visual-container');
        if (project.images && project.images.length > 0) {
            vc.innerHTML = '<div class="gallery-carousel">' + project.images.map(m => {
                if (m.endsWith('.mp4')) return '<video playsinline controls class="video-player" style="max-width:100%;border-radius:8px"><source src="' + m + '" type="video/mp4"/></video>';
                return '<img src="' + m + '" alt="' + project.title[currentLang] + '" class="carousel-img">';
            }).join('') + '</div>';
            vc.style.display = 'block';
            vc.querySelectorAll('.video-player').forEach(v => new Plyr(v));
            vc.querySelectorAll('.carousel-img').forEach(img => img.addEventListener('click', () => openLightbox(img.src)));
        } else { vc.innerHTML = ''; vc.style.display = 'none'; }

        const lc = document.getElementById('modal-links');
        if (project.links && project.links.length > 0) {
            lc.innerHTML = project.links.map(l => '<a href="' + l.url + '" target="_blank" class="btn btn-secondary"><i class="' + l.icon + '"></i> ' + l.tooltip + '</a>').join('');
            lc.style.display = 'flex';
        } else { lc.innerHTML = ''; lc.style.display = 'none'; }

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeModal() { modalOverlay.classList.remove('active'); document.body.style.overflow = ''; }
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

    // ==================== LIGHTBOX ====================
    const lbOverlay = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbClose = document.getElementById('lightbox-close');
    function openLightbox(src) { if (!lbOverlay) return; lbImg.src = src; lbOverlay.classList.add('active'); }
    function closeLightbox() { if (!lbOverlay) return; lbOverlay.classList.remove('active'); setTimeout(() => lbImg.src = '', 300); }
    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lbOverlay) lbOverlay.addEventListener('click', e => { if (e.target === lbOverlay) closeLightbox(); });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            if (lbOverlay && lbOverlay.classList.contains('active')) closeLightbox();
            else if (modalOverlay.classList.contains('active')) closeModal();
        }
    });

    // ==================== I18N ====================
    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const k = el.getAttribute('data-i18n');
            if (translations[k]) el.innerHTML = translations[k][currentLang];
        });
        renderExperience();
        const f = document.querySelector('.filter-btn.active');
        renderProjectPanels(f ? f.getAttribute('data-filter') : 'all');
        setTimeout(initScrollAnimations, 150);
    }
    langToggleBtn.querySelector('.lang-text').textContent = currentLang === 'cz' ? 'EN' : 'CZ';
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'cz' ? 'en' : 'cz';
        localStorage.setItem('lang', currentLang);
        langToggleBtn.querySelector('.lang-text').textContent = currentLang === 'cz' ? 'EN' : 'CZ';
        applyTranslations();
    });

    // ==================== THEME ====================
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggleBtn.querySelector('i').className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        themeToggleBtn.querySelector('i').className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });

    // ==================== MOBILE MENU ====================
    const mmBtn = document.querySelector('.mobile-menu-btn');
    const mNav = document.querySelector('.mobile-nav');
    mmBtn.addEventListener('click', () => {
        mNav.classList.toggle('active');
        mmBtn.querySelector('i').className = mNav.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });
    document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => {
        mNav.classList.remove('active'); mmBtn.querySelector('i').className = 'fas fa-bars';
    }));

    // ==================== FILTERS ====================
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderProjectPanels(e.target.getAttribute('data-filter'));
            setTimeout(initScrollAnimations, 150);
        });
    });

    // ==================== INIT ====================
    renderExperience();
    renderProjectPanels('all');
    applyTranslations();
    runBootSequence();
});
