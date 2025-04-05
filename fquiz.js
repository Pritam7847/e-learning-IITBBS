document.addEventListener("DOMContentLoaded", () => {
    const assignmentForm = document.getElementById("assignmentForm");
    const quizForm = document.getElementById("quizForm");
    const assignmentList = document.getElementById("assignmentList");
    const quizList = document.getElementById("quizList");
    const toggleDarkMode = document.getElementById("toggleDarkMode");

    // Load saved data from localStorage
    const loadFromStorage = (key, container) => {
        const items = JSON.parse(localStorage.getItem(key)) || [];
        items.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = item;
            container.appendChild(card);
        });
    };

    loadFromStorage("assignments", assignmentList);
    loadFromStorage("quizzes", quizList);

    // Save card to localStorage
    const saveToStorage = (key, htmlContent) => {
        const items = JSON.parse(localStorage.getItem(key)) || [];
        items.push(htmlContent);
        localStorage.setItem(key, JSON.stringify(items));
    };

    // Handle Assignment Upload
    assignmentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = document.getElementById("assignmentTitle").value;
        const dueDate = document.getElementById("dueDate").value;

        if (title && dueDate) {
            const html = `<strong>${title}</strong><br>📅 Due: ${dueDate}`;
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = html;
            assignmentList.appendChild(card);
            saveToStorage("assignments", html);
            assignmentForm.reset();
        }
    });

    // Handle Quiz Creation
    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const quizTitle = document.getElementById("quizTitle").value;
        const question = document.getElementById("quizQuestion").value;

        if (quizTitle && question) {
            const html = `<strong>${quizTitle}</strong><br>❓ ${question}`;
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = html;
            quizList.appendChild(card);
            saveToStorage("quizzes", html);
            quizForm.reset();
        }
    });

    // Dark Mode Toggle
    toggleDarkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
