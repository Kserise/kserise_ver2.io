$("#fullpage").fullpage();

const donut = $(".clippath > div");
donut.removeClass("active").eq(0).addClass("active");
$(".donuts img").click(function(){
    var index = $(this).index();
    donut.eq(index).insertAfter(".clippath > div:nth-child(3)");
    donut.removeClass("active").eq(index).addClass("active");
    $(".donuts img").removeClass("active");
    $(this).addClass("active");
})