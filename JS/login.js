let inputUsername = document.getElementById("currentUsername")
let inputPassword = document.getElementById("currentPassword")
let buttonLogin = document.getElementById("login")
buttonLogin.addEventListener("click", ()=>{
    let users = JSON.parse(localStorage.getItem("users"))
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        

        if(inputUsername.value == user.username && inputPassword.value == user.password){
            alert("You successfully logged in!")
        }
        
    }
})

