
const pianoKeys = document.querySelectorAll('.key')

function playSound(url) {
    console.log('Playing: ' + url)
    new Audio(url).play()
}

pianoKeys.forEach((pianoKey, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1)
    const url = '24-piano-keys/key' + number + '.mp3'
    pianoKey.addEventListener('click', () => playSound(url))
})
