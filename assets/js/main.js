/**
 * Main Application Logic for Nugua Portfolio
 * Handles i18n, theming, interactive UI, dynamic rendering, and animations.
 * Fully optimized for Mobile, Tablet, and Desktop mode.
 */

// Global State
let currentLang = localStorage.getItem('porto_lang') || 'en';
if (!['en', 'id', 'de'].includes(currentLang)) {
    currentLang = 'en';
}

let activeProjectFilter = 'all';
let projectSearchQuery = '';
let activeTypingTimeout = null;

// ==========================================
// Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguageSwitcher();
    initMouseGlow();
    initMobileMenu();
    initBackToTop();
    initContactForm();
    initResumeModal();
    initMarquee();
    
    // Initial Render in Active Language
    applyTranslations(currentLang);
    initScrollAnimations();
});

// ==========================================
// Language (i18n) Management
// ==========================================
function getTranslation(key, lang = currentLang) {
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    if (translations['en'] && translations['en'][key]) {
        return translations['en'][key];
    }
    return key;
}

function getLocalizedField(obj, field, lang = currentLang) {
    if (!obj || !obj[field]) return '';
    if (typeof obj[field] === 'object') {
        return obj[field][lang] || obj[field]['en'] || '';
    }
    return obj[field];
}

function setLanguage(lang) {
    if (!['en', 'id', 'de'].includes(lang)) return;
    currentLang = lang;
    localStorage.setItem('porto_lang', lang);
    document.documentElement.lang = lang;

    applyTranslations(lang);
    
    // Close dropdowns
    closeAllDropdowns();

    // Show confirmation toast
    const langNames = { en: 'English', id: 'Bahasa Indonesia', de: 'Deutsch' };
    showToast(`Language set to ${langNames[lang]}`);
}

function applyTranslations(lang) {
    const t = translations[lang] || translations.en;

    // Update document title if present
    const isProjectPage = window.location.pathname.includes('project.html');
    if (isProjectPage && t.page_projects_title) {
        document.title = t.page_projects_title;
    } else if (t.page_title) {
        document.title = t.page_title;
    }

    // Update static elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // Update input placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.setAttribute('placeholder', t[key]);
        }
    });

    // Update Language UI Labels
    const langLabels = { en: '🇬🇧 EN', id: '🇮🇩 ID', de: '🇩🇪 DE' };
    const currentLangLabels = document.querySelectorAll('.current-lang-text');
    currentLangLabels.forEach(el => {
        el.textContent = langLabels[lang] || '🇬🇧 EN';
    });

    // Re-render Dynamic Sections
    renderAllDynamicComponents(lang);

    // Restart Typing effect in new language if on home page
    const typingContainer = document.getElementById('aboutTypingText');
    if (typingContainer) {
        startTypingEffect(t.about_bio_typing);
    }
}

function renderAllDynamicComponents(lang) {
    renderSteps(lang);
    renderServices(lang);
    renderExperience(lang);
    renderFeaturedProjects(lang);
    renderTestimonials(lang);
    renderProjectsPage(lang);
}

// ==========================================
// Component Renderers
// ==========================================

