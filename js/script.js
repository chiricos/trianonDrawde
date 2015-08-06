$(window).load(function() {
    $('.flexslider').flexslider(
        {
            controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
            directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
            prevText: "Previous",           //String: Set the text for the "previous" directionNav item
            nextText: "Next",
        });
});

$(document).ready(function(){

    /*=============================
    OCULTANDO POP-UP
    =============================*/
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

    /*=============================
     MOSTRANDO POP-UP
     =============================*/

    $('nav li a').on('click',function()
    {
       $('.pop-up').removeClass('hidden');
    });

    /*=============================
     MOSTRANDO PRODUCTOS DEL MENU
     =============================*/


    $('.slides').on('click',function()
    {
       $('.line_products').removeClass('hidden');
       $('.product').addClass('hidden');
    });
    alert($('.slider-menu-line').size());
    $('#woman_line li a').on('click',function()
    {

        $('.slider-menu').addClass('hidden');
        $('.slider-menu-line').addClass('hidden');
        $('.slider-menu-line').eq($(this).index()).removeClass('hidden');
    });

    $('.pop-up-nav-menu a').on('click',function()
    {
        $('.product').removeClass('hidden');
        $('.line_products').addClass('hidden');
    });
});