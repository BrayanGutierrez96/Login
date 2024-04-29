class User {
    constructor(email, password, name, lastname, age, id) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastname = lastname;
        this.favoritesBooks = []
        this.age = age;
        this.id = id;
    }
    addFavoriteBook(element) {
        this.favoritesBooks.push(element)
    }
}
const userNameRegister = document.getElementById("user-name-register")
const userLastnameRegister = document.getElementById("user-lastname-register")
const userEmailRegister = document.getElementById("user-email-register")
const userPasswordRegister = document.getElementById("user-password-register");
const userAgeRegister = document.getElementById("user-age-register")
const userFavoriteBookRegister = document.getElementById("user-favorites-books-register")
const btnAddBook = document.getElementById("add-book")
const btn = document.getElementById("btn");
const form = document.getElementById("form")

function addInputBook() {
    const newInput = document.createElement("input");
    newInput.placeholder = "Nombre del libro"
    newInput.classList.add("form__input")
    newInput.id = "new-input"
    form.appendChild(newInput)
}

function createId() {
    const randomNumber = Math.floor(Math.random() * 1000000)
    return randomNumber
}

function validationBooks(user) {
    const newInputsBooks = document.getElementById("new-input")
    if (newInputsBooks != null) {
        if (newInputsBooks.value == "") {
            return
        } else {
            user.addFavoriteBook(newInputsBooks.value)
        }
    }
}

function setInputs() {
    userFavoriteBookRegister.value = ""
    userEmailRegister.value = "";
    userPasswordRegister.value = ""
    userNameRegister.value = ""
    userLastnameRegister.value = ""
    userAgeRegister.value = ""
    const newInput = document.getElementById("new-input")
    if (newInput != null) {
        form.removeChild(newInput)
    }
}
function createUser() {
    const user = new User(userEmailRegister.value, userPasswordRegister.value, userNameRegister.value, userLastnameRegister.value, userAgeRegister.value, createId())
    user.addFavoriteBook(userFavoriteBookRegister.value)
    validationBooks(user)
    setInputs()
    dataSave(user)
    dataSave(user)
    console.log(user);
}

function validation() {
    if (userEmailRegister.value == "" || userPasswordRegister.value == "" || userNameRegister.value == "" || userLastnameRegister.value == "" || userAgeRegister.value == "" || userFavoriteBookRegister.value == "") {
        alert("Debes completar todos los campos")
    } else {
        createUser()
        alert("Usuario creado con exito")
    }
}

function dataSave(dataUser) {
    fetch("./data/data.json").
        then(response => response.json()).
        then(data => {
            data.push(dataUser);
            const newData = JSON.stringify(data);
            fetch("./data/data.json",{
                method:"PUT",
                headers:{
                    "content-Type" : "application/json"
                },
                body: newData
            }).
            then(response =>{
                if(!response.ok){
                    throw new Error("Error al actualizar el archivo JSON")
                }
                console.log(data);
            }).catch(err => {console.log("Error al cargar el archivo", err);})
        }).
        catch(err => { console.log("no se pudo obtener los datos", err); })

}


btn.addEventListener("click", () => {
    validation()
    // window.location = "./index.html"
}
)

btnAddBook.onclick = addInputBook
