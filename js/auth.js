
// =================== LOGIN & SIGNUP =====================
// OPEN POPUP
function openPopup(){
    document
    .getElementById("popupOverlay")
    .classList.add("active");
}

// CLOSE POPUP
function closePopup(){
    document
    .getElementById("popupOverlay")
    .classList.remove("active");
}

// LOGIN -> SIGNUP
function showSignup(){
    document
    .getElementById("loginForm")
    .classList.add("hidden");

    document
    .getElementById("signupForm")
    .classList.remove("hidden");
}

// SIGNUP -> LOGIN
function showLogin(){
    document
    .getElementById("signupForm")
    .classList.add("hidden");

    document
    .getElementById("loginForm")
    .classList.remove("hidden");
}

// PASSWORD EYE
function togglePassword(id, icon){

    const input = document.getElementById(id);
    const eye = icon.querySelector("i");

    if(input.type === "password"){
        input.type = "text";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    }
    else{
        input.type = "password";
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
}

// ROLE SELECTOR
function selectRole(role){

    document.getElementById("signupRole").value = role;

    document
    .querySelectorAll(".role-card")
    .forEach(card=>card.classList.remove("active"));

    if(role==="user"){
        document
        .getElementById("userRoleCard")
        .classList.add("active");
    }
    else{
        document
        .getElementById("adminRoleCard")
        .classList.add("active");
    }
}

// PASSWORD VALIDATION
const signupPassword =
document.getElementById("signupPassword");

const hint =
document.getElementById("passwordHint");

if(signupPassword){

signupPassword.addEventListener("input",()=>{

    const value = signupPassword.value;

    const strongPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

    if(strongPassword.test(value)){
        hint.textContent = "✓ Strong password";

        hint.className =
        "hint-text valid";
    }
    else{
        hint.textContent =
"Password must contain 8+ chars, letter, number & symbol";

        hint.className =
        "hint-text invalid";
    }

});
}

// SAMPLE LOGIN
function login(){

    const email =
    document.getElementById("loginEmail").value.trim();

    const pass =
    document.getElementById("loginPassword").value;

    const role =
    document.getElementById("loginRole").value;

    if(!email || !pass){
        alert("Please fill all fields");
        return;
    }

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
        alert("Please enter a valid email");
        return;
    }

    try{

        sessionStorage.setItem(
            "userEmail",
            email
        );

        sessionStorage.setItem(
            "userRole",
            role
        );

        if(role === "admin"){
            window.location.replace(
                "admin-dashboard.html"
            );
        }else{
            window.location.replace(
                "user-dashboard.html"
            );
        }

    }
    catch(err){
        console.error(err);
        alert("Login failed");
    }
}



// SAMPLE SIGNUP
function signup(){

    const password =
    document.getElementById("signupPassword").value;

    const confirm =
    document.getElementById("signupConfirmPassword").value;

    const strongPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

    if(!strongPassword.test(password)){
        alert("Password not strong enough");
        return;
    }

    if(password !== confirm){
        alert("Passwords do not match");
        return;
    }

    alert("Account Created Successfully");
}

// CLOSE WHEN CLICK OUTSIDE
window.addEventListener("click",(e)=>{

    const overlay =
    document.getElementById("popupOverlay");

    if(e.target === overlay){
        closePopup();
    }

});