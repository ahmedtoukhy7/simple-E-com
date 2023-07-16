links=document.getElementById("links")

let welcome=document.querySelector(".welcome")

if(localStorage.username){
    links.style.display="none"
    welcome.innerHTML=`welcome ${localStorage.username}`}


    let editprod=localStorage.edit
    
    let newitem=JSON.parse(editprod)

    console.log(newitem)


    let title=document.getElementById("title")
    let price=document.getElementById("price")
    let desc=document.getElementById("desc")
    let size=document.getElementById("size")

    console.log(size.value)

    let sizeof
    size.addEventListener("change",function(e){
        sizeof =e.target.value
        //console.log(sizeof)
    })

    title.value= newitem.title
    price.value= newitem.price
    desc.value= newitem.desc
    size.value= newitem.sizeof


    let image=document.getElementById("image")
    let prev

    image.addEventListener("change",function(){
        let file= this.files[0]
        console.log(file)
        console.log(file.name)
         prev=URL.createObjectURL(file)
        console.log(prev)



        function base64 (file){
            let reader =new FileReader()
            reader.readAsDataURL(file)
            reader.onload =function(){
                prev=reader.result
            }
        }
        base64 (file)

    })





    let editbtn=document.getElementById("create")

    editbtn.addEventListener("click",function(e){
        e.preventDefault()
       
        let editItem = JSON.parse(editprod) ;
        let allProducts= JSON.parse(localStorage.createprod)




 allProducts.filter(el => {
    if( editItem.id === el.id)  {
        el.price = price.value;
        el.title = title.value;
        el.size = size.value;
    } 
})

console.log(allProducts)

localStorage.setItem("createprod", JSON.stringify(allProducts))




// let productobj = 
        // { id: Math.floor(Math.random()*50) ,title:title.value,image :prev ,price: price.value  ,desc:desc.value , size:size.value }
        // console.log(productobj.id)
       
           
        //        newitem.title=title.value
        //        newitem.price=price.value
        //        newitem.desc=desc.value
        //        newitem.sizeof=size.value

        //     //    console.log( newitem)
              
                             
               

        //     //    localStorage.setItem("createprod",JSON.stringify(newitem))

        //     //    console.log(localStorage.createprod)
              
               



           

        

    })
// console.log(editprod)
// console.log(localStorage.createprod)