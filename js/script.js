/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl=document.getElementById("input-el")
const btnEl=document.getElementById("btn-el")

let first=document.getElementById("id1")
let second=document.getElementById("id2")
let third=document.getElementById("id3")


btnEl.addEventListener("click",function(){
    let it=parseFloat(inputEl.value)
    first.textContent=`${it} meters=${(3.281*it).toFixed(3)} feet | ${it} feet=${(it/3.281).toFixed(3)} meters`
    second.textContent=`${it} liter=${(0.264*it).toFixed(3)} gallon| ${it} gallon=${(it/0.264).toFixed(3)} liters`
    third.textContent=`${it} kilo=${(2.204*it).toFixed(3)} pounds| ${it} pound=${(it/2.204).toFixed(3)} kilo`
})