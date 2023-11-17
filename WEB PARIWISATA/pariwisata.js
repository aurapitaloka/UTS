document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#053B50";
        } else {
            navbar.style.backgroundColor = "#2ecbff";
        }
    });

    const text = "Destinasi Pariwisata yang Memukau di Indonesia";
    const speed = 50; 
    const typedTextElement = document.getElementById("typedText");

    function typeWriter() {
        let i = 0;
        function type() {
            if (i < text.length) {
                typedTextElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    typeWriter();
});
