const faqSpace = document.querySelectorAll(".faq-space");
const header = document.querySelector(".sidebar");



// sidebar code
document.querySelector('.fa-bars').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.add('active');
});
document.querySelector('.fa-close').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('active');
});

// faq code
faqSpace.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});
