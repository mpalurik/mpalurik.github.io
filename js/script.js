const translations = {
    "nav-home": { cz: "Domů", en: "Home" },
    "nav-projects": { cz: "Projekty", en: "Projects" },
    "nav-contact": { cz: "Kontakt", en: "Contact" },
    "hero-greeting": { cz: "Ahoj, já jsem", en: "Hello, I am" },
    "hero-role": { cz: "Software & Hardware Developer", en: "Software & Hardware Developer" },
    "hero-bio": { 
        cz: "Věnuji se vývoji mobilních aplikací, webových řešení a propojování světa hardwaru a softwaru. Rád zkoumám nové technologie, od IoT (ESP32, Matter, KNX) přes moderní architekturu až po databázové systémy.", 
        en: "I specialize in mobile app development, web solutions, and bridging the gap between hardware and software. I love exploring new technologies, from IoT (ESP32, Matter, KNX) and modern architecture to database systems." 
    },
    "hero-btn-work": { cz: "Moje práce", en: "My Work" },
    "projects-title": { cz: "Vybrané <span>Projekty</span>", en: "Selected <span>Projects</span>" },
    "filter-all": { cz: "Vše", en: "All" },
    "filter-school": { cz: "Škola & Závěrečné práce", en: "School & Thesis" },
    "filter-mobile": { cz: "Mobilní Aplikace", en: "Mobile Apps" },
    "filter-other": { cz: "Hobby & Ostatní", en: "Hobby & Other" },
    "footer-desc": { cz: "Otevřený novým výzvám v oblasti vývoje software a IoT.", en: "Open to new challenges in software development and IoT." },
    "footer-rights": { cz: "© 2026 Michal Paluřík. Všechna práva vyhrazena.", en: "© 2026 Michal Paluřík. All rights reserved." }
};

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // STATE
    // ----------------------------------------------------
    let currentLang = localStorage.getItem('lang') || 'cz';
    let currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Elements
    const projectsContainer = document.getElementById('projects-container');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const langToggleBtn = document.getElementById('lang-toggle');
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Modal Elements
    const modalOverlay = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close');
    
    // ----------------------------------------------------
    // INIT
    // ----------------------------------------------------
    initTheme();
    initLang();
    renderProjects('all');

    // ----------------------------------------------------
    // RENDER PROJECTS
    // ----------------------------------------------------
    function renderProjects(filter) {
        projectsContainer.innerHTML = '';
        
        let filteredData = projectsData;
        if (filter !== 'all') {
            filteredData = projectsData.filter(p => p.category === filter);
        }

        filteredData.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = `project-card clickable-card`;
            card.style.animationDelay = `${index * 0.1}s`;
            
            // Build card HTML
            let visualHTML = '';
            if (project.images && project.images.length > 0) {
                visualHTML = `
                <div class="project-visual">
                    <img src="${project.images[0]}" alt="${project.title[currentLang]}" loading="lazy">
                </div>`;
            }

            let techHTML = project.tech.map(t => `<span>${t}</span>`).join('');

            card.innerHTML = `
                <div class="card-content">
                    <div class="project-header">
                        <span class="badge">${project.badge[currentLang]}</span>
                    </div>
                    <h3 class="project-title">${project.title[currentLang]}</h3>
                    <p class="project-desc">${project.shortDesc[currentLang]}</p>
                    ${visualHTML}
                    <div class="tech-stack">
                        ${techHTML}
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => openModal(project));
            projectsContainer.appendChild(card);
        });
    }

    // ----------------------------------------------------
    // FILTERS
    // ----------------------------------------------------
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderProjects(e.target.getAttribute('data-filter'));
        });
    });

    // ----------------------------------------------------
    // MODAL LOGIC
    // ----------------------------------------------------
    function openModal(project) {
        document.getElementById('modal-badge').textContent = project.badge[currentLang];
        document.getElementById('modal-title').textContent = project.title[currentLang];
        
        // Parse line breaks for long description
        const formattedDesc = project.longDesc[currentLang].replace(/\n/g, '<br>');
        document.getElementById('modal-desc').innerHTML = formattedDesc;
        
        // Tech stack
        document.getElementById('modal-tech').innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');
        
        // Image Carousel
        const visualContainer = document.getElementById('modal-visual-container');
        if (project.images && project.images.length > 0) {
            const mediaHTML = project.images.map(media => {
                if (media.endsWith('.mp4')) {
                    return `<video playsinline controls data-poster="${project.images[0]}" class="carousel-media video-player" style="max-width: 100%; border-radius: 8px;">
                                <source src="${media}" type="video/mp4" />
                            </video>`;
                } else {
                    return `<img src="${media}" alt="${project.title[currentLang]}" class="carousel-img">`;
                }
            }).join('');
            visualContainer.innerHTML = `<div class="gallery-carousel">${mediaHTML}</div>`;
            visualContainer.style.display = 'block';
            
            // Initialize Plyr for videos
            const videoElements = visualContainer.querySelectorAll('.video-player');
            videoElements.forEach(video => {
                new Plyr(video);
            });
            
            // Attach lightbox events
            const carouselImages = visualContainer.querySelectorAll('.carousel-img');
            carouselImages.forEach(img => {
                img.addEventListener('click', () => openLightbox(img.src));
            });
        } else {
            visualContainer.innerHTML = '';
            visualContainer.style.display = 'none';
        }
        
        // Links
        const linksContainer = document.getElementById('modal-links');
        if (project.links && project.links.length > 0) {
            linksContainer.innerHTML = project.links.map(link => 
                `<a href="${link.url}" target="_blank" class="btn btn-secondary" title="${link.tooltip}">
                    <i class="${link.icon}"></i> ${link.tooltip}
                </a>`
            ).join('');
            linksContainer.style.display = 'flex';
        } else {
            linksContainer.innerHTML = '';
            linksContainer.style.display = 'none';
        }

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    
    // Close modal on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (typeof lightboxOverlay !== 'undefined' && lightboxOverlay && lightboxOverlay.classList.contains('active')) {
                closeLightbox();
            } else if (modalOverlay.classList.contains('active')) {
                closeModal();
            }
        }
    });

    // ----------------------------------------------------
    // LIGHTBOX LOGIC
    // ----------------------------------------------------
    const lightboxOverlay = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCloseBtn = document.getElementById('lightbox-close');

    function openLightbox(src) {
        if (!lightboxOverlay) return;
        lightboxImg.src = src;
        lightboxOverlay.classList.add('active');
    }

    function closeLightbox() {
        if (!lightboxOverlay) return;
        lightboxOverlay.classList.remove('active');
        setTimeout(() => { lightboxImg.src = ''; }, 300); // Clear after fade out
    }

    if (lightboxCloseBtn) {
        lightboxCloseBtn.addEventListener('click', closeLightbox);
    }

    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', (e) => {
            // Close only if clicking outside the image
            if (e.target === lightboxOverlay) closeLightbox();
        });
    }

    // ----------------------------------------------------
    // I18N (LANGUAGE TOGGLE)
    // ----------------------------------------------------
    function initLang() {
        updateLangUI();
        applyTranslations();
    }

    function updateLangUI() {
        // Toggle btn shows the *other* language
        langToggleBtn.querySelector('.lang-text').textContent = currentLang === 'cz' ? 'EN' : 'CZ';
    }

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key]) {
                el.innerHTML = translations[key][currentLang];
            }
        });
        
        // Re-render active filter
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        renderProjects(activeFilter);
    }

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'cz' ? 'en' : 'cz';
        localStorage.setItem('lang', currentLang);
        updateLangUI();
        applyTranslations();
    });

    // ----------------------------------------------------
    // THEME TOGGLE
    // ----------------------------------------------------
    function initTheme() {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon();
    }

    function updateThemeIcon() {
        const icon = themeToggleBtn.querySelector('i');
        if (currentTheme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon();
    });

    // ----------------------------------------------------
    // MOBILE MENU
    // ----------------------------------------------------
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
});
