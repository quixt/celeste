var charName = document.getElementById("char-name");
var charImg = document.getElementById("char-img");
var charDesc = document.getElementById("char-desc")
const scroll = document.querySelector("#chars");

var charsList = [{
        charName: "Madeline",
        desc: "Madeline is a young woman who is determined to climb the mountain known as Celeste. She is brave and determined, and she has a heart of gold. She is also very determined and stubborn, which sometimes gets her into trouble.",
        src: "https://c.tenor.com/97RZRjmcGQoAAAAC/berum-blurklink.gif"

    },
    {
        charName: "Other Self",
        desc: "The other self is an entity that exists within the game Celeste as a representation of the player's inner struggles. This character is often shown as a dark reflection of the player, appearing as a doppelganger that taunts and mocks the player's attempts to overcome their challenges. The other self is a constant reminder of the player's own shortcomings and fears, but also serves as a motivator to push them to be better. In many ways, the other self is the player's own worst enemy, but also their biggest ally.",
        src: "https://c.tenor.com/97RZRjmcGQoAAAAC/berum-blurklink.gif"
    }
];

scroll.addEventListener("scroll", () => {
    var scrollPos = scroll.scrollTop;
    if (scrollPos >= 0 && scrollPos < 500) {
        let data = charsList[0];
        charName.innerHTML = data.charName;
        charDesc.innerHTML = data.desc;
        charImg.src = data.src;
    } else if (scrollPos >= 500 && scrollPos < 1000) {
        let data = charsList[1];
        charName.innerHTML = data.charName;
        charDesc.innerHTML = data.desc;
        charImg.src = data.src;
    }
});