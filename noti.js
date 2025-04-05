document.getElementById("notifyForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const title = document.getElementById("title").value.trim();
    const message = document.getElementById("message").value.trim();
    const category = document.getElementById("category").value.trim();
  
    if (!title || !message || !category) {
      alert("Please fill in all fields.");
      return;
    }
  
    const notification = {
      title,
      message,
      category,
      time: new Date().toLocaleString()
    };
  
    const notifications = JSON.parse(localStorage.getItem("notifications")) || [];
    notifications.unshift(notification);
    localStorage.setItem("notifications", JSON.stringify(notifications));
  
    alert("📢 Notification sent!");
    window.location.href = "stdnoti.html";
  });
  