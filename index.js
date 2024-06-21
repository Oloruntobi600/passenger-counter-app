// let count =5
// console.log(count)
//
// let myAge = 31
// console.log(myAge)
//
// let miAge = 31
// let humanDogRatio = 7
// let myDogAge = miAge * humanDogRatio
// console.log(myDogAge)
// let bonusPoints = 50
// console.log(bonusPoints)
//  bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints  = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints  = bonusPoints + 45
// console.log(bonusPoints)

// function increment() {
//  console.log("The button was clicked")
// }
//  function logOut(){
//  console.log(42)
//  }
// logOut()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
//  function myLogger (){
//   let totalSum = lap1 + lap2 + lap3
//   console.log(totalSum)
//  }
//  myLogger()
// function lapsCompleted(){
//  let lapsCompleted = 0
//  lapsCompleted = lapsCompleted + 1
//  lapsCompleted = lapsCompleted + 1
//  lapsCompleted = lapsCompleted + 1
//  console.log(lapsCompleted)
// }
// lapsCompleted()


let saveEl = document.getElementById("save-el")
let countEl =document.getElementById("count-el")
let count = 0

console.log(saveEl)
function increment() {
 count = count + 1
 countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}







// let name = "oloruntobi"
// let greeting = "Hi, my name is :"
// let myGreetings = greeting + name
// console.log(myGreetings)

// let welcomeEl = document.getElementById("welcome-el")
// let name = "oloruntobi"
// let greeting = "Hi, my name is :"
// welcomeEl.innerText = greeting + name
