var testResult = [];
exports.test = function (vehicle, testResultParam) {
  testResult = testResultParam;
  const { vehicleCoordinates, moves } = vehicle;
  vehicleTest(vehicleCoordinates);
  movesTest(moves);
  return testResult;
};

function movesTest(moves) {
  if (!moves) {
    pushTestResult("moves parameter must be declared");
  }
  if (!isString(moves)) {
    pushTestResult("moves parameter must be String");
  }
}

function vehicleTest(position) {
  if (!position.X || !position.Y || !position.direction) {
    pushTestResult("vehicle coordinates and direction must be declared");
  }
  if (
    !checkStringForNumbers(position.X) ||
    !checkStringForNumbers(position.Y)
  ) {
    pushTestResult("vehicle coordinates must be a number");
  }

  if (
    !subSetTest(["E", "W", "S", "N", "e", "w", "s", "n"], [position.direction])
  ) {
    pushTestResult("vehicle direction must be valid value");
  }
  // return testResult
}

function subSetTest(checkSet, incomingSet) {
  return incomingSet.every((letter) => checkSet.includes(letter));
}
function checkStringForNumbers(input) {
  let str = String(input);
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str.charAt(i)) || str.charAt(i) == " ") {
      return false;
      //if the string is a number, do the following
    }
  }
  return true;
}

function isString(word) {
  return typeof word === "string";
}

exports.upperRightPositionTest = function (position) {
  if (!position || !position.X || !position.Y) {
    return "upper-right coordinates must be declared";
  }
  if (
    !checkStringForNumbers(position.X) ||
    !checkStringForNumbers(position.Y)
  ) {
    return "upper-right coordinates must be a number";
  }
  return "";
};

function pushTestResult(params) {
  testResult.push(params);
}
