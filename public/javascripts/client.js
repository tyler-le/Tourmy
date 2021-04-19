// Manipulate prices
let cart_price_span = document.getElementsByClassName("cart-price");
let subtotal_span = document.getElementsByClassName("subtotal-price");
let item_prices = [];
let subtotal = 0;

for (let i = 0; i < cart_price_span.length; i++) {
  item_prices[i] = cart_price_span[i].innerText;
}

for (let i = 0; i < item_prices.length; i++) {
  item_prices[i] = parseInt(item_prices[i].split("$")[1]);
  subtotal += item_prices[i]
}

subtotal_span[0].innerText = `$${subtotal}.00`

// remove item functionality
let cart_remove = document.getElementsByClassName("cart-remove");
for (let i = 0; i < cart_remove.length; i++) {
  cart_remove[i].addEventListener("click", () => {
    parent = cart_remove[i].parentElement;
    console.log(parent)
    parent.style.display = 'none';
    subtotal -= item_prices[i];
    subtotal_span[0].innerText = `$${subtotal}.00`
  });
}

// +/- item functionality
const qty = document.querySelectorAll("input");

const plus = document.getElementsByClassName("fa-plus");
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", () => {
    qty[i].value++;
    subtotal += item_prices[i];
    subtotal_span[0].innerText = `$${subtotal}.00`
    // cart_price_span[i].innerText = `$${item_prices[1]}.00`;
  })
}
const minus = document.getElementsByClassName("fa-minus");
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", () => {
    if (qty[i].value > 0) {
      qty[i].value--;
      subtotal -= item_prices[i];
      subtotal_span[0].innerText = `$${subtotal}.00`
    }
  })
}

let tax = parseFloat((subtotal*(7.25/100)).toFixed(2));
let tax_span = document.getElementsByClassName("tax-price");
console.log(tax_span);
tax_span[0].innerText = `$${tax}`;

let shipping = 9.95
let total;

total = subtotal+tax+shipping;
console.log(total)
let total_span = document.getElementsByClassName("total-price");
total_span[0].innerText = `$${total}`


const calcTotal = () => {
  // get shipping
  // call calcTax
  // call calcSubtotal

  //add all values up
}

const calcTax = () => {
}
const calcSubtotal = () => {
}
