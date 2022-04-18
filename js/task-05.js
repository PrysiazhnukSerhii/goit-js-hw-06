const inputText = document.querySelector("#name-input")

const changeName = document.querySelector("#name-output")

inputText.addEventListener("input", (event) => {

    changeName.textContent = event.currentTarget.value;
    
    if (event.currentTarget.value === "")  {
        changeName.textContent="Anonymous"
    }
   
})

