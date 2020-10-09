exports.StartMoving = function (index, vehicle, upperRightPosition) {
  const { moves } = vehicle;
  let result = "";
  vehicle.vehicleCoordinates.X = parseInt(vehicle.vehicleCoordinates.X);
  vehicle.vehicleCoordinates.Y = parseInt(vehicle.vehicleCoordinates.Y);
  for (let i = 0; i < moves.length; i++) {
    switch (moves.charAt(i).toUpperCase()) {
      case "M":
        vehicle.vehicleCoordinates = MoveInSameDirection(
          vehicle.vehicleCoordinates
        );
        break;
      case "L":
        vehicle.vehicleCoordinates.direction = Rotate90Left(
          vehicle.vehicleCoordinates.direction
        );
        break;
      case "R":
        vehicle.vehicleCoordinates.direction = Rotate90Right(
          vehicle.vehicleCoordinates.direction
        );
        break;
      default:
        break;
    }
    if (
      vehicle.vehicleCoordinates.X < 0 ||
      vehicle.vehicleCoordinates.X > upperRightPosition.X ||
      vehicle.vehicleCoordinates.Y < 0 ||
      vehicle.vehicleCoordinates.Y > upperRightPosition.Y
    ) {
      result =
        "Oops! " +
        index +
        ". car's position can not be beyond bounderies (0 , 0) and (" +
        upperRightPosition.X +
        " , " +
        upperRightPosition.Y +
        ")";
    } else {
      result =
        index +
        ". vehicle completed path last position :(" +
        vehicle.vehicleCoordinates.X +
        " , " +
        vehicle.vehicleCoordinates.Y +
        ")";
    }
  }
  return result;
};

function Rotate90Left(direction) {
  switch (direction.toUpperCase()) {
    case "N":
      direction = "W";
      break;
    case "S":
      direction = "E";
      break;
    case "E":
      direction = "N";
      break;
    case "W":
      direction = "S";
      break;
    default:
      break;
  }
  return direction;
}

function Rotate90Right(direction) {
  switch (direction.toUpperCase()) {
    case "N":
      direction = "E";
      break;
    case "S":
      direction = "W";
      break;
    case "E":
      direction = "S";
      break;
    case "W":
      direction = "N";
      break;
    default:
      break;
  }
  return direction;
}
function MoveInSameDirection(vehicleCoordinates) {
  switch (vehicleCoordinates.direction) {
    case "N":
      vehicleCoordinates.Y += 1;
      break;
    case "S":
      vehicleCoordinates.Y -= 1;
      break;
    case "E":
      vehicleCoordinates.X += 1;
      break;
    case "W":
      vehicleCoordinates.X -= 1;
      break;
    default:
      break;
  }
  return vehicleCoordinates;
}
