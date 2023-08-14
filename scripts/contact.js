// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
document.addEventListener("DOMContentLoaded", function() {
    const contactPage = document.getElementById("contact-page");
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function() {
        const message = document.createElement("p");
        message.textContent = "Thank you for your message";
        message.style.fontSize = "24px";
        contactPage.innerHTML = '';
        contactPage.appendChild(message);
    });
});

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

