// user login 
links=document.getElementById("links")

let welcome=document.querySelector(".welcome")

if(localStorage.username){
    links.style.display="none"
    welcome.innerHTML=`welcome ${localStorage.username}`

}
let parent=document.querySelector(".parent")
//console.log(JSON.parse(prodincard))
let nodata=document.querySelector(".nodata")


function draw(){
    let favitems=localStorage.fav
    let items=JSON.parse(favitems)
    if (items.length===0){
        nodata.style.display="block"
    }

    let itemsmap=items.map(function(ele){
        return `
        <div class="products-cont">
                        <img src="${ele.image}">
                        
                        <div class="product-disc">
                            <h2>${ele.title}</h2>
                            <h2>${ele.price}</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eligendi sit, quis earum totam quibusdam!</p>
                            <button onclick="deleteitem(${ele.id})" class="deltocard">delete</button>
                        </div>
                    </div>
        
        `

    })
    parent.innerHTML=itemsmap

    
}
draw()


//function delete item

function deleteitem(id){

    let favitems=localStorage.fav
    let items=JSON.parse(favitems)
    let delcard= items.filter((ele) => ele.id!==id )

    

    localStorage.setItem("fav",JSON.stringify(delcard))
    draw()
}


