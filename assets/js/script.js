const inputEmail = document.getElementById('email')
const inputPass = document.getElementById('password')

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

inputPass.addEventListener('keyup', function(event){
    inputPass.style.border = '1px solid #C1C5D0'
    if(event.target.value === ""){
        inputPass.style.border = '1px solid red'
    } else{
        if(event.target.value.length < 6){
            inputPass.style.border = '1px solid red'
        }else{
            inputPass.style.border = '1px solid green'
        }
    }
})