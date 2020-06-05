delete Hammer.defaults.cssProps.userSelect

const body = document.getElementById("body")
const hammerjs = new Hammer(body)

hammerjs.on("panleft panright", ev => {
  if (ev.pointerType === "touch") {
    const windowWidth = window.screen.width
    const distance = Math.floor(ev.distance) >= 50
    if (ev.type === 'panleft' && ev.center.x > windowWidth - 100 && distance) {
      formulario.classList.add("active")
    }
    if (type === 'panright' && distance) {
      formulario.classList.remove("active")
    }
  }
})