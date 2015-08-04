var i = 0;
var j=0;
var k=0;
var h=0;

$(document).on("ready", main);
function main(){
    var control = setInterval(cambiarSlider, 6000);
}

function cambiarSlider(){
    i++;
    if(i >= $("#slider img").size()){
        i = 0;
    }
    k++;
    if(k >= $("#slider2 img").size()){
        k = 0;
    }
    h++;
    if(h >= $("#slider3 img").size()){
        h = 0;
    }
    j++;
    if(j >= $("#slider1 img").size()){
        j=0;
    }
    procesos();
    procesosMenu();
}

$(document).on('ready',function()
{
    $("#slider img").eq(0).fadeIn("medium");
    $("#slider1 img").eq(0).fadeIn("medium");
    $("#slider2 img").eq(0).fadeIn("medium");
    $("#slider3 img").eq(0).fadeIn("medium");

    $(".back1").on('click',function()
{
    if(j==0){
        j=$("#slider1 img").size()-1;
        procesosMenu();
    }else{
        j--;
        procesosMenu();
    }

});
    $(".next1").on('click',function()
    {

        if(j>= $("#slider1 img").size()-1){

            j=0;
            procesosMenu();
        }else{
            j++;
            procesosMenu();
        }

    });

    $(".back").on('click',function()
    {
        if(i==0){
            i=$("#slider img").size()-1;
            procesos();
        }else{
            i--;
            procesos();
        }

    });
    $(".next").on('click',function()
    {

        if(i>= $("#slider img").size()-1){

            i=0;
            procesos();
        }else{
            i++;
            procesos();
        }

    });

});

function procesos()
{
    $("#slider img").hide();
    $("#slider img").eq(i).fadeIn("medium");
    $("#slider2 img").hide();
    $("#slider2 img").eq(k).fadeIn("medium");
    $("#slider3 img").hide();
    $("#slider3 img").eq(h).fadeIn("medium");
}

function procesosMenu()
{
    $("#slider1 img").hide();
    $("#slider1 img").eq(j).fadeIn("medium");
}