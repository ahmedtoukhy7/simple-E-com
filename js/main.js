if(window.localStorage.card) {

    let cardLength = document.querySelector(".bascket .num")
    cardLength.innerHTML = JSON.parse(window.localStorage.card).length
    
}

//delete register and login
links=document.getElementById("links")

let welcome=document.querySelector(".welcome")

if(localStorage.username){
    links.style.display="none"
    welcome.innerHTML=`welcome ${localStorage.username}`

}

// define data

let products=[
    {id:1,title:"headphone",image: "image/download (1).jpg",price:400  },
    {id:2,title:"labtop",image: "image/download.jpg",price:300   },
    {id:3,title:"glassess",image: "image/Glasses_black.jpg" ,price:600  },
    {id:4,title:"watch",image: "image/images.jpg",price:700   },

]
let parent=document.querySelector(".parent")

function showdata(){
    let newproducts=products.map(function(ele){
        return `
        <div class="products-cont">
                        <img src="${ele.image}">
                        
                        <div class="product-disc">
                            <h2>${ele.title}</h2>
                            <h2>${ele.price}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eligendi sit, quis earum totam quibusdam!</p>
                            <button onclick="addtocard(${ele.id})" class="addtocard">add to card</button>
                            <button onclick="favproduct(${ele.id})" class="addtofav">add to fav</button>
                            <button onclick="showdetails(${ele.id})" >show details </button>
                        </div>
                    </div>
        
        `
        
    })
    parent.innerHTML=newproducts.join("")
}

showdata()


// let btn=document.querySelector(".addtocard")

// btn.addEventListener("click",function(){
//     if(localStorage.username){
//         console.log("okaay")
//     }
//     else{
//         location="login.html"
//     }
// })
let bascket= document.querySelector(".bascket")

    let cards=document.querySelector(".cards")
    let puttitle=document.querySelector(".puttitle")

    bascket.addEventListener("click",function(){
        cards.style.display="block"
    })

    
let num=document.querySelector(".num")
//  if(localStorage.titlecard !=null){
//      cards.innerHTML+=JSON.parse(localStorage.titlecard)
   
//  }


let arrofprod=[]
let item =localStorage.card
if (item){
    arrofprod = JSON.parse(item)
    // num.innerHTML+=item.length

}
// click to add card

function addtocard(id){
    if(localStorage.username){
        let prodid=products.find((ele) => ele.id===id)
        console.log(prodid)

        let arrofprodX = [] 

        if(window.localStorage.card) {
            arrofprodX=JSON.parse(window.localStorage.card) 
        }
        console.log(arrofprodX)
        
        let random = Math.floor(Math.random() * (100 - 1+1) -1 )
        prodid.specialId = random
        console.log(prodid)
        cards.innerHTML+=`<p>${prodid.title} </p>`
        
        let cardnum=document.querySelectorAll(".cards p")
        num.innerHTML=cardnum.length

        arrofprodX.push(prodid)
        console.log(arrofprodX)

 localStorage.setItem("card", JSON.stringify(arrofprodX) )
       
       
        
    }
    
        
        
    }


// show details

function showdetails(id){
    if(localStorage.username){
        let proudfilter=products.find((ele) => ele.id===id)
            //console.log(proudfilter)
            localStorage.setItem("showdet",JSON.stringify(proudfilter))
            
            setTimeout(function(){
                window.location="detals.html"
            },1500)
        
    }
}
let showsearch=document.querySelector(".showsearch")
// search 
let search=document.getElementById("search")
function searchitem(title){
    let searchprouduct= products.find((ele)=> ele.title.indexOf(title) !=-1)
        console.log(searchprouduct)
        //console.log(searchprouduct.title)
        
        let table=
        `
        <div class="products-conttt">
                         <img src="${searchprouduct.image}">
                        
                        <div class="product-disc">
                            <h2>${searchprouduct.title}</h2>
                            <h2>${searchprouduct.price}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eligendi sit, quis earum totam quibusdam!</p>
                            <button onclick="addtocard(${searchprouduct.id})" class="addtocard">add to card</button>
                            <button onclick="favproduct(${searchprouduct.id})" class="addtofav">add to fav</button>
                            <button onclick="showdetails(${searchprouduct.id})" >show details </button>
                        </div>
                    </div>
        
        `
        parent.style.display="none"
showsearch.innerHTML=table
         showsearch.style.display="block"
        
}

search.oninput=function(){
    
    searchitem(search.value)
    if(search.value=== ""){
        console.log("emp")
        showsearch.style.display="none"
        parent.style.display="block"
        
    }
    
    
}

// add to fav  

let arroffav=[]
let favitem=localStorage.fav

if(favitem){

    arroffav = JSON.parse(favitem)
}

function favproduct(id){
    if(localStorage.username){
        
    let newfavproduct= products.find((ele) => ele.id===id )

    arroffav.push(newfavproduct)
console.log(arroffav)

localStorage.setItem("fav",JSON.stringify(arroffav))

   
    
    }
}






// put create products in index




// console.log(createproducts)


//console.log(localStorage.createprod)
    
// console.log(createitems)
let createparent=document.querySelector(".create-parent")
function showcreation (){
    
        let createproducts=localStorage.createprod
        let createitems=JSON.parse(createproducts)
   
    let createitemmap= createitems.map(function(ele){
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
    createparent.innerHTML=createitemmap


}
showcreation ()



// edit product



function editproduct(id){
    let createproducts=localStorage.createprod
    let createitems=JSON.parse(createproducts)
    let editprod= createitems.find((ele)=> ele.id === id)
    //console.log(editprod)
    localStorage.setItem("edit",JSON.stringify(editprod))
    
    
    

    setTimeout(function(){
        window.location="editproduct.html"
    },1500)


}



//delete create item


function deleteitemcreate (id){
    let createproducts=localStorage.createprod
    let createitems=JSON.parse(createproducts)
let itemfilter =createitems.filter((ele)=> ele.id!==id)
localStorage.setItem("createprod",JSON.stringify(itemfilter))
console.log(localStorage.createprod)
showcreation ()
}






