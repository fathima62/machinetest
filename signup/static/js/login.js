function login() {
    var login_password = document.getElementById('login_password').value
    var login_username = document.getElementById('login_username').value
    // var email = document.getElementById('email').value
    // var password = document.getElementById('password').value
    if(login_username == '' || login_password == ''){
        document.getElementById('error_message').innerHTML = 'please type valid username and password'
        document.getElementById('error_message').style.color='red'
        document.getElementById('login_username').style.border = 'red 1px solid'
        document.getElementById('login_password').style.border = 'red 1px solid'
    }

    if (email == login_username && password == login_password) {

    
            location.href = "{% url 'profile:home' %}";
        

    }
    else {
        document.getElementById('username_error').innerHTML = 'user name or password is incorrect'
        document.getElementById('login_username').style.border = 'red 1px solid'
    }

}
