const dropBtn = document.querySelector(".dropbtn");
const dropContent = document.getElementById("dropdownList");

dropBtn.addEventListener("click", () => {
  dropContent.style.display = dropContent.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", (e) => {
  if (!e.target.matches('.dropbtn')) {
    dropContent.style.display = "none";
  }
});

const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

  const scrollContainer = document.getElementById('scrollable-buttons');
  const scrollAmount = 200;

  document.querySelector('.scroll-btn.left').addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  document.querySelector('.scroll-btn.right').addEventListener('click', () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });