

let navbar=document.querySelector(".navbar")
let toggler =document.querySelector(".navbar-toggler")


setInterval(() => {

    
window.addEventListener("scroll" , ()=>{
    // console.log(scrollY)
    if(scrollY>=668){
        navbar.style.backgroundColor="#212529";
        toggler.style.borderColor="white";

        
    }else if(scrollY<=668){
        navbar.style.backgroundColor="transparent";

    }
})

}, 0);


//  to reatch number in boxes
let arr=Array.from(document.querySelectorAll(".content .num"))


function increase(e){
    let count=setInterval(()=>{
        e.innerHTML =parseInt(e.innerHTML)+ 1 
        if(   e.innerHTML==e.dataset.num){
            clearInterval(count)
        }

    },1/parseInt(e.dataset.num))
}

let o= setInterval(()=>{
    
if(scrollY>=1500){
    arr.forEach(e=>{
        increase(e)
    })
    
    clearInterval(o)
    
}

} , 100)




//   animate boxs
let arr2=Array.from(document.querySelectorAll(".opinion .center .three"))


// arr2.forEach(e=>{

//     setInterval(()=>{
//         if(e.classList.contains("active")){
//             e.classList.remove("active")
//             e.classList.add("notactive")
//         }else{
//             e.classList.remove("notactive")
//             e.classList.add("active")
//         }

//     },3000)

// })


arr2.forEach(e=>{

    setInterval(()=>{
        if(e.classList.contains("active")){
            e.classList.remove("active")

        }else{

            e.classList.add("active")
        }

    },3000)

})


setInterval(()=>{
    for (let i = 0; i < arr2.length; i++) {

        if(arr2[0].classList.contains("active")){
            arr2[0].style.transform= "translateX(0)"
            
        }else{
            arr2[0].style.transform= "translateX(-400px)"
    
        }
        if(arr2[1].classList.contains("active")){
            arr2[1].style.transform= "translateX(0)"
            
        }else{
            arr2[1].style.transform= "translateX(400px)"
    
        }
    
    }
    
})

console.log(arr2)