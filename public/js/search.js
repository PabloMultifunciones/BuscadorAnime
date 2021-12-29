var selectorResults = document.getElementById('resultado');
var selectorSearchButton = document.getElementById("searchButton");
var selectorSearchBox = document.getElementById("searchBox");


function searchAnime(searchKey){
    fetch(`https://api.jikan.moe/v3/search/anime?q=${searchKey}`)
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        clearSearch(selectorResults);
        insertResults(response.results);
    })
}

function insertResults(result){
    for(let i = 0; i < result.length; i++){
        insertElement(result[i]);
    }
}

function insertElement(element){
    const card = document.createElement("DIV");
    const cardBody = document.createElement("DIV");
    const cardTitle = document.createElement("H5");
    const cardText = document.createElement("P");
    const cardImg = document.createElement("IMG");
    const cardBtn = document.createElement("INPUT")
    const urlBtn = document.createElement("A")

    card.className = "card col col-12 col-md-3 m-2 p-0";
    cardBody.className = "card-body";
    cardTitle.className = "card-title";
    cardText.className = "card-text";
    cardImg.className = "card-img-top";
    cardBtn.className = "btn btn-primary";
    urlBtn.href = element.url;


    cardBtn.setAttribute("value","Ver");
    cardBtn.setAttribute("type","button");

    urlBtn.appendChild(cardBtn);
    
    cardText.innerHTML = element.synopsis;
    cardTitle.innerHTML = element.title;
    cardImg.src = element.image_url;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(urlBtn);

    card.appendChild(cardImg);
    card.appendChild(cardBody);
    console.log(element);
    selectorResults.appendChild(card);
}

function clearSearch(elemento){
    while(elemento.firstChild){
        elemento.removeChild(elemento.firstChild);
    }
}

selectorSearchButton.addEventListener("click",function(){
    const searchKey = selectorSearchBox.value;
    searchAnime(searchKey);
});
