$(function(){
    $('#logging-in').hide();
    $('#div_register').hide();
    $('#login').click(function(){
        $('#div_holder').slideDown();
        $('#div_holder').fadeOut();
        $('#logging-in').slideDown(1000);
    })
    $('#btn-cancel').click(function(){
        $('#logging-in table tr td input').val("")
        $('#logging-in').slideToggle(500);
        $('#div_holder').slideUp(1000);
        $('#div_holder').fadeIn(1000);
    })
    $('#btn-login').click(function(){
        login();
    })
    $('#btn-cancel2').click(function(){
        $('#div_register table tr td input').val("");
        $('#div_register').slideToggle(500);
        $('#div_holder').slideUp(1000);
        $('#div_holder').fadeIn(1000);
    })
    $('#register').click(function(){
        $('#div_holder').slideDown();
        $('#div_holder').fadeOut();
        $('#div_register').slideDown(1000);
    })
})
    function displayKeyCode(key){
        if ( key == null ) {
            keycode = event.keyCode;
            // To Mozilla
        } else {
            keycode = key.keyCode;
        }
        if(keycode == "13"){
            login();
        }
    }
    function login(){
        var un = $('#username').val();
        var pwd = $('#password').val();
        $.ajax({
            type: 'POST',
            url: 'process/confirm_login.php',
            data:{un:un, pwd:pwd},
            success: function(response){
                if(response == "1"){
                    window.location.href="views/home.php";
                }else{
                    $('#login_mess').fadeIn(800);
                    $('#login_mess').html("Username or Password is not correct !");
                    $('#login_mess').fadeOut(1020);
                }
            }
        })
    }