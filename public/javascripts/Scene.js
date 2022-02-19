class Scene {

    constructor() {
        this.element = document.createElement("canvas")
        this.context = this.element.getContext("2d")
    }

    // gets scene ready
    prepare() {
        const canvas = document.getElementById("canvas")
        canvas.element.style.display = "block"
    }


}