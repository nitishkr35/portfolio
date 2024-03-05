let cvbtn=document.getElementById("cvbtn");
let submit=document.getElementById("submit");
cvbtn.addEventListener("click",function(){
    alert("Downloaded Successfully")
})

submit.addEventListener("click",function(){
    let email=document.getElementById("email");
    let pass=document.getElementById("pass");
    if(email.value== "" && pass.value== "" ){
          alert("fill the details")
}else{
    alert("logged in sucessfull")
}
})
