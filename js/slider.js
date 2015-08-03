var i = 0;

$(document).on("ready", main);
function main(){
    var control = setInterval(cambiarSlider, 6000);
}

function cambiarSlider(){
    i++;
    if(i == $("#slider img").size()){
        i = 0;
    }
    procesos();
}

$(document).on('ready',function()
{
    $("#slider img").eq(0).fadeIn("medium");
    $("#title_slider img").eq(0).fadeIn("medium");
    $(".slider").click(function(){
        i=$(this).text();
        i--;
        procesos();
    });
});

function procesos()
{
    $(".slider").removeClass('sliderValid');
    $(".slider").eq(i).addClass('sliderValid');
    $("#slider img").hide();
    $("#slider img").eq(i).fadeIn("medium");
}
