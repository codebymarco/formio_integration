(function () {
    // Set global siteId (this can be customized by the client)
    window.siteId = window.siteId || "defaultSiteId"; // Clients can override this before loading the script
  
    // Add CSS styles for the React app
    const cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = "https://formly-six.vercel.app/assets/css/main.css"; // Replace with your actual stylesheet URL
    document.head.appendChild(cssLink);
  
    // Create a container for the React app if it doesn't exist
    const containerId = "root";
    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement("div");
      container.id = containerId;
      document.body.appendChild(container); // Add the div#root to the body dynamically
    }
  
    // Function to check if the container is empty
    function isContainerEmpty(container) {
      return container && container.innerHTML.trim() === "";
    }
  
    // Function to create and mount the React app
    function mountReactApp() {
      if (!isContainerEmpty(container)) {
        console.warn(
          `Container '${containerId}' is not empty. React will mount into the existing content.`
        );
      }
  
      // Add the script for the React app
      const script = document.createElement("script");
      script.src = "https://formly-six.vercel.app/assets/js/main.js"; // Replace with your actual Vercel deployment URL
      script.async = true;
      document.body.appendChild(script);
    }
  
    // Wait for DOMContentLoaded to ensure the DOM is fully loaded before mounting the React app
    document.addEventListener("DOMContentLoaded", mountReactApp);
  })();
  