
        const membersData = {
            "amjad": {
                name: "Amjad Khan",
                
                photo: "/images/Amjad.jpeg"
            },
            "neelam_t": {
                name: "Neelam Thakur",
                role: "UI/UX & Frontend Specialist,Gaunwa neighbour",
                quote: " bhot dimag khapa hai, Noni jhan smart ban ",
                
                specialty: "ROLE: FRONTEND & STYLING",
                photo: "/images/Neelam thakur.jpeg"
            },
            "ayush": {
                name: "Ayush Kaushik",
                photo: "/images/Ayush kaushik.jpeg"
            },
            "neelam_k": {
                name: "Neelam Korram",
                role: ",Gaunwa ki Dost",
                quote: ".,noni  jhan muh bnate re",
                
                specialty: "ROLE: DATABASE & VALIDATION",
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
    