// write js code here corresponding to matches.html
let data=JSON.parse(localStorage.getItem("schedule"))
// console.log(data)
let arr=[]
let body=document.querySelector("#body")
dis(data)
let filter=document.querySelector("#filterVenue")
filter.addEventListener("change", flt)
function flt(){
    var ft=filter.value;
    // console.log(ft)
   
    let M=data.filter(function(el){
        if(ft=="Mumbai"){
            console.log(el)
            return el.van=="Mumbai"
            console.log("fdfh")
        }
    })
    dis(M)
    // let b=data.filter(function(el){
    //     if(ft=="Banglore"){
    //         return el.van=="Banglore"
    //     }
    // dis(b)
    // })
    }
function dis(data){
    data.forEach(function(elem){
        let tr=document.createElement("tr")
        let tnum=document.createElement("td")
        tnum.innerText=elem.tnum
        let anam=document.createElement("td")
        anam.innerText=elem.ta
        let bnam=document.createElement("td")
        bnam.innerText=elem.tb
        let dt=document.createElement("td")
        dt.innerText=elem.dat
        let vanu=document.createElement("td")
        vanu.innerText=elem.van
        let ftv=document.createElement("td")
        ftv.innerText="Favourite"
        ftv.addEventListener("click",function( ){
    bookfun(elem)
    // console.log(elem)
        })
    
    
        tr.append(tnum,anam,bnam,dt,vanu,ftv)
        body.append(tr)
    
    
         
    })
}

function bookfun(ele){
    // console.log("dfljk")
    arr.push(ele)
    localStorage.setItem("favourites", JSON.stringify(arr))
    console.log(ele)
}
