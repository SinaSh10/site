let  slideindex=1
function setSlide(input,index){
    slideindex=index
    let item=document.querySelector(`#${input}`)
    let slides=[...document.querySelector('.slides').children]
    slides.forEach((element)=>{
        element.classList.remove('active')
    })
    item.classList.add('active')
}
setInterval(() => {
    slideindex+=1
    if(slideindex==4){
        slideindex=1
    }
    setSlide(`slide${slideindex}`,slideindex)
    
}, 4000);
let remainingTime=60000
function setTime(){
    if(remainingTime==0)return
    let h=Math.floor(remainingTime/3600)
    let m=Math.floor((remainingTime%3600)/60)
    let s=(remainingTime%3600)%60
    document.querySelector('#hour').innerHTML=h
    document.querySelector('#miniute').innerHTML=m
    document.querySelector('#second').innerHTML=s
}
setInterval(
    ()=>{
        remainingTime-=1
        setTime()
    }
, 1000);
