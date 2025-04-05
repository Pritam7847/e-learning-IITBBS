document.addEventListener('DOMContentLoaded', function () {
    loadAttendanceLogs();
    renderAttendanceChart();
  });
  
  function openLecture(type) {
    const display = document.getElementById("lectureDisplay");
    const title = document.getElementById("lectureTitle");
    const content = document.getElementById("lectureContent");
    const link = document.getElementById("lectureLink");
  
    display.style.display = "block";
  
    if (type === "recorded") {
      title.textContent = "🎥 Recorded Lectures";
      content.textContent = "Watch your recorded sessions whenever you need to review class material.";
      link.href = "https://example.com/recorded";
      link.textContent = "Watch Now";
    }
  }
  const logs = [
    { course: "Web Development", date: "2025-04-01", time: "10:00 AM", status: "Attended" },
    { course: "Python", date: "2025-04-02", time: "02:00 PM", status: "Missed" },
    { course: "C++", date: "2025-04-03", time: "11:00 AM", status: "Attended" },
    { course: "AI & ML", date: "2025-04-03", time: "03:00 PM", status: "Missed" },
    { course: "SQL", date: "2025-04-04", time: "09:00 AM", status: "Attended" },
    { course: "Cyber Security", date: "2025-04-04", time: "01:00 PM", status: "Attended" },
    { course: "Java", date: "2025-04-05", time: "12:00 PM", status: "Missed" },
  ];
  
  const attendanceBody = document.getElementById("attendanceBody");
  const searchInput = document.getElementById("searchInput");
  
  function displayLogs(data) {
    attendanceBody.innerHTML = "";
  
    data.forEach(log => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${log.course}</td>
        <td>${log.date}</td>
        <td>${log.time}</td>
        <td class="status ${log.status.toLowerCase()}">
          ${log.status === "Attended" ? "✅ Attended" : "❌ Missed"}
        </td>
      `;
  
      attendanceBody.appendChild(row);
    });
  }
  
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = logs.filter(log =>
      log.course.toLowerCase().includes(keyword)
    );
    displayLogs(filtered);
  });
  
  // Initial render
  displayLogs(logs);