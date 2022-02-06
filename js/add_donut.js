const base_donuts = $(".base_donuts");
const donut_cover = $(".donut_cover > ul");
const donut_cover_li = $(".donut_cover > ul > li");
const ACTIVE_CLASS = "active";

donut_cover.hide();

base_donuts.click(function(){
    const index = $(this).index();
    base_donuts.removeClass(ACTIVE_CLASS).eq(index).addClass(ACTIVE_CLASS);
    donut_cover.hide().eq(index).show();
});


// donut_cover.click(function(){
//     $(this).find("li").off().click(function(){
//         donut_cover_li.removeClass(ACTIVE_CLASS);
//         $(this).addClass(ACTIVE_CLASS);
//     })
// });
donut_cover_li.click(function(){
    donut_cover_li.removeClass(ACTIVE_CLASS);
    $(this).addClass(ACTIVE_CLASS);
});

$(".modal_bg").hide();

$("#addbtn").click(function(e){
    e.preventDefault();
    $(".modal_bg").show();
    removeHeaderClass();
});

$(".close").click(function(){
    $(".modal_bg").hide();
    removeHeaderClass();
});


/* 도넛추가하기 */


const DONUT_LIST = "donutList";
const addForm = document.getElementById("addForm");
const wrap = document.getElementById("wrap");
let donutList = [];



function deleteDonut(event){
    const div = event.target.parentElement;
    div.remove();
    donutList = donutList.filter((item) => item.id !== parseInt(div.id)); // 이미 부모요소에 id값을 부여했기때문에 매개변수로 id값을 받아올 필요가 없다 이말이야..
    saveDonutList();
}

function saveDonutList(){
    localStorage.setItem(DONUT_LIST, JSON.stringify(donutList));
}

function paintDonut(donut){
    const items = document.createElement("div");
    items.id = donut.id;
    items.classList.add("items");
    const imgbox = document.createElement("div");
    imgbox.classList.add("imgbox");
    const basicDonutImg = document.createElement("img");
    basicDonutImg.src = `imgs/donutbuilding/${donut.basic}`;
    const coverDonutImg = document.createElement("img");
    coverDonutImg.src = `imgs/donutbuilding/${donut.cover}`;

    const nameBox = document.createElement("h3");
    const h3Span_th3 = document.createElement("span");
    h3Span_th3.classList.add("th3");
    h3Span_th3.innerText = donut.name;
    const h3Span_bh3 = document.createElement("span");
    h3Span_bh3.classList.add("bh3");
    h3Span_bh3.innerText = donut.flavor;

    const kinds = document.createElement("p");
    kinds.innerText = donut.kinds;

    const starPrice = document.createElement("div");
    starPrice.classList.add("price");
    const stars = document.createElement("div");
    stars.classList.add("stars");
    const fasfastars = document.createElement("i");
    fasfastars.classList.add("far");
    fasfastars.classList.add("fa-star");
    const price = document.createElement("p");
    price.innerText = donut.price;

    const addToCart = document.createElement("a");
    addToCart.href = "#";
    addToCart.classList.add("addtocart");
    const add = document.createElement("span");
    add.classList.add("add");
    add.innerText = "add to cart"
    const cart = document.createElement("span");
    cart.classList.add("cart");
    const faCartPlus = document.createElement("i");
    faCartPlus.classList.add("fas");
    faCartPlus.classList.add("fa-cart-plus");

    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("donut_close");
    deleteBtn.addEventListener("click", deleteDonut); // 자식요소한테까지 이벤트가 부여되서 css로 자식요소에 pointer-events:none;을 부여해서 해결한다.
    const close_Outline = document.createElement("ion-icon");
    close_Outline.name = "close-outline";
    deleteBtn.appendChild(close_Outline);
    
    imgbox.appendChild(basicDonutImg);
    imgbox.appendChild(coverDonutImg);


    nameBox.appendChild(h3Span_th3);
    nameBox.appendChild(h3Span_bh3);


    for(i=0; i<5; i++){
        const clone = fasfastars.cloneNode(); // 요소 복제할때 사용한당
        stars.appendChild(clone);
    }
    starPrice.appendChild(stars);
    starPrice.appendChild(price);

    addToCart.appendChild(add);
    cart.appendChild(faCartPlus);
    addToCart.appendChild(cart);


    items.appendChild(imgbox);
    items.appendChild(nameBox);
    items.appendChild(kinds);
    items.appendChild(starPrice);
    items.appendChild(addToCart);
    items.appendChild(deleteBtn);

    wrap.appendChild(items);
}

function handleSubmit(event){
    event.preventDefault();
    const name = addForm.name.value;
    addForm.name.value = "";
    const kinds = addForm.kinds.value;
    const price = addForm.price.value;
    const basic = addForm.basic.value;
    const cover = addForm.cover.value;
    const flavor = addForm.flavor.value;
    const donut = {
        name:name,
        kinds:kinds,
        flavor:flavor,
        price:price,
        basic:basic,
        cover:cover,
        id:Date.now()
    }
    donutList.push(donut);
    paintDonut(donut);
    saveDonutList();
    addForm.reset();
    base_donuts.removeClass(ACTIVE_CLASS);
    donut_cover_li.removeClass(ACTIVE_CLASS);
}

addForm.addEventListener("submit", handleSubmit);

const savedDonutList = JSON.parse(localStorage.getItem(DONUT_LIST));

if(savedDonutList){
    donutList = savedDonutList;
    savedDonutList.forEach(paintDonut);
}
