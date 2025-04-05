function submitPerformance() {
    const subject = document.getElementById("subject").value.trim();
    const grade = document.getElementById("gradeInput").value;
    const feedback = document.getElementById("feedbackInput").value.trim();
  
    if (!subject || grade === "" || grade < 0 || grade > 100 || !feedback) {
      alert("Please fill all fields correctly.");
      return;
    }
  
    const newEntry = {
      subject,
      grade: Number(grade),
      feedback
    };
  
    const existingData = JSON.parse(localStorage.getItem("studentPerformance")) || [];
    existingData.push(newEntry);
    localStorage.setItem("studentPerformance", JSON.stringify(existingData));
  
    alert("Performance submitted successfully!");
  
    // Optionally redirect
    window.location.href = "Grade-Feedback.html";
  }
  