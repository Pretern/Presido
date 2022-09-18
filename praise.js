//document.getElementById("count-el").innerText=5
let countEl = document.getElementById("count-el")
let count = 0
function increment(){
 		count += 1
 			countEl.innerText=count
 		console.log(count) }
 	
  function save()
 { console.log(count)}
 let saveEl= document.getElementById("save-el")
 function save() {let june= count +  " - "
 				saveEl.textContent+= june
 				countEl.innerText=0
 				count=0
 				
 }
 
 
//let firstbatch= 20
//let second=30
//let count= firstbatch + second
//console.log(count)

//let myAge=1
//let ratio= 7
//let Dog=myAge x ratio
//console.log(Dog)
/*  let bonus= 50
bonus=bonus+50
bonus=bonus-75
bonus=bonus+45
console.log(bonus)

function increment() {console.log("this button was clicked" )}

function click() {console.log(42)
				
}/*  */


let lap1 = 34
let lap2 = 33
let lap3 = 36
function total() {
let click= lap1+lap2+lap3
console.log(click)
				
}
total()
let lapscompleted = 0
function incrementlaps() {lapscompleted=lapscompleted+1
console.log(lapscompleted)
			
}
//incrementlaps()
//incrementlaps()
//incrementlaps()
let firstName= 'Praise '
let lastName= 'Ugochukwu'
let fullName=firstName + lastName
console.log(fullName)

function linda() { let name =" Linda!"
let greeting =" Hi there,"
let full='"'+ greeting + name +'"'
console.log(full)				
}
linda()

let myPoints=3
function add3points() {myPoints+=3
				
}


function remove1point() {myPoints=myPoints-1
				
}

add3points()
remove1point()
add3points()
remove1point()
add3points()
console.log(myPoints)

let nike =document.getElementById("error")
function eror() {nike.textContent= "Something went wrong, Please try again"
				
}
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2

function addel() { let drag=num1+num2

document.getElementById("sumel").textContent= "sum: "+drag
			
}
function subtractel() { let drag=num1-num2

document.getElementById("sumel").textContent="sum: "+drag
			
}
function divideel() { let drag=num1/num2

document.getElementById("sumel").textContent="sum: "+drag
			
}
function multiplyel() { let drag=num1*num2

document.getElementById("sumel").textContent="sum: "+drag
			
}
