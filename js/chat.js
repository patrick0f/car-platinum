let chatBtn = document.querySelector("#chatBtn");
let timestamp = document.querySelector("#timestamp");
let chatbox = document.querySelector("#chatbox");
let chatBottom = document.querySelector("#chat-bottom");
let textInput = document.querySelector("#textInput");
let sendMsgBtn = document.querySelector("#sendMsgBtn");
let plumBtn = document.querySelector("#plumBtn");

plumBtn.addEventListener("click", () => {
  let content = document.querySelector("#content");
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});
chatBtn.addEventListener("click", () => {
  let content = document.querySelector("#content");
  //chatBtn.classList.toggle("active");
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});

let Newtime = function () {
  let today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let time = `${hour}:${minutes}`;
  return time;
};
let firstMessage = function () {
  let firstMessage = "Hello, I'm Car Platinum's AI powered chat assistant! Feel free to ask me anything or type /help for a list of queries!";
  let initialMsg = document.querySelector("#initialMsg");
  initialMsg.innerHTML = `<p class="botText"> <span> ${firstMessage} </span> </p>`;
  let time = Newtime();
  timestamp.textContent = time;
};

let botResponseFunc = function (input) {
  if (input === "/help") {
    return "About Platinum <br> Hours of Operation <br> Location <br> Email <br> Phone Number <br> Loan Estimator <br> Car Finder ";
  } else if (
    input === "Hours of Operation" ||
    input === "Hours of operation" ||
    input === "hours of Operation" ||
    input === "hours of operation" ||
    input === "hours" ||
    input === "Hours"
  ) {
    return "We are open 9am to 7pm Mondays through Fridays but closed on holidays.";
  } else if (
    input === "About Platinum" ||
    input === "About platinum" ||
    input === "about platinum" ||
    input === "platinum" ||
    input === "Platinum" ||
    input === "About" ||
    input === "about"
  ) {
    return "We are a small used car dealership located in Florida that focuses on higher end, premium cars for our customers. We hold our standards to the highest regard and try to satisfy every customer!";
  } else if (
    input === "Location" ||
    input === "location" ||
    input === "Address" ||
    input === "address"
  ) {
    return "Our address is 6500 Nova Dr, Davie, FL 33317.";
  } else if (
    input === "Email" ||
    input === "email" ||
    input === "Email Address" ||
    input === "email address" ||
    input === "Email address"
  ) {
    return "Our email is contact@platnium.com. ";
  } else if (
    input === "Phone" ||
    input === "phone" ||
    input === "Phone Number" ||
    input === "Phone number" ||
    input === "phone number"
  ) {
    return "Our phone number is +1 (123)-456-7890. ";
  } else if (
    input === "Loan Estimatior" ||
    input === "Loan estimator" ||
    input === "loan estimator" ||
    input === "Loan Estimate" ||
    input === "loan estimate" ||
    input === "loan" ||
    input === "Loan" ||
    input === "Estimate" ||
    input === "estimate"
  ) {
    return "Check out our loan estimator in our services section <a href='#services' class='loanChat'>here</a>"; /*  <--- insert loan estimate link */
  } else if (
    input === "Car Finder" ||
    input === "Car finder" ||
    input === "car finder"
  ) {
    return "Check out our car finder in our services section <a href='#services' class='searchChat'>here</a>"; /*  <--- insert car finder link */
  } /*  else if (
    input === "Schedule an Appointment" ||
    input === "Schedule an appointment" ||
    input === "schedule an appointment" ||
    input === "Schedule An Appointment" ||
    input === "Schedule Appointment" ||
    input === "Schedule appointment" ||
    input === "appointment" ||
    input === "Appointment" ||
    input === "schedule appointment"
  ) {
    return "Link for appointment"; 
  } */ else {
    return "Try asking something else or seeing if you mispelled the command!";
  }
};

let returnResponse = function (userInput) {
  let botResponse = botResponseFunc(userInput);
  let bothtmlResponse = `<p class='botText'><span>${botResponse}</span></p>`;
  chatbox.innerHTML += bothtmlResponse;
  chatBottom.scrollIntoView(true);
};

let getUserInput = function () {
  let userInput = textInput.value;
  let userhtmlResponse;
  textInput.value = "";
  if (userInput) {
    userhtmlResponse = `<p class='user-texts'><span>${userInput}</span></p>`;
    chatbox.innerHTML += userhtmlResponse;
    chatBottom.scrollIntoView(true);
    setTimeout(() => {
      returnResponse(userInput);
    }, 500);
  }
};

sendMsgBtn.addEventListener("click", getUserInput);
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getUserInput();
  }
});
firstMessage();
