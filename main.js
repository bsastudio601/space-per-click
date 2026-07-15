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
    clicker.style.backgroundColor = "green"
    clicker.style.transform = "scale(1.2)";
  }
});

document.addEventListener("keyup", function (e) {
  if (e.code === "Space") {
    e.preventDefault();
    clicker.style.backgroundColor = "#292929";
    clicker.style.transform = "scale(1)";
  }
});
reset.addEventListener("click",() => {
    count = 0;
    counter.textContent = count;
})