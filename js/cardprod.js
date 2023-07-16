

links=document.getElementById("links")

let welcome=document.querySelector(".welcome")

if(localStorage.username){
    links.style.display="none"
    welcome.innerHTML=`welcome ${localStorage.username}`

}









let parent=document.querySelector(".parent")
//console.log(JSON.parse(prodincard))
let nodata=document.querySelector(".nodata")

   

    function showdata(){
        let prodincard = localStorage.card
        let item = JSON.parse(prodincard)
        if (item.length===0){
            nodata.style.display="block"
        }
        let newproducts=item.map(function(ele){
            return `
            <div class="products-cont">
                            <img src="${ele.image}">
                            
                            <div class="product-disc">
                                <h2>${ele.title}</h2>
                                <h2>${ele.price}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eligendi sit, quis earum totam quibusdam!</p>
                                <button onclick="deleteitem(${ele.specialId})" class="addtocard">delete</button>
                                
                            </div>
                        </div>
            
            `
            
        })
        
        parent.innerHTML=newproducts
    }
    
    showdata()

    function deleteitem (id){
        let prodincard = localStorage.card
        let item = JSON.parse(prodincard)
        console.log(item)
        console.log(id)
        let delcard= item.filter((ele) => ele.specialId!==id )
       localStorage.setItem("card",JSON.stringify(delcard))
       showdata()
    //    window.location.reload()
    
    }








