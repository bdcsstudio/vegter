document.addEventListener("DOMContentLoaded", function () {
    const transitionElement = document.querySelector(".page-transition_bg-lottie");
    if (transitionElement) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const script = document.createElement("script");
                    script.src = "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.9.6/lottie.min.js";
                    script.onload = function () {
                        fetch("https://cdn.prod.website-files.com/669e6e3b658c97e65522e91c/66c4815838b1bc771eb8eca3_vegter-page-transition.lottie")
                            .then(response => response.json())
                            .then(animationData => {
                                lottie.loadAnimation({
                                    container: transitionElement,
                                    renderer: "svg",
                                    loop: true,
                                    autoplay: true,
                                    animationData: animationData
                                });
                            })
                            .catch(error => console.error("Error loading Lottie animation data:", error));
                    };
                    document.head.appendChild(script);
                    observer.disconnect();
                }
            });
        });
        
        observer.observe(transitionElement);
    }
});