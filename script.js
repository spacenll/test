document.addEventListener("DOMContentLoaded", function () {
    let swiperContainer = document.querySelector(".swiper");
    let slides = document.querySelectorAll(".swiper-slide");
    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * (slides[0].offsetWidth + 10);
        swiperContainer.querySelector(".swiper-wrapper").style.transform = `translateX(${offset}px)`;
    }

    document.querySelectorAll(".video-thumb-wrapper").forEach((wrapper) => {
        let video = wrapper.querySelector(".video-thumb");
        let playButton = wrapper.querySelector(".video-thumb-play");

        wrapper.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                playButton.style.display = "none";
            } else {
                video.pause();
                playButton.style.display = "block";
            }
        });

        video.addEventListener("pause", () => {
            playButton.style.display = "block";
        });

        video.addEventListener("play", () => {
            playButton.style.display = "none";
        });
    });

    // Optional: Auto-slide functionality
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }, 3000);
});
