let amountVar = document.querySelector("#amount");
let rateVar = document.querySelector("#rate");
let monthsVar = document.querySelector("#months");
let downpaymentVar = document.querySelector("#downpayment");
let calculateBtn = document.querySelector("#calculateBtn");
let loanBtn = document.querySelector("#loanBtn");
let loanSection = document.querySelector("#loan");
let totalVar = document.querySelector("#total");
let monthlyContainer = document.querySelector("#monthlyContainer");

let hideElements = function () {
  document.querySelector("#search").classList.add("hidden");
  document.querySelector("#content").style.maxHeight = null;
  document.querySelector("#loan").classList.add("hidden");
};

calculateBtn.addEventListener("click", () => {
  let amount = amountVar.value;
  let rate = rateVar.value;
  let months = monthsVar.value;
  let downpayment = downpaymentVar.value;
  if (amount && rate && months && downpayment) {
    let realAmount = amount - downpayment;
    let interest = (realAmount * (rate * 0.01)) / months;
    let moneytotal = (realAmount / months + interest).toFixed(2);
    totalVar.classList.remove("hidden");
    totalVar.textContent = "$" + moneytotal;
    monthlyContainer.classList.remove("hidden");
  } else {
    monthlyContainer.classList.remove("hidden");
    monthlyContainer.textContent =
      "Please fill in all fields before submission";
    monthlyContainer.classList.add("emptySubmission");
    setTimeout(() => {
      monthlyContainer.textContent = "";
      monthlyContainer.classList.remove("emptySubmission");
    }, 5000);
  }
});

loanBtn.addEventListener("click", () => {
  hideElements();
  loanSection.classList.add("transition");
  loanSection.classList.toggle("hidden");
  monthlyContainer.classList.add("hidden");
});
