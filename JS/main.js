let continueBtn = document.getElementById("continue");

continueBtn.addEventListener("click", ()=>{
    
    let users = JSON.parse(localStorage.getItem("users"));
    if(users == null){
        users = [];
        
    }; 
    let newUsername = document.getElementById("newUsername").value;
    let newPassword = document.getElementById("newPassword").value;
    let newUser = {
        "username": newUsername,
        "password": newPassword     
    };
    console.log(newUser)
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users)); 
    alert("You have created an account!")
    location.replace('../login.html')

});

