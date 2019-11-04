// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


const getHeaderComponent = document.querySelector('.header-container');

getHeaderComponent.append(Header());

function Header() {
    const hCard = document.createElement('div');
    hCard.classList.add('header')
    

        const hCardSpanDate = document.createElement('span');
        hCardSpanDate.classList.add('date')
        hCardSpanDate.textContent = 'SMARCH 28, 2019';

        const hCardH1 = document.createElement('h1');
        hCardH1.textContent = 'LambdaTimes';
    

        const hCardSpanTemp = document.createElement('span');
        hCardSpanTemp.classList.add('temp');
        hCardSpanTemp.textContent = '98°';

        hCard.appendChild(hCardSpanDate);
        hCard.appendChild(hCardH1);
        hCard.appendChild(hCardSpanTemp);

    return hCard;
}

