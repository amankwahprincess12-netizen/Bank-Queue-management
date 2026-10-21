
let customers = [];

const customerForm = document.getElementById("customerForm");
const customerName = document.getElementById("customerName");
const customerList = document.getElementById("customerList");
const queueCount = document.getElementById("queueCount");
const emptyMessage = document.getElementById("emptyMessage");
const nowServing = document.getElementById("nowServing");
const serveButton = document.getElementById("serveButton");

// Add a customer to the queue
customerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = customerName.value.trim();

    if (name === "") {
        return;
    }

    customers.push(name);

    customerName.value = "";

    displayCustomers();
});

// Serve the first customer in the queue
serveButton.addEventListener("click", function() {
    if (customers.length === 0) {
        nowServing.textContent = "No customers are waiting.";
        return;
    }

    const servedCustomer = customers.shift();

    nowServing.textContent = "Now serving: " + servedCustomer;

    displayCustomers();
});

// Display all waiting customers
function displayCustomers() {
    customerList.innerHTML = "";

    customers.forEach(function(name) {
        const item = document.createElement("li");
        item.textContent = name;
        customerList.appendChild(item);
    });

    queueCount.textContent = customers.length;

    if (customers.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}