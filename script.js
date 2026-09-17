/* =========================================================
   CELESTIAL RABID
   SINGLE SCREEN WEBSITE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /*
     * Small entrance animation.
     * No scrolling or navigation system is required
     * because everything is already on one screen.
     */

    const hero = document.querySelector(".hero");
    const visual = document.querySelector(".visual");
    const bottomArea = document.querySelector(".bottom-area");
    const footer = document.querySelector("footer");

    const elements = [
        hero,
        visual,
        bottomArea,
        footer
    ];

    elements.forEach((element, index) => {

        if (!element) return;

        element.style.opacity = "0";
        element.style.transform = "translateY(15px)";

        element.style.transition =
            `opacity 0.7s ease ${index * 0.12}s,
             transform 0.7s ease ${index * 0.12}s`;

    });


    requestAnimationFrame(() => {

        elements.forEach(element => {

            if (!element) return;

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        });

    });


    /*
     * Slight mouse movement on the logo card.
     * Kept very subtle so the page doesn't feel over-animated.
     */

    const logoCard = document.querySelector(".logo-card");

    if (logoCard && window.matchMedia("(pointer: fine)").matches) {

        logoCard.addEventListener("mousemove", (event) => {

            const rect = logoCard.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width;

            const y =
                (event.clientY - rect.top) /
                rect.height;

            const rotateX = (0.5 - y) * 3;
            const rotateY = (x - 0.5) * 3;

            logoCard.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });


        logoCard.addEventListener("mouseleave", () => {

            logoCard.style.transform =
                "perspective(900px) rotateX(0) rotateY(0)";

        });

    }


    /*
     * Prevent accidental hash jumps.
     */

    document.querySelectorAll('a[href="#"]').forEach(link => {

        link.addEventListener("click", event => {
            event.preventDefault();
        });

    });

});
