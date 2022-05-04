let interval = 0;
let fumoPosition = 0;
const fumos = new Map()
class Scene {

    constructor() {
        this.element = document.createElement("canvas")
        this.context = this.element.getContext("2d")
        interval = 0
        fumoPosition = 0
    }

    // gets scene ready
    prepare() {
        this.drawCenterFumo()
        document.getElementById("audio").loop = true
        const interval = setInterval(this.tick, 10)
    }

    drawCenterFumo() {
        const fumo = document.getElementById("fumo")
        fumo.style.display = "flex"

    }



    tick() {
        interval++
        if (interval > 500) { // 5 seconds
            const fumo = document.getElementById("fumo")
            fumo.style.marginTop = (22 + Math.sin(interval / 20) * 20) + "vh"
            if (fumos.size < 6 && interval % 250 === 0) {
                const element = document.querySelector("#fumo");
                const fumoClone = element.cloneNode(true)
                fumoClone.id = "fumo-clone"
                fumoClone.classList.remove("cue-in")
                fumoClone.style.display = "block"
                fumoClone.style.transform = "scale(" + randomIntFromInterval(4,7) / 10 + ")"
                fumoClone.style.top = randomIntFromInterval(-200,200) + "px"
                element.after(fumoClone)
                fumos.set(fumoPosition++, fumoClone)
            } else {

            }
        }
    }


}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}