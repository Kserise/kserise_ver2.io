let doindex = 0;
$("#fullpage").fullpage({
    'onLeave': function (anchorLink, index) {
        if (index == 2){
            var interval = setInterval(function(){
                $(".docon").eq(doindex).addClass("active");
                if(doindex < 2){
                    doindex++;
                }else {
                    doindex = 0;
                    clearInterval(interval);
                }
            }, 800)
        }else {
            $(".docon").removeClass("active");
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