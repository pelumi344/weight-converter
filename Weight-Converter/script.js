/*** Pounds ***/
document.getElementById("output").style.display = "none";
document.getElementById("lbsInput").addEventListener("input", function(e) {
    document.getElementById("output").style.display = "block";
    let lbs = e.target.value;
document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
document.getElementById("ozOutput").innerHTML = lbs * 16;
});

/*** Grams***/
document.getElementById("output-2").style.display = "none";
document.getElementById("gramsInput").addEventListener("input", function(e) {
    document.getElementById("output-2").style.display = "block";
    let grams = e.target.value;
document.getElementById("lbsOutput").innerHTML = grams * 0.0022046;
document.getElementById("kgOutput-2").innerHTML = grams / 1000;
document.getElementById("ozOutput-2").innerHTML = grams * 0.035274;
});

/*** Kilograms ***/
document.getElementById("output-3").style.display = "none";
document.getElementById("kgInput").addEventListener("input", function(e) {
    document.getElementById("output-3").style.display = "block";
    let kg = e.target.value;
document.getElementById("lbsOutput-2").innerHTML = kg * 2.2046;
document.getElementById("gramsOutput-2").innerHTML = kg * 1000;
document.getElementById("ozOutput-3").innerHTML = kg * 35.274;
});

/*** Ounces ***/
document.getElementById("output-4").style.display = "none";
document.getElementById("ozInput").addEventListener("input", function(e) {
    document.getElementById("output-4").style.display = "block";
    let oz = e.target.value;
document.getElementById("lbsOutput-3").innerHTML = oz * 0.0625;
document.getElementById("gramsOutput-3").innerHTML = oz / 0.035274;
document.getElementById("kgOutput-3").innerHTML = oz / 35.274;
});