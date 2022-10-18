/* Desenvolva sua lógica aqui...*/

async function getUser(endPoint) {
    const btnVerPerfil = document.querySelector(".btn-ver-perfil")   
    const input = document.querySelector(".input-user-search")
   

    try {
        btnVerPerfil.innerText = "Carregando"

        const response = await fetch(`http://api.github.com/users/${input.value}`);

        if (response.status !== 200) {
            throw new Error("Usuário não encontrado")
        }

        const data = await response.json();


        // salvar o data no localStorage
        //mudar para a página do usuário

        console.log(data)
    }
    catch (err) {
        console.log(err.message)
        btnVerPerfil.innerText = "Buscar"

    }
}

const btnVerPerfil = document.querySelector(".btn-ver-perfil")
const input = document.querySelector(".input-user-search")

btnVerPerfil.addEventListener('click',() => {
    getUser(input.value)

})




function toggleBtn() {
    const btnVerPerfil = document.querySelector(".btn-ver-perfil")
    const input = document.querySelector("#user")

    input.addEventListener( "keyup", (e) => {
        const value = e.target.value
        btnVerPerfil.disabled = false

        if (value === "") {
            btnVerPerfil.disabled = true
        }
    })
}

toggleBtn()