document.addEventListener("DOMContentLoaded", () => {
    const navs = document.querySelectorAll(".site-nav");
    if (!navs.length) {
        return;
    }

    const mq = window.matchMedia("(max-width: 768px)");

    const syncNavState = () => {
        navs.forEach((nav) => {
            const toggle = nav.querySelector(".nav-toggle");
            if (!toggle) {
                return;
            }

            if (mq.matches) {
                nav.classList.remove("nav-open");
                toggle.setAttribute("aria-expanded", "false");
            } else {
                nav.classList.add("nav-open");
                toggle.setAttribute("aria-expanded", "true");
            }
        });
    };

    if (typeof mq.addEventListener === "function") {
        mq.addEventListener("change", syncNavState);
    } else if (typeof mq.addListener === "function") {
        mq.addListener(syncNavState);
    }
    syncNavState();

    navs.forEach((nav) => {
        const toggle = nav.querySelector(".nav-toggle");
        if (!toggle) {
            return;
        }

        toggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("nav-open");
            toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });
    });
});
