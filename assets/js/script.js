const inputEmail = document.getElementById('email')

inputEmail.addEventListener('keyup', function(event){
    if(event.target.value === ""){
        event.target.classList.remove('border-red-600')
        event.target.classList.add('border-white')
    } else{
        if(!event.target.value.includes('@')){
            event.target.classList.remove('border-white')
            event.target.classList.add('border-red-600')
        }else{
            event.target.classList.remove('border-red-600')
            event.target.classList.add('border-greem-600')
        }
    }
})