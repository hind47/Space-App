 document.getElementsByClassName("message")[0].addEventListener('click', function(e) {
    document.getElementsByClassName("register-form")[0].style.visibility = "hidden";
    document.getElementsByClassName("register-form")[0].style.display = "none";
    document.getElementsByClassName("login-form")[0].style.visibility = "visible";
    document.getElementsByClassName("login-form")[0].style.display = "block";
});

document.getElementsByClassName("message")[1].addEventListener('click', function(e) {
    document.getElementsByClassName("register-form")[0].style.visibility = "visible";
    document.getElementsByClassName("register-form")[0].style.display = "block";
    document.getElementsByClassName("login-form")[0].style.visibility = "hidden";
    document.getElementsByClassName("login-form")[0].style.display = "none";
});

document.getElementsByClassName("userSelect")[0].addEventListener('click', function(e) {
    for (let index = 0; index < 5; index++) {
        document.getElementsByClassName("hide")[index].style.visibility = "hidden";
        document.getElementsByClassName("hide")[index].style.display = "none";
    }
});


document.getElementsByClassName("userSelect")[1].addEventListener('click', function(e) {
    for (let index = 0; index < 5; index++) {
        document.getElementsByClassName("hide")[index].style.visibility = "visible";
        document.getElementsByClassName("hide")[index].style.display = "block";
    }
});

