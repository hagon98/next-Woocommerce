export default function addZeroBeforeDateNumber(number) {
  let newDateNumber = "";

  // console.log("number:", number);
  if (number < 10) {
    // console.log("number<10:", "0" + number.toString());
    newDateNumber = "0" + number.toString();
  } else {
    newDateNumber = number.toString();
  }
  // console.log("newDate", newDateNumber);

  return newDateNumber;
}
