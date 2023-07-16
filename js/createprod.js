links=document.getElementById("links")

let welcome=document.querySelector(".welcome")

if(localStorage.username){
    links.style.display="none"
    welcome.innerHTML=`welcome ${localStorage.username}`}


    let title=document.getElementById("title")
    let price=document.getElementById("price")
    let desc=document.getElementById("desc")
    let create=document.getElementById("create")
    let size=document.getElementById("size")
    size.addEventListener("change",function(e){
        let sizeof =e.target.value
        console.log(sizeof)
    })
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

    // console.log(title)
    // console.log(price)
    // console.log(desc)
    console.log(size.value)


    let arr=[]
    if(localStorage.createprod){
        arr= JSON.parse(localStorage.createprod)
    }

        create.addEventListener("click",function(e){
            e.preventDefault()
             
            let productobj = 
            { id: Math.floor(Math.random()*1000) ,title:title.value,image :prev ,price: price.value  ,desc:desc.value , size:size.value }
            // console.log(productobj.id)
            if(title.value ==="" || price.value ==="" || desc.value ==="" || size.value ==="") {
                alert("emter value")
            }
            else{

              


               
                    arr.push(productobj)
                
                //console.log(arr)

                localStorage.setItem("createprod",JSON.stringify(arr))
                


            }

        })



    
