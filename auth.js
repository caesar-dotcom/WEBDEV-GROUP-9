// SIGNUP
const signupForm = document.getElementById("signupForm");

if(signupForm){

    signupForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;

        // Save user data
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("Signup Successful!");

        // Redirect to login page
        window.location.href = "login.html";

    });

}


// LOGIN
const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const savedEmail = localStorage.getItem("userEmail");
        const savedPassword = localStorage.getItem("userPassword");

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if(email === savedEmail && password === savedPassword){

            alert("Welcome to TrustedSkills!");

            // Rdirect to homepage
            window.location.href = "index1.html";

        } else {

            document.getElementById("error").innerText =
            "Incorrect Email or Password";

        }

    });

}
