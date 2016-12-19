$(document).ready(function(){
    $(".bottomMenu").click(function(){
     $( ".dropMenu" ).slideToggle( "slow" );
    });
    $('.menuLateral').slicknav({
        label:""
    });
    var windowsize = $(window).width();
    if(windowsize <= 500){
        $(".slicknav_menu").appendTo(".menuMobile");
    }
});
