const input=document.querySelector("input")
const btn=document.querySelector(".send")
const h3=document.querySelector("h3")
const spinner=document.querySelector(".spinner")

btn.addEventListener("click",()=>{
 spinner.classList.remove("d-none")
 setTimeout(()=>{
    spinner.classList.add("d-none")

    if(!input.value){
        alert("Introduzca un mensaje")
        return
    }
     h3.textContent=input.value
     input.value=""
     setTimeout(()=>{
        h3.textContent=""
     },3000)
 },2000)
})