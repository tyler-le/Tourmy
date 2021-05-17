const initializeCart = () => {
  for (let i = 0; i < cart_price_span.length; i++) {
    item_prices[i] = cart_price_span[i].innerText;
  }

  for (let i = 0; i < item_prices.length; i++) {
    item_prices[i] = parseInt(item_prices[i].split("$")[1]);
    subtotal += item_prices[i]
  }

  subtotal_span[0].innerText = `$${subtotal}.00`
  const tax = (subtotal * (7.25 / 100));
  tax_span[0].innerText = `$${tax.toFixed(2)}`;
}

const manipulatePrices = () => {
  tax = (subtotal * taxRate);
  tax_span[0].innerText = `$${tax.toFixed(2)}`;
  total_span[0].innerText = `$${calcTotal(subtotal, tax)}`
}

const calcTotal = (subtotal, tax) => {
  tax = parseFloat(tax);
  const shipping = 9.95;
  total = (subtotal + tax + shipping).toFixed(2);
  return total;
}
// =========== //


// Declarations //
const cart_price_span = document.getElementsByClassName("cart-price");
const subtotal_span = document.getElementsByClassName("subtotal-price");
const total_span = document.getElementsByClassName("total-price");
const tax_span = document.getElementsByClassName("tax-price");
const qty = document.querySelectorAll("input");
let cart_remove = document.getElementsByClassName("cart-remove");
const plus = document.getElementsByClassName("fa-plus");
const minus = document.getElementsByClassName("fa-minus");
const allItems = document.getElementsByClassName("item");

const item_prices = [];
let subtotal = 0;
let tax;
const taxRate = 7.25 / 100;
// ========== //

initializeCart();

// remove item functionality //
for (let i = 0; i < cart_remove.length; i++) {
  cart_remove[i].addEventListener("click", () => {
    parent = cart_remove[i].parentElement;
    parent.style.display = 'none';
    subtotal -= item_prices[i];
    subtotal_span[0].innerText = `$${subtotal}.00`
    manipulatePrices();
  });
}
// ========== //

// +/- item functionality // 
for (let i = 0; i < allItems.length; i++) {
  plus[i].addEventListener("click", () => {
    qty[i].value++;
    subtotal += item_prices[i];
    subtotal_span[0].innerText = `$${subtotal}.00`
    cart_price_span[i].innerText = `$${item_prices[i]*qty[i].value}.00`;
    manipulatePrices();
  });

  minus[i].addEventListener("click", () => {
    if (qty[i].value > 0) {
      qty[i].value--;
      subtotal -= item_prices[i];
      subtotal_span[0].innerText = `$${subtotal}.00`
      cart_price_span[i].innerText = `$${item_prices[i]*qty[i].value}.00`;
      manipulatePrices();
    }
  });
}

//==========//