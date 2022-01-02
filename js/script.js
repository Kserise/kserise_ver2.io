let body = true;
$(".toggle").click(function(){
    $(".toggle").toggleClass("active");
    $("nav").toggleClass("active");
    $(".section").toggleClass("transform");
    if(body == true){
        body = false;
        $("body").on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
        });
    }else {
        body = true;
        $("body").off('scroll touchmove mousewheel');
    }
});

let doindex = 0;
let width;
$("#fullpage").fullpage({
    'onLeave': function (anchorLink, index) {
        if (index == 2){
            width = $(window).width();
            console.log(width);
            if(width > 768){
                var interval = setInterval(function(){
                    $(".docon").eq(doindex).addClass("active");
                    // console.log(doindex);
                    if(doindex < 2){
                        doindex++;
                    }else {
                        doindex = 0;
                        clearInterval(interval);
                    }
                }, 800)
            }else{
                $(".docon").eq(0).addClass("active");
                $(".docon").off('click').click(function(){
                    if(doindex < 2){
                        doindex++;
                    }else {
                        doindex = 0;
                    }
                    $(".docon").removeClass("active").eq(doindex).addClass("active");
                });
            }
            $(".sec2bg").addClass("active");
        }else {
            doindex = 0;
            $(".docon").removeClass("active");
            $(".sec2bg").removeClass("active");
        }


        if (index == 3) {
            $(".castle-con").addClass("active");
        }else {
            $(".castle-con").removeClass("active");
        }
    }
});

let swidth;
let height;
const do1move1 = $("#do1_mmove1");
const do1move2 = $("#do1_mmove2");
const do2move1 = $("#do2_mmove1");
const do2move2 = $("#do2_mmove2");
const do3move1 = $("#do3_mmove1");
const do3move2 = $("#do3_mmove2");

$(".sec1").mousemove(function(e){
    swidth = e.clientX;
    height = e.clientY;
    do1move1.css({left:25-(swidth*0.002)+"%", top:50-(height*0.01)+"%"});
    do1move2.css({left:-300+(swidth*0.01)+"px", top:height*0.1+"px"});
    do2move1.css({left:25-(swidth*0.002)+"%", top:50-(height*0.01)+"%"});
    do2move2.css({right:-300+(swidth*0.01)+"px", top:height*0.1+"px"});
    do3move1.css({left:40-(swidth*0.002)+"%", top:50-(height*0.01)+"%"});
    do3move2.css({right:-300+(swidth*0.01)+"px", top:height*0.1+"px"});
});


const donut = $(".clippath > div");
$(".donuts img").click(function(){
    var index = $(this).index();
    donut.eq(index).insertAfter(".clippath > div:nth-child(3)");
    donut.removeClass("active").eq(index).addClass("active");
    $(".donuts img").removeClass("active");
    $(this).addClass("active");
});


const ani = $(".animation img");
ani.hide().eq(0).show();
var currentIndex = 0;
setInterval(function(){
    if(currentIndex < 6){
        currentIndex++;
    }else { currentIndex = 0; }
    ani.hide().eq(currentIndex).show();
}, 500);