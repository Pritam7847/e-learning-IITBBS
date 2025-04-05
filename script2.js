const courses = [
    { title: "Intro to C++", department: "C++", credits: 4, faculty: "Dr. Mehta" },
    { title: "Advanced Python", department: "Python", credits: 3, faculty: "Prof. Iyer" },
    { title: "HTML Fundamentals", department: "HTML & CSS", credits: 2, faculty: "Ms. Kaur" },
    { title: "Java Programming", department: "Java", credits: 4, faculty: "Mr. Singh" },
    { title: "Full Stack Web", department: "WebDevelopment", credits: 4, faculty: "Dr. Reddy" },
    { title: "Cybersecurity", department: "Cybersecurity", credits: 3, faculty: "Prof. Khan" },
    { title: "SQL for Data", department: "SQL", credits: 2, faculty: "Dr. Bose" },
    { title: "AI", department: "AI", credits: 4, faculty: "Dr. Joshi" },
  ];
  
  const departmentDescriptions = {
    "C++": "C++ is a powerful general-purpose programming language used in systems and competitive programming.",
    "Python": "Python is a versatile language used for web development, data science, AI, and more.",
    "HTML & CSS": "HTML is the structure and CSS the style of web pages. These are core skills for web development.",
    "Java": "Java is a popular object-oriented language, essential for enterprise and Android app development.",
    "WebDevelopment": "Web Development covers full stack technologies for creating dynamic websites and apps.",
    "Cybersecurity": "Cybersecurity addresses protection from digital threats and vulnerabilities.",
    "SQL": "SQL is used to manage and manipulate databases in web and enterprise applications.",
    "AI": "AI & Machine Learning focuses on building intelligent systems and predictive models from data.",
  };
  
  function renderCourses(filter = "all") {
    const container = document.getElementById("courseContainer");
    container.innerHTML = "";
  
    if (filter !== "all" && departmentDescriptions[filter]) {
      container.innerHTML += `
        <div class="description">
          <strong>About ${filter}:</strong> ${departmentDescriptions[filter]}
        </div>
      `;
    }
  
    const filtered = filter === "all" ? courses : courses.filter(c => c.department === filter);
    filtered.forEach(course => {
      container.innerHTML += `
        <div class="course">
          <h2>${course.title}</h2>
          <p><strong>Domain:</strong> ${course.department}</p>
          <p><strong>Credits:</strong> ${course.credits}</p>
          <p><strong>Faculty:</strong> ${course.faculty}</p>
        </div>
      `;
    });
  }
  
  document.getElementById("departmentFilter").addEventListener("change", (e) => {
    renderCourses(e.target.value);
  });
  
  window.onload = () => renderCourses();
  