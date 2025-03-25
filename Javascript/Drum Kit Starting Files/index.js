
document.addEventListener("keypress", function(event){
    playSound(event.key);
});
function playSound(key)
{
    console.log(key);
    var sound = "";
    switch(key)
    {
        case "w":
        {
            sound = "sounds/crash.mp3";
            var audio = new Audio(sound);
            audio.play();
            break;
        }
        case "a":
        {
            sound = "sounds/kick-bass.mp3";
            var audio = new Audio(sound);
            audio.play();
            break;
        }
        case "s":
        {
            sound = "sounds/snare.mp3";
            var audio = new Audio(sound);
            audio.play();
            break;
        }
        case "d":
        {
            sound = "sounds/tom-1.mp3";
            var audio = new Audio(sound);
            audio.play();
            break;
        }
        case "j":
        {
            sound = "sounds/tom-2.mp3";
            var audio = new Audio(sound);
            audio.play();
            break;
        }
        case "k":
        {
            sound = "sounds/tom-3.mp3";
            var audio = new Audio(sound);
            audio.play();
            break;
        }
        case "l":
        {
            sound = "sounds/tom-4.mp3";
            var audio = new Audio(sound);
            audio.play();
            break;
        }
        default:
        {
            alert("undefined");
        }
    }
}
