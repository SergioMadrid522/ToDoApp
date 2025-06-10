const hamburgerBtn = document.querySelector(".bi-list");

hamburgerBtn.addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");

  sidebar.classList.toggle("active");
});
