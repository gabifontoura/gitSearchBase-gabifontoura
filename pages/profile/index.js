
async function getApiDataTitle(){
    const input = document.querySelector(".input-user-search")
    const data = await fetch (`http://api.github.com/users/${input.value}`)
    const dataJson = await data.json();
    document.head.insertAdjacentHTML("beforeend",`
    <title>${dataJson.name}</title>
`)
}
getApiDataTitle()

async function getApiDataHeader(){
    const data = await fetch ("http://api.github.com/users/gabifontoura")
    const dataJson = await data.json();
    document.body.insertAdjacentHTML("beforeend",`
    
      <header class=" header flex">
            <section class="profile flex">
                <figure class="user-photo flex">
                    <img src="${dataJson.avatar_url}">   
                </figure>
                <div class="info-user flex column">
                    <h2 class="name title-2">${dataJson.name}</h2>
                    <p class="user-description">${dataJson.bio}</p>
                </div>
            </section>

            <section class="menu-nav flex">
                <button class="btn-default">Email</button>
                <a href="../home/index.html"><button class="change-user btn-default-secondary">Trocar de usuário</button></a>
            </section>
       </header>
    `)
    
    return data
}

getApiDataHeader()

async function getApiDataRepos(){
    const data = await fetch ("http://api.github.com/users/gabifontoura")
    const dataJson = await data.json();
    const repos = dataJson.map((repository) => document.body.insertAdjacentHTML("aftereend",`
    <ul class="project-list flex">

    <li class="card flex column">
        <h3 class="project-name title-2">${repository.name}</h3>
        <p class="project-description text-2">Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</p>
        <div class="btns-card flex">
            <a href="${repository.html_url}" class="btn-default-small>Repositório</a>
            <button class="btn-outline">Demo</button>
        </div>
    </li>
</ul>
 
`))
return repos
}


getApiDataRepos()


