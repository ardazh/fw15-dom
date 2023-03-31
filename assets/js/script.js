const inputEmail = document.getElementById('email')

inputEmail.addEventListener('keyup', function(event){
    inputEmail.style.border = '1px solid #C1C5D0'
    if(event.target.value === ""){
        inputEmail.style.border = '1px solid red'
    } else{
        if(!event.target.value.includes('@')){
            inputEmail.style.border = '1px solid red'
        }else{
            inputEmail.style.border = '1px solid green'
        }
    }
})