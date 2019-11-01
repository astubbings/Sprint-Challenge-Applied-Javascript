// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        //console.log(response);
        console.log(response.data);
        //response.data.articles
        response.data.articles.bootstrap.forEach(item => {
             //const newArt = ArticleCardsComp(item);
            //getCardsComponent.querySelector(newArt)
            document.querySelector('.cards-container').appendChild(ArticleCardsComp(item))
         })
         response.data.articles.javascript.forEach(item => {
            //const newArt = ArticleCardsComp(item);
           //getCardsComponent.querySelector(newArt)
           document.querySelector('.cards-container').appendChild(ArticleCardsComp(item))
        })
        response.data.articles.jquery.forEach(item => {
            //const newArt = ArticleCardsComp(item);
           //getCardsComponent.querySelector(newArt)
           document.querySelector('.cards-container').appendChild(ArticleCardsComp(item))
        })
        response.data.articles.node.forEach(item => {
            //const newArt = ArticleCardsComp(item);
           //getCardsComponent.querySelector(newArt)
           document.querySelector('.cards-container').appendChild(ArticleCardsComp(item))
        })
        response.data.articles.technology.forEach(item => {
            //const newArt = ArticleCardsComp(item);
           //getCardsComponent.querySelector(newArt)
           document.querySelector('.cards-container').appendChild(ArticleCardsComp(item))
        })
     })
     .catch(error => {
            console.log(error.message)
     })

function ArticleCardsComp (newArtCard) {
    const artCard = document.createElement('div');
    artCard.classList.add('card')    
    
    const artHeadline = document.createElement('div');
    artHeadline.classList.add('headline');
    
    artHeadline.textContent = newArtCard.headline;

        const artAuthor = document.createElement('div');
        artAuthor.classList.add('author')
        //artAuthor.textContent = newArtCard.authorName;

            const artImgCont = document.createElement('div');
            artImgCont.classList.add('img-container');
                const artImgSource = document.createElement('img');
                artImgSource.src = newArtCard.authorPhoto;

            const artAuthNameSpan = document.createElement('span');
            artAuthNameSpan.textContent = newArtCard.authorName;

    artCard.appendChild(artHeadline);
    artCard.appendChild(artAuthor);
    artAuthor.appendChild(artImgCont);
    artImgCont.appendChild(artImgSource);
    artAuthor.appendChild(artAuthNameSpan);
    
    return artCard;
}

