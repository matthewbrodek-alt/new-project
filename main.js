const projectData = {
    residences: [
        {
            id: "eden",
            title: "Eden Residences",
            phase: "Phase 1",
            distance: "50m to Beach",
            img: "assets/img/eden-render.jpg"
        },
        {
            id: "park",
            title: "Park Residences",
            phase: "Phase 2",
            distance: "300m to Beach",
            img: "assets/img/park-render.jpg"
        },
        {
            id: "lake",
            title: "Lake Residences",
            phase: "Phase 3",
            distance: "500m to Beach",
            img: "assets/img/lake-render.jpg"
        }
    ],
    infrastructure: [
        {
            id: 1,
            title: "Underground Parking",
            description: "Secure parking with direct elevator access to your private residence.",
            icon: "assets/icons/parking.svg",
            category: "Safety"
        },
        {
            id: 2,
            title: "Infinity Pool",
            description: "Olympic-sized pool with panoramic views of Bang Tao Bay.",
            icon: "assets/icons/pool.svg",
            category: "Leisure"
        },
        {
            id: 3,
            title: "Etro Cafe",
            description: "Artistic dining space featuring furniture and decor by Etro Home.",
            icon: "assets/icons/cafe.svg",
            category: "Lifestyle"
        },
        {
            id: 4,
            title: "Fitness & Yoga",
            description: "Professional equipment and outdoor yoga decks integrated into nature.",
            icon: "assets/icons/fitness.svg",
            category: "Health"
        },
        {
            id: 5,
            title: "Concierge 24/7",
            description: "Personalized assistance for bookings, transport, and private events.",
            icon: "assets/icons/concierge.svg",
            category: "Service"
        },
        {
            id: 6,
            title: "Kids' Club",
            description: "Eco-friendly play areas designed for creative and safe education.",
            icon: "assets/icons/kids.svg",
            category: "Family"
        }
    ]
};

// --- 2. CORE FUNCTIONS ---

// Render Residences
function renderResidences() {
    const grid = document.getElementById('residences-grid');
    if (!grid) return;
    
    grid.innerHTML = projectData.residences.map(item => `
        <div class="residence-card group cursor-pointer">
            <div class="relative h-[500px] overflow-hidden bg-slate-200">
                <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110">
                <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div class="py-8">
                <span class="text-[10px] uppercase tracking-[0.4em] text-slate-400">${item.phase}</span>
                <h3 class="text-xl font-['Montserrat'] font-light uppercase tracking-widest mt-2">${item.title}</h3>
                <p class="text-xs text-slate-500 mt-3 font-light italic">${item.distance}</p>
                <div class="mt-8 w-12 h-[1px] bg-black group-hover:w-full transition-all duration-1000"></div>
            </div>
        </div>
    `).join('');
}

// Render Infrastructure
function renderAmenities() {
    const container = document.getElementById('amenities-container');
    if (!container) return;
    
    container.innerHTML = projectData.infrastructure.map(item => `
        <div class="amenity-card flex items-start space-x-8 group">
            <div class="icon-wrapper w-10 h-10 flex-shrink-0 transition-transform duration-500">
                <img src="${item.icon}" alt="${item.title}" class="w-full h-full object-contain grayscale group-hover:grayscale-0">
            </div>
            <div class="border-l pl-8 border-slate-100 group-hover:border-slate-900 transition-colors duration-1000">
                <h4 class="text-[11px] uppercase tracking-[0.2em] font-bold mb-3 text-slate-800">${item.title}</h4>
                <p class="text-sm text-slate-400 leading-relaxed font-light mb-4">
                    ${item.description}
                </p>
                <span class="text-[9px] uppercase tracking-[0.3em] text-slate-300 font-medium">
                    ${item.category}
                </span>
            </div>
        </div>
    `).join('');
}

// Header & Navigation Logic
function handleHeader() {
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

// Modal Logic
function handleModal() {
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.getElementById('close-modal');

    document.addEventListener('click', (e) => {
        // Открытие по кнопкам Explore или карточкам
        if (e.target.closest('.residence-card') || (e.target.tagName === 'BUTTON' && e.target.innerText.includes('EXPLORE'))) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden'; // Lock scroll
        }
    });

    closeBtn.onclick = () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    };

    // Close on background click
    modal.onclick = (e) => {
        if (e.target === modal) closeBtn.onclick();
    };
}

// --- 3. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderResidences();
    renderAmenities();
    handleHeader();
    handleModal();
});
