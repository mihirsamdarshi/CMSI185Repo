var report = function (kilograms, pounds){
  document.getElementById("result").innerHTML =
  kilograms + "kg = " + pounds + "lbs";
};

document.getElementById("lb_to_kg").onclick = function () {
  var kg = document.getElementById("weight").value;
  report(kg * 2.20462, kg);
};

document.getElementById("kg_to_lb").onclick = function () {
  var lb = document.getElementById("weight").value;
  report(lb, lb / 2.20462);
};
