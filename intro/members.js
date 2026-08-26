// Member profiles dataset
const team = {
    amjad: {
        name: "Amjad Khan",
        role: "Full Stack Developer, Data Analytics, AI & ML and DS.",
        quote: "Turning complex data into intelligent, scalable web solutions.",
        bio: "A versatile engineer bridging the gap between robust web development and intelligent systems. I specialize in building full-stack applications, extracting data-driven insights, and deploying predictive machine learning models to solve real-world problems.",
        specialty: "AI, ML & Full Stack",
        photo: "../images/Amjad.jpeg"
    },
    neelam_t: {
        name: "Neelam Thakur",
        role: "UI/UX & Frontend Specialist",
        quote: "Designing beautiful interfaces, crafting flawless user experiences.",
        bio: "Passionate designer and developer focused on turning complex ideas into intuitive, pixel-perfect web interfaces. I bridge the gap between aesthetics and clean, modern code.",
        specialty: "UI/UX & Frontend",
        photo: "../images/Neelam thakur.jpeg"
    },
    ayush: {
        name: "Ayush Kaushik",
        role: "AI & ML and DS Specialist",
        quote: "Building tomorrow's solutions with today's data.",
        bio: "Passionate about turning massive datasets into smart, actionable strategies. Specialised in training high-accuracy machine learning models and deploying production-ready AI pipelines.",
        specialty: "AI & Data Science",
        photo: "../images/Ayush kaushik.jpeg"
    },
    neelam_k: {
        name: "Neelam Korram",
        role: "UI/UX & Frontend Specialist",
        quote: "Bringing creative visions to life through clean, modern code.",
        bio: "Frontend specialist focusing on user-centric design and pixel-perfect styling. Experienced in building accessible, interactive, and highly responsive web layouts that engage users.",
        specialty: "Frontend & Styling",
        photo: "../images/Neelam korram.jpeg"
    }
};

// Cached DOM references
const dom = {
    name: document.getElementById("memberName"),
    role: document.getElementById("memberRole"),
    quote: document.getElementById("memberQuote"),
    bio: document.getElementById("memberBio"),
    specialty: document.getElementById("memberSpecialty"),
    photo: document.getElementById("memberPhoto"),
    tabs: document.querySelectorAll(".tab")
};

// Render profile data
function updateProfile(id) {
    const member = team[id];
    if (!member) return;

    dom.name.textContent = member.name;
    dom.role.textContent = member.role;
    dom.quote.textContent = member.quote;
    dom.bio.textContent = member.bio;
    dom.specialty.textContent = member.specialty;
    dom.photo.src = member.photo;
    dom.photo.alt = `${member.name} Portrait`;

    dom.tabs.forEach(tab => {
        tab.classList.toggle("active", tab.dataset.id === id);
    });
}

// Event Listeners
dom.tabs.forEach(tab => {
    tab.addEventListener("click", () => updateProfile(tab.dataset.id));
});