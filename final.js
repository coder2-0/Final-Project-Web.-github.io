//Form to contact me
document.addEventListener("DOMContentLoaded", function () {
    function handleFormSubmission(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        event.target.reset();
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", handleFormSubmission);
    }

    var h1Element = document.querySelector("h1");
//Uses the commands to ask the user about the info they want about me when they click at my name
    h1Element.addEventListener("click", function () {
        var userChoice = prompt("What would you like to know about me?\n1. Background\n2. Family\n3. Passion\n4. My JS Cheat Sheets\n5. Main Resume\n6. My Hobbies");

        if (userChoice) {
            userChoice = userChoice.toLowerCase();
            
            
            const options = ["background", "family", "passion", "my js cheat sheets", "main resume", "my hobbies"];

            
            for (let i = 0; i < options.length; i++) {
                if (userChoice === (i + 1).toString() || userChoice === options[i]) {
                    window.location.href = options[i] + ".html";
                    return; 
                }
            }

            alert("Invalid choice. Please enter a number or a valid option.");
        }
    });
});
