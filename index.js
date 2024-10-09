// console.log(document.body)
// let h1=document.getElementById("copyright")
// console.log(h1)
// h1.innerText = "Thanks For Visiting Us"
//let phone = document.getElementsByClassName("phone")
//console.log(phone)
//let phone =document.getElementsByTagName("div")
//console.log(phone)
//let mob =document.getElementById("mobile")
//console.log(mob)
//mob.innerText = "okay phone"
//let item =document.querySelector("p")
//console.log(item)
//let phone = document.querySelectorAll("p")
//console.log(phone)
//let phone = document.getElementById("mobile")
//console.log(phone)
//phone.innerHTML = "<h1>I understand</h1>"
let light=true
let btn=document.querySelector("#mode")
let body=document.body
function toggle(){
    if (light){
        body.style.backgroundColor = "black"
        body.style.color = "white"
        light = false
    }
    else{
        body.style.backgroundColor = "white"
        body.style.color = "black"
        light = true
    }
}


btn.addEventListener("click", toggle)
