const p = document.querySelector("p");
const incr = document.querySelector(".incr")
const decr = document.querySelector(".decr")
const reset = document.querySelector(".reset")
var count = 0;
incr.addEventListener("click", function(){
    count++;
    p.textContent = count;
})
decr.addEventListener("click", function(){
    count--;
    p.textContent = count;
})
reset.addEventListener("click", function(){
    count = 0;
    p.textContent = count;
})
