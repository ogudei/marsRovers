const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const port = 3000;
const alghoritm = require("./alghoritm");
const vehicleTest = require("./test").test;
const upperRightPositionTest = require("./test").upperRightPositionTest;
const prepareResponseResult = require("./utils/prepareResponseResult")
  .prepareResponseResult;
const HttpStatus = require("./constants/httpStatuses").HttpStatus;


//EXAMPLE INPUT

// {
//   "upperRightPosition":{
//     "X":"25",
//     "Y":"25"
//   },
// "vehicles":[
//   {
//   "vehicleCoordinates":{
//     "X":"26",
//     "Y":"4",
//     "direction":"E"
//   },

//   "moves":"RMQLMMEMM"
// },
// {
//   "vehicleCoordinates":{
//     "X":"4",
//     "Y":"3",
//     "direction":"E"
//   },
//   "moves":"RMQLMMEMM"
// }
// ]    
// }
app.post("/perform", (req, res) => {
  let vehicleArray = [];
  let errorArray = [];
  let data = {};
  let upperRightPosition = req.body.upperRightPosition;
  let upperRightPositionTestResult =
    upperRightPositionTest(upperRightPosition).length > 0;
  if (upperRightPositionTestResult.length > 0) {
    data = {
      error: [upperRightPositionTestResult],
      vehicles: vehicleArray,
    };
  } else if (!Array.isArray(req.body.vehicles)) {
    data = {
      error: ["vehicles must be array"],
      vehicles: vehicleArray,
    };
  } else {
    upperRightPosition.X = parseInt(upperRightPosition.X);
    upperRightPosition.Y = parseInt(upperRightPosition.Y);
    for (let index = 0; index < req.body.vehicles.length; index++) {
      let testResult = vehicleTest(req.body.vehicles[index], []);
      if (testResult.length > 0) {
        let err = {
          status: HttpStatus.OK,
          errorDetail: {
            index: index + ". vehicle",
            testResult: testResult,
          },
        };
        errorArray.push(err);
      } else {
        let vehicle = alghoritm.StartMoving(
          index+1,
          req.body.vehicles[index],
          req.body.upperRightPosition
        );
        vehicleArray.push(vehicle);
      }
    }
    data = {
      error: errorArray,
      vehicles: vehicleArray,
    };
  }
  prepareResponseResult(req, res, HttpStatus.OK, data);
});

app.listen(port, () => {
  console.log("server listening on " + port + " ");
});
