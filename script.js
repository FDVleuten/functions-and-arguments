
const wallPaint = function (itemKleur) {

  console.log("The wall has been painted " + itemKleur);
}

const muurKleur = "green";
const volgendeMuurKleur = "black";

wallPaint(muurKleur);
wallPaint(volgendeMuurKleur);


const paint = function (item) {
  console.log("The north wall has been painted " + item);
  console.log("The south-east wall has been painted " + item);
}

const northWall = "orange";
const southEastWall = "grey";

paint(northWall);
paint(southEastWall);




