links=document.getElementById("links")

let welcome=document.querySelector(".welcome")

if(localStorage.username){
    links.style.display="none"
    welcome.innerHTML=`welcome ${localStorage.username}`}


    let username=localStorage.username
    let email=localStorage.email



    let getuser=document.getElementById("getuser")
    let getemail=document.getElementById("getemail")


    getuser.innerHTML=`Name is :  ${username}`
    getemail.innerHTML=`Email is :  ${email}`

    
    
    let length =document.getElementById("length")


    let lenghtofprod =JSON.parse(localStorage.createprod).length

    length.innerHTML=`length of products is : ${lenghtofprod}`


    let products= JSON.parse(localStorage.createprod)

    

    //function creation 
let showprod=document.querySelector(".showprod")

    function showcreation (){
    
       
   
    let createitemmap= products.map(function(ele){
        return `
        
        <div class="products-cont">
        
                        <img src="${ele.image}">
                        
                        <div class="product-disc">
                            <h2>${ele.title}</h2>
                            <h2>${ele.price}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eligendi sit, quis earum totam quibusdam!</p>
                            
                            <button onclick="editproduct(${ele.id})" class="edit">edit</button>
                           
                            <button onclick="deleteitemcreate(${ele.id})" >Delete </button>
                        </div>
                    </div>
        
        `
        
   

    })
    showprod.innerHTML=createitemmap
    
    console.log(createitemmap)

}
showcreation ()


