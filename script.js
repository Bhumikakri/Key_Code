function handlepressevent(event){
    // console.log(event);
    const Pressed = event.key;
    const KeyPressedElement = document.getElementById('new');
    KeyPressedElement.innerHTML = `<h3>You Pressed : <span id ="output">${Pressed}</span></h3>`;

    // sound.play();

    if(Pressed == ' '){
        KeyPressedElement.innerHTML = `You Pressed :<span id = "output"> Backspace ${Pressed}</span>`;
    }
    const pressedCode = event.keyCode;
    const ElementPressed =document.querySelector('#nums');
    ElementPressed.innerText = pressedCode ;
    ElementPressed.setAttribute("class", "nums2");


    let history = elementHistory.textContent;
    elementHistory.textContent = history +" "+Pressed;
    elementHistory.style.display = "inline";
}
const elementHistory =document.querySelector('.Show_history');
elementHistory.style.display = "none";

elementHistory.setAttribute("class", "historyy");
// let sound = new Audio('B:\fs-12-javascript\KeyCode\On My Way Alan Walker 320 Kbps.mp3');
// console.log(sound);
document.addEventListener("keydown", handlepressevent);