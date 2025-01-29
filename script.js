document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".video-slider");
    let isDown = false;
    let startX;
    let scrollLeft;

    // عند الضغط على الماوس
    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    // عند إزالة الضغط
    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    // عند تحريك الماوس
    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // تضخيم الحركة قليلاً
        slider.scrollLeft = scrollLeft - walk;
    });

    // تشغيل الفيديو عند النقر
    document.querySelectorAll(".video-thumb").forEach((video) => {
        video.addEventListener("click", () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
});
