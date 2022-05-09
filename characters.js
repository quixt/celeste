var main = document.getElementsByTagName("main")[0];
var mainBg = document.getElementById("main-bg");
const scroll = document.querySelector("#chars");
const utt = document.querySelector("#up-to-top");
var background = 0;

const setBackground = (url) => {
    // mainBg.classList.add("anim");
    mainBg.src = url;
    // setTimeout(() => {    mainBg.classList.remove("anim");},500);

    console.log(mainBg.src)
}
scroll.scrollTop = 0;
setBackground("./firstch.jpg");
utt.addEventListener("click", () => {
    scroll.scrollTop = 0;
});
scroll.addEventListener("scroll", () => {
    scroll.scrollTop > 500 ? utt.style.visibility = "visible" : utt.style.visibility = "hidden";
    var scrollPos = scroll.scrollTop;
    if (scrollPos >= 0 && scrollPos < 200) {
        if (background !== 1) {
            background = 1;
            setBackground("./firstch.jpg");

        }
    } else if (scrollPos >= 200 && scrollPos < 1000) {
        if (background !== 2) {
            background = 2;
            setBackground("./badeline.jpg");
        }

    } else if (scrollPos >= 1000 && scrollPos < 1800) {
        if (background !== 3) {
            background = 3;
            setBackground("./theo.PNG");
        }

    } else if (scrollPos >= 1800 && scrollPos < 2600) {
        if (background !== 4) {
            background = 4;
            setBackground("./hotel.jpg");
        }

    }
});