import data from "./data/data.json" assert {type: "json"}

const user = document.getElementById("user")
const userName = document.querySelector(".user-name")
const userLastname = document.querySelector(".user-lastname")
const userAge = document.querySelector(".user-age")
const listMovies = document.getElementById("list-movies")

const userEmail = localStorage.getItem("email");

data.forEach((element) => {
    if (userEmail === element.email) {
        user.textContent = `Usuario ${data.id}`
        userName.textContent = `Nombre: ${element.name}`;
        userLastname.textContent =`Apellido ${element.lastName}`;
        userAge.textContent = `Edad:  ${element.age}`;
        element.favouritesMovies.forEach((movie) => {
            const currentHTML = listMovies.innerHTML
            const listMovie = ` <p class="user-favorites-movies">${movie}</p>`
            listMovies.innerHTML = listMovie
            listMovies.innerHTML = currentHTML + listMovie
        })
    }
})