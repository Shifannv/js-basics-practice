// fetch = function used for making http requests to fetch resources .
//          (json style data, images, files)
//            simplifies asynchronous data fetching in javascript and
//            used for inreracting with APIs to retrieve 
//              and send data asynchronous over the web fetch(url, {options})


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {
//     if (!response.ok) {
//         throw new Error("could not fetch resource")
//     }
//     return response.json();
// })
// .then(data => console.log(data))
// .catch(error => console.log(error ))

                            // image shown only under the search bar

async function fetchData() {
    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase()
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("could not fetch resources")
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default
        const imgElement = document.getElementById("pokemonSprite")

          imgElement.src = pokemonSprite
          imgElement.style.display ="block"
    }catch(error){
        console.Error(error);
    }}

        //  in the box sample i made up some error

        // const pokemonResult = document.getElementById("pokemonResult")
        // const showPokemonResult=(data) =>{
        //     if(!data || data.message === `not found`){
        //         pokemonResult.innerHTML = `<p>ninte pookimone kittilya monee...!!</p>`
        //     }
        // }
        //     const image =  data.sprites.front_default
        //     const imageElement = document.getElementById("pokemonResult")
        //     imageElement.src = pokemonResult
        //   imageElement.style.display ="block"

                    // below the box
           

