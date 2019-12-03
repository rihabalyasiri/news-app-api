

function newsByLanguage(language) {
    document.getElementById('content').innerHTML = '';
    fetch(`https://newsapi.org/v2/top-headlines?country=${language}&apiKey=b85b828f3ed64a0782e1a7df253052d9`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.articles.forEach(data => {
            displayGrid(data)
        });
    })
}

newsByLanguage('de')

function displayGrid(arr) {
    let element = `<figure>
    <img src=${arr.urlToImage} alt="">
    <figcaption>
        <h2>${arr.title}</h2>
        <p>${arr.description}</p>
        <h6>${arr.publishedAt.substr(0,arr.publishedAt.indexOf('T'))} </h6>
        <a href=${arr.url}>Read more</a>
    </figcaption>
</figure>`
document.getElementById('content').innerHTML += element;

}

function suchen() {
    let inputValue = document.getElementById('search');
    console.log(inputValue.value )
    document.getElementById('content').innerHTML = '';
    fetch(`https://newsapi.org/v2/everything?q=${inputValue.value}&language=de&apiKey=b85b828f3ed64a0782e1a7df253052d9`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.articles.forEach(data => {
            displayGrid(data)
        });
    })
}



