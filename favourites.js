// write js code here corresponding to favourites.html
let body=document.querySelector("#tbody")
let ftv=JSON.parse(localStorage.getItem("favourites"))
console.log(ftv)

dis(ftv)

function dis(ftv){
    ftv.forEach(function(elem){
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
        ftv.innerText="Delete"
        ftv.addEventListener("click",function( ){
    del(elem)
    // console.log(elem)
        })
    
    
        tr.append(tnum,anam,bnam,dt,vanu,ftv)
        body.append(tr)
    
    
         
    })
}
function del(el){
    
}