const signupform = document.getElementById("signup-form");
const signupbutton = document.getElementById("signup-form-submit");
const negAlert = document.getElementById("alert-negative")
const posAlert = document.getElementById("alert-positive")





signupbutton.addEventListener("click", (e) => {
    e.preventDefault();


    const username = signupform.username.value;
    const password = signupform.password.value;
    const user= details.find((data) => data.username === username);

    

    if (user) {
        negAlert.style.display="block"
        setTimeout(function() {
            $('#alert-negative').fadeOut('slow');
        }, 3000);
    } else {
        negAlert.style.display="none"
        posAlert.style.display="block"
        details.push({username: username.toString(), password: password.toString()});

        // Saving new data
        window.localStorage.setItem("data", JSON.stringify(details));

        // Saving username for user profile
        window.sessionStorage.setItem("username", username)

        
    }
})





