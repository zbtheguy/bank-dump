document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector(".icon");

            // Close all other answers
            faqQuestions.forEach(otherQuestion => {
                const otherAnswer = otherQuestion.nextElementSibling;
                const otherIcon = otherQuestion.querySelector(".icon");
                if (otherAnswer !== answer) {
                    otherAnswer.style.display = "none";
                    otherIcon.src = "question-icon.png"; // Change this to the path of the question icon image
                }
            });

            // Toggle the clicked answer
            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.src = "question-icon.png"; // Change this to the path of the question icon image
            } else {
                answer.style.display = "block";
                icon.src = "close-icon.jpg"; // Change this to the path of the close icon image
            }
        });
    });

    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebar = document.getElementById("sidebar");

    sidebarToggle.addEventListener("click", function() {
        sidebar.classList.toggle("open");
    });
});