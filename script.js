document.addEventListener('DOMContentLoaded', () => {
    function generateInvoiceNumber(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const invoiceElement = document.getElementById('invoice-number');
    const randomInvoiceNumber = generateInvoiceNumber(20); // Generates a 20-character alphanumeric string
    invoiceElement.textContent = randomInvoiceNumber;

    const timerElement = document.getElementById('timer');
    let totalTimeInSeconds = 1 * 3600; // 1 hour in seconds

    function updateTimer() {
        const hours = Math.floor(totalTimeInSeconds / 3600);
        const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
        const seconds = totalTimeInSeconds % 60;

        timerElement.textContent = `${hours} Hour ${minutes} Minutes ${seconds} Seconds`;
        totalTimeInSeconds--;

        if (totalTimeInSeconds >= 0) {
            setTimeout(updateTimer, 1000);
        }
    }

    updateTimer(); // Start the timer

    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cardStockTitle = document.getElementById("cardStockTitle");
    const cardList = document.getElementById("cardList");
    const bankStockTitle = document.getElementById("bankStockTitle");
    const bankList = document.getElementById("bankList");

    cardStockTitle.addEventListener("click", function() {
        if (cardList.style.display === "none") {
            cardList.style.display = "block";
        } else {
            cardList.style.display = "none";
        }
    });

    bankStockTitle.addEventListener("click", function() {
        if (bankList.style.display === "none") {
            bankList.style.display = "block";
        } else {
            bankList.style.display = "none";
        }
    });
});
function toggleDropdown() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('hidden');
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html'; // Redirect to the login page
}
