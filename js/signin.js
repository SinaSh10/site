document.querySelector('#submit').addEventListener('click',()=>{
    let newUserNameInput=document.querySelector('#username-sign')
    let newUserName=newUserNameInput.value
    alert(`خیلی خوشحالیم که به جمع ما پیوستی '${newUserName}' عزیز`)
})