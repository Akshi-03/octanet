document.addEventListener("DOMContentLoaded", () => {
    // Add event listener to hero button
    const heroButton = document.querySelector(".hero button");
    heroButton.addEventListener("click", () => {
        window.location.href = "#categories"; // Redirect to categories section
    });

    // Add event listeners to category buttons
    const categoryButtons = document.querySelectorAll(".category button");
    categoryButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const categories = ["Accessories", "Clothing", "Sale Items"];
            alert(`Explore ${categories[index]}! More features coming soon.`);
        });
    });

    // Scroll smoothly to sections
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
