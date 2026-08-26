// Metadata config for CSVTU 10 Experiments
const experimentsMeta = {
    1: {
        badge: "CSVTU SYLLABUS • EXPT 06",
        title: "Student Data Schema using XML & CSS",
        desc: "Design an XML document to store information for 10 engineering students and render it with CSS styling.",
        lang: "📄 XML & CSS Source Code",
        sourcePath: "experiments/exp1/student.xml",
        previewPath: "experiments/exp1/index.html"
    },
    2: {
        badge: "CSVTU SYLLABUS • EXPT 07",
        title: "Perl CGI Server Info & UNIX Shell",
        desc: "(a) Display Server environment variables. (b) Execute UNIX commands from HTML form.",
        lang: "📄 Perl CGI (.pl) Source",
        sourcePath: "experiments/exp2/server_info.pl",
        previewPath: "experiments/exp2/index.html"
    },
    3: {
        badge: "CSVTU SYLLABUS • EXPT 08",
        title: "Perl CGI Random Greeting Generator",
        desc: "Accept username and display a random greeting selected from a list of 4 messages.",
        lang: "📄 Perl CGI (.pl) Source",
        sourcePath: "experiments/exp3/greeting.pl",
        previewPath: "experiments/exp3/index.html"
    },
    4: {
        badge: "CSVTU SYLLABUS • EXPT 09",
        title: "Perl CGI Server Digital Clock",
        desc: "Display a real-time digital clock rendering the current server timestamp.",
        lang: "📄 Perl CGI (.pl) Source",
        sourcePath: "experiments/exp4/clock.pl",
        previewPath: "experiments/exp4/index.html"
    },
    5: {
        badge: "CSVTU SYLLABUS • EXPT 10",
        title: "MySQL Table Insertion using Perl DBI",
        desc: "Insert name and age information into MySQL database and display current table records.",
        lang: "📄 Perl DBI & MySQL Source",
        sourcePath: "experiments/exp5/insert.pl",
        previewPath: "experiments/exp5/index.html"
    },
    6: {
        badge: "CSVTU SYLLABUS • EXPT 11",
        title: "Cookie Last Visited Tracker in PHP",
        desc: "Store current date-time in a cookie and display 'Last visited on' upon reopening the page.",
        lang: "📄 PHP (.php) Source Code",
        sourcePath: "experiments/exp6/cookie.php",
        previewPath: "experiments/exp6/index.html"
    },
    7: {
        badge: "CSVTU SYLLABUS • EXPT 12",
        title: "Session Page Views Counter in PHP",
        desc: "Store and auto-increment page view count across page refreshes using PHP sessions.",
        lang: "📄 PHP Session (.php) Source",
        sourcePath: "experiments/exp7/session.php",
        previewPath: "experiments/exp7/index.html"
    },
    8: {
        badge: "CSVTU SYLLABUS • EXPT 13",
        title: "XHTML Address Form & Name Query",
        desc: "XHTML user form storing address records into MySQL and retrieving data by name query.",
        lang: "📄 XHTML & PHP MySQL Source",
        sourcePath: "experiments/exp8/address_form.xhtml",
        previewPath: "experiments/exp8/index.html"
    },
    9: {
        badge: "CSVTU SYLLABUS • EXPT 14",
        title: "Library Book Database & Search",
        desc: "Capture book details into MySQL database and filter records by title dynamically.",
        lang: "📄 PHP MySQL (.php) Source",
        sourcePath: "experiments/exp9/book_search.php",
        previewPath: "experiments/exp9/index.html"
    },
    10: {
        badge: "CSVTU SYLLABUS • EXPT 15",
        title: "Amazon-Style Bookstore & JS Validation",
        desc: "Full bookstore portal featuring User Profile, Catalog, Cart, Checkout, and JS validation.",
        lang: "📄 Full-Stack Portal & JS Source",
        sourcePath: "experiments/exp10/checkout.js",
        previewPath: "experiments/exp10/index.html"
    }
};

let currentExpId = 1;

// Load experiment metadata, fetch raw source code, and load preview
function loadExperiment(id) {
    currentExpId = id;
    const exp = experimentsMeta[id];
    if (!exp) return;

    // Active state update for buttons
    const buttons = document.querySelectorAll('.exp-tab-btn');
    buttons.forEach((btn, index) => {
        if (index + 1 === id) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update Header Text
    const badgeEl = document.getElementById('exp-badge');
    const titleEl = document.getElementById('exp-title');
    const descEl = document.getElementById('exp-desc');
    const langEl = document.getElementById('code-lang-label');

    if (badgeEl) badgeEl.innerText = exp.badge;
    if (titleEl) titleEl.innerText = exp.title;
    if (descEl) descEl.innerText = exp.desc;
    if (langEl) langEl.innerText = exp.lang;

    // Fetch Source File into Code Editor
    fetch(exp.sourcePath)
        .then(response => {
            if (!response.ok) throw new Error("File not found");
            return response.text();
        })
        .then(codeText => {
            const editor = document.getElementById('code-editor');
            if (editor) editor.value = codeText;
        })
        .catch(() => {
            const editor = document.getElementById('code-editor');
            if (editor) editor.value = `/* Source file '${exp.sourcePath}' will load once created in its folder */`;
        });

    // Set preview URL in iframe
    const preview = document.getElementById('live-preview');
    if (preview) {
        preview.src = exp.previewPath;
    }
}

// Run / Reload Code
function executeCurrentCode() {
    const preview = document.getElementById('live-preview');
    if (preview && experimentsMeta[currentExpId]) {
        preview.src = experimentsMeta[currentExpId].previewPath;
    }
}

// Reset Editor
function resetSourceCode() {
    loadExperiment(currentExpId);
}

// Copy Code
function copySourceCode() {
    const editor = document.getElementById('code-editor');
    if (editor) {
        editor.select();
        navigator.clipboard.writeText(editor.value).then(() => {
            alert("Source code copied to clipboard!");
        });
    }
}

// Initial Load
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const expQuery = parseInt(urlParams.get('exp'), 10);
    if (expQuery && expQuery >= 1 && expQuery <= 10) {
        loadExperiment(expQuery);
    } else {
        loadExperiment(1);
    }
});