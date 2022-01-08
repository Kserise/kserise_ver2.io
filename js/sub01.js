$("#discount").click(function(e){
    e.preventDefault();
    $(".items").toggleClass("discount");
});

$(".submenu > li").click(function(e){
    e.preventDefault();
    $(this).find(".sub2menu").toggleClass("active");
    $(this).toggleClass("active");
});