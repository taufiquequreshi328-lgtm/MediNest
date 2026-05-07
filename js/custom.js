
window.addEventListener("scroll", function () {
    const header = document.getElementById("topHeader");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-in-out',
  });