document.addEventListener("DOMContentLoaded", () => {
    const courseForm = document.getElementById("courseForm");
    const courseList = document.getElementById("courseList");
    const searchInput = document.getElementById("searchInput");
    const darkModeToggle = document.getElementById("darkModeToggle");
    
    let courses = [];
  
    // Dark Mode Toggle
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.innerHTML = document.body.classList.contains("dark-mode") ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
  
    courseForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const title = document.getElementById("courseTitle").value;
        const description = document.getElementById("courseDescription").value;
        const videoFile = document.getElementById("videoUpload").files[0];
        const pdfFile = document.getElementById("pdfUpload").files[0];
  
        const newCourse = {
            title,
            description,
            video: videoFile ? URL.createObjectURL(videoFile) : null,
            pdf: pdfFile ? URL.createObjectURL(pdfFile) : null
        };
  
        courses.push(newCourse);
        renderCourses();
        courseForm.reset();
    });
  
    function renderCourses() {
        courseList.innerHTML = "";
        courses.forEach((course, index) => {
            const div = document.createElement("div");
            div.classList.add("course-card");
            div.innerHTML = `
                <strong>${course.title}</strong> 
                <p>${course.description}</p>
                ${course.video ? <video src="${course.video}" controls width="100%"></video> : ""}
                ${course.pdf ? <a href="${course.pdf}" target="_blank">📄 View PDF</a> : ""}
                <button class="delete-btn" onclick="deleteCourse(${index})">Delete</button>
            `;
            courseList.appendChild(div);
        });
    }
  
    window.deleteCourse = (index) => {
        courses.splice(index, 1);
        renderCourses();
    };
  
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        document.querySelectorAll(".course-card").forEach((item) => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm) ? "block" : "none";
        });
    });
  });