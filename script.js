```javascript
// ========================================
// ANNOUNCEMENT UPDATE
// ========================================

function changeAnnouncement() {

    const announcement =
        document.getElementById("announcementText");

    announcement.textContent =
        "🎉 New events have been added! Register now and participate in College Fest 2026.";
}


// ========================================
// EVENT REGISTER BUTTON
// ========================================

function selectEvent(eventName) {

    // Open registration section
    document.getElementById("registration")
        .scrollIntoView({
            behavior: "smooth"
        });

    // Automatically select event
    document.getElementById("event").value =
        eventName;

}


// ========================================
// REGISTRATION FORM
// ========================================

const registrationForm =
    document.getElementById("registrationForm");


registrationForm.addEventListener(
    "submit",
    function(event) {

        // Prevent page refresh
        event.preventDefault();


        // Get form values

        const name =
            document.getElementById("participantName")
                .value.trim();

        const email =
            document.getElementById("participantEmail")
                .value.trim();

        const mobile =
            document.getElementById("mobile")
                .value.trim();

        const department =
            document.getElementById("department")
                .value;

        const year =
            document.getElementById("year")
                .value;

        const selectedEvent =
            document.getElementById("event")
                .value;


        // ========================================
        // VALIDATION
        // ========================================

        if (name === "") {

            alert("Please enter your name.");

            return;
        }


        if (email === "") {

            alert("Please enter your email.");

            return;
        }


        if (mobile === "") {

            alert("Please enter your mobile number.");

            return;
        }


        if (mobile.length !== 10 ||
            isNaN(mobile)) {

            alert(
                "Please enter a valid 10-digit mobile number."
            );

            return;
        }


        if (department === "") {

            alert("Please select your department.");

            return;
        }


        if (year === "") {

            alert("Please select your year.");

            return;
        }


        if (selectedEvent === "") {

            alert("Please select an event.");

            return;
        }


        // ========================================
        // SUCCESS MESSAGE
        // ========================================

        const successMessage =
            document.getElementById(
                "successMessage"
            );


        successMessage.innerHTML =
            `
            <strong>Registration Successful! 🎉</strong>
            <br><br>
            Name: ${name}
            <br>
            Event: ${selectedEvent}
            <br>
            Department: ${department}
            <br>
            Year: ${year}
            `;


        successMessage.classList.remove(
            "d-none"
        );


        // ========================================
        // CLEAR FORM
        // ========================================

        registrationForm.reset();

    }
);


// ========================================
// CONTACT FORM
// ========================================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "contactName"
            ).value.trim();


        const email =
            document.getElementById(
                "contactEmail"
            ).value.trim();


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (name === "") {

            alert("Please enter your name.");

            return;
        }


        if (email === "") {

            alert("Please enter your email.");

            return;
        }


        if (message === "") {

            alert("Please enter your message.");

            return;
        }


        alert(
            "Thank you, " +
            name +
            "! Your message has been sent successfully."
        );


        contactForm.reset();

    }
);
```
