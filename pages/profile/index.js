

const historyUsers = JSON.parse(window.localStorage.getItem("historyUsers")) || []
async function getApiDataTitle() {
    // const data = await fetch (`https://api.github.com/users/${endPoint}`)
    // const dataJson = await data.json();
    const user = JSON.parse(window.localStorage.getItem("user"))
    document.head.insertAdjacentHTML("beforeend", `
    <title>${user.name}</title>
`)
}

const main = document.querySelector(".main")

async function getApiDataHeader() {
    // const data = await fetch (`https://api.github.com/users/${endPoint}`)
    // const dataJson = await data.json();
    const user = JSON.parse(window.localStorage.getItem("user"))

    const header = document.createElement("header")

    const section = document.createElement("section")
    const figure = document.createElement("figure")
    const img = document.createElement("img")
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")

    const section2 = document.createElement("section")
    const aEmail = document.createElement("a")
    const btnChangeUser = document.createElement("button")

    header.classList = 'header flex'
    section.classList = 'profile flex'
    figure.classList = 'user-photo flex'
    div.classList = 'info-user flex column'
    h2.classList = 'name title-2'
    p.classList = 'user-description'
    section2.classList = 'menu-nav flex'
    aEmail.classList = 'btn-default'
    btnChangeUser.classList = 'change-user btn-default-secondary'

    img.src = user.avatar_url
    h2.innerText = user.name
    p.innerText = user.bio
    aEmail.innerText = 'Email'
    aEmail.href = `mailto:${user.email}`
    btnChangeUser.innerText = 'Trocar de usuário'


    btnChangeUser.addEventListener("click", () => {
        localStorage.removeItem("user")
        if (historyUsers.length > 2) {
            historyUsers.splice(0, 1)

        }
        window.location.replace("/pages/home/index.html")
    })

    figure.append(img)
    div.append(h2, p)
    section.append(figure, div)
    section2.append(aEmail, btnChangeUser)
    header.append(section, section2)
    main.append(header)


    return user
}




async function getApiDataRepos() {



    const user = JSON.parse(window.localStorage.getItem("user"))

    const data = await fetch(`${user.repos_url}`)
    const dataJson = await data.json();
    console.log(dataJson)

    const ul = document.createElement("ul")
    ul.classList = 'project-list'
    main.append(ul)

    const repos = dataJson.map((repository) => {

        const li = document.createElement("li")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        const div = document.createElement("div")
        const a = document.createElement("a")
        const btn = document.createElement("button")

        li.classList = 'card flex column'
        h3.classList = 'project-name title-2'
        p.classList = 'project-description text-2'
        div.classList = 'btns-card flex'
        a.classList = 'btn-default-small'
        btn.classList = 'btn-outline'

        h3.innerText = repository.name
        p.innerText = 'Para preencher esse about tem que fazer outra requisição `https://api.github.com/users/${endPoint}/repos` e dessa pegar o .description, assim tbm para pegar o url correto do repositório (.url)'
        a.href = repository.url
        a.target = '_blank'
        a.innerText = 'Repositório'
        btn.innerText = 'Demo'

        div.append(a, btn)
        li.append(h3, p, div)
        ul.append(li)


    })

    return repos
}



getApiDataTitle()
getApiDataHeader()
getApiDataRepos()