// 1. Render Steps / How I Work (Home Page - Responsive for Mobile & Desktop)
function renderSteps(lang) {
    const container = document.getElementById('stepContainer');
    if (!container || typeof portfolioData === 'undefined') return;

    container.innerHTML = `
        <div class="timeline-spine hidden md:block"></div>
        <div class="timeline-spine-mobile md:hidden"></div>
    `;

    portfolioData.steps.forEach((step, index) => {
        const isEven = index % 2 === 1;
        const alignClass = isEven ? 'md:justify-end' : 'md:justify-start';
        const title = getLocalizedField(step, 'title', lang);
        const desc = getLocalizedField(step, 'description', lang);

        const html = `
            <div class="w-full flex justify-end ${alignClass} relative z-10 pl-8 md:pl-0">
                <div class="step-card glass-heavy-blur p-4 sm:p-6 rounded-2xl w-full md:w-[46%] relative group cursor-pointer border border-white/5 hover:border-[#7593ff]/60" data-step="${step.step}">
                    <span class="absolute -top-2.5 -left-2.5 md:-top-3 md:-left-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#7593ff] text-white font-extrabold flex items-center justify-center text-[11px] sm:text-xs shadow-[0_0_15px_rgba(117,147,255,0.6)]">
                        0${step.step}
                    </span>
                    <div class="flex items-center gap-3 mb-2">
                        <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-200 dark:bg-slate-800/90 shadow-sm flex items-center justify-center text-[#7593ff] text-sm sm:text-base group-hover:scale-110 transition-transform shrink-0">
                            <i class="${step.icon}"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 dark:text-slate-100 text-xs sm:text-base">${title}</h4>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 text-[11px] sm:text-sm leading-relaxed">${desc}</p>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

// 2. Render Specialized Services (Home Page)
function renderServices(lang) {
    const container = document.getElementById('servicesGrid');
    if (!container || typeof portfolioData === 'undefined') return;

    container.innerHTML = '';
    portfolioData.services.forEach(srv => {
        const title = getLocalizedField(srv, 'title', lang);
        const desc = getLocalizedField(srv, 'description', lang);

        const html = `
            <div class="service-card glass-heavy-blur p-5 sm:p-6 rounded-3xl flex flex-col justify-between border border-white/5">
                <div>
                    <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#7593ff]/15 text-[#7593ff] flex items-center justify-center text-lg sm:text-xl mb-3.5 shadow-sm">
                        <i class="${srv.icon}"></i>
                    </div>
                    <h3 class="text-sm sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">${title}</h3>
                    <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">${desc}</p>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

// 3. Render Experience Timeline (Home Page)
function renderExperience(lang) {
    const container = document.getElementById('experienceContainer');
    if (!container || typeof portfolioData === 'undefined') return;

    container.innerHTML = '';
    portfolioData.experience.forEach(exp => {
        const role = getLocalizedField(exp, 'role', lang);
        const company = getLocalizedField(exp, 'company', lang);
        const desc = getLocalizedField(exp, 'description', lang);

        const html = `
            <div class="timeline-card glass-heavy-blur p-4 sm:p-7 rounded-3xl relative border-l-4 border-l-[#7593ff] border-t border-r border-b border-white/5">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 class="text-sm sm:text-lg font-bold text-slate-900 dark:text-slate-100">${role}</h4>
                    <span class="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-[#7593ff]/20 text-[#7593ff] self-start sm:self-auto">${exp.period}</span>
                </div>
                <div class="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-2">
                    <i class="fa-regular fa-building text-[#7593ff]"></i> ${company}
                </div>
                <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">${desc}</p>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

// 4. Render Featured Projects (Home Page - Responsive Grid)
function renderFeaturedProjects(lang) {
    const container = document.getElementById('featuredProjectsGrid');
    if (!container || typeof portfolioData === 'undefined') return;

    container.innerHTML = '';
    const featuredList = portfolioData.projects.filter(p => p.featured);

    featuredList.forEach(project => {
        const title = getLocalizedField(project, 'title', lang);
        const desc = getLocalizedField(project, 'shortDesc', lang);
        const badge = getLocalizedField(project, 'badgeText', lang);

        let techsHTML = '<div class="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-3">';
        project.techs.forEach(tech => {
            techsHTML += `
                <span class="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-[10px] sm:text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 border border-slate-300 dark:border-slate-700">
                    <i class="${tech.icon}"></i> ${tech.name}
                </span>
            `;
        });
        techsHTML += '</div>';

        const html = `
            <div class="project-card glass-heavy-blur p-4 sm:p-6 rounded-3xl flex flex-col justify-between border border-white/5">
                <div>
                    <div class="w-full h-32 sm:h-44 bg-slate-200 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700/80 rounded-2xl mb-3.5 sm:mb-4 overflow-hidden flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center group cursor-pointer" onclick="openProjectModal('${project.id}')">
                        <i class="${project.previewIcon} text-2xl sm:text-4xl text-[#7593ff] mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform"></i>
                        <span class="text-xs sm:text-sm font-semibold">${project.previewLabel}</span>
                    </div>

                    <div class="flex items-center justify-between gap-2 mb-2">
                        <h3 class="text-sm sm:text-xl font-bold text-slate-900 dark:text-slate-100 hover:text-[#7593ff] transition cursor-pointer" onclick="openProjectModal('${project.id}')">${title}</h3>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${project.badgeColorClass}">${badge}</span>
                    </div>

                    <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">${desc}</p>
                    ${techsHTML}
                </div>

                <div class="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                    <button onclick="openProjectModal('${project.id}')" class="soft-button-primary text-white font-semibold text-xs sm:text-sm py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer">
                        <i class="fa-solid fa-circle-info text-xs"></i> <span class="truncate">${getTranslation('projects_btn_details', lang)}</span>
                    </button>
                    <a href="${project.liveUrl}" target="_blank" class="soft-button-secondary text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:text-[#7593ff]">
                        <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i> <span class="truncate">${getTranslation('projects_btn_demo', lang)}</span>
                    </a>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

// 5. Render Testimonials (Home Page)
function renderTestimonials(lang) {
    const container = document.getElementById('testimonialsGrid');
    if (!container || typeof portfolioData === 'undefined') return;

    container.innerHTML = '';
    portfolioData.testimonials.forEach(testi => {
        const quote = getLocalizedField(testi, 'quote', lang);
        const role = getLocalizedField(testi, 'role', lang);

        const html = `
            <div class="testimonial-card glass-heavy-blur p-5 sm:p-7 rounded-3xl flex flex-col justify-between border border-white/5">
                <div class="mb-4">
                    <div class="text-[#7593ff] text-xl sm:text-2xl mb-2 sm:mb-3"><i class="fa-solid fa-quote-left"></i></div>
                    <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed italic">${quote}</p>
                </div>
                <div class="flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                    <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#7593ff]/20 text-[#7593ff] font-extrabold flex items-center justify-center text-xs shadow-sm shrink-0">
                        ${testi.initials}
                    </div>
                    <div>
                        <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">${testi.name}</h4>
                        <span class="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 block">${role} &bull; ${testi.country}</span>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

// 6. Render Projects Page (project.html - Responsive for Mobile, Tablet, Desktop)
function renderProjectsPage(lang = currentLang) {
    const container = document.getElementById('projectContainer');
    if (!container || typeof portfolioData === 'undefined') return;

    container.innerHTML = '';

    const filtered = portfolioData.projects.filter(project => {
        const matchesCategory = (activeProjectFilter === 'all' || project.category === activeProjectFilter);
        const title = getLocalizedField(project, 'title', lang).toLowerCase();
        const shortDesc = getLocalizedField(project, 'shortDesc', lang).toLowerCase();
        const fullDesc = getLocalizedField(project, 'fullDesc', lang).toLowerCase();
        const query = projectSearchQuery.toLowerCase().trim();

        const matchesSearch = !query || 
            title.includes(query) || 
            shortDesc.includes(query) || 
            fullDesc.includes(query) || 
            project.techs.some(t => t.name.toLowerCase().includes(query));

        return matchesCategory && matchesSearch;
    });

    const countIndicator = document.getElementById('projectCountIndicator');
    if (countIndicator) {
        countIndicator.textContent = `(${filtered.length})`;
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12 glass-heavy-blur rounded-3xl border border-white/5">
                <i class="fa-solid fa-folder-open text-4xl text-slate-400 mb-3 block"></i>
                <p class="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-sm mx-auto px-4">
                    ${getTranslation('projects_empty', lang)}
                </p>
            </div>
        `;
        return;
    }

    filtered.forEach(project => {
        const title = getLocalizedField(project, 'title', lang);
        const desc = getLocalizedField(project, 'shortDesc', lang);
        const badge = getLocalizedField(project, 'badgeText', lang);

        let techsHTML = '<div class="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-3 mb-2">';
        project.techs.forEach(tech => {
            techsHTML += `
                <span class="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-[10px] sm:text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 border border-slate-300 dark:border-slate-700">
                    <i class="${tech.icon}"></i> ${tech.name}
                </span>
            `;
        });
        techsHTML += '</div>';

        const html = `
            <div class="project-card glass-heavy-blur p-4 sm:p-6 rounded-3xl flex flex-col justify-between border border-white/5">
                <div>
                    <div class="w-full h-32 sm:h-44 bg-slate-200 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700/80 rounded-2xl mb-3.5 sm:mb-4 overflow-hidden flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 p-4 text-center group cursor-pointer" onclick="openProjectModal('${project.id}')">
                        <i class="${project.previewIcon} text-2xl sm:text-4xl text-[#7593ff] mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform"></i>
                        <span class="text-xs sm:text-sm font-semibold">${project.previewLabel}</span>
                    </div>

                    <div class="flex items-center justify-between gap-2 mb-2">
                        <h3 class="text-sm sm:text-xl font-bold text-slate-900 dark:text-slate-100 hover:text-[#7593ff] transition cursor-pointer" onclick="openProjectModal('${project.id}')">${title}</h3>
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${project.badgeColorClass}">${badge}</span>
                    </div>

                    <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-2">${desc}</p>
                    ${techsHTML}
                </div>

                <div class="grid grid-cols-3 gap-1.5 sm:gap-2 mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                    <button onclick="openProjectModal('${project.id}')" class="soft-button-secondary text-slate-700 dark:text-slate-200 font-semibold text-[11px] sm:text-xs py-2 px-1 sm:px-2 rounded-xl text-center flex items-center justify-center gap-1 hover:text-[#7593ff] cursor-pointer">
                        <i class="fa-solid fa-circle-info text-[10px] sm:text-xs"></i> <span class="truncate">${getTranslation('projects_btn_details', lang)}</span>
                    </button>
                    <a href="${project.githubUrl}" target="_blank" class="soft-button-secondary text-slate-700 dark:text-slate-200 font-semibold text-[11px] sm:text-xs py-2 px-1 sm:px-2 rounded-xl text-center flex items-center justify-center gap-1">
                        <i class="fa-brands fa-github text-[10px] sm:text-xs"></i> <span class="truncate">${getTranslation('projects_btn_code', lang)}</span>
                    </a>
                    <a href="${project.liveUrl}" target="_blank" class="soft-button-primary text-white font-semibold text-[11px] sm:text-xs py-2 px-1 sm:px-2 rounded-xl text-center flex items-center justify-center gap-1">
                        <i class="fa-solid fa-arrow-up-right-from-square text-[10px] sm:text-xs"></i> <span class="truncate">${getTranslation('projects_btn_demo', lang)}</span>
                    </a>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

function filterProjects(category, event) {
    activeProjectFilter = category;
    
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
        btn.classList.remove('soft-button-primary', 'text-white');
        btn.classList.add('soft-button-secondary', 'text-slate-700', 'dark:text-slate-200');
    });
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.remove('soft-button-secondary', 'text-slate-700', 'dark:text-slate-200');
        event.currentTarget.classList.add('soft-button-primary', 'text-white');
    }

    renderProjectsPage(currentLang);
}

// Search input listener for project.html
const searchInput = document.getElementById('projectSearch');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        projectSearchQuery = e.target.value;
        renderProjectsPage(currentLang);
    });
}

// ==========================================
// Project Details Modal
// ==========================================
function openProjectModal(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('projectModal');
    if (!modal) return;

    const title = getLocalizedField(project, 'title', currentLang);
    const desc = getLocalizedField(project, 'fullDesc', currentLang);
    const badge = getLocalizedField(project, 'badgeText', currentLang);
    const features = (project.features && project.features[currentLang]) || project.features?.en || [];

    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalCategoryBadge').className = `text-[10px] font-bold px-2.5 py-0.5 rounded-full ${project.badgeColorClass}`;
    document.getElementById('modalCategoryBadge').textContent = badge;
    document.getElementById('modalFullDesc').textContent = desc;

    // Render features list
    const featuresContainer = document.getElementById('modalFeaturesList');
    featuresContainer.innerHTML = '';
    features.forEach(feat => {
        featuresContainer.innerHTML += `
            <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <i class="fa-solid fa-check text-emerald-400 mt-1 shrink-0"></i>
                <span>${feat}</span>
            </li>
        `;
    });

    // Render techs
    const techsContainer = document.getElementById('modalTechsList');
    techsContainer.innerHTML = '';
    project.techs.forEach(t => {
        techsContainer.innerHTML += `
            <span class="px-2.5 py-1 rounded-xl bg-slate-200 dark:bg-slate-800 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1.5 border border-slate-300 dark:border-slate-700">
                <i class="${t.icon}"></i> ${t.name}
            </span>
        `;
    });

    // Buttons
    document.getElementById('modalLiveBtn').href = project.liveUrl;
    document.getElementById('modalCodeBtn').href = project.githubUrl;

    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
        closeResumeModal();
        closeAllDropdowns();
    }
});

// ==========================================
// Resume Modal
// ==========================================
function initResumeModal() {
    // Defined in HTML markup
}

function openResumeModal() {
    const modal = document.getElementById('resumeModal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
    const modal = document.getElementById('resumeModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

function printResume() {
    window.print();
}

// ==========================================
// Typing Effect for About Section
// ==========================================
function startTypingEffect(message) {
    const container = document.getElementById('aboutTypingText');
    if (!container) return;

    if (activeTypingTimeout) {
        clearTimeout(activeTypingTimeout);
    }

    container.innerHTML = '';
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.style.height = '1em';
    container.appendChild(cursor);

    let charIndex = 0;
    function typeChar() {
        if (charIndex < message.length) {
            const textNode = document.createTextNode(message.charAt(charIndex));
            container.insertBefore(textNode, cursor);
            charIndex++;
            activeTypingTimeout = setTimeout(typeChar, 18);
        } else {
            setTimeout(() => {
                if (cursor.parentNode) cursor.remove();
            }, 1500);
        }
    }
    typeChar();
}

// ==========================================
// Theme Management
// ==========================================
function initTheme() {
    const savedTheme = localStorage.getItem('color-theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }

    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });
}

function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
}

// ==========================================
// Language Dropdown Management
// ==========================================
function initLanguageSwitcher() {
    const toggleBtns = document.querySelectorAll('.lang-dropdown-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetId = btn.getAttribute('data-target');
            const menu = document.getElementById(targetId);
            if (menu) {
                const isHidden = menu.classList.contains('hidden');
                closeAllDropdowns();
                if (isHidden) {
                    menu.classList.remove('hidden');
                }
            }
        });
    });

    document.addEventListener('click', () => {
        closeAllDropdowns();
    });
}

function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.add('hidden');
    });
}

// ==========================================
// Mobile Menu Drawer
// ==========================================
function initMobileMenu() {
    const openBtn = document.getElementById('mobileMenuOpenBtn');
    const closeBtn = document.getElementById('mobileMenuCloseBtn');
    const drawer = document.getElementById('mobileMenuDrawer');

    if (openBtn && drawer) {
        openBtn.addEventListener('click', () => {
            drawer.classList.remove('closed');
            drawer.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeBtn && drawer) {
        closeBtn.addEventListener('click', () => {
            drawer.classList.remove('open');
            drawer.classList.add('closed');
            document.body.style.overflow = '';
        });
    }

    // Auto-close when clicking any link inside drawer
    if (drawer) {
        drawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                drawer.classList.remove('open');
                drawer.classList.add('closed');
                document.body.style.overflow = '';
            });
        });
    }
}

// ==========================================
// Mouse Glow Background (Touch & Cursor Enabled)
// ==========================================
function initMouseGlow() {
    const glow = document.getElementById('mouseGlow');
    if (!glow) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Touch support for tablets and phones
    window.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches[0]) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        }
    }, { passive: true });

    function updateGlow() {
        glowX += (mouseX - glowX) * 0.12;
        glowY += (mouseY - glowY) * 0.12;
        glow.style.setProperty('--x', `${glowX}px`);
        glow.style.setProperty('--y', `${glowY}px`);
        requestAnimationFrame(updateGlow);
    }
    requestAnimationFrame(updateGlow);
}

// ==========================================
// Marquee Cloner
// ==========================================
function initMarquee() {
    const track = document.getElementById('marqueeTrack');
    const group1 = document.getElementById('marqueeGroup1');

    if (track && group1) {
        for (let i = 0; i < 3; i++) {
            const clone = group1.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
        }
        const groupWidth = group1.offsetWidth + 20;
        track.style.setProperty('--marquee-scroll-width', `-${groupWidth}px`);
    }
}

// ==========================================
// Scroll Animations & Stats Counter
// ==========================================
function initScrollAnimations() {
    const boxes = document.querySelectorAll('.scroll-fade-box');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // If this is the stats counter section, animate the numbers
                if (entry.target.id === 'statsSection') {
                    animateStats();
                }
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px'
    });

    boxes.forEach(box => observer.observe(box));
}

let statsAnimated = false;
function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;

    const counters = document.querySelectorAll('.stat-counter');
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target')) || 0;
        const suffix = counter.getAttribute('data-suffix') || '';
        const isDecimal = target % 1 !== 0;
        const duration = 1200;
        const startTime = performance.now();

        function step(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = target * easeOut;

            counter.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                counter.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
            }
        }
        requestAnimationFrame(step);
    });
}

// ==========================================
// Back To Top Button
// ==========================================
function initBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// Contact Form & Utilities
// ==========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('contactName')?.value.trim();
        const email = document.getElementById('contactEmail')?.value.trim();
        const subject = document.getElementById('contactSubject')?.value.trim();
        const message = document.getElementById('contactMessage')?.value.trim();

        if (!name || !email || !message) {
            showToast(getTranslation('contact_form_empty', currentLang), 'error');
            return;
        }

        // Create mailto link
        const recipient = 'nugua@example.com';
        const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject || 'Collaboration'} - from ${name}`);
        const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        
        window.location.href = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

        showToast(getTranslation('contact_form_success', currentLang), 'success');
        form.reset();
    });
}

function copyEmailAddress() {
    const email = 'nugua@example.com';
    navigator.clipboard.writeText(email).then(() => {
        showToast(getTranslation('contact_email_copied', currentLang), 'success');
    }).catch(() => {
        showToast(`Email: ${email}`, 'info');
    });
}

function openWhatsAppChat() {
    const phone = '6281234567890';
    const text = encodeURIComponent('Hello Nugua! I saw your portfolio and would like to discuss a project with you.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

// ==========================================
// Toast Notification System
// ==========================================
let toastTimeout = null;
function showToast(message, type = 'info') {
    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');
    const toastIcon = document.getElementById('toastIcon');

    if (!toast || !toastMsg) return;

    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }

    toastMsg.textContent = message;

    if (toastIcon) {
        if (type === 'success') {
            toastIcon.className = 'fa-solid fa-circle-check text-emerald-400 text-base';
        } else if (type === 'error') {
            toastIcon.className = 'fa-solid fa-circle-exclamation text-rose-400 text-base';
        } else {
            toastIcon.className = 'fa-solid fa-circle-info text-[#7593ff] text-base';
        }
    }

    toast.classList.add('show');
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3200);
}
