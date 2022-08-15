


function valid() {
    var first_name = document.getElementById('1st_name').value
    var email = document.getElementById('email').value
    var num = document.getElementById('phone').value
    var password = document.getElementById('password').value
    var confirm_password = document.getElementById('confirm_password').value
    var email_pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    // var name_pattern =  "/^[a-zA-Z]+ [a-zA-Z]+$/"
    // var phone_pattern = "/^\d{10}$/"
    var check_status = 1


    if (first_name == '') {

        document.getElementById('error_msg1').innerHTML = ' Please enter firstname'
        document.getElementById('1st_name').style.border = 'red 1px solid'
        document.getElementById('error_msg1').style.color = 'red'
        check_status = 0

    }
    

    // else if (first_name.length < 3) {
    //         document.getElementById('error_msg1').innerHTML = 'Name must contain at least 3 letters'
    //         document.getElementById('1st_name').style.border = 'red 1px solid'
    //         document.getElementById('error_msg1').style.color = 'red'
    //         check_status = 0
    //     }
    

    //  else if ( first_name.match(name_pattern) == null) {

    //     document.getElementById('error_msg1').innerHTML = 'Name does not allow special characters'
    //     document.getElementById('1st_name').style.border = 'red 1px solid'
    //     document.getElementById('error_msg1').style.color = 'red'
    //     check_status = 0

    // }

    else {
        document.getElementById('error_msg1').innerHTML = ''
        document.getElementById('1st_name').style.border = 'black 1px solid'
    }


    if (email == '') {
        document.getElementById('error_msg2').innerHTML = ' Please enter  email address'
        document.getElementById('email').style.border = 'red 1px solid'
        document.getElementById('error_msg2').style.color = 'red'
        check_status = 0

    }
    else {
        document.getElementById('error_msg2').innerHTML = ''
        document.getElementById('email').style.border = 'black 1px solid'
        if (email.match(email_pattern) == null) {
            document.getElementById('error_msg2').innerHTML = 'email format incorect'
            document.getElementById('error_msg2').style.color = 'red'
            document.getElementById('email').style.border = 'red 1px solid'


        }

    }
    if (num == '') {
        document.getElementById('error_msg3').innerHTML = ' Please enter Mobile number'
        document.getElementById('phone').style.border = 'red 1px solid'
        document.getElementById('error_msg3').style.color = 'red'
        check_status = 0
    }
    else {
        document.getElementById('error_msg3').innerHTML = ''
        document.getElementById('phone').style.border = 'black 1px solid'
        // if (num.match(phone_pattern) == null) {
        //     document.getElementById('error_msg3').innerHTML = 'mobile number is invalid '
        //     document.getElementById('error_msg3').style.color = 'red'
        //     document.getElementById('phone').style.border = 'red 1px solid'

        //     check_status = 0
        // }


    }

    if (password == '') {
        document.getElementById('error_msg4').innerHTML = ' Please enter password'
        document.getElementById('password').style.border = 'red 1px solid'
        document.getElementById('error_msg4').style.color = 'red'
        check_status = 0

    }
    else {
        document.getElementById('error_msg4').innerHTML = ''
        document.getElementById('password').style.border = 'black 1px solid'
        if (confirm_password != password) {
            document.getElementById('confirm').innerHTML = 'Should be match with password'
            document.getElementById('confirm').style.color = 'red'
            document.getElementById('confirm_password').style.border = 'red solid 1px'
            check_status = 0


        }
        else {
            document.getElementById('confirm').innerHTML = ''
            document.getElementById('confirm_password').style.border = 'black solid 1px'
        }


    }
    if (check_status == 0) {
        return false
    }
    else {
        location.href = "{% url 'profile:login' %}"
    }
}
function show_password() {
    if (document.getElementById('checkbox').checked == true) {
        document.getElementById('login_password').type = 'text'
    }
    else {
        document.getElementById('login_password').type = 'password'
    }
}


