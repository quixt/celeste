const imgAmount = 5;
var carousel = document.getElementById("carousel");
var imgs = document.querySelectorAll(".slide");
var chooseImg = document.querySelector("#c-imgs");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var imgSelected = 0;
console.log(imgs)
var selectors = []

function setStyle(index) {
    imgs[index].style.display = "block";
}



function switchImage(index) {
    removeStyles();
    setStyle(index);
}

function removeStyles() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
        selectors[i].classList.remove("ac");
    }
}

function createSelectImgButton(root, index) {
    let selector = document.createElement("div");
    selector.classList.add("selector");
    selector.addEventListener("click", function(e) {
        switchImage(index);
        e.target.classList.add("ac");
    });
    root.appendChild(selector);
    selectors.push(selector);
}

for (let i = 0; i < imgAmount; i++) {
    createSelectImgButton(chooseImg, i);
}

next.addEventListener("click", function() {
    imgSelected++;
    removeStyles();
    switchImage(imgSelected % imgAmount);
    selectors[imgSelected % imgAmount].classList.add("ac");
})
prev.addEventListener("click", function() {
    imgSelected--;
    if (imgSelected < 0) {
        imgSelected = 100;
    }
    removeStyles();
    switchImage(imgSelected % imgAmount);
    selectors[imgSelected % imgAmount].classList.add("ac");
})
imgs[0].style.display = "block";
selectors[0].classList.add("ac");