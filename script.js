function pickColorAndRow() {
  const card = document.getElementById("card");
  const colors = ["Blue", "Pink", "Yellow"];
  let i = Math.floor((Math.random() * colors.length));
  document.getElementById("color").innerHTML = "Color: " + colors[i];
  let x = Math.floor((Math.random() * 20) + 1);
  document.getElementById("rows").innerHTML = "Rows: " + x;
  
  switch(i) {
    case 0:
      card.style.backgroundColor = "#97B3F0"; //blue
      break;
    case 1:
      card.style.backgroundColor = "#FFCCE7"; //pink
      break;
    case 2:
      card.style.backgroundColor = "#FCF299"; //yellow
      break;
    default:
      document.body.style.backgroundColor = "white";
      break;
  }
}
