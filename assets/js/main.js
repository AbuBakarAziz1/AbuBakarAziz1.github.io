// const tabs = document.querySelectorAll('.tab');
// const sections = document.querySelectorAll('section');

// function isElementInViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return (rect.top >= 0 && rect.bottom <= window.innerHeight);
// }

// function updateActiveTab() {
//   let activeTabFound = false;
//   sections.forEach((section, index) => {
//     if (isElementInViewport(section) && !activeTabFound) {
//       tabs.forEach(tab => tab.classList.remove('text-yellow-400'));
//       tabs[index].classList.add('text-yellow-400');
//       activeTabFound = true;
//     }
//   });
// }

// document.addEventListener('scroll', updateActiveTab);
// window.addEventListener('load', updateActiveTab);

// updateActiveTab();

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll("#sidebar a");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 2) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.parentElement.classList.remove("text-yellow-400");
      if (link.getAttribute("href").slice(1) === current) {
        link.parentElement.classList.add("text-yellow-400");
      }
    });
  });
});
