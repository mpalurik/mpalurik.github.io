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
    "projects-subtitle": { cz: "Od vášně k akademickým úspěchům. Většina mých projektů začala jako čistý osobní koníček, který jsem následně rozvinul a aplikoval v rámci univerzitních a závěrečných prací.", en: "From passion to academia. Most of my projects started as pure personal hobbies, which I later expanded and applied in university courses and theses." },
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
        
        const bootLines = [
            { text: '[BIOS] Initializing hardware...', cls: 'info', delay: 200 },
            { text: '[OK] CPU: ARM Cortex-M4 @ 168MHz', cls: 'ok', delay: 400 },
            { text: '[OK] RAM: 512KB SRAM allocated', cls: 'ok', delay: 600 },
            { text: '[OK] Flash: 2MB NOR ready', cls: 'ok', delay: 750 },
            { text: '[SYS] Loading firmware v2.6.0...', cls: 'info', delay: 1000 },
            { text: '[OK] GPIO pins configured (48/48)', cls: 'ok', delay: 1200 },
            { text: '[OK] I2C bus initialized @ 400kHz', cls: 'ok', delay: 1400 },
            { text: '[OK] SPI interface ready', cls: 'ok', delay: 1550 },
            { text: '[OK] UART0: 115200 baud', cls: 'ok', delay: 1700 },
            { text: '[NET] Connecting to network...', cls: 'info', delay: 1900 },
            { text: '[OK] WiFi: Connected (RSSI: -42dBm)', cls: 'ok', delay: 2200 },
            { text: '[OK] TCP/IP stack initialized', cls: 'ok', delay: 2350 },
            { text: '[TEST] Running self-diagnostics...', cls: 'warn', delay: 2500 },
            { text: '[OK] Sensor array: 12/12 online', cls: 'ok', delay: 2700 },
            { text: '[OK] ADC calibration: PASS', cls: 'ok', delay: 2850 },
            { text: '[OK] PWM outputs verified', cls: 'ok', delay: 3000 },
            { text: '[SYS] Compiling shaders...', cls: 'info', delay: 3100 },
            { text: '[OK] WebGL context acquired', cls: 'ok', delay: 3300 },
            { text: '[OK] All systems nominal', cls: 'ok', delay: 3500 },
            { text: '[BOOT] Portfolio ready. Welcome, user.', cls: 'accent', delay: 3800 },
        ];

        bootLines.forEach((line, i) => {
            setTimeout(() => {
                const lineEl = document.createElement('div');
                lineEl.className = `line ${line.cls}`;
                lineEl.textContent = line.text;
                terminal.appendChild(lineEl);
                terminal.scrollTop = terminal.scrollHeight;
                const progress = Math.min(((i + 1) / bootLines.length) * 100, 100);
                progressBar.style.width = progress + '%';
                statusEl.textContent = line.text.replace(/\[.*?\]\s*/, '');
            }, line.delay);
        });

        setTimeout(() => {
            document.getElementById('loading-screen').classList.add('hidden');
            document.body.classList.add('loaded');
            document.body.style.overflow = '';
            document.getElementById('main-nav').classList.add('visible');
            window.scrollTo(0, 0);
            setTimeout(() => {
                initParticles();
                initScrollAnimations();
            }, 200);
        }, 4200);
    }

    // ==================== RENDER EXPERIENCE ====================
    function renderExperience() {
        const container = document.getElementById('timeline-container');
        if (!container || typeof experienceData === 'undefined') return;
        container.innerHTML = '';
        
        experienceData.forEach((item) => {
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
            container.appendChild(card);
        });
    }

    // ==================== RENDER PROJECTS (full-screen panels) ====================
    function renderProjectPanels(filter) {
        const container = document.getElementById('project-panels-container');
        if (!container || typeof projectsData === 'undefined') return;
        container.innerHTML = '';
        
        let filteredData = projectsData;
        if (filter !== 'all') {
            filteredData = projectsData.filter(p => p.category === filter);
        }

        filteredData.forEach((project) => {
            const panel = document.createElement('section');
            panel.className = 'project-panel';
            
            let imgSrc = '';
            if (project.images && project.images.length > 0) {
                const firstImage = project.images.find(img => !img.endsWith('.mp4'));
                if (firstImage) imgSrc = firstImage;
            }
            
            const techHTML = project.tech.map(t => `<span>${t}</span>`).join('');
            const detailBtnText = currentLang === 'cz' ? 'Zobrazit detail →' : 'View details →';
            
            panel.innerHTML = `
                <div class="project-panel-inner">
                    ${imgSrc ? `<div class="project-panel-visual"><img src="${imgSrc}" alt="${project.title[currentLang]}" loading="lazy"></div>` : ''}
                    <div class="project-panel-info">
                        <span class="project-panel-badge">${project.badge[currentLang]}</span>
                        <h2 class="project-panel-title">${project.title[currentLang]}</h2>
                        <p class="project-panel-desc">${project.shortDesc[currentLang]}</p>
                        <div class="project-panel-tech">${techHTML}</div>
                        <div class="project-panel-cta">
                            <button class="btn btn-primary project-detail-btn">${detailBtnText}</button>
                        </div>
                    </div>
                </div>
            `;
            
            panel.querySelector('.project-detail-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                openModal(project);
            });
            
            container.appendChild(panel);
        });
    }

    // ==================== GSAP SCROLL ANIMATIONS (VERTICAL) ====================
    function initScrollAnimations() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);
        
        // Kill all old triggers
        ScrollTrigger.getAll().forEach(t => t.kill());

        // Hero parallax fade
        gsap.to('.hero-inner', {
            scrollTrigger: {
                trigger: '.hero-cinematic',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            y: 200, opacity: 0, scale: 0.95, ease: 'none'
        });

        gsap.to('.scroll-indicator', {
            scrollTrigger: {
                trigger: '.hero-cinematic',
                start: 'top top',
                end: '30% top',
                scrub: true
            },
            opacity: 0, ease: 'none'
        });

        // Animate section titles
        gsap.utils.toArray('.section-giant-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                    end: 'top 50%',
                    scrub: 1
                },
                y: 80, opacity: 0, scale: 0.9
            });
        });

        gsap.utils.toArray('.section-subtitle').forEach(sub => {
            gsap.from(sub, {
                scrollTrigger: {
                    trigger: sub,
                    start: 'top 90%',
                    end: 'top 60%',
                    scrub: 1
                },
                y: 40, opacity: 0
            });
        });

        // Timeline cards stagger
        gsap.utils.toArray('.timeline-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    end: 'top 60%',
                    scrub: 1
                },
                y: 60, opacity: 0, scale: 0.92,
                delay: i * 0.05
            });
        });

        // Project panels: image from left, info from right (alternating)
        gsap.utils.toArray('.project-panel').forEach((panel, i) => {
            const visual = panel.querySelector('.project-panel-visual');
            const info = panel.querySelector('.project-panel-info');
            
            if (visual) {
                gsap.from(visual, {
                    scrollTrigger: {
                        trigger: panel,
                        start: 'top 85%',
                        end: 'top 40%',
                        scrub: 1
                    },
                    x: i % 2 === 0 ? -100 : 100,
                    opacity: 0, scale: 0.9
                });
            }
            
            if (info) {
                gsap.from(info, {
                    scrollTrigger: {
                        trigger: panel,
                        start: 'top 80%',
                        end: 'top 40%',
                        scrub: 1
                    },
                    x: i % 2 === 0 ? 100 : -100,
                    opacity: 0
                });
            }
        });

        ScrollTrigger.refresh();
    }

    // ==================== PARTICLES.JS ====================
    function initParticles() {
        if (typeof particlesJS === 'undefined') return;
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#3b82f6" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.4, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#3b82f6", "opacity": 0.3, "width": 1 },
                "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "window",
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "grab": { "distance": 150, "line_linked": { "opacity": 0.6 } }, "push": { "particles_nb": 2 } }
            },
            "retina_detect": true
        });
    }

    // ==================== CUSTOM CURSOR ====================
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');
    if (cursorDot && cursorOutline && window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', (e) => {
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
            cursorOutline.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 500, fill: "forwards" });
        });
        document.body.addEventListener('mouseover', (e) => {
            if (e.target.closest('a, button, .timeline-card')) cursorOutline.classList.add('hovered');
        });
        document.body.addEventListener('mouseout', (e) => {
            if (e.target.closest('a, button, .timeline-card')) cursorOutline.classList.remove('hovered');
        });
    }

    // ==================== MODAL ====================
    function openModal(project) {
        document.getElementById('modal-badge').textContent = project.badge[currentLang];
        document.getElementById('modal-title').textContent = project.title[currentLang];
        document.getElementById('modal-desc').innerHTML = project.longDesc[currentLang].replace(/\n/g, '<br>');
        document.getElementById('modal-tech').innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');
        
        const visualContainer = document.getElementById('modal-visual-container');
        if (project.images && project.images.length > 0) {
            const mediaHTML = project.images.map(media => {
                if (media.endsWith('.mp4')) {
                    return `<video playsinline controls class="video-player" style="max-width:100%;border-radius:8px;"><source src="${media}" type="video/mp4" /></video>`;
                }
                return `<img src="${media}" alt="${project.title[currentLang]}" class="carousel-img">`;
            }).join('');
            visualContainer.innerHTML = `<div class="gallery-carousel">${mediaHTML}</div>`;
            visualContainer.style.display = 'block';
            visualContainer.querySelectorAll('.video-player').forEach(v => new Plyr(v));
            visualContainer.querySelectorAll('.carousel-img').forEach(img => {
                img.addEventListener('click', () => openLightbox(img.src));
            });
        } else {
            visualContainer.innerHTML = '';
            visualContainer.style.display = 'none';
        }
        
        const linksContainer = document.getElementById('modal-links');
        if (project.links && project.links.length > 0) {
            linksContainer.innerHTML = project.links.map(link => 
                `<a href="${link.url}" target="_blank" class="btn btn-secondary"><i class="${link.icon}"></i> ${link.tooltip}</a>`
            ).join('');
            linksContainer.style.display = 'flex';
        } else {
            linksContainer.innerHTML = '';
            linksContainer.style.display = 'none';
        }
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });

    // ==================== LIGHTBOX ====================
    const lightboxOverlay = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCloseBtn = document.getElementById('lightbox-close');
    function openLightbox(src) { if (!lightboxOverlay) return; lightboxImg.src = src; lightboxOverlay.classList.add('active'); }
    function closeLightbox() { if (!lightboxOverlay) return; lightboxOverlay.classList.remove('active'); setTimeout(() => { lightboxImg.src = ''; }, 300); }
    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', (e) => { if (e.target === lightboxOverlay) closeLightbox(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (lightboxOverlay && lightboxOverlay.classList.contains('active')) closeLightbox();
            else if (modalOverlay.classList.contains('active')) closeModal();
        }
    });

    // ==================== I18N ====================
    function initLang() { updateLangUI(); applyTranslations(); }
    function updateLangUI() { langToggleBtn.querySelector('.lang-text').textContent = currentLang === 'cz' ? 'EN' : 'CZ'; }
    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key]) el.innerHTML = translations[key][currentLang];
        });
        renderExperience();
        const activeBtn = document.querySelector('.filter-btn.active');
        renderProjectPanels(activeBtn ? activeBtn.getAttribute('data-filter') : 'all');
        setTimeout(initScrollAnimations, 100);
    }
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'cz' ? 'en' : 'cz';
        localStorage.setItem('lang', currentLang);
        updateLangUI();
        applyTranslations();
    });

    // ==================== THEME ====================
    function initTheme() {
        document.documentElement.setAttribute('data-theme', currentTheme);
        const icon = themeToggleBtn.querySelector('i');
        icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        const icon = themeToggleBtn.querySelector('i');
        icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });

    // ==================== MOBILE MENU ====================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = mobileNav.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
        });
    });

    // ==================== FILTER BUTTONS ====================
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderProjectPanels(e.target.getAttribute('data-filter'));
            setTimeout(initScrollAnimations, 100);
        });
    });

    // ==================== INIT ====================
    initTheme();
    initLang();
    renderExperience();
    renderProjectPanels('all');
    runBootSequence();
});
