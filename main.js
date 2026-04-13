const translations = {
    en: {
        "nav-philosophy": "Philosophy", "nav-residences": "Residences", "nav-infrastructure": "Infrastructure", "nav-team": "Team",
        "hero-title": "A NEW STANDARD OF LUXURY", "hero-subtitle": "Architecture with Meaning", "btn-explore": "Explore the Concept",
        "philosophy-label": "Our Approach", "philosophy-title": "Evolving beyond traditional luxury spaces",
        "philosophy-text": "We believe that a project is not just a result, but a step towards a new lifestyle scenario.",
        "modal-title": "Request Info", "btn-send": "Send Request"
    },
    ru: {
        "nav-philosophy": "Философия", "nav-residences": "Резиденции", "nav-infrastructure": "Инфраструктура", "nav-team": "Сотрудники",
        "hero-title": "НОВЫЙ СТАНДАРТ РОСКОШИ", "hero-subtitle": "Архитектура со смыслом", "btn-explore": "Исследовать концепцию",
        "philosophy-label": "Наш подход", "philosophy-title": "Развитие за пределами традиционной роскоши",
        "philosophy-text": "Мы верим, что проект — это не просто результат, а шаг к новому сценарию жизни.",
        "modal-title": "Оставить заявку", "btn-send": "Отправить"
    }
};

const projectData = {
    residences: [
        { title: "Eden Residences", phase: "Phase 1", img: "eden-render.jpg" },
        { title: "Park Residences", phase: "Phase 2", img: "park-render.jpg" },
        { title: "Lake Residences", phase: "Phase 3", img: "lake-render.jpg" }
    ],
    infrastructure: [
        { title: "Parking", description: "Secure access.", icon: "parking.svg", category: "Safety" },
        { title: "Pool", description: "Ocean views.", icon: "pool.svg", category: "Leisure" },
        { title: "Cafe", description: "Interior by Etro.", icon: "cafe.svg", category: "Lifestyle" },
        { title: "Fitness", description: "Modern gym.", icon: "fitness.svg", category: "Health" },
        { title: "Concierge", description: "24/7 Service.", icon: "concierge.svg", category: "Service" },
        { title: "Kids' Club", description: "Eco-play area.", icon: "kids.svg", category: "Family" }
    ],
    team: [
        { name: "Andrus Bezdar", role: "Founder", img: "eden-render.jpg" },
        { name: "Alexey Korablyov", role: "Architect", img: "park-render.jpg" },
        { name: "Olga Romanova", role: "Manager", img: "lake-render.jpg" },
        { name: "Anna Petrova", role: "Designer", img: "eden-render.jpg" }
    ]
};

function renderAll() {
    document.getElementById('residences-grid').innerHTML = projectData.residences.map(item => `
        <div class="residence-card group cursor-pointer reveal">
            <div class="h-[500px] overflow-hidden bg-slate-100"><img src="${item.img}" class="w-full h-full object-cover"></div>
            <div class="py-8"><span class="text-[10px] uppercase tracking-[0.4em] text-slate-400">${item.phase}</span><h3 class="text-xl font-light mt-2 uppercase">${item.title}</h3></div>
        </div>
    `).join('');

    document.getElementById('amenities-container').innerHTML = projectData.infrastructure.map(item => `
        <div class="flex items-start space-x-6 group reveal">
            <img src="${item.icon}" class="w-10 h-10 object-contain grayscale group-hover:grayscale-0">
            <div class="border-l pl-6 border-slate-100 group-hover:border-black transition-all duration-700">
                <h4 class="text-[11px] uppercase tracking-widest font-bold mb-2">${item.title}</h4>
                <p class="text-sm text-slate-400 font-light">${item.description}</p>
            </div>
        </div>
    `).join('');

    document.getElementById('team-grid').innerHTML = projectData.team.map(member => `
        <div class="team-card reveal group cursor-pointer">
            <div class="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 mb-6 bg-slate-200">
                <img src="${member.img}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
            </div>
            <h4 class="text-sm font-bold uppercase tracking-widest">${member.name}</h4>
            <p class="text-[10px] uppercase text-slate-400 tracking-widest">${member.role}</p>
        </div>
    `).join('');
}

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
}

function reveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('active');
    });
}

// Menu Toggle Logic
const menuToggle = document.getElementById('menu-toggle');
const overlayMenu = document.getElementById('overlay-menu');
menuToggle.onclick = () => {
    menuToggle.classList.toggle('open');
    overlayMenu.classList.toggle('open');
    document.body.style.overflow = overlayMenu.classList.contains('open') ? 'hidden' : '';
};

window.onscroll = () => {
    document.getElementById('main-header').classList.toggle('header-scrolled', window.scrollY > 50);
    reveal();
};

document.querySelectorAll('.lang-btn').forEach(btn => btn.onclick = () => setLanguage(btn.dataset.lang));
document.getElementById('close-modal').onclick = () => document.getElementById('contact-modal').classList.add('hidden');

document.addEventListener('DOMContentLoaded', () => { renderAll(); setLanguage('en'); reveal(); });
