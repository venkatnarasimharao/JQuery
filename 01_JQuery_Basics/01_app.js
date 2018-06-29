$('#success-button').click(function () {
    $('#success-card').fadeToggle('slow');
    var text=$(this).attr('value').trim();
    if (text=== 'HIDE'){
        $(this).attr('value','SHOW');               /*setAttribute(attribute name,att value) we use in JS as same */
    }
    else{
        $(this).attr('value','HIDE');
    }
});