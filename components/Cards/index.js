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

const getCardsComponent = document.querySelector('.cards-container')


axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        //console.log(response);
        console.log(response);
            response.data.articles.forEach(item => {
             const newArt = ArticleCardsComp(item);
            getCardsComponent.appendChild(newArt)
         })
     })
     .catch(error => {
            console.log(error.message)
     })


function ArticleCardsComp (newArtCard) {
    const artCard = document.querySelector('div');
    artCard.classList.add('card')    
    
    const artHeadline = document.querySelector('div');
    artHeadline.classList.add('headline');
    artHeadline.textContent = newArtCard.headline;

        const artAuthor = document.querySelector('div');
            const artImgCont = document.querySelector('div');
                const artImgSource = document.querySelector('img');
            const artAuthNameSpan = document.querySelector('span');

}

