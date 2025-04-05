const quizzes = {
    javascript: [
        { question: "What is the correct way to declare a variable in JavaScript?", options: ["var x = 5;", "let x = 5;", "const x = 5;", "All of the above"], answer: "All of the above" },
        { question: "Which method selects an element by ID in JavaScript?", options: ["getElementById()", "querySelector()", "getElement()", "selectElement()"], answer: "getElementById()" },
        { question: "What does 'this' keyword refer to in JavaScript?", options: ["Current function", "Current object", "Global object", "None of the above"], answer: "Current object" },
        { question: "Which feature allows function execution after a delay?", options: ["setTimeout()", "setInterval()", "delay()", "timeout()"], answer: "setTimeout()" },
        { question: "What is typeof null in JavaScript?", options: ["object", "null", "undefined", "string"], answer: "object" }
    ],
    java: [
        { question: "Which keyword defines a class in Java?", options: ["class", "struct", "object", "define"], answer: "class" },
        { question: "Default value of an int variable in Java?", options: ["0", "null", "undefined", "Garbage value"], answer: "0" },
        { question: "Which concept allows multiple inheritance in Java?", options: ["Interfaces", "Abstract classes", "Both", "None"], answer: "Interfaces" },
        { question: "Which is NOT a Java access modifier?", options: ["private", "protected", "package", "public"], answer: "package" },
        { question: "Which collection allows only unique values?", options: ["List", "Set", "Queue", "Array"], answer: "Set" }
    ],
    cpp: [
        {
            question: "What is the output of sizeof(int) in C++ (typically)?",
            options: ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
            answer: "Depends on compiler"
        },
        {
            question: "Which operator is used for dynamic memory allocation in C++?",
            options: ["new", "malloc", "calloc", "allocate"],
            answer: "new"
        },
        {
            question: "Which of the following is a feature of C++?",
            options: ["Encapsulation", "Polymorphism", "Abstraction", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "Which keyword is used for inheritance in C++?",
            options: ["extends", "inherits", "public", "None"],
            answer: "public"
        },
        {
            question: "What is the use of virtual functions in C++?",
            options: ["For polymorphism", "For encapsulation", "For memory management", "None"],
            answer: "For polymorphism"
        }
    ],
    python: [
        {
            question: "Which of these is a correct way to define a function in Python?",
            options: ["def function():", "func function():", "define function():", "function():"],
            answer: "def function():"
        },
        {
            question: "Which symbol is used to denote a comment in Python?",
            options: ["//", "/* */", "#", "--"],
            answer: "#"
        },
        {
            question: "What is the data type of print(type(5/2))?",
            options: ["int", "float", "double", "string"],
            answer: "float"
        },
        {
            question: "Which Python library is used for data analysis?",
            options: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
            answer: "Pandas"
        },
        {
            question: "Which keyword is used to create a class in Python?",
            options: ["class", "struct", "object", "define"],
            answer: "class"
        }
    ],
    "web-dev": [
        {
            question: "Which of the following is not a frontend technology?",
            options: ["HTML", "CSS", "JavaScript", "Node.js"],
            answer: "Node.js"
        },
        {
            question: "Which CSS property is used to make text bold?",
            options: ["text-style", "font-weight", "text-bold", "font-style"],
            answer: "font-weight"
        },
        {
            question: "Which HTML tag is used for creating a hyperlink?",
            options: ["<a>", "<link>", "<href>", "<url>"],
            answer: "<a>"
        },
        {
            question: "Which of the following is used to make websites responsive?",
            options: ["CSS Flexbox", "CSS Grid", "Media Queries", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "Which of these is a popular JavaScript frontend framework?",
            options: ["Django", "Flask", "React", "Laravel"],
            answer: "React"
        }
    ],
    ai: [
        {
            question: "What is the main component of AI?",
            options: ["Machine Learning", "Deep Learning", "Neural Networks", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "Which language is most commonly used in AI development?",
            options: ["C++", "Python", "Java", "JavaScript"],
            answer: "Python"
        },
        {
            question: "Which algorithm is used in supervised learning?",
            options: ["K-means", "Linear Regression", "DBSCAN", "Apriori"],
            answer: "Linear Regression"
        },
        {
            question: "What is used to train a deep learning model?",
            options: ["Neural Networks", "Decision Trees", "Naive Bayes", "SVM"],
            answer: "Neural Networks"
        },
        {
            question: "Which of the following is an AI chatbot?",
            options: ["Siri", "Alexa", "Google Assistant", "All of the above"],
            answer: "All of the above"
        }
    ],
    ml: [
        {
            question: "What is Machine Learning?",
            options: ["A subset of AI", "A programming language", "A database", "A cloud service"],
            answer: "A subset of AI"
        },
        {
            question: "Which ML technique is used for classification?",
            options: ["K-means", "Linear Regression", "Decision Trees", "PCA"],
            answer: "Decision Trees"
        },
        {
            question: "What does CNN stand for in deep learning?",
            options: ["Central Neural Network", "Convolutional Neural Network", "Cyclic Neural Net", "Converging Neural Network"],
            answer: "Convolutional Neural Network"
        },
        {
            question: "Which type of ML algorithm is K-means?",
            options: ["Supervised", "Unsupervised", "Semi-supervised", "Reinforcement"],
            answer: "Unsupervised"
        },
        {
            question: "Which ML library is widely used for model training?",
            options: ["NumPy", "Matplotlib", "TensorFlow", "Scikit-learn"],
            answer: "TensorFlow"
        }
    ]
};

let currentQuiz = [];
let questionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

function startQuiz(subject) {
    if (!quizzes[subject]) return;
    currentQuiz = quizzes[subject];
    questionIndex = 0;
    score = 0;
    document.getElementById("quiz-selection").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showQuestion();
}

function showQuestion() {
    if (questionIndex >= currentQuiz.length) {
        showResult();
        return;
    }

    const currentQuestion = currentQuiz[questionIndex];
    document.getElementById("question-text").innerText = currentQuestion.question;
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        li.innerText = option;
        li.onclick = () => {
            checkAnswer(option);
            disableOptions();
        };
        optionsList.appendChild(li);
    });

    document.getElementById("next-btn").style.display = "none";
    timeLeft = 30;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
    if (timeLeft === 0) {
        clearInterval(timer);
        nextQuestion();
    }
}

function checkAnswer(selectedOption) {
    if (selectedOption === currentQuiz[questionIndex].answer) score++;
    clearInterval(timer);
    document.getElementById("next-btn").style.display = "block";
}

function disableOptions() {
    const optionsList = document.getElementById("options").children;
    for (let li of optionsList) {
        li.onclick = null; // Disable click event
    }
}

function nextQuestion() {
    questionIndex++;
    document.getElementById("next-btn").style.display = "none"; // Hide Next button
    showQuestion();
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score-text").innerText = `Your score: ${score} / ${currentQuiz.length}`;
}

function restartQuiz() {
    document.getElementById("result-container").style.display = "none";
    document.getElementById("quiz-selection").style.display = "block";
}

// Assignment

// Load saved submissions on page load
window.onload = function () {
    const saved = JSON.parse(localStorage.getItem("submissions")) || [];
    saved.forEach((data, index) => renderAssignment(data, index));
  };
  
  // Submission form handler
  document.getElementById("assignmentForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const subject = document.getElementById("subject").value;
    const name = document.getElementById("Name").value;
    const deadline = new Date(document.getElementById("assignmentDeadline").value);
    deadline.setHours(23, 59); // Optional if you're not using datetime-local
    const now = new Date();
  
    const deadlineWithGrace = new Date(deadline.getTime() + 40 * 60 * 1000);
    const isLate = now > deadlineWithGrace;
  
    const submission = {
      subject,
      name,
      deadline: deadline.toISOString(),
      submittedAt: now.toISOString(),
      isLate,
    };
  
    // Save to localStorage
    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    submissions.push(submission);
    localStorage.setItem("submissions", JSON.stringify(submissions));
  
    renderAssignment(submission);
  
    const message = document.getElementById("message");
    message.textContent = isLate
      ? "⚠ Assignment submitted, but it's late!"
      : "✅ Your assignment has been submitted on time!";
    message.classList.add("show");
    setTimeout(() => message.classList.remove("show"), 4000);
  
    document.getElementById("assignmentForm").reset();
  });
  
  // Render an assignment list item
  function renderAssignment({ name, subject, deadline, submittedAt, isLate }) {
    const listItem = document.createElement("li");
    listItem.className = isLate ? "late" : "";
  
    const deadlineDate = new Date(deadline);
    const submittedDate = new Date(submittedAt);
  
    listItem.innerHTML = `
      <strong>${name}</strong> submitted for <strong>${subject}</strong><br>
      Deadline: ${deadlineDate.toLocaleString()}<br>
      Submitted At: ${submittedDate.toLocaleString()}<br>
      Status: ${isLate ? "<span style='color:red;'>Late</span>" : "<span style='color:green;'>On Time</span>"}
      <div class="countdown" data-deadline="${deadlineDate.getTime() + 40 * 60 * 1000}"></div>
    `;
  
    document.getElementById("assignmentList").appendChild(listItem);
    startCountdown(listItem.querySelector(".countdown"));
  }
  function renderAssignment(submission, index = null) {
    const { name, subject, deadline, submittedAt, isLate } = submission;
    const listItem = document.createElement("li");
    listItem.className = isLate ? "late" : "";
  
    const deadlineDate = new Date(deadline);
    const submittedDate = new Date(submittedAt);
  
    const assignmentList = document.getElementById("assignmentList");
  
    listItem.innerHTML = `
      <div class="assignment-content">
        <strong>Name:</strong> <span class="name">${name}</span><br>
        <strong>Subject:</strong> <span class="subject">${subject}</span><br>
        Deadline: ${deadlineDate.toLocaleString()}<br>
        Submitted At: ${submittedDate.toLocaleString()}<br>
        Status: ${isLate ? "<span style='color:red;'>Late</span>" : "<span style='color:green;'>On Time</span>"}
        <div class="countdown" data-deadline="${deadlineDate.getTime() + 40 * 60 * 1000}"></div>
      </div>
      <div class="buttons">
        <button class="edit-btn">✏ Edit</button>
        <button class="delete-btn">🗑 Delete</button>
      </div>
    `;
  
    assignmentList.appendChild(listItem);
  
    // Countdown
    startCountdown(listItem.querySelector(".countdown"));
  
    const deleteBtn = listItem.querySelector(".delete-btn");
    const editBtn = listItem.querySelector(".edit-btn");
  
    // Delete logic
    deleteBtn.addEventListener("click", () => {
      const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
      submissions.splice(index, 1);
      localStorage.setItem("submissions", JSON.stringify(submissions));
      assignmentList.innerHTML = "";
      submissions.forEach((s, i) => renderAssignment(s, i));
    });
  
    // Edit logic
    editBtn.addEventListener("click", () => {
      const newName = prompt("Edit Name:", name);
      const newSubject = prompt("Edit Subject:", subject);
  
      if (newName && newSubject) {
        const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
        submissions[index].name = newName;
        submissions[index].subject = newSubject;
        localStorage.setItem("submissions", JSON.stringify(submissions));
        assignmentList.innerHTML = "";
        submissions.forEach((s, i) => renderAssignment(s, i));
      }
    });
  } 
  
  
  
  // Countdown Timer
  function startCountdown(el) {
    const deadline = parseInt(el.dataset.deadline);
  
    function update() {
      const now = new Date().getTime();
      const diff = deadline - now;
  
      if (diff <= 0) {
        el.textContent = "⏰ Grace period expired.";
        return;
      }
  
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((diff % (1000 * 60)) / 1000);
el.textContent = `🕒 Time left: ${mins}m ${secs}s`;

requestAnimationFrame(update);

  
    update();
    }
}