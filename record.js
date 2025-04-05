const videos = [
    {
      title: "Intro to C++ Programming",
      course: "C++",
      link: "https://www.youtube.com/embed/vLnPwxZdW4Y"
    },
    {
      title: "Getting Started with Python",
      course: "Python",
      link: "https://www.youtube.com/embed/rfscVS0vtbw"
    },
    {
      title: "HTML Crash Course",
      course: "HTML & CSS",
      link: "https://www.youtube.com/embed/mU6anWqZJcc"
    },
    {
      title: "Java Full Course for Beginners",
      course: "Java",
      link: "https://www.youtube.com/embed/grEKMHGYyns"
    },
    {
      title: "Intro to Web Development",
      course: "Web Development",
      link: "https://www.youtube.com/embed/UB1O30fR-EE"
    },
    {
      title: "Cyber Security Full Course",
      course: "Cyber Security",
      link: "https://www.youtube.com/embed/inWWhr5tnEA"
    },
    {
      title: "SQL Tutorial for Beginners",
      course: "SQL",
      link: "https://www.youtube.com/embed/7S_tz1z_5bA"
    },
    {
      title: "AI Crash Course",
      course: "AI",
      link: "https://www.youtube.com/embed/ukzFI9rgwfU"
    }
  ];
  
  const videoList = document.getElementById("videoList");
  const searchInput = document.getElementById("searchInput");
  const themeToggle = document.getElementById("themeToggle");
  
  function displayVideos(videoArray) {
    videoList.innerHTML = "";
    videoArray.forEach(video => {
      const card = document.createElement("div");
      card.className = "video-card";
  
      const progress = localStorage.getItem(video.link) || "Not Started";
  
      card.innerHTML = `
        <iframe src="${video.link}" allowfullscreen onload="trackView('${video.link}')"></iframe>
        <h3>${video.title}</h3>
        <p><strong>Course:</strong> ${video.course}</p>
        <div class="progress">📊 Progress: ${progress}</div>
      `;
  
      videoList.appendChild(card);
    });
  }
  
  function trackView(link) {
    if (!localStorage.getItem(link)) {
      localStorage.setItem(link, "Started");
      displayVideos(videos);
    }
  }
  
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = videos.filter(
      v => v.course.toLowerCase().includes(keyword) || v.title.toLowerCase().includes(keyword)
    );
    displayVideos(filtered);
  });
  
  // Dark/Light theme toggle
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  // Initial render
  displayVideos(videos);