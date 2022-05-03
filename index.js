// write js code here corresponding to index.html
// You should add submit event on the form
let main=document.querySelector("#masaiForm")
let button=document.querySelector("#finish")
button.addEventListener("click",submitbutton )
let arr=JSON.parse( localStorage.getItem("schedule"))  || []






function submitbutton( ){
event.preventDefault()
let obj={
    tnum:main.matchNum.value,
    ta:main.teamA.value,
    tb:main.teamB.value,
    dat:main.date.value,
    van:main.venue.value,
    
}
arr.push(obj)
console.log(main)
console.log(arr)
localStorage.setItem("schedule" ,JSON.stringify(arr))
}