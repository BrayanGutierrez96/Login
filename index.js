import data from "./data/data.json" assert{type: "json"}

const userEmail = document.getElementById('user-email')
const userPassword = document.getElementById("user-password")
const btn = document.getElementById("btn")

function findUser(email, password) {
    const user = data.find((user) => {
        if (email === user.email) {
            if (password === user.password) {
                return true
            }
        }
    })
    if (user === undefined) {
        userEmail.style.border = "solid 2px rgba(219,97,97,0.7)"
        userPassword.style.border = "solid 2px rgba(219,97,97,0.7)" ;
        userEmail.value=""
        userPassword.value=""
        setTimeout(()=>{
            alert("email o password incorretos")
        },300)
        return
    } else {
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        window.location = "./usuario.html"
    }
}

function validation() {
    if (userEmail.value === "") {
        alert("Debes rellenar todos los campos")
        return
    } else if (userPassword.value === "") {
        alert("Debes rellenar todos los campos")
        return
    } else {
        findUser(userEmail.value, userPassword.value)
    }

}

btn.addEventListener("click", () => {
    validation()
})
