const display = document.querySelector("#display");

//append numbers/operators to the display
function appendToDisplay(value) {
  display.value += value;

  // Append numbers/operators to the display
  // if (display.value === "0") {
  //   display.value = value; // Replace zero with the new value
  // } else {
  //   display.value += value; // Append the new value to the existing content
  // }
}
