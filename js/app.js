document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.page-section');

  const showView = (view) => {
    sections.forEach(section => {
      const sectionView = section.getAttribute('data-view');
      const isHomeSection = sectionView === 'home';
      const isTargetView = sectionView === view;

      if (view === 'home') {
        section.classList.toggle('hidden-section', !isHomeSection);
      } else {
        section.classList.toggle('hidden-section', !isTargetView);
      }
    });
  };

  showView('home');

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      const view = link.getAttribute('data-view');

      if (!view) return;

      event.preventDefault();
      showView(view);
    });
  });
});
// Function to open a platform page
function openPlatform(sectionId) {

    // Hide all page sections
    document.querySelectorAll(".page-section").forEach(section => {
        section.classList.add("hidden-section");
    });

    // Show selected platform
    document.getElementById(sectionId).classList.remove("hidden-section");

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// WhatsApp
document.getElementById("exploreWhatsappBtn")
?.addEventListener("click", () => {
    openPlatform("whatsapp");
});

// Facebook
document.getElementById("exploreFacebookBtn")
?.addEventListener("click", () => {
    openPlatform("facebook");
});

// Telegram
document.getElementById("exploreTelegramBtn")
?.addEventListener("click", () => {
    openPlatform("telegram");
});

// Instagram
document.getElementById("exploreInstagramBtn")
?.addEventListener("click", () => {
    openPlatform("instagram");
});

