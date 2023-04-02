const signIn = document.querySelector('.signIn')
const signUp = document.querySelector('.signUp')
const forgotPass = document.querySelector('.forgotPass')

if (signIn){
    const inputEmail = document.getElementById('email')
    const inputPass = document.getElementById('password')
    const formLogin = document.getElementById('login')
    const errorMessage = document.getElementById('error-message')
    inputEmail.addEventListener('keyup', function(event){
        errorMessage.classList.add('hidden')
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
        errorMessage.classList.add('hidden')
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
    
    formLogin.addEventListener('submit', function(event){
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        if(email === "admin@gmail.com" && password === "admin123"){
            window.location = '/home.html'
        }else{
            errorMessage.innerText = "*incorrect email or password"
            errorMessage.classList.remove('hidden')
        }
    })
}

if (signUp){
    const inputEmail = document.getElementById('email')
    const inputPass = document.getElementById('password')
    const confirmPass = document.getElementById('con-password')
    const formLogin = document.getElementById('login')
    const errorMessage = document.getElementById('error-message')

    inputEmail.addEventListener('keyup', function(event){
        errorMessage.classList.add('hidden')
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
        errorMessage.classList.add('hidden')
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

    confirmPass.addEventListener('keyup', function(event){
        errorMessage.classList.add('hidden')
        confirmPass.style.border = '1px solid #C1C5D0'
        if(event.target.value === ""){
            confirmPass.style.border = '1px solid red'
        } else{
            if(event.target.value.length === inputPass){
                confirmPass.style.border = '1px solid red'
            }else{
                confirmPass.style.border = '1px solid green'
            }
        }
    })
    
    formLogin.addEventListener('submit', function(event){
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        if(email === "admin@gmail.com" && password === "admin123"){
            window.location = '/home.html'
        }else{
            errorMessage.innerText = "*incorrect email or password"
            errorMessage.classList.remove('hidden')
        }
    })
}

if (forgotPass){
    const inputEmail = document.getElementById('email')

    inputEmail.addEventListener('keyup', function(event){
        // errorMessage.classList.add('hidden')
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
}