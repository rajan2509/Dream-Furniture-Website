
"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (!form) return;

    const phone = document.getElementById("phone");
    const pincode = document.getElementById("pincode");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        // Validate phone number
        if (!/^[6-9]\d{9}$/.test(phone.value.trim())) {
            alert("Please enter a valid 10-digit mobile number.");
            phone.focus();
            return;
        }

        // Validate Indian pincode
        if (!/^[1-9]\d{5}$/.test(pincode.value.trim())) {
            alert("Please enter a valid 6-digit pincode.");
            pincode.focus();
            return;
        }

        // Check required fields and email
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        alert("Congratulations! Your details are valid.");

        form.reset();
    });

});