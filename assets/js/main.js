const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysToggle = document.querySelector('.keys-check input');

const validKeys = Array.from(pianoKeys, key => key.dataset.key);

function playTune(key) {
    const audio = new Audio(`./assets/sounds/${key}.wav`);
    audio.volume = volumeSlider.value;
    audio.play();

    const keyElement = document.querySelector(`[data-key="${key}"]`);
    if (keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => keyElement.classList.remove('active'), 150);
    }
}

pianoKeys.forEach(key =>
    key.addEventListener('click', () => playTune(key.dataset.key))
);

document.addEventListener('keydown', e => {
    if (validKeys.includes(e.key)) {
        playTune(e.key);
    }
});

keysToggle.addEventListener('change', () => {
    pianoKeys.forEach(key => key.classList.toggle('hide'));
});
