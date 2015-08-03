var i = 0;
var j = 0;

$(document).on("ready", main);
function main(){
    var control = setInterval(cambiarSlider, 6000);
}

function cambiarSlider(){
    i++;
    j++;
    if(i == $("#slider img").size()){
        i = 0;
    }
    if(i == $("#title_slider img").size()){
        j = 0;
    }
    procesos();
}

$(document).on('ready',function()
{
    $("#slider img").eq(0).fadeIn("medium");
    $("#title_slider img").eq(0).fadeIn("medium");
    $(".slider").click(function(){
        i=$(this).text();
        j=$(this).text();
        i--;
        j--;
        procesos();
    });
});

function procesos()
{
    $(".slider").removeClass('sliderValid');
    $(".slider").eq(i).addClass('sliderValid');
    $("#title_slider img").hide();
    $("#slider img").hide();
    $("#title_slider img").eq(i).fadeIn("medium");
    $("#slider img").eq(i).fadeIn("medium");
}
