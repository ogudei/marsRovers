# marsRovers
some rovers decided to travel around mars...


installation
npm install

for Run
node app

send parameter to /perform endPoint via Postman etc. with JSON like below


{
    "upperRightPosition":{
      "X":"25",
      "Y":"25"
    },
"vehicles":[
    {
    "vehicleCoordinates":{
      "X":"26",
      "Y":"4",
      "direction":"E"
    },

    "moves":"RMQLMMEMM"
  },
  {
    "vehicleCoordinates":{
      "X":"4",
      "Y":"3",
      "direction":"E"
    },
    "moves":"RMQLMMEMM"
  }
]    
}
