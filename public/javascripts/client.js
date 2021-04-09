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
      i = 0;
      cart_remove[i].parentElement.remove();
    }
  });
}

const qty = document.querySelectorAll("input");

const minus = document.getElementsByClassName("fa-minus");
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", () => {
    if (qty[i].value > 0) {
      qty[i].value--;
    }
  })
}

const plus = document.getElementsByClassName("fa-plus");
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", () => {
    qty[i].value++;
  })
}

