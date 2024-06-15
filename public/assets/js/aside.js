document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  
  const sidebarBtn = document.querySelector(".toggle-btn");
  const container = document.querySelector(".container");
  console.log("sidebarBtn:", sidebarBtn);

  if (sidebarBtn) {
    sidebarBtn.addEventListener("click", () => {
      console.log("Button clicked");
      container.classList.toggle("active");
    });
  } else {
    console.error("No se encontró el botón de toggle");
  }
});