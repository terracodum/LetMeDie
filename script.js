const button = document.getElementById("letme");
const counter = document.getElementById("clacul");
let die = 1000;
let timer;
function mi() {
    if (die == 6){
        clearInterval(timer);
        die = "Ghoul";
        setTimeout(counter.textContent = die,1000);
        return 1;
    } else {
        die -=7;
        counter.textContent = die + "-7";
        console.log(die);
    }   


}


button.addEventListener('click', () => {timer = setInterval(() => {mi();},100);});

