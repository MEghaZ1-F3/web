// 4 Team Members Database
const membersData = [
    {
        name: "Amjad Khan",
        tagline: "FULL STACK & BACKEND LEAD",
        bio: "7th Semester Computer Science undergraduate at GEC Ambikapur. Specialized in full-stack architecture, XML schemas, and Perl CGI scripting implementations.",
        branch: "BRANCH: CSE",
        sem: "SEMESTER: 7TH",
        roll: "ROLL: 3010203001",
        photo: "../images/Amjad.jpeg"
    },
    {
        name: "Neelam Thakur",
        tagline: "UI/UX & FRONTEND DEVELOPER",
        bio: "7th Semester Computer Science undergraduate at GEC Ambikapur. Focused on responsive interface design, CSS grid styling, and interactive client validations.",
        branch: "BRANCH: CSE",
        sem: "SEMESTER: 7TH",
        roll: "ROLL: 3010203002",
        photo: "../images/Neelam thakur.jpeg"
    },
    {
        name: "Ayush Kaushik",
        tagline: "DATABASE & PHP SPECIALIST",
        bio: "7th Semester Computer Science undergraduate at GEC Ambikapur. Implementing MySQL persistence layers, PHP session states, and query handling algorithms.",
        branch: "BRANCH: CSE",
        sem: "SEMESTER: 7TH",
        roll: "ROLL: 3010203003",
        photo: "../images/Ayush kaushik.jpeg"
    },
    {
        name: "Neelam Korram",
        tagline: "SYSTEMS & TESTING ANALYST",
        bio: "7th Semester Computer Science undergraduate at GEC Ambikapur. Specialized in UNIX shell environment diagnostics, Perl execution workflows, and testing.",
        branch: "BRANCH: CSE",
        sem: "SEMESTER: 7TH",
        roll: "ROLL: 3010203004",
        photo: "../images/Neelam korram.jpeg"
    }
];

// Switch Member Profile smoothly
function switchMember(index) {
    const member = membersData[index];
    if (!member) return;

    // Active pill state
    const pillButtons = document.querySelectorAll('.pill-btn');
    pillButtons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });

    const topHeroName = document.getElementById('topHeroName');
    const showcase = document.getElementById('memberShowcase');

    if (showcase) {
        showcase.style.opacity = '0';
    }

    setTimeout(() => {
        if (topHeroName) topHeroName.innerText = member.name;
        
        document.getElementById('memberTagline').innerText = member.tagline;
        document.getElementById('memberName').innerText = member.name;
        document.getElementById('memberBio').innerText = member.bio;
        document.getElementById('memberBranch').innerText = member.branch;
        document.getElementById('memberSem').innerText = member.sem;
        document.getElementById('memberRoll').innerText = member.roll;
        
        const photoEl = document.getElementById('memberPhoto');
        if (photoEl) photoEl.src = member.photo;

        if (showcase) {
            showcase.style.opacity = '1';
        }
    }, 150);
}

// Initial Load
window.addEventListener('DOMContentLoaded', () => {
    switchMember(0);
});