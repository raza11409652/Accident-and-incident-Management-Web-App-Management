$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        var data = $('#loginForm').serialize();
        var loginEmail = $('#loginEmail').val();
        var loginPassword = $('#loginPassword').val();
        if (loginEmail == "" || loginEmail == null) {
            $('#loginEmail').focus();
            $('#emailError').removeClass('hide');
            $('#emailError').html('Email is Required');
            $('#loginEmail').addClass('customErrorInput');
            $('#passwordError').addClass('hide');
            return false;
        } else if (loginPassword == "" || loginPassword == null) {
            $('#loginPassword').focus();
            $('#emailError').addClass('hide');
            $('#passwordError').removeClass('hide');
            $('#passwordError').html('Password Is Required');
            $('#loginPassword').addClass('customErrorInput');
            return false;
        } else {
            $('#passwordError').addClass('hide');
            $('#emailError').addClass('hide');
            $.ajax({
                type: 'POST',
                url: './module/LoginModule.php',
                data: data,
                beforeSend: function() {
                    //    alert('hdfh');
                    $('.loader').removeClass('hide');
                    localStorage.setItem('_farzanLoggedStatus', 'false');
                },
                success: function(response) {
                    $('.loader').addClass('hide');
                    if (response == 'true') {
                        localStorage.setItem('_farzanLoggedStatus', 'true');
                        setTimeout(2000, function() {

                        });
                    } else {
                        localStorage.setItem('_farzanLoggedStatus', 'false');
                    }
                }
            });
        }
    });
});