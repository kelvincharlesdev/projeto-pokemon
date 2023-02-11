var corpo = document.getElementById("container");
var colors = [
  "#7ED876",
  "#63DBF3",
  "#E2842E",
  "#FFD506",
  "#663399",
  "#676768",
  "#DCC200",
  "#796BAE",
];
var type = [
  "grass",
  "water",
  "fire",
  "electric",
  "normal",
  "bug",
  "ground",
  "poison",
];

renderizar()

function renderizar (){

axios.get("https://pokeapi.co/api/v2/pokemon?limit=27&offset=0").then((data) => {
    document.getElementById("error").style.display = "none"
    
    var lista = data.data.results;

    lista.forEach((pokemon) => {
        axios.get(pokemon.url).then((url) => {
            var div = document.createElement("div");
            div.innerHTML = ` 
                    <div class="card">

                        <div class="info ${pokemon.name}">  

                            <div class="img">
                                <img src="${
                                  url.data.sprites.other.dream_world
                                    .front_default
                                }">
                            </div>
                                
                            <h2>${pokemon.name}</h2>
                            <p>${url.data.types[0].type.name}</p>

                        </div> 

                        <div class="stats">
                            <ul>
                                <li>
                                    <div class="stats-name">
                                        <p>Hp</p>
                                        
                                        
                                        
                                        <div class="barra-cheia">
                                            <div class="barra-porcentagem"
                                                style="width:${url.data.stats[0].base_stat}%;
                                                background-color: ${colors[type.indexOf(url.data.types[0].type.name)]};">
                                            </div> 
                                        </div> 
                                    </div>
                                </li>    

                                <li>
                                    <div class="stats-name">
                                        <p>Speed</p>
                                        
                                        
                                        <div class="barra-cheia">
                                            <div class="barra-porcentagem" 
                                                style="width:${url.data.stats[5].base_stat}%;
                                                background-color: ${colors[type.indexOf(url.data.types[0].type.name)]}">
                                            </div> 
                                        </div> 
                                    </div>
                                </li>

                                <li>
                                    <div class="stats-name">
                                        <p>Attack</p>
                                        
                                        
                                        <div class="barra-cheia">
                                            <div class="barra-porcentagem" 
                                                style="width:${url.data.stats[1].base_stat}%;
                                                background-color: ${colors[type.indexOf(url.data.types[0].type.name)]}">
                                            </div> 
                                        </div> 
                                    </div>
                                </li>

                                <li>
                                    <div class="stats-name">
                                        <p>Defense</p>
                                        
                                        
                                        <div class="barra-cheia">
                                            <div class="barra-porcentagem" 
                                                style="width:${url.data.stats[2].base_stat}%; 
                                                background-color: ${colors[type.indexOf(url.data.types[0].type.name)]}">
                                            </div> 
                                        </div> 
                                    </div>
                                </li>
                            </ul>
                        </div>
                    
                    </div>

                    

                `                  
        corpo.appendChild(div);
      });
    });
  });
}

function buscar() {
  axios.get("https://pokeapi.co/api/v2/pokemon/" + document.getElementById("pokemon").value.toLowerCase()).then((data) => {
    document.getElementById("error").style.display = "none"
      corpo.innerHTML = ` 
        <div class="card unico">

            <div class="info ">  

                <div class="img">
                    <img src=" ${data.data.sprites.other.dream_world.front_default}">
                </div>
                    
            

            </div> 

            <div class="stats">
                <h2>${data.data.name}</h2>
                <p>${data.data.types[0].type.name}</p>
                <ul>
                    <li>
                        <div class="stats-name">
                            <p>Hp</p>
                            
                            
                            <div class="barra-cheia">
                                <div class="barra-porcentagem" 
                                    style="width: ${data.data.stats[0].base_stat}%; 
                                    background-color:${colors[type.indexOf(data.data.types[0].type.name)]};">
                                </div> 
                            </div> 
                        </div>
                    </li>    

                    <li>
                        <div class="stats-name">
                            <p>Speed</p>
                            
                            
                            <div class="barra-cheia">
                                <div class="barra-porcentagem" 
                                    style="width: ${data.data.stats[5].base_stat}%; 
                                    background-color:${colors[type.indexOf(data.data.types[0].type.name)]};">
                                </div> 
                            </div> 
                        </div>
                    </li>

                    <li>
                        <div class="stats-name">
                            <p>Attack</p>
                            
                            
                            <div class="barra-cheia">
                                <div class="barra-porcentagem" 
                                    style="width: ${data.data.stats[1].base_stat}%; 
                                    background-color:${colors[type.indexOf(data.data.types[0].type.name)]};">
                                </div> 
                            </div> 
                        </div>
                    </li>

                    <li>
                        <div class="stats-name">
                            <p>Defense</p>
                    
                            <div class="barra-cheia">
                                <div class="barra-porcentagem" 
                                    style="width:${data.data.stats[2].base_stat}%; 
                                    background-color:${colors[type.indexOf(data.data.types[0].type.name)]};">
                                </div> 
                            </div> 
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    `;
    }).catch((error) =>{
        document.getElementById("error").style.display = "block"
    })
}

function voltar(){
    document.getElementById("error").style.display = "none"
    corpo.innerHTML = "" 
    document.getElementById("pokemon").value = ""

    renderizar()

}