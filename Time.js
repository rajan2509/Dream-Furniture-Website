
"use strict";

// 1. Live date and time
function displayTime() {
    const timeElement = document.getElementById("time");

    if (timeElement) {
        timeElement.textContent = new Date().toLocaleString();
    }
}

// Display immediately and update every second
displayTime();
setInterval(displayTime, 1000);


// 2. Mobile hamburger navigation
document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("#navbar ul");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("show");

            const isOpen = navMenu.classList.contains("show");
            hamburger.setAttribute("aria-expanded", isOpen);
        });

        // Close menu after selecting a navigation link
        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("show");
                hamburger.setAttribute("aria-expanded", "false");
            });
        });

        // Close menu using Escape key
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                navMenu.classList.remove("show");
                hamburger.setAttribute("aria-expanded", "false");
            }
        });
    }


    // 3. Product search
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const products = document.querySelectorAll(".product-item");

    if (searchInput && searchButton && products.length > 0) {

        function searchProducts() {
            const searchText = searchInput.value.trim().toLowerCase();
            let found = 0;

            products.forEach(function (product) {
                const productName =
                    product.querySelector("h4").textContent.toLowerCase();

                if (productName.includes(searchText)) {
                    product.style.display = "";
                    found++;
                } else {
                    product.style.display = "none";
                }
            });

            let message = document.getElementById("no-results");

            if (!message) {
                message = document.createElement("p");
                message.id = "no-results";
                document.getElementById("product").after(message);
            }

            message.textContent =
                found === 0 ? "No products found!" : "";

            message.style.textAlign = "center";
        }

        searchButton.addEventListener("click", searchProducts);

        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                searchProducts();
            }
        });
    }
});