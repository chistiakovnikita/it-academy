import { KEY_MAP, SOUNDS, COLORS } from './constants.js';

const pads = document.querySelectorAll('.pad');
const visual = document.querySelector('.visual');



const playSound = (sounds, index) => {
    const sound = sounds[index];
    const audio = new Audio(sound);
    audio.load();
    audio.play()
}

const animatePad = (pads, index) => {
    const pad = pads[index];
    pad.style.animation = 'dance 0.1s';
    pad.addEventListener('animationend', () => {
        pad.style.animation = 'none';
    })
}



  

const keyPressHandler = (evt) => {
    switch (evt.key) {
        case KEY_MAP.kick:
            playSound(SOUNDS, 0)
            animatePad(pads, 0)
            break;
        case KEY_MAP.cymbal:
            playSound(SOUNDS, 1)
            animatePad(pads, 1)
            break;
        case KEY_MAP.snare:
            playSound(SOUNDS, 2)
            animatePad(pads, 2)
            break;
        case KEY_MAP.openhat:
            playSound(SOUNDS, 3)
            animatePad(pads, 3)
            break;
        case KEY_MAP.longCrash:
            playSound(SOUNDS, 4)
            animatePad(pads, 4)
            break;
        case KEY_MAP.hihat:
            playSound(SOUNDS, 5)
            animatePad(pads, 5)
            break;

        default:
            break;
    }
}


document.addEventListener('keypress', keyPressHandler);