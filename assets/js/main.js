const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('section');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (rect.top >= 0 && rect.bottom <= window.innerHeight);
}

function updateActiveTab() {
  let activeTabFound = false;
  sections.forEach((section, index) => {
    if (isElementInViewport(section) && !activeTabFound) {
      tabs.forEach(tab => tab.classList.remove('text-yellow-400'));
      tabs[index].classList.add('text-yellow-400');
      activeTabFound = true;
    }
  });
}

document.addEventListener('scroll', updateActiveTab);
window.addEventListener('load', updateActiveTab);

updateActiveTab();
