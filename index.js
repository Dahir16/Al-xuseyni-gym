const faqSpace = document.querySelectorAll(".faq-space");
const contactForm = document.querySelector('.contact-form');
const header = document.querySelector(".sidebar");

faqSpace.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

document.querySelector('.toggle-btn .fa-bars').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});
document.querySelector(' .toggle-btn .fa-close').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});
