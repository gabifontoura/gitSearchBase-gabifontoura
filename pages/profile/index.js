/* Desenvolva sua lógica aqui...*/
async function getApiData(){
    const data = await fetch ("http://api.github.com/users/gabifontoura")
    const dataJson = await data.json();
    document.body.insertAdjacentHTML("beforeend",`
    <main>
      <header class=" header flex">
            <section class="profile flex">
                <figure class="user-photo flex">
                    <img src="${dataJson.avatar_url}">   
                </figure>
                <div class="info-user flex column">
                    <h2 class="name title-2">${dataJson.name}</h2>
                    <p class="user-description">${dataJson.bio}</p>
                </div>
            </section

            
            <nav class="menu-nav flex">
                <button class="btn-default">Email</button>
                <button class="btn-default-secondary">Trocar de usuário</button>
            </nav>
       </header>

       <ul class="project-list flex">

            <li class="card flex column">
            <h3 class="project-name title-2">Project Module 2 - Kenzie...</h3>
            <p class="project-description text-2">Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</p>
            <div class="btns-card flex">
                <button class="btn-default-small">Repositório</button>
                <button class="btn-outline">Demo</button>
            </div>

            </li>
            <li class="card flex column">
            <h3 class="project-name title-2">Project Module 2 - Kenzie...</h3>
            <p class="project-description text-2">Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</p>
            <div class="btns-card flex">
                <button class="btn-default-small">Repositório</button>
                <button class="btn-outline">Demo</button>
            </div>

            </li>
   
      </ul>
       </main> 
    `)
    
    return data
}

getApiData()