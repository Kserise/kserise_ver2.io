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
        }else {
            doindex = 0;
            $(".docon").removeClass("active");
        }
        if (index == 3) {
            $(".castle-con").addClass("active");
        }else {
            $(".castle-con").removeClass("active");
        }
    }
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