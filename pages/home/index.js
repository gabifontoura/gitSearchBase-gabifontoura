
const historyUsers = JSON.parse(window.localStorage.getItem("historyUsers")) || []
const input = document.querySelector(".input-user-search")


async function getUser(endPoint) {
    const btnVerPerfil = document.querySelector(".btn-ver-perfil")

    const myHeaders = { 'content-type': 'application/json' }

    try {
        btnVerPerfil.innerText = "Carregando"

        const response = await fetch(`https://api.github.com/users/${endPoint}`, {
            method: 'GET',
            headers: myHeaders
        });

        if (response.status !== 200) {
            throw new Error("Usuário não encontrado!")
        }

        const data = await response.json();

        const encontrado = historyUsers.find((element) => element.login == data.login)

        if (!encontrado) {

            historyUsers.push(data)
        }

        window.localStorage.setItem("historyUsers", JSON.stringify(historyUsers))


        const user = localStorage.getItem("user")

        if (!user) {
            localStorage.setItem("user", JSON.stringify(data))
        }
        window.location.replace("../profile/index.html")


    }

    catch (err) {

        const label = document.querySelector(".label-user")
        label.innerText = err.message
        input.classList = 'input-error'
        btnVerPerfil.innerText = "Buscar"

    }
}


const btnVerPerfil = document.querySelector(".btn-ver-perfil")
btnVerPerfil.addEventListener('click', (e) => {
    e.preventDefault()
    if (historyUsers.length > 2) {
        historyUsers.splice(0, 1)
    }
    getUser(input.value)
})





function toggleBtn() {
    const btnVerPerfil = document.querySelector(".btn-ver-perfil")
    const input = document.querySelector("#user")

    input.addEventListener("keyup", (e) => {
        const value = e.target.value
        btnVerPerfil.disabled = false

        if (value === "") {
            btnVerPerfil.disabled = true
        }
    })
}

toggleBtn()


function renderHistoryUsers() {

    const ul = document.querySelector(".perfis-list")

    ul.innerText = ""


    historyUsers.forEach((element) => {

        const li = document.createElement("li")
        const hover = document.createElement("span")
        const img = document.createElement("img")

        li.classList = 'history-users'
        hover.innerText = 'Acessar Perfil'
        hover.classList = 'hover-acessar-perfil'
    
        img.src = element.avatar_url
        img.classList = 'user-photo-history'
        img.onmouseover = function() {showMessage()}
        img.onmouseout = function () {hideMessage()}
        img.addEventListener('click', () => {

            getUser(element.login)
        })
        li.append(img, hover)
        ul.append(li)

    })
    

}

renderHistoryUsers()






const hover = document.querySelector(".hover-acessar-perfil");

function showMessage() {
    hover.style.display = "block";

}

function hideMessage() {
    hover.style.display = "none";
}