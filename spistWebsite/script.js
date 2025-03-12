document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(Draggable);

    // Hero Animations
    gsap.to(".animate-text", { opacity: 1, y: 0, duration: 1, stagger: 0.3 });
    gsap.to(".animate-img", { scale: 1, duration: 1, stagger: 0.3, ease: "bounce" });

    // Lanyard Effect (Draggable)
    Draggable.create(".lanyard", {
        type: "y",
        bounds: { minY: 0, maxY: 100 },
        inertia: true,
        onDragEnd: function () {
            gsap.to(".lanyard", { y: 0, duration: 0.5, ease: "bounce.out" });
        }
    });

    // Card Appear on Scroll
    gsap.utils.toArray(".program-card").forEach((card, index) => {
        gsap.from(card, { opacity: 0, y: 50, duration: 1, delay: index * 0.2, ease: "power2.out", scrollTrigger: card });
    });
});
