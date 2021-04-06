(function() {

var today = new Date();
var lliurament1 = new Date("03/26/2021");
var lliurament2 = new Date("04/30/2021");
var lliurament3 = new Date("05/28/2021");

//var df1= Math.abs(lliurament1-today);
var df1= lliurament1-today;
var df2= Math.abs(lliurament2-today);
var df3= Math.abs(lliurament3-today);

dl1 = Math.round(df1/(1000 * 3600 * 24));
dl2 = Math.round(df2/(1000 * 3600 * 24));
dl3 = Math.round(df3/(1000 * 3600 * 24));

console.log(dl1)
console.log(dl2)
console.log(dl3)

document.getElementById("dl1").textContent = dl1;
document.getElementById("dl2").textContent = dl2;
document.getElementById("dl3").textContent = dl3;


})();
