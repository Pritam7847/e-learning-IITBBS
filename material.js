const notes = [
    {
      title: "C++ Complete Notes",
      course: "C++",
      pdf: "https://documents.uow.edu.au/~akheng/WORKSHOP/C++%20Course%20Notes.pdf"
    },
    {
      title: "Python Programming Guide",
      course: "Python",
      pdf: "https://www.halvorsen.blog/documents/programming/python/resources/Python%20Programming.pdf"
    },
    {
      title: "HTML & CSS Crash Course",
      course: "HTML & CSS",
      pdf: "https://www.dcpehvpm.org/E-Content/BCA/BCA-II/Web%20Technology/the-complete-reference-html-css-fifth-edition.pdf"
    },
    {
      title: "Java Notes for Beginners",
      course: "Java",
      pdf: "https://staff.um.edu.mt/__data/assets/pdf_file/0010/57169/jn.pdf"
    },
    {
      title: "Web Development Handbook",
      course: "Web Development",
      pdf: "https://mrcet.com/downloads/digital_notes/CSE/III%20Year/AIML/Full%20Stack%20Development-Digital%20Notes.pdf"
    },
    {
      title: "Cyber Security Essentials",
      course: "Cyber Security",
      pdf: "https://mrcet.com/pdf/Lab%20Manuals/IT/CYBER%20SECURITY%20(R18A0521).pdf"
    },
    {
      title: "SQL Notes",
      course: "SQL",
      pdf: "https://faculty.cc.gatech.edu/~jarulraj/courses/4420-f21/slides/03-advanced-sql.pdf"
    },
    {
      title: "AI Fundamentals",
      course: "Artificial Intelligence",
      pdf: "https://www.dcpehvpm.org/E-Content/BCA/BCA-III/artificial_intelligence_tutorial.pdf"
    }
  ];
  
  const notesList = document.getElementById("notesList");
  const searchInput = document.getElementById("searchInput");
  const themeToggle = document.getElementById("themeToggle");
  
  function encodeId(str) {
    return btoa(str).replace(/=/g, "");
  }
  
  function displayNotes(notesArray) {
    notesList.innerHTML = "";
    notesArray.forEach(note => {
      const encodedId = encodeId(note.pdf);
      const views = localStorage.getItem(`view-count-${encodedId}`) || 0;
  
      const card = document.createElement("div");
      card.className = "note-card";
  
      card.innerHTML = `
        <h3>${note.title}</h3>
        <p><strong>Course:</strong> ${note.course}</p>
        <iframe src="${note.pdf}" onload="trackView('${note.pdf}')"></iframe>
        <p class="view-count">👁 Views: <span id="view-${encodedId}">${views}</span></p>
        <a href="${note.pdf}" download class="download-btn">⬇ Download</a>
      `;
  
      notesList.appendChild(card);
    });
  }
  
  function trackView(link) {
    const encodedId = encodeId(link);
    let views = localStorage.getItem(`view-count-${encodedId}`) || 0;
    views = parseInt(views) + 1;
    localStorage.setItem(`view-count-${encodedId}`, views);
  
    const counter = document.getElementById(`view-${encodedId}`);
    if (counter) counter.textContent = views;
  }
  
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = notes.filter(
      note =>
        note.course.toLowerCase().includes(keyword) ||
        note.title.toLowerCase().includes(keyword)
    );
    displayNotes(filtered);
  });
  
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  // Initial render
  displayNotes(notes);
  