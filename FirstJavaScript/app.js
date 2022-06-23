$("#target").on('click', function(){
    $("#target").css('background-color', 'green');
    $("#result_correct1").css('display', 'block');
});

$("#b").on('click', function(){
    $("#b").css('background-color', 'red');
    $("#result_incorrect1").css('display', 'block');
});

$("#c").on('click', function(){
    $("#c").css('background-color', 'red');
    $("#result_incorrect1").css('display', 'block');
});

$("#d").on('click', function(){
    $("#d").css('background-color', 'red');
    $("#result_incorrect1").css('display', 'block');
});

$('#result').focusout(function(){
    var string1 = 'Switzerland';
    if ($('#result').val().localeCompare(string1) == 0)
    {
        $('result_correct2').css('display', 'block');
    }
    else
    {
        $('result_incorrect2').css('display', 'block');
    }
    //alert($('#result').val());
});


$('#result2').on('click', function(){
    var string = 'Switzerland';
    if ($('#result').val() == string) {
        $('#result_correct2').css('display', 'block');
    }
    else
    {
        $('#result_incorrect2').css('display', 'block');
    }
});