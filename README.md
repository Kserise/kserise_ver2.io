# Donuts

#### 다양한 도넛들을 소개하는 사이트입니다.

![미디어쿼리](https://user-images.githubusercontent.com/95863116/153120731-eaafbffd-0d8d-4b11-9fc4-91bf8d0408d1.png)

> 바로가기 : https://kserise.github.io/kserise_ver2.io/index.html



___

#### 개발목표

* 다양한 애니메이션 효과로 지루하지 않은 화면 구현하기

#### 프로젝트 담당영역

* 전부 다.

#### 사용기술

* HTML
* CSS
* JS
* JQUERY

#### 개발환경

* Windows 10 Pro
* VS Code

#### 주요기능

* JQ FullPage 플러그인을 이용하여 간편한 스크롤 이벤트 구현

* JQ 이벤트메서드, CSS Animation 속성을 활용하여 인터렉티브한 화면 구현

* localStorage를 이용한 도넛 추가, 제거 구현

![기능구현](https://user-images.githubusercontent.com/95863116/153123018-aee4bce7-a356-4358-b619-cea2ca80484b.PNG)


```js
const DONUT_LIST = "donutList";
const addForm = document.getElementById("addForm");
const wrap = document.getElementById("wrap");
let donutList = [];

function deleteDonut(event){
    const div = event.target.parentElement;
    div.remove();
    donutList = donutList.filter((item) => item.id !== parseInt(div.id));
    saveDonutList();
}

function saveDonutList(){
    localStorage.setItem(DONUT_LIST, JSON.stringify(donutList));
}

function paintDonut(donut){
    ...
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

```

___

Thank you.
