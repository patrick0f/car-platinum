let menubtn = document.querySelector("#hamburger");
let navbar = document.querySelector(".nav");
let header = document.querySelector(".header");
let contactBtn = document.querySelector("#contactBtn");
let responseArea = document.querySelector("#responseArea");
let loanLink = document.querySelector("#loanLink");
let searchLink = document.querySelector("#searchLink");
let appointmentLink = document.querySelector("#appointmentLink");
let loan = document.querySelector("#loan");
let search = document.querySelector("#search");
let appointment = document.querySelector("#appointment");
let content = document.querySelector("#content");

menubtn.addEventListener("click", () => {
  menubtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  menubtn.classList.remove("fa-times");
  navbar.classList.remove("active");
});

window.addEventListener("load", () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

contactBtn.addEventListener("click", () => {
  let email = document.querySelector("#email");
  let name = document.querySelector("#name");
  let message = document.querySelector("#message");
  let atposition = email.value.indexOf("@");
  let dotposition = email.value.lastIndexOf(".");
  if (!email.value || !name.value || !message.value) {
    responseArea.textContent = "Please fill in all fields before submission";
    responseArea.classList.add("emptySubmission");
    setTimeout(() => {
      responseArea.textContent = "";
      responseArea.classList.remove("emptySubmission");
    }, 5000);
  } else if (atposition < 1 || dotposition - atposition < 2) {
    responseArea.textContent =
      "Your email must include the '@' symbol and a valid provider";
    responseArea.classList.add("emptySubmission");
    setTimeout(() => {
      responseArea.textContent = "";
      responseArea.classList.remove("emptySubmission");
    }, 2000);
  } else {
    responseArea.textContent = "We have received your message!";
    responseArea.classList.add("filledSubmission");
    setTimeout(() => {
      responseArea.textContent = "";
      responseArea.classList.remove("filledSubmission");
    }, 5000);
  }
});
let hideElements = function () {
  search.classList.add("hidden");
  content.style.maxHeight = null;
  loan.classList.add("hidden");
  appointment.classList.add("hidden");
};
loanLink.addEventListener("click", () => {
  hideElements();
  loan.classList.toggle("hidden");
});

searchLink.addEventListener("click", () => {
  hideElements();
  search.classList.toggle("hidden");
});

appointmentLink.addEventListener("click", () => {
  hideElements();
  appointment.classList.toggle("hidden");
});
