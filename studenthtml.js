const materials = [
    {
      title: "C++ Programming Notes",
      url: "https://documents.uow.edu.au/~akheng/WORKSHOP/C++%20Course%20Notes.pdf"
      
  
    },
    {
      title: "Python Full Course PDF",
      url: "https://www.halvorsen.blog/documents/programming/python/resources/Python%20Programming.pdf"
    },
    {
      title: "HTML & CSS Master Notes",
      url: "https://www.dcpehvpm.org/E-Content/BCA/BCA-II/Web%20Technology/the-complete-reference-html-css-fifth-edition.pdf"
    },
    {
      title: "Java for Beginners",
      url: "https://staff.um.edu.mt/__data/assets/pdf_file/0010/57169/jn.pdf"
    },
    {
      title: "Web Development Handbook",
      url: "https://mrcet.com/downloads/digital_notes/CSE/III%20Year/AIML/Full%20Stack%20Development-Digital%20Notes.pdf"
    },
    {
      title: "Cyber Security Essentials",
      url: "https://mrcet.com/pdf/Lab%20Manuals/IT/CYBER%20SECURITY%20(R18A0521).pdf"
    },
    {
      title: "SQL Database Notes",
      url: "https://faculty.cc.gatech.edu/~jarulraj/courses/4420-f21/slides/03-advanced-sql.pdf"
    },
    {
      title: "AI Intro",
      url: "https://www.dcpehvpm.org/E-Content/BCA/BCA-III/artificial_intelligence_tutorial.pdf"
    }
  ];
  
  const listContainer = document.getElementById("materialList");
  
  materials.forEach(material => {
    const div = document.createElement("div");
    div.className = "material";
  
    div.innerHTML = `
      <h3>${material.title}</h3>
      <a href="${material.url}" download>⬇ Download</a>
    `;
  
    listContainer.appendChild(div);
  });