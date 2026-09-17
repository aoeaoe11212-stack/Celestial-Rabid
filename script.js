/* =========================================
   YOUR CLAN
   Main JavaScript
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /*
     * Smooth scrolling
     */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /*
     * Navbar background
     */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {
            navbar.style.background = "rgba(8, 9, 11, 0.94)";
        } else {
            navbar.style.background = "rgba(8, 9, 11, 0.78)";
        }

    });


    /*
     * Small reveal animation
     */

    const revealElements = document.querySelectorAll(
        ".game-card, .about-content, .apply-box"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });

});
