let usernamelogin=document.getElementById("usernamelogin")

let passwordlogin=document.getElementById("passwordlogin")
let submitlogin=document.getElementById("submitlogin")

submitlogin.addEventListener("click",function(e){
    e.preventDefault();
    if(usernamelogin.value==="" || passwordlogin.value === ""){
        alert("enter data")

    }
    else{
        if(localStorage.username=== usernamelogin.value && localStorage.password === passwordlogin.value){
            setTimeout(function(){
                window.location="index.html"
            },2000)

        }
        
        
    }
    
})