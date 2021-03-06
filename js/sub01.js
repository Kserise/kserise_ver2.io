const SUB01_ACTIVE = "active";

$("#discount").click(function(e){
    e.preventDefault();
    $(".items").toggleClass("discount");
});

$(".submenu > li").click(function(e){
    e.preventDefault();
    $(this).find(".sub2menu").toggleClass(SUB01_ACTIVE);
    $(this).toggleClass(SUB01_ACTIVE);
});


function removeHeaderClass(on){
    $(".header > nav").removeClass(SUB01_ACTIVE);
    $(".toggle").removeClass(HEADER_ACTIVE);
    if(on === "on"){
        $(".header").addClass("detail");
    }else {
        $(".header").removeClass("detail");
    }
}

let touchStartX, touchEndX;
const detailBox = $("#detailBox");
const touchbody = $("body");
touchbody.on("touchstart", function(e){
    touchStartX = e.originalEvent.changedTouches[0].clientX;
    console.log(touchStartX);
});
touchbody.on("touchend", function(e){
    touchEndX = e.originalEvent.changedTouches[0].clientX;
    if(120 < (touchEndX-touchStartX)){
        detailBox.addClass(SUB01_ACTIVE);
        removeHeaderClass("on");
    }
    if(120 < (touchStartX-touchEndX)){
        detailBox.removeClass(SUB01_ACTIVE);
        removeHeaderClass();
    }
    console.log(touchEndX);
});

$("#apply").click(function(){
    detailBox.removeClass(SUB01_ACTIVE);
    removeHeaderClass();
});