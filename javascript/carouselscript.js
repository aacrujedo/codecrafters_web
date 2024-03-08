document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    let counter = 1;

    setInterval(() => {
        carouselContainer.style.transition = "transform 0.5s ease-in-out";
        carouselContainer.style.transform = `translateX(${-counter * 100}%)`;

        counter++;

        if (counter === document.querySelectorAll('.carousel-slide').length) {
            counter = 0;
            setTimeout(() => {
                carouselContainer.style.transition = "none";
                carouselContainer.style.transform = "translateX(0)";
            }, 3000); 
        }
    }, 3000);
});