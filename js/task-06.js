const starInput = document.querySelector("#validation-input");

starInput.addEventListener("blur", (event) => {
   
    if (event.currentTarget.value.length === 6) {
        starInput.classList.add("valid")

        
        if (starInput.classList.contains("invalid")) { starInput.classList.remove("invalid") }

    }


    if (event.currentTarget.value.length < 6 || event.currentTarget.value.length > 6) {
        starInput.classList.add("invalid");

        
          if (starInput.classList.contains("valid")) { starInput.classList.remove("valid") }
    
    }

})