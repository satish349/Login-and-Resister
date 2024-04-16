
function logreg(){
    location.replace("login.html");
}
function signup(){
    location.replace("Login.html");
}
function signin(){
    location.replace("index.html");
}
    
    
    function register(){
        const regname = document.getElementById("regname").value;
        const regmob = document.getElementById("regmob").value;
        const regemail = document.getElementById("regemail").value;
        const regpass = document.getElementById("regpass").value;
        if(regname === "" || regmob === "" || regemail === "" || regpass === ""){
            alert("Please check Your Input.");
        } else {
            alert("Welcom " + regname + ", Your Registration is Successful. Now, You can go for Login!")
        }
    }

    function login(){
        const userid = document.getElementById("userid").value;
        const pass = document.getElementById("pass").value;
        if(userid === "" || pass === ""){
            alert("Please Check Your Input.");
        } else {
            location.replace("index.html");
        }
    }