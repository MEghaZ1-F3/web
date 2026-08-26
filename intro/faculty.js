// CSVTU Faculty Mentors Dataset
const facultyData = [
    {
        name: "Dr. Ankit Arora",
        tagline: "HEAD OF DEPARTMENT & ASST. PROFESSOR",
        bio: "Serving as Assistant Professor & HOD in the Department of Computer Science & Engineering at Government Engineering College, Ambikapur. Specialized in Image Processing A.I.",
        exp: "EXPERIENCE: 18 YEARS",
        qual: "PH.D.: COMPLETED (2023)",
        mtech: "M.E: CSVTU (2013)",
        btech: "B.E: PRSU RAIPUR (2008)",
        email: "AnkitArora1286@gmail.com",
        phone: "+91 7000495447",
        photo: "../images/Ankit.jpg" //  original photo ho 
    },
    {
        name: "Prof. Jasmin Minj",
        tagline: "ASSISTANT PROFESSOR (CSE)",
        bio: "Serving as Assistant Professor in the Department of Computer Science & Engineering at Government Engineering College, Ambikapur. Specialized S/W Engineering Architecture.",
        exp: "EXPERIENCE: 11 YEARS",
        mtech: "M.TECH: MNNIT ALLAHABAD (2013)",
        btech: "B.TECH: GEC BILASPUR (2010)",
        work: "WORK: ASST. PROF GEC AMBIKAPUR",
        email: "jasmine5feb@gmail.com",
        phone: "+91 9039680638",
        photo: "../images/jasmin minj.jpg" //  photo ho 
    },
    {
        name: "Dr.Mohan Rao Mamdikar",
        tagline: "ASSISTANT PROFESSOR (CSE)",
        bio: "Assistant Professor in the Department of Computer Science & Engineering. Specialized in Software Engineering, Reliability analysis of computer based system.",
        exp: "EXPERIENCE: 14+ YEARS",
         qual: "PH.D.: COMPLETED (2023)",
        mtech: "M.TECH:2013 ",
        btech: "B.E.:2006 ",
        work: "WORK: ASST. PROF GEC AMBIKAPUR",
        email: "",
        phone: "+91 8085788670",
        photo: "../images/mohan rao.jpg"
    },
    {
        name: "Assi.Prof. Pooja Patre",
        tagline: "ASSISTANT PROFESSOR (CSE)",
        bio: "Assistant Professor specialized VLSI Design Programing. ",
        exp: "EXPERIENCE: 11+ YEARS",
        mtech: "M.TECH: ",
        btech: "B.TECH: ",
        work: "WORK: ASST. PROF GEC AMBIKAPUR",
        email: "",
        phone: "+91 9560654445",
        photo: "../images/pooja patre.jpg"
    }
];

// Switch Faculty function with smooth transition
function switchFaculty(index) {
    const data = facultyData[index];
    if (!data) return;

    // 1. Update Active Pill Button State
    const pillButtons = document.querySelectorAll('.pill-btn');
    pillButtons.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });

    const showcaseContainer = document.getElementById('showcaseContainer');
    const topHeroName = document.getElementById('topHeroName');

    // 2. Smooth Fade-Out
    showcaseContainer.style.opacity = '0';
    showcaseContainer.style.transform = 'translateY(10px)';
    topHeroName.style.opacity = '0';

    setTimeout(() => {
        // 3. Update DOM Elements with exact mapped data
        topHeroName.innerText = data.name;
        document.getElementById('facTagline').innerText = data.tagline;
        document.getElementById('facName').innerText = data.name;
        document.getElementById('facBio').innerText = data.bio;
        
        document.getElementById('badgeExp').innerText = data.exp;
        document.getElementById('badgeQual').innerText = data.qual;
        document.getElementById('badgeMTech').innerText = data.mtech;
        document.getElementById('badgeBTech').innerText = data.btech;

        document.getElementById('facEmailText').innerText = data.email;
        document.getElementById('facEmailBtn').href = `mailto:${data.email}`;
        
        document.getElementById('facPhoneText').innerText = data.phone;
        document.getElementById('facPhoneBtn').href = `tel:${data.phone.replace(/[^0-9+]/g, '')}`;

        document.getElementById('facPhoto').src = data.photo;

        // 4. Smooth Fade-In
        showcaseContainer.style.opacity = '1';
        showcaseContainer.style.transform = 'translateY(0)';
        topHeroName.style.opacity = '1';
    }, 200);
}

// Initial Load on Page Open
window.addEventListener('DOMContentLoaded', () => {
    switchFaculty(0);
});