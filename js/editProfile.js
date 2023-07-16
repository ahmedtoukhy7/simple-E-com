links=document.getElementById("links")

let welcome=document.querySelector(".welcome")

if(localStorage.username){
    links.style.display="none"
    welcome.innerHTML=`welcome ${localStorage.username}`}



    let username=document.getElementById("username")
    let email=document.getElementById("email")
    let create=document.getElementById("create")


    // edit image 
    // let image=document.getElementById("image")
    // let prev
    
    // image.addEventListener("change",function(){
    //     let file= this.files[0]
    //     console.log(file)
    //     console.log(file.name)
    //      prev=URL.createObjectURL(file)
        


    //     function base64 (file){
    //         let reader =new FileReader()
    //         reader.readAsDataURL(file)
    //         reader.onload =function(){
    //             prev=reader.result
    //         }
    //     }
    //     base64 (file)
    //    let imagelocal=localStorage.image
    //     console.log(imagelocal)

    //     imagelocal=file
    //     console.log(imagelocal)
    // })
   





    let getuser=localStorage.username

    let getemail=localStorage.email

    username.value=getuser
    email.value=getemail


    create.addEventListener("click",function(e){
        e.preventDefault()
        
        localStorage.username=username.value
        localStorage.email=email.value
        window.location="profile.html"

        
    })

   