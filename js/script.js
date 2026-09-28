document.addEventListener("DOMContentLoaded", () => { const header = document.querySelector(".site-header"); let lastY = window.scrollY; window.addEventListener("scroll", () => { const y = window.scrollY; if (header) { header.classList.toggle("is-scrolled", y > 12); if (y > lastY && y > 100) header.classList.add("is-hidden"); else header.classList.remove("is-hidden"); } lastY = y; }, { passive: true }); document.querySelectorAll('a[href^="#"]').forEach(link => { link.addEventListener("click", event => { const target = document.querySelector(link.getAttribute("href")); if (!target) return; event.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); }); }); });
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".site-header .menu-toggle").forEach(button => {
        button.addEventListener("click", () => {
            const header = button.closest(".site-header");
            const open = header.classList.toggle("menu-open");
            button.setAttribute("aria-expanded", String(open));
        });
    });
    document.querySelectorAll(".site-header nav a").forEach(link => {
        link.addEventListener("click", () => {
            const header = link.closest(".site-header");
            const button = header?.querySelector(".menu-toggle");
            if (header?.classList.contains("menu-open")) {
                header.classList.remove("menu-open");
                button?.setAttribute("aria-expanded", "false");
            }
        });
    });
});
