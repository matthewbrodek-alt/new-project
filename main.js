const projectData = {
    residences: [
        {
            id: "eden",
            title: "Eden Residences",
            phase: "Phase 1",
            distance: "50m to Beach",
            img: "path-to-eden.jpg"
        },
        {
            id: "park",
            title: "Park Residences",
            phase: "Phase 2",
            distance: "300m to Beach",
            img: "path-to-park.jpg"
        },
        {
            id: "lake",
            title: "Lake Residences",
            phase: "Phase 3",
            distance: "500m to Beach",
            img: "path-to-lake.jpg"
        }
    ]
};

// 2. Отрисовка карточек
const grid = document.getElementById('residences-grid');
function renderResidences() {
    grid.innerHTML = projectData.residences.map(item => `
        <div class="residence-card group cursor-pointer overflow-hidden bg-white">
            <div class="h-[450px] overflow-hidden">
                <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover">
            </div>
            <div class="py-6">
                <p class="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-2">${item.phase}</p>
                <h3 class="text-xl font-['Montserrat'] font-light uppercase tracking-wider">${item.title}</h3>
                <p class="text-sm text-slate-500 mt-2">${item.distance}</p>
                <div class="mt-6 w-10 h-[1px] bg-black group-hover:w-full transition-all duration-700"></div>
            </div>
        </div>
    `).join('');
}

// 3. Логика Header (Scroll Effect)
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// 4. Переключатель языков (Логика i18n)
const langButtons = document.querySelectorAll('#lang-switcher button');
langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        langButtons.forEach(b => b.classList.add('opacity-50', 'no-underline'));
        e.target.classList.remove('opacity-50');
        e.target.classList.add('font-bold', 'underline');
        const selectedLang = e.target.dataset.lang;
        console.log(`Switching language to: ${selectedLang}`);
        // Здесь вызывается функция перевода контента
    });
});

// 5. Модальное окно
const modal = document.getElementById('contact-modal');
const closeBtn = document.getElementById('close-modal');

// Открытие при клике на любую кнопку Explore (делегирование)
document.addEventListener('click', (e) => {
    if (e.target.innerText.includes('Explore') || e.target.closest('.residence-card')) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
});

closeBtn.onclick = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
};

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderResidences();
});

function renderAmenities() {
    const container = document.getElementById('amenities-container');
    
    container.innerHTML = infrastructureData.map(item => `
        <div class="flex items-start space-x-6 group">
            <div class="w-12 h-12 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <img src="${item.icon}" alt="${item.title}" class="w-full h-full object-contain">
            </div>
            <div class="border-l pl-6 border-slate-100 group-hover:border-black transition-colors duration-700">
                <h4 class="text-xs uppercase tracking-[0.2em] font-bold mb-2">${item.title}</h4>
                <p class="text-sm text-slate-400 leading-relaxed font-light">
                    ${item.description}
                </p>
                <span class="inline-block mt-3 text-[10px] uppercase tracking-widest text-slate-300 font-medium">
                    ${item.category}
                </span>
            </div>
        </div>
    `).join('');
}

// Вызовите эту функцию в блоке инициализации (DOMContentLoaded)
document.addEventListener('DOMContentLoaded', () => {
    renderResidences();
    renderAmenities(); // Добавлено
});

const infrastructureData = [
    {
        id: 1,
        title: "Underground Parking",
        description: "Secure parking with direct elevator access to your floor.",
        icon: "assets/icons/parking.svg",
        category: "Safety"
    },
    {
        id: 2,
        title: "Infinity Pool",
        description: "Stunning ocean views with a dedicated sun deck and lounge area.",
        icon: "assets/icons/pool.svg",
        category: "Leisure"
    },
    {
        id: 3,
        title: "Etro Cafe",
        description: "Exclusive dining experience with interior design by Etro Home.",
        icon: "assets/icons/cafe.svg",
        category: "Lifestyle"
    },
    {
        id: 4,
        title: "Fitness & Yoga",
        description: "State-of-the-art equipment and serene spaces for mindfulness.",
        icon: "assets/icons/fitness.svg",
        category: "Health"
    },
    {
        id: 5,
        title: "Kids' Club",
        description: "Safe and engaging environment for our youngest residents.",
        icon: "assets/icons/kids.svg",
        category: "Family"
    },
    {
        id: 6,
        title: "24/7 Concierge",
        description: "Professional management to assist with any request at any time.",
        icon: "assets/icons/concierge.svg",
        category: "Service"
    }
];
