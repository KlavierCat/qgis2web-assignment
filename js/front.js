document.addEventListener("DOMContentLoaded", function () {
  const frontElement = document.querySelector(".front");

  const deafVillageLink = document.getElementById("deaf-village-link");
  const gpLink = document.getElementById("gp-link");
  const lighthouseLink = document.getElementById("lighthouse-link");
  const apolloLink = document.getElementById("apollo-link");

  const defaultBackground = "#3c3c3c";
  const deafVillageBackground = "#0693e3";
  const gpBackground = "#00473e";
  const lighthouseBackground = "#003c50";
  const apolloBackground = "#000000";

  function animateBackgroundColor(element, color, duration) {
    element.style.transition = `background-color ${duration} ease-in-out`;
    element.style.backgroundColor = color;
  }

  // Deaf Village link hover and focus events
  deafVillageLink.addEventListener("mouseenter", () =>
    animateBackgroundColor(frontElement, deafVillageBackground, "0.3s")
  );
  deafVillageLink.addEventListener("mouseleave", () =>
    animateBackgroundColor(frontElement, defaultBackground, "0.1s")
  );
  deafVillageLink.addEventListener("focus", () =>
    animateBackgroundColor(frontElement, deafVillageBackground, "0.3s")
  );
  deafVillageLink.addEventListener("blur", () =>
    animateBackgroundColor(frontElement, defaultBackground, "0.1s")
  );

  // GP link hover and focus events
  gpLink.addEventListener("mouseenter", () =>
    animateBackgroundColor(frontElement, gpBackground, "0.3s")
  );
  gpLink.addEventListener("mouseleave", () =>
    animateBackgroundColor(frontElement, defaultBackground, "0.1s")
  );
  gpLink.addEventListener("focus", () =>
    animateBackgroundColor(frontElement, gpBackground, "0.3s")
  );
  gpLink.addEventListener("blur", () =>
    animateBackgroundColor(frontElement, defaultBackground, "0.1s")
  );

  // Lighthouse link hover and focus events
  lighthouseLink.addEventListener("mouseenter", () =>
    animateBackgroundColor(frontElement, lighthouseBackground, "0.3s")
  );
  lighthouseLink.addEventListener("mouseleave", () =>
    animateBackgroundColor(frontElement, defaultBackground, "0.1s")
  );
  lighthouseLink.addEventListener("focus", () =>
    animateBackgroundColor(frontElement, lighthouseBackground, "0.3s")
  );
  lighthouseLink.addEventListener("blur", () =>
    animateBackgroundColor(frontElement, defaultBackground, "0.1s")
  );

  // Apollo link hover and focus events
  apolloLink.addEventListener("mouseenter", () =>
    animateBackgroundColor(frontElement, apolloBackground, "0.3s")
  );
  apolloLink.addEventListener("mouseleave", () =>
    animateBackgroundColor(frontElement, defaultBackground, "0.1s")
  );
  apolloLink.addEventListener("focus", () =>
    animateBackgroundColor(frontElement, apolloBackground, "0.3s")
  );
  apolloLink.addEventListener("blur", () =>
    animateBackgroundColor(frontElement, defaultBackground, "0.1s")
  );
});
