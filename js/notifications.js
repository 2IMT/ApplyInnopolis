const submit = document.getElementById("submit");
const notificationContainer = document.getElementById("cont_box");
const plug = document.getElementById('plug')

// Counter for unique notification ids
const notifications = [];
function createNotification(message) {

    plug.style.display = "none";

    // Create the notification elements
    const notificationBox = document.createElement("div");
    notificationBox.classList.add("notification");

    const notificationMessage = document.createElement("div");
    notificationMessage.classList.add("message")
    notificationMessage.innerText = message;

    const closeButton = document.createElement("i");
    closeButton.classList.add("closeButton");

    // Add click event listener to the close button
    closeButton.addEventListener("click", function () {
        // Remove the notification box
        notificationContainer.removeChild(notificationBox);

        const index = notifications.indexOf(notificationBox);
        if (index > -1) {
            notifications.splice(index, 1);
        }

        // Show the notification placeholder if there are no notifications
        if (notifications.length === 0) {
            plug.style.display = "block";
        }

    });

    // Append elements to the notification box
    notificationBox.appendChild(notificationMessage);
    notificationBox.appendChild(closeButton);

    // Append the notification box to the container
    notificationContainer.appendChild(notificationBox);

    // Increment the notification id counter
    notifications.push(notificationBox);
}
// Add click event listener to the confirm button
submit.addEventListener("click", function () {
    createNotification("Successfully submitted")
});
