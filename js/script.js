$("#fullpage").fullpage();

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

