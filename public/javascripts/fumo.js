window.addEventListener("resize", resize => {

})

function buttonClicked() {
    playAudio()
    removeButton()
    runScene()
}

function playAudio() {
    const audio = new Audio("/sounds/funky.mp3");
    audio.play();
}

function removeButton() {
    const button = document.getElementById("clicked-button")
    button.remove()
}

function runScene() {
    document.title = "got funky!"
    const scene = new Scene()
    scene.prepare()

}