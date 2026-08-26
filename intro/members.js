
        const membersData = {
            "amjad": {
                name: "Amjad Khan",
                role: "Full stack Developer, Data analytics, AI & ML and Ds.",
                quote: "Turning complex data into intelligent, scalable web solutions.",
                bio: "A versatile engineer bridging the gap between robust web development and intelligent systems. I specialize in building full-stack applications, extracting data-driven insights, and deploying predictive machine learning models to solve real-world problems.",
                speciality: "End-to-End Web Apps, Predictive Modeling, Data Visualization, Deep Learning, API Integration",
                photo: "/images/Amjad.jpeg"
            },
            "neelam_t": {
                name: "Neelam Thakur",
                role: "UI/UX & Frontend Specialist.",
                quote: "Designing beautiful interfaces, crafting flawless user experiences.",
                bio: "Passionate designer and developer focused on turning complex ideas into intuitive, pixel-perfect web interfaces. I bridge the gap between aesthetics and clean, modern code.",
                specialty: "UI/UX Design, Responsive Layouts, Frontend Frameworks, Component Styling",
                photo: "/images/Neelam thakur.jpeg"
            },
            "ayush": {
                name: "Ayush Kaushik",
                role: "AI & ML and DS",
                quote: "Building tomorrow's solutions with today's data.",
                bio: "Passionate about turning massive datasets into smart, actionable strategies. Specialised in training high-accuracy machine learning models and deploying production-ready AI pipelines.",
                speciality: "Machine Learning, Data Engineering, Python Ecosystem, Neural Networks, Data Mining",
                photo: "/images/Ayush kaushik.jpeg"
            },
            "neelam_k": {
                name: "Neelam Korram",
                role: "UI/UX & Frontend Specialist .",
                quote: "Bringing creative visions to life through clean, modern code.",
                bio: "Frontend specialist focusing on user-centric design and pixel-perfect styling. Experienced in building accessible, interactive, and highly responsive web layouts that engage users.",
                specialty: "Advanced Styling, Prototyping, Frontend Architecture, UI Interactions",
                photo: "/images/Neelam korram.jpeg"
            }
        };

        function switchMember(key) {
            const data = membersData[key];
            if (!data) return;

            // Update Text Elements
            document.getElementById("display-name").innerText = data.name;
            document.getElementById("member-role").innerText = data.role;
            document.getElementById("member-quote").innerText = data.quote;
            document.getElementById("member-bio").innerText = data.bio;
            document.getElementById("pill-role").innerText = data.specialty;
            
            // Update Photo
            document.getElementById("member-photo").src = data.photo;

            // Update Active Tab Pill
            const buttons = document.querySelectorAll(".tab-btn");
            buttons.forEach(btn => btn.classList.remove("active"));
            event.target.classList.add("active");
        }
    