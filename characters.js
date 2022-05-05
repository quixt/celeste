var name = document.querySelector("#char-name");

const scroll = document.querySelector("#chars");

var charsList = [{
    name: "Madeline",
    desc: "Madeline is a young woman who is determined to climb the mountain known as Celeste. She is brave and determined, and she has a heart of gold. She is also very determined and stubborn, which sometimes gets her into trouble."
}];

scroll.addEventListener("scroll", () => {
    var scrollPos = scroll.scrollTop;
    console.log(scrollPos);
    if (scrollPos >= 0 && scrollPos < 500) {
        name.innerHTML = charsList[0].name;
        console.log(charsList[0].name);
    }
});