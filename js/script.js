$(document).ready(function(){
    var i=0;
    $(".pop-up-menu").on('click',function()
    {
        i=1;
    });

    $(".pop-up").on('click',function()
    {
        if(i==0){
            $(this).addClass("hidden");
        }
        i=0;
    });

    $('nav li a').on('click',function()
    {
       $('.pop-up').removeClass('hidden');
    });
});