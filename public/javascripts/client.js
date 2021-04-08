
document.getElementById("low-to-high")
  .addEventListener("click", async () => {
    console.log("HELLO")
    // Manipulate DOM here
    // How to access MongoDB?
  });

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 0)
    console.log("SCrOLL")
  })