let scheduleBtn = document.querySelector("#scheduleBtn");
let validateArea = document.querySelector("#formValidation");
let email = document.querySelector("#emailInput");
let username = document.querySelector("#nameInput");
let number = document.querySelector("#telInput");
let newdate = document.querySelector("#dateInput");
let timepicker = document.querySelector("#selecttime");
let appointmentBtn = document.querySelector("#appointBtn");
let appointment = document.querySelector("#appointment");
let datepick = document.getElementsByName("date")[0];
let valid = false;

let hideElements = function () {
  document.querySelector("#search").classList.add("hidden");
  document.querySelector("#content").style.maxHeight = null;
  document.querySelector("#loan").classList.add("hidden");
};

appointmentBtn.addEventListener("click", () => {
  hideElements();
  appointment.classList.toggle("hidden");
});

newdate.addEventListener("click", () => {
  let today = new Date();
  today.setDate(today.getDate() + 1);
  datepick.min = today.toISOString().split("T")[0];
});
newdate.addEventListener("input", function (e) {
  let day = new Date(this.value).getUTCDay();
  if ([6, 0].includes(day)) {
    e.preventDefault();
    newdate.value = "";
    valid = false;
    validateArea.textContent = "We are closed on weekends!";
    validateArea.classList.add("emptySubmission");
    setTimeout(() => {
      validateArea.textContent = "";
      validateArea.classList.remove("emptySubmission");
    }, 2000);
  } else {
    valid = true;
  }
});

scheduleBtn.addEventListener("click", () => {
  let atposition = email.value.indexOf("@");
  let dotposition = email.value.lastIndexOf(".");
  if (
    !email.value ||
    !username.value ||
    !number.value ||
    !newdate.value ||
    !timepicker.value ||
    !number.checkValidity()
  ) {
    validateArea.textContent = "Please fill in all fields before submission";
    validateArea.classList.add("emptySubmission");
    setTimeout(() => {
      validateArea.textContent = "";
      validateArea.classList.remove("emptySubmission");
    }, 5000);
  } else if (atposition < 1 || dotposition - atposition < 2) {
    validateArea.textContent =
      "Your email must include the '@' symbol and a valid provider";
    validateArea.classList.add("emptySubmission");
    setTimeout(() => {
      validateArea.textContent = "";
      validateArea.classList.remove("emptySubmission");
    }, 2000);
  } else if (valid) {
    localStorage.setItem("date", newdate.value);
    localStorage.setItem("time", timepicker.value);
    localStorage.setItem("username", username.value);
    window.open(
      "appointment.html",
      "_blank",
      "statusbar=no,height=300,width=600"
    );
    newdate.value = "";
    timepicker.value = "";
  }
});
