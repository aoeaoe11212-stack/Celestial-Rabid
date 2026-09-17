/* =========================================
   CELESTIAL RABID
   Main JavaScript
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /*
     * Navbar
     */

    const navbar = document.querySelector(".navbar");

    const updateNavbar = () => {

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

            navbar.style.background =
                "rgba(7, 8, 13, 0.90)";

        } else {

            navbar.classList.remove("scrolled");

            navbar.style.background =
                "rgba(7, 8, 13, 0.65)";
        }
    };

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /*
     * Smooth scrolling
     */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", event => {

                const targetId =
                    link.getAttribute("href");

                if (targetId === "#") {
                    return;
                }

                const target =
                    document.querySelector(targetId);

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
     * Scroll reveal
     */

    const revealElements = document.querySelectorAll(
        ".game-card, .about-layout, .join-card"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });


    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {
        observer.observe(element);
    });

});
