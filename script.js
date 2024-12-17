const prevButton = document.querySelector(".prev")
const nextButton = document.querySelector(".next")

const tanyaSlide = document.querySelector(".tanya")
const johnSlide = document.querySelector(".john")

nextButton.addEventListener("click", ()=> {
    tanyaSlide.style.display = "none"
    johnSlide.style.display = "flex"
})

prevButton.addEventListener("click", ()=> {
    tanyaSlide.style.display = "flex"
    johnSlide.style.display = "none"
})