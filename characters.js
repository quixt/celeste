var main = document.getElementsByTagName("main")[0];
var mainBg = document.getElementById("main-bg");
const scroll = document.querySelector("#chars");
var background = 0;

const setBackground = (url) => {
    // mainBg.classList.add("anim");
    mainBg.src = url;
    // setTimeout(() => {    mainBg.classList.remove("anim");},500);

    console.log(mainBg.src)
}
scroll.scrollTop = 0;
setBackground("./firstch.jpg");
scroll.addEventListener("scroll", () => {
    var scrollPos = scroll.scrollTop;
    if(scrollPos >= 0 && scrollPos < 500) {
        if(background !== 1) {
            background = 1;
            setBackground("./firstch.jpg");
            
        }
    } else if(scrollPos >= 500 && scrollPos < 1300) {
        if(background !== 2) {
            background = 2;
            setBackground("./badeline.jpg");
        }
    
    } else if(scrollPos >= 1300 && scrollPos < 2100) {
        if(background !== 3) {
            background = 3;
            setBackground("./theo.png");
        }
    
    } else if(scrollPos >= 2100 && scrollPos < 3400) {
        if(background !== 4) {
            background = 4;
            setBackground("./hotel.jpg");
        }
    
    }
});