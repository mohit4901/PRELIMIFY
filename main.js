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
