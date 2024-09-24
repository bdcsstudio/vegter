document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll(".w-background-video video");
  
    videos.forEach(video => {
      const webmSource = video.querySelector("source[type='video/webm']");
      if (webmSource) {
        const webmUrl = webmSource.getAttribute("data-webm-src");
        if (webmUrl) {
          // Controleer of de .webm URL beschikbaar is
          fetch(webmUrl, { method: 'HEAD' })
            .then(response => {
              if (!response.ok) {
                // Als de .webm URL niet beschikbaar is, verwijder de source
                webmSource.remove();
                console.warn("webm file not available:", webmUrl);
              } else {
                // Als de .webm URL beschikbaar is, stel de src attribute in
                webmSource.src = webmUrl;
              }
            })
            .catch(error => {
              // Als er een fout optreedt bij het controleren, verwijder de source
              webmSource.remove();
              console.error("Error checking webm file availability:", error);
            });
        } else {
          console.warn("data-webm-src attribute is missing on the source element:", webmSource);
        }
      } else {
        console.warn("No source element with type 'video/webm' found for video element:", video);
      }
    });
  });
  