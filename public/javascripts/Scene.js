class Scene {

    constructor() {
        this.element = document.createElement("canvas")
        this.context = this.element.getContext("2d")
    }

    // gets scene ready
    prepare() {
        this.drawCenterFumo()
        document.getElementById("audio").loop = true;
        this.element.addEventListener("resize", this.onBodyResize())

    }

    drawCenterFumo() {
        const fumo = document.getElementById("fumo")
        fumo.style.display = "block"
    }

    onBodyResize() {

    }

}