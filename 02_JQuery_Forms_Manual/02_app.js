/*  Big process
$('#submit-button').click(function () {
    var username = $('#username').val();
    var password = $('#password').val();
    var email = $('#email').val();

    $('#user_text').text(username);
    $('#password_text').text(password);
    $('#email_text').text(email);

});
*/


/*  Short cut  **IMP***/
$('#submit-button').click(function () {
    $('#user_text').text($('#username').val());
    $('#password_text').text($('#password').val());
    $('#email_text').text($('#email').val());

});