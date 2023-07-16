let username=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let submit=document.getElementById("submit")


submit.addEventListener("click",function(e){
    e.preventDefault()
    if(username.value==="" || email.value==="" || password.value === ""){
        alert("enter data")

    }
    else{
        localStorage.setItem("username" ,username.value )
        localStorage.setItem("email" ,email.value )
        localStorage.setItem("password" ,password.value )
       
       setTimeout(function(){
        window.location="login.html"
       },2000)
    }
})