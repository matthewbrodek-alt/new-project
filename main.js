const projectData = {
    residences: [
        {
            title: "Eden Residences",
            phase: "Phase 1",
            distance: "50m to Beach",
            img: "eden-render.jpg" // Имя из вашего репозитория
        },
        {
            title: "Park Residences",
            phase: "Phase 2",
            distance: "300m to Beach",
            img: "park-render.jpg"
        },
        {
            title: "Lake Residences",
            phase: "Phase 3",
            distance: "500m to Beach",
            img: "lake-render.jpg"
        }
    ],
    infrastructure: [
        {
            title: "Underground Parking",
            description: "Secure parking with direct elevator access.",
            icon: "parking.svg", // Имя из репозитория
            category: "Safety"
        },
        {
            title: "Infinity Pool",
            description: "Olympic-sized pool with ocean views.",
            icon: "pool.svg",
            category: "Leisure"
        },
        {
            title: "Etro Cafe",
            description: "Artistic dining space by Etro Home.",
            icon: "cafe.svg",
            category: "Lifestyle"
        },
        {
            title: "Fitness & Yoga",
            description: "Modern gym and outdoor yoga decks.",
            icon: "fitness.svg",
            category: "Health"
        },
        {
            title: "Concierge 24/7",
            description: "Personal assistance for any request.",
            icon: "concierge.svg",
            category: "Service"
        },
        {
            title: "Kids' Club",
            description: "Eco-friendly play areas for education.",
            icon: "kids.svg",
            category: "Family"
        }
    ]
};

function renderContent() {
    const resGrid = document.getElementById('residences-grid');
    const amenGrid = document.getElementById('amenities-container');

    resGrid.innerHTML = projectData.residences.map(item => `
        <div class="residence-card group cursor-pointer">
            <div class="h-[500px] overflow-hidden bg-slate-100">
                <img src="${item.img}" class="w-full h-full object-cover">
            </div>
            <div class="py-8">
                <span class="text-[10px] uppercase tracking-[0.4em] text-slate-400">${item.phase}</span>
                <h3 class="text-xl font-['Montserrat'] font-light uppercase tracking-widest mt-2">${item.title}</h3>
                <p class="text-xs text-slate-500 mt-2 italic">${item.distance}</p>
            </div>
        </div>
    `).join('');

    amenGrid.innerHTML = projectData.infrastructure.map(item => `
        <div class="flex items-start space-x-6 group">
            <img src="${item.icon}" class="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all">
            <div class="border-l pl-6 border-slate-100 group-hover:border-black transition-all duration-700">
                <h4 class="text-[11px] uppercase tracking-widest font-bold mb-2">${item.title}</h4>
                <p class="text-sm text-slate-400 font-light">${item.description}</p>
            </div>
        </div>
    `).join('');
}

window.addEventListener('scroll', () => {
    document.getElementById('main-header').classList.toggle('header-scrolled', window.scrollY > 50);
});

const modal = document.getElementById('contact-modal');
document.addEventListener('click', (e) => {
    if (e.target.closest('.residence-card') || e.target.innerText === 'EXPLORE EDEN') {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
});

document.getElementById('close-modal').onclick = () => {
    modal.classList.replace('flex', 'hidden');
};

document.addEventListener('DOMContentLoaded', renderContent);
