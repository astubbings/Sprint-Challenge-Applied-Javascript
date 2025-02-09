// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const getTopicsComponent = document.querySelector('.topics');


axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response => {
        //console.log(response);
        //console.log(response.data);
         response.data.topics.forEach(item => {
             const newTab = TabComponent(item);
            getTopicsComponent.appendChild(newTab)
         })
     })
     .catch(error => {
            console.log(error.message)
     })


function TabComponent(newTabCard){

    const tabCard = document.createElement('div');
    tabCard.classList.add('tab');
    tabCard.textContent = newTabCard;

    return tabCard;
}    