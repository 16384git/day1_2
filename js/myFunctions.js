function btnClicked() {
  console.log("Painoit buttonia");
  alert("Painiketta painettiin");
}

function login() {
  console.log("Klikkasit login namiskaa!");
  let fname = document.getElementById("en").value;
  let lname = document.getElementById("sn").value;
  console.log(fname + " " + lname);

  document.getElementById("loginInfo").innerHTML = fname + " " + lname;
}
