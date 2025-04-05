const liveClasses = [
    { course: "C++", time: "2025-04-04T10:00:00", instructor: "Dr. Mehta", link: "https://meet.google.com/webdev-class" },
    { course: "Python", time: "2025-04-04T15:00:00", instructor: "Prof. Iyer", link: "https://meet.google.com/aiml-class" },
    { course: "Html & CSS", time: "2025-04-04T10:00:00", instructor: "Mr. Singh", link: "https://meet.google.com/webdev-class" },
    { course: "Web Development", time: "2025-04-04T15:00:00", instructor: "Dr. Reddy", link: "https://meet.google.com/aiml-class" },
    { course: "SQL", time: "2025-04-04T10:00:00", instructor: "Dr. Bose", link: "https://meet.google.com/webdev-class" },
    { course: "AI", time: "2025-04-04T15:00:00", instructor: "Dr. Josi", link: "https://meet.google.com/aiml-class" }
  ];
  
  const classList = document.getElementById("classList");
  const searchInput = document.getElementById("searchInput");
  
  function displayClasses(classes) {
    classList.innerHTML = "";
    classes.forEach((cls, index) => {
      const card = document.createElement("div");
      card.className = "class-card";
  
      const countdownId = `countdown-${index}`;
      const chatId = `chat-${index}`;
  
      card.innerHTML = `
        <h3>${cls.course}</h3>
        <p><strong>Instructor:</strong> ${cls.instructor}</p>
        <p><strong>Time:</strong> ${new Date(cls.time).toLocaleString()}</p>
        <div class="countdown" id="${countdownId}"></div>
        <button onclick="joinAndMarkAttendance('${cls.course}', '${cls.link}', this)" class="attendance-btn">Join Class</button>
        <div class="chat-box" id="${chatId}">
          <input type="text" placeholder="Ask a question..." />
          <button onclick="sendMessage(${index})">Send</button>
          <div class="chat-log"></div>
        </div>
      `;
  
      classList.appendChild(card);
      startCountdown(cls.time, countdownId);
    });
  }
  
  function startCountdown(classTime, elementId) {
    const countdownEl = document.getElementById(elementId);
    function updateCountdown() {
      const now = new Date();
      const startTime = new Date(classTime);
      const diff = startTime - now;
      if (diff <= 0) {
        countdownEl.textContent = "🔴 Live Now!";
        return;
      }
      const minutes = Math.floor(diff / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      countdownEl.textContent = `⏳ Starts in: ${minutes}m ${seconds}s`;
      setTimeout(updateCountdown, 1000);
    }
    updateCountdown();
  }
  
  function sendMessage(index) {
    const chatBox = document.getElementById(`chat-${index}`);
    const input = chatBox.querySelector("input");
    const log = chatBox.querySelector(".chat-log");
    const msg = input.value.trim();
    if (msg) {
      const entry = document.createElement("p");
      entry.textContent = `👨‍🎓 You: ${msg}`;
      log.appendChild(entry);
      input.value = "";
    }
  }
  
  function updateProgressReport() {
    const total = liveClasses.length;
    const attendance = JSON.parse(localStorage.getItem("attendance")) || {};
    let attended = 0;
  
    liveClasses.forEach(cls => {
      if (attendance[cls.course]) attended++;
    });
  
    const missed = total - attended;
    document.getElementById("totalClasses").textContent = total;
    document.getElementById("attendedClasses").textContent = attended;
    document.getElementById("missedClasses").textContent = missed;
  
    const percent = total > 0 ? (attended / total) * 100 : 0;
    document.getElementById("progressBar").style.width = `${percent}%`;
  }
  
  function joinAndMarkAttendance(courseName, classLink, button) {
    let attendance = JSON.parse(localStorage.getItem("attendance")) || {};
    attendance[courseName] = true;
    localStorage.setItem("attendance", JSON.stringify(attendance));
  
    button.classList.add("marked");
    button.textContent = "Class Joined ✅";
  
    window.open(classLink, '_blank');
    updateProgressReport();
  }
  
  // Initial render
  displayClasses(liveClasses);
  updateProgressReport();
  
  // Search filter
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = liveClasses.filter(cls =>
      cls.course.toLowerCase().includes(keyword)
    );
    displayClasses(filtered);
  });
  