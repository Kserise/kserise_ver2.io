let body = true;
const HEADER_ACTIVE = "active";
const title = document.title;
console.log(title);
$(".toggle").click(function(e){
    $(".toggle").toggleClass(HEADER_ACTIVE);
    $(".header > nav").toggleClass(HEADER_ACTIVE);
    $(".header").toggleClass(HEADER_ACTIVE);
    $(".section").toggleClass("transform");
    if(title === "MainDonut"){
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
    }
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