const studentData = JSON.parse(localStorage.getItem("studentPerformance")) || [];

const tableBody = document.getElementById("gradesTableBody");

studentData.forEach(entry => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${entry.subject}</td>
    <td>${entry.grade}%</td>
    <td>${entry.feedback}</td>
  `;
  tableBody.appendChild(row);
});

// Chart.js bar chart
const ctx = document.getElementById("performanceChart");
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: studentData.map(e => e.subject),
    datasets: [{
      label: 'Grade (%)',
      data: studentData.map(e => e.grade),
      backgroundColor: '#42a5f5',
      borderColor: '#1565c0',
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
