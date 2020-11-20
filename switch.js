// function
console.log(userChoice);

let people1 = {
  name: "Amanda",
  status: "Positive",
};

let status = people1.status;

switch (
  status //
) {
  case "Positive": // status === "Positive"
    handleAnswer1();
    break;

  case "Suspect": // userChoice === 2
    handleAnswer2();
    break;

  case 3: // userChoice === 3
    handleAnswer3();
    break;

  default:
    // else
    console.log("Sorry, option is not available");
}

// hoisting
function handleAnswer1() {
  console.log("handle answer 1");
}
