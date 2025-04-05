window.addEventListener("DOMContentLoaded", () => {
    const notificationList = document.getElementById("studentNotificationList");
    const notifications = JSON.parse(localStorage.getItem("notifications")) || [];
  
    if (notifications.length === 0) {
      notificationList.innerHTML = "<li>No notifications yet.</li>";
      return;
    }
  
    notifications.forEach((note) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>[${note.category}] ${note.title}</strong>
        ${note.message}<br>
        <small>${note.time}</small>
      `;
      notificationList.appendChild(li);
    });
  });
  