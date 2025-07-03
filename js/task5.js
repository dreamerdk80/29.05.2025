const burger = document.querySelector(".burger")
const btn = document.querySelectorAll(".btn")

btn.forEach(button => {
    button.addEventListener("click", () => {
        burger.classList.toggle("burger-open")
    })
})