// document.getElementById("low-to-high")
//   .addEventListener("click", async () => {
//     console.log("HELLO")
//     // Manipulate DOM here
//     // How to access MongoDB?
//   });

// document.getElementsByClassName("cart-remove")
//   .addEventListener("click", async () => {
//     console.log("CART REMOVE")
//     // Manipulate DOM here
//     // How to access MongoDB?
//   });

// Very hacky, try to refactor
const cart_remove = document.getElementsByClassName("cart-remove");
for (let i = 0; i < cart_remove.length; i++) {
  cart_remove[i].addEventListener("click", () => {
    try {
      cart_remove[i].parentElement.remove();
    } catch (error) {
      i=0;
      cart_remove[i].parentElement.remove();
    }
  });
}