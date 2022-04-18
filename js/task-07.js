const corentInput = document.querySelector("#font-size-control");

const changeTaxt = document.querySelector("#text")

corentInput.addEventListener("input", (even) => {
              
    changeTaxt.style.fontSize = even.currentTarget.value + 'px'           
     
})



