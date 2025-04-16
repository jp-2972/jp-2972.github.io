const billInput = document.getElementById("billTotal");
const tipSlider = document.getElementById("tipSlider");
const tipAmount = document.getElementById("convertedTip");
const taxTotal = document.getElementById("taxTotal");
const grandTotal = document.getElementById("convertedTotal");
const currency = document.getElementById("currency");
const tipValue = document.getElementById("tipValue");

function calculate() {
  const bill = parseFloat(billInput.value);
  const tipRate = parseInt(tipSlider.value);

  tipValue.textContent = tipRate + "%";

  if (isNaN(bill) || bill < 0) {
    tipAmount.value = "";
    taxTotal.value = "";
    grandTotal.value = "";
    return;
  }

  const tip = bill * (tipRate / 100);
  const taxed = bill * 1.11;
  const grand = taxed + tip;

  taxTotal.value = taxed.toFixed(2);

  convertCurrency(tip, grand);
}

billInput.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
    }
  });
  

function convertCurrency(tip, total) {
  const selected = currency.value;
  let rate = 1;
  let symbol = "$";

  if (selected === "INR") {
    rate = 85;
    symbol = "₹";
  } else if (selected === "EUR") {
    rate = 0.95;
    symbol = "€";
  }

  tipAmount.value = symbol + (tip * rate).toFixed(2);
  grandTotal.value = symbol + (total * rate).toFixed(2);
}

billInput.addEventListener("input", calculate);
tipSlider.addEventListener("input", calculate);
currency.addEventListener("change", calculate);
