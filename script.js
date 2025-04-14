const faqs = document.querySelectorAll ('.faq');

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active")
    });

    faq.addEventListener("mouseleave", () =>{
        faq.classList.remove("active")
    })
});
