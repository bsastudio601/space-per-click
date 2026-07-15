const clicker = document.getElementById("clicker");
const counter = document.getElementById("counter");
const reset = document.getElementById("resetbtn");
let count = Number(localStorage.getItem("count")) || 0;
counter.textContent = count;

document.addEventListener("keydown", function (e) {
  if (e.code === "Space" && !e.repeat) {
    e.preventDefault();
    count = count + 1;
    counter.textContent = count;
    localStorage.setItem("count",count);
    console.log(count);
    clicker.style.backgroundColor = "#39f772"
    clicker.style.borderColor = "#39f772"
    clicker.style.boxShadow = "0 0 20px #39f772";
    clicker.style.transform = "scale(1.2)";
  }
});

document.addEventListener("keyup", function (e) {
  if (e.code === "Space") {
    e.preventDefault();
    clicker.style.backgroundColor = "#292929";
        clicker.style.borderColor = "white"
    clicker.style.boxShadow = "0 0 20px white";
    clicker.style.transform = "scale(1)";

    if ( count === 10)
        alert("alright, bet!");
    if ( count === 50)
        alert("50/50 you say?");
    if ( count === 100)
        alert("Thats a century!");
    if ( count === 500)
        alert("so you wanna get you work dont or wanna rest a bit?");
    if ( count === 999)
        alert("you arent use auto clicker ar you?");
    if ( count === 5000)
        alert("why? why are you doing this with your life?");
    if ( count === 10000)
        alert("You need to see a doctor :(");

  }

});
reset.addEventListener("click",() => {
    count = 0;
    counter.textContent = count;
    localStorage.removeItem("count");
})