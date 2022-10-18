

const historyUsers = JSON.parse(window.localStorage.getItem("historyUsers")) || []
async function getApiDataTitle(){
    // const data = await fetch (`https://api.github.com/users/${endPoint}`)
    // const dataJson = await data.json();
    const user = JSON.parse(window.localStorage.getItem("user"))
    document.head.insertAdjacentHTML("beforeend",`
    <title>${user.name}</title>
`)
}


async function getApiDataHeader(){
    // const data = await fetch (`https://api.github.com/users/${endPoint}`)
    // const dataJson = await data.json();
    const user = JSON.parse(window.localStorage.getItem("user"))
    
    document.body.insertAdjacentHTML("beforeend",`
    
      <header class=" header flex">
            <section class="profile flex">
                <figure class="user-photo flex">
                    <img src="${user.avatar_url}">   
                </figure>
                <div class="info-user flex column">
                    <h2 class="name title-2">${user.name}</h2>
                    <p class="user-description">${user.bio}</p>
                </div>
            </section>

            <section class="menu-nav flex">
                <a href="mailto:${user.email}"class="btn-default">Email</a>
                <button class="change-user btn-default-secondary">Trocar de usuário</button>
            </section>
       </header>
    `)
    const btnTrocarUser = document.querySelector(".change-user")
     btnTrocarUser.addEventListener("click", ()=>{
        localStorage.removeItem("user")
        if(historyUsers.length > 2){
            historyUsers.splice(0,1)

        }
        window.location.replace("/pages/home/index.html")
     })

    return user
}




async function getApiDataRepos(){

    const user = JSON.parse(window.localStorage.getItem("user"))

    const data = await fetch (`${user.repos_url}`)
    const dataJson = await data.json();
    console.log(dataJson)
    const repos = dataJson.map((repository) => document.body.insertAdjacentHTML("beforeend",`
    <ul class="project-list flex">

    <li class="card flex column">
        <h3 class="project-name title-2">${repository.name}</h3>
        <p class="project-description text-2">Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</p>
        <div class="btns-card flex">
        <a target="_blank" href="${repository.url}" class="btn-default-small">Repositório</a>
        <button class="btn-outline">Demo</button>
        </div>
    </li>
</ul>

`))
 return repos
}



getApiDataTitle()
getApiDataHeader()
getApiDataRepos()
