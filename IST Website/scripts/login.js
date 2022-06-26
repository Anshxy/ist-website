
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const modal = document.getElementById("myModal");
const negAlert = document.getElementById("alert-negative")
const posAlert = document.getElementById("alert-positive")
const span = document.getElementsByClassName("close")[0];




// let details = [
//     {
//      username: "admin",
//      password: "123"
//     },
//     {
//         username: "bruce",
//         password: "banner"
//     },
//     {
//         username: "tony",
//         password: "stark"
//     }
// ];


span.onclick = function() {
    modal.style.display = "none";
  }

console.log(details)

function usr() {
    let a = sessionStorage.getItem("loggedauth");

    if (a=="True") {
        window.location.replace("user.html");
    }
    else {
        modal.style.display = "block"

        loginButton.addEventListener("click", (e) => {
            e.preventDefault();
        
            
        
            const username = loginForm.username.value;
            const password = loginForm.password.value;
        
            const user= details.find((data) => data.username === username && data.password === password);
        
            
        
            if (user) {
                sessionStorage.removeItem('loggedauth');
                window.sessionStorage.setItem("username", username)
                window.sessionStorage.setItem("password", password)
                window.sessionStorage.setItem("loggedauth", "True")

                negAlert.style.display="none"
                posAlert.style.display="block"
                setTimeout(function() {
                    $('#alert-positive').fadeOut('fast');
                }, 3000);
                modal.style.display = "none";
                
            } else {
                negAlert.style.display="block"
                setTimeout(function() {
                    $('#alert-negative').fadeOut('slow');
                }, 3000);
            }
        })
    }
}




