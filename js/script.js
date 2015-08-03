$(document).ready(function(){

    /*
    CLIENTES
     */
   $('#clientes_one').on('click',function()
   {
       $('.clientes_content1').removeClass('hidden');
       $('.clientes_content2').addClass('hidden');
       $(this).addClass('border-p');
       $('#clientes_two').removeClass('border-p');
   });

    $('#clientes_two').on('click',function()
    {
        $('.clientes_content2').removeClass('hidden');
        $('.clientes_content1').addClass('hidden');
        $(this).addClass('border-p');
        $('#clientes_one').removeClass('border-p');
    })
    /*
    PORTAFOLIO
     */

    $(".portafolio_one").click(function () {
        $(".portafolio_two").removeClass("border-p");
        $(".portafolio_three").removeClass("border-p");
        $(".portafolio_four").removeClass("border-p");
        $(this).addClass("border-p");
        $(".section_portafolio").addClass("hidden");
        $(".section_portafolio").eq(0).removeClass("hidden");
    });
    $(".portafolio_two").click(function () {
        $(".portafolio_one").removeClass("border-p");
        $(".portafolio_three").removeClass("border-p");
        $(".portafolio_four").removeClass("border-p");
        $(this).addClass("border-p");
        $(".section_portafolio").addClass("hidden");
        $(".section_portafolio").eq(1).removeClass("hidden");
    });
    $(".portafolio_three").click(function () {
        $(".portafolio_two").removeClass("border-p");
        $(".portafolio_one").removeClass("border-p");
        $(".portafolio_four").removeClass("border-p");
        $(this).addClass("border-p");
        $(".section_portafolio").addClass("hidden");
        $(".section_portafolio").eq(2).removeClass("hidden");
    });
    $(".portafolio_four").click(function () {
        $(".portafolio_two").removeClass("border-p");
        $(".portafolio_one").removeClass("border-p");
        $(".portafolio_three").removeClass("border-p");
        $(this).addClass("border-p");
        $(".section_portafolio").addClass("hidden");
        $(".section_portafolio").eq(3).removeClass("hidden");
    });

    /*
    POP UP DEL PORTAFOLIO
     */

    $(".close_pop_up").on('click',function()
    {
       $(".pop_up").addClass("hidden");
    });

    $(".content_portafolio figure").eq(0).on('click',function()
    {
        $(".rey").removeClass("hidden");
    });

    $(".content_portafolio figure").eq(1).on('click',function()
    {
        $(".francisco").removeClass("hidden");
    });

    $(".content_portafolio figure").eq(2).on('click',function()
    {
        $(".refisal").removeClass("hidden");
    });

    $(".content_portafolio figure").eq(3).on('click',function()
    {
        $(".blancox").removeClass("hidden");
    });

    $(".content_portafolio figure").eq(4).on('click',function()
    {
        $(".trocipollo").removeClass("hidden");
    });

    $(".content_portafolio figure").eq(5).on('click',function()
    {
        $(".condimentos").removeClass("hidden");
    });

    $(".content_portafolio figure").eq(6).on('click',function()
    {
        $(".nts").removeClass("hidden");
    });

    $(".content_portafolio figure").eq(7).on('click',function()
    {
        $(".mago").removeClass("hidden");
    });

    $(".content_portafolio figure").eq(8).on('click',function()
    {
        $(".cabarria").removeClass("hidden");
    });

    $(".content_portafolio figure").eq(9).on('click',function()
    {
        $(".chefrito").removeClass("hidden");
    });

    $(".content_portafolio figure").eq(10).on('click',function()
    {
        $(".campiña").removeClass("hidden");
    });

    $(".content_portafolio figure").eq(11).on('click',function()
    {
        $(".durena").removeClass("hidden");
    });

    $(".content_portafolio figure").eq(12).on('click',function()
    {
        $(".brisa").removeClass("hidden");
    });

    $(".content_portafolio figure").eq(13).on('click',function()
    {
        $(".benfor").removeClass("hidden");
    });

    $(".content_portafolio figure").eq(14).on('click',function()
    {
        $(".2014").removeClass("hidden");
    });

    $(".portafolio_numbero_one").on('click',function()
    {
        $(".screen").addClass("hidden");
        $(".screen1").removeClass("hidden");
    });

    $(".portafolio_numbero_two").on('click',function()
    {
        $(".screen").addClass("hidden");
        $(".screen2").removeClass("hidden");
    });
    $(".portafolio_numbero_three").on('click',function()
    {
        $(".screen").addClass("hidden");
        $(".screen3").removeClass("hidden");
    });
    $(".portafolio_numbero_four").on('click',function()
    {
        $(".screen").addClass("hidden");
        $(".screen4").removeClass("hidden");
    });
    $(".portafolio_numbero_five").on('click',function()
    {
        $(".screen").addClass("hidden");
        $(".screen5").removeClass("hidden");
    });
});