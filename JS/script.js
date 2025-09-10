
document.addEventListener("scroll", () => {
    const parallaxSection = document.querySelector(".parallax-js");
    if (parallaxSection) {
        let scrollY = window.scrollY;
        parallaxSection.style.backgroundPositionY = `${scrollY * 0.4}px`;
    }
});
