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
    "footer-rights": { cz: "© 2026 Michal Paluřík. Všechna práva vyhrazena.", en: "© 2026 Michal Paluřík. All rights reserved." },
    "contact-github": { cz: "Podívejte se na mé projekty", en: "Check out my projects" },
    "contact-linkedin": { cz: "Spojme se na LinkedInu", en: "Connect with me" }
};

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('lang') || 'cz';
    let currentTheme = localStorage.getItem('theme') || 'dark';
    const langToggleBtn = document.getElementById('lang-toggle');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const modalOverlay = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close');

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
                    (imgSrc ? '<div class="project-panel-visual"><img src="' + imgSrc + '" alt="' + project.title[currentLang] + '" loading="lazy" class="clickable-project-img"></div>' : '') +
                    '<div class="project-panel-info">' +
                        '<span class="project-panel-badge">' + project.badge[currentLang] + '</span>' +
                        '<h2 class="project-panel-title">' + project.title[currentLang] + '</h2>' +
                        '<p class="project-panel-desc">' + project.shortDesc[currentLang] + '</p>' +
                        '<div class="project-panel-tech">' + techHTML + '</div>' +
                        '<div class="project-panel-cta"><button class="btn btn-primary project-detail-btn">' + btnText + '</button></div>' +
                    '</div>' +
                '</div>';

            panel.querySelector('.project-detail-btn').addEventListener('click', () => openModal(project));
            const imgEl = panel.querySelector('.clickable-project-img');
            if (imgEl) {
                imgEl.style.cursor = 'pointer';
                imgEl.addEventListener('click', () => openModal(project));
            }
            c.appendChild(panel);
        });
    }

    // ==================== GSAP SCROLL ANIMATIONS ====================
    function initScrollAnimations() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.getAll().forEach(t => t.kill());

        // Hero parallax (keep scrub for hero parallax)
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
            gsap.fromTo(el, 
                { y: 60, opacity: 0, scale: 0.95 },
                {
                    scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 50%', scrub: 1 },
                    y: 0, opacity: 1, scale: 1, ease: 'none'
                }
            );
        });
        gsap.utils.toArray('.section-subtitle').forEach(el => {
            gsap.fromTo(el,
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 50%', scrub: 1 },
                    y: 0, opacity: 1, ease: 'none'
                }
            );
        });

        // Timeline cards (individual triggers)
        gsap.utils.toArray('.timeline-card').forEach((card, i) => {
            gsap.fromTo(card,
                { y: 50, opacity: 0, scale: 0.95 },
                {
                    scrollTrigger: { trigger: card, start: 'top 95%', end: 'top 60%', scrub: 1 },
                    y: 0, opacity: 1, scale: 1, ease: 'none'
                }
            );
        });

        // Project panels: image slides from one side, info from other
        gsap.utils.toArray('.project-panel').forEach((panel, i) => {
            const vis = panel.querySelector('.project-panel-visual');
            const info = panel.querySelector('.project-panel-info');
            
            if (vis) {
                gsap.fromTo(vis,
                    { x: i % 2 === 0 ? -100 : 100, opacity: 0, scale: 0.95 },
                    {
                        scrollTrigger: { trigger: panel, start: 'top 90%', end: 'top 45%', scrub: 1 },
                        x: 0, opacity: 1, scale: 1, ease: 'none'
                    }
                );
            }
            if (info) {
                gsap.fromTo(info,
                    { x: i % 2 === 0 ? 80 : -80, opacity: 0 },
                    {
                        scrollTrigger: { trigger: panel, start: 'top 85%', end: 'top 40%', scrub: 1 },
                        x: 0, opacity: 1, ease: 'none'
                    }
                );
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
        
        const formattedDesc = project.longDesc[currentLang]
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/`(.*?)`/g, '<code>$1</code>');
        document.getElementById('modal-desc').innerHTML = formattedDesc;
        
        document.getElementById('modal-tech').innerHTML = project.tech.map(t => '<span>' + t + '</span>').join('');

        const vc = document.getElementById('modal-visual-container');
        if (project.images && project.images.length > 0) {
            vc.innerHTML = '<div class="gallery-carousel">' + project.images.map(m => {
                if (m.endsWith('.mp4')) return '<video playsinline controls class="video-player"><source src="' + m + '" type="video/mp4"/></video>';
                return '<img src="' + m + '" alt="' + project.title[currentLang] + '" class="carousel-img">';
            }).join('') + '</div>';
            vc.style.display = 'block';
            vc.querySelectorAll('.video-player').forEach(v => new Plyr(v));
            vc.querySelectorAll('.carousel-img').forEach(img => img.addEventListener('click', () => openLightbox(img.src, project.images)));
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
    let currentGallery = [];
    let currentGalleryIndex = 0;
    const lbOverlay = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbClose = document.getElementById('lightbox-close');
    const lbPrev = document.getElementById('lightbox-prev');
    const lbNext = document.getElementById('lightbox-next');

    function openLightbox(src, gallery = []) {
        if (!lbOverlay) return;
        
        currentGallery = gallery.filter(item => !item.endsWith('.mp4'));
        
        // Find index by absolute URL matching
        const filename = src.split('/').pop();
        currentGalleryIndex = currentGallery.findIndex(item => item.endsWith(filename));
        if (currentGalleryIndex === -1) currentGalleryIndex = 0;
        
        if (currentGallery.length > 1) {
            if (lbPrev) lbPrev.style.display = 'flex';
            if (lbNext) lbNext.style.display = 'flex';
        } else {
            if (lbPrev) lbPrev.style.display = 'none';
            if (lbNext) lbNext.style.display = 'none';
        }

        lbImg.src = src;
        lbImg.style.opacity = '1';
        lbOverlay.classList.add('active');
    }
    
    function navigateLightbox(direction) {
        if (currentGallery.length <= 1) return;
        lbImg.style.opacity = '0';
        setTimeout(() => {
            currentGalleryIndex += direction;
            if (currentGalleryIndex < 0) currentGalleryIndex = currentGallery.length - 1;
            if (currentGalleryIndex >= currentGallery.length) currentGalleryIndex = 0;
            lbImg.src = currentGallery[currentGalleryIndex];
            lbImg.style.opacity = '1';
        }, 200);
    }

    function closeLightbox() {
        if (!lbOverlay) return;
        lbOverlay.classList.remove('active');
        setTimeout(() => lbImg.src = '', 300);
    }

    if (lbPrev) lbPrev.addEventListener('click', () => navigateLightbox(-1));
    if (lbNext) lbNext.addEventListener('click', () => navigateLightbox(1));
    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lbOverlay) lbOverlay.addEventListener('click', e => { if (e.target === lbOverlay) closeLightbox(); });
    
    document.addEventListener('keydown', e => {
        if (lbOverlay && lbOverlay.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
        } else if (modalOverlay.classList.contains('active') && e.key === 'Escape') {
            closeModal();
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

    // ==================== SCROLL NAVIGATION ====================
    const sections = document.querySelectorAll('section, footer');
    const navDots = document.querySelectorAll('.scroll-dot');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            const sectionTop = sec.offsetTop;
            if (scrollY >= (sectionTop - window.innerHeight / 2)) {
                current = sec.getAttribute('id');
            }
        });
        navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('href') === '#' + current) {
                dot.classList.add('active');
            }
        });
    });

    // ==================== INIT ====================
    renderExperience();
    renderProjectPanels('all');
    applyTranslations();
    
    // Matrix background initialization
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~'.split('');
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];
        for (let x = 0; x < columns; x++) drops[x] = 1;
        
        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';
            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }
        const matrixInterval = setInterval(drawMatrix, 33);
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        if (typeof gsap !== 'undefined') {
            const tl = gsap.timeline();
            const percentObj = { val: 0 };
            const percentEl = document.getElementById('loading-percent');
            
            const updatePercent = () => {
                if (percentEl) percentEl.textContent = Math.round(percentObj.val) + '%';
            };

            // 1. Text fades in
            tl.fromTo('.loading-title', 
                { opacity: 0, y: 20, color: '#e2e8f0', textShadow: '0 0 20px rgba(0, 255, 150, 0.3)' },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );
            
            // 2. Fast load to 55%
            tl.to(percentObj, { val: 55, duration: 0.8, ease: 'power1.out', onUpdate: updatePercent }, "-=0.5");
            tl.to('#loading-bar', { width: '55%', duration: 0.8, ease: 'power1.out' }, "<");
            
            // 3. Slow dramatic load to 100%
            tl.to(percentObj, { val: 100, duration: 2.2, ease: 'power2.inOut', onUpdate: updatePercent });
            tl.to('#loading-bar', { width: '100%', duration: 2.2, ease: 'power2.inOut' }, "<");

            // 4. Blend background to our primary blue accent and fade out matrix
            tl.to('#loading-screen', { 
                backgroundColor: '#3b82f6', 
                duration: 0.6,
                ease: 'power2.out'
            });
            tl.to('#matrix-canvas', { opacity: 0, duration: 0.6 }, "<");
            tl.to('.loading-title', { opacity: 0, duration: 0.6 }, "<");
            tl.to('.loading-bar-wrapper', { opacity: 0, duration: 0.6 }, "<");

            // 5. Cinematic zoom out
            tl.to('#loading-screen', {
                opacity: 0,
                scale: 1.5,
                duration: 1.2,
                ease: 'power3.inOut',
                onStart: () => clearInterval(matrixInterval),
                onComplete: () => {
                    document.getElementById('loading-screen').style.display = 'none';
                    document.body.classList.add('loaded');
                    document.getElementById('main-nav').classList.add('visible');
                    initParticles();
                    setTimeout(initScrollAnimations, 200);
                }
            }, "+=0.2");
        }
    }
});
