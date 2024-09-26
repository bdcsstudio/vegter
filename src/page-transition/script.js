document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (event) {
        const target = event.target.closest('a');
        if (!target) return;

        if (target.getAttribute("page-transition") === "ignore") return false;

        if (target.host !== window.location.host || target.getAttribute("href").indexOf("#") !== -1) return true;

        event.preventDefault();

        const href = target.getAttribute("href");
        const transitionTime = target.dataset.pageTransitionTime || 1000;

        const transitionComponent = document.querySelector('[page-transition="component"]');
        if (transitionComponent) {
            transitionComponent.click();
        }

        // Trigger a custom event for page transition
        document.dispatchEvent(new CustomEvent('page-transition'));

        setTimeout(function () {
            window.location = href;
        }, transitionTime);
    });

    window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
            window.location.reload();
        }
    });
});