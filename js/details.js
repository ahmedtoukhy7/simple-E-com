links=document.getElementById("links")

let welcome=document.querySelector(".welcome")

if(localStorage.username){
    links.style.display="none"
    welcome.innerHTML=`welcome ${localStorage.username}`

}

let productdetails=localStorage.showdet
let parent=document.querySelector(".parent")

let item=JSON.parse(productdetails)
console.log(item.title)

function showdata (){
let table=
     `
            <div class="products-contt">
                            <img src="${item.image}" width="800">
                            
                            <div class="product-disc">
                                <h2 class="detailsh2">${item.title}</h2>
                                <h2 class="detailsh2">${item.price}</h2>
                                <p class="detailsp">Lorem ipsum dolor sit amet consectetur, adipisicing elitLorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eligendi sit, quis earum totam quibusdam!</p>
                                
                                
                            </div>
                        </div>
            
            ` 
console.log(table)
parent.innerHTML=table
}
showdata ()