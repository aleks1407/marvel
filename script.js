document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'cyclops',
            img: 'assets/icons8-cyclops-marvel-144.png'
        },
        {
            name: 'magneto',
            img: 'assets/icons8-magneto-144.png'
        },
        {
            name: 'mistique',
            img: 'assets/icons8-mystique-144.png'
        },
        {
            name: 'storm',
            img: 'assets/icons8-storm-marvel-144.png'
        },
        {
            name: 'professor-x',
            img: 'assets/icons8-professor-x-144.png'
        },
        {
            name: 'wolverine',
            img: 'assets/icons8-wolverine-144.png'
        },
        {
            name: 'thanos',
            img: 'assets/icons8-thanos-144.png'
        },
        {
            name: 'gambit',
            img: 'assets/icons8-gambit-144.png'
        },
        {
            name: 'groot',
            img: 'assets/icons8-groot-144.png'
        },
        {
            name: 'hellcat',
            img: 'assets/icons8-hellcat-144.png'
        },
        {
            name: 'rogue',
            img: 'assets/icons8-rogue-144.png'
        },
        {
            name: 'captain',
            img: 'assets/icons8-captain-america-144.png'
        },
        {
            name: 'cyclops',
            img: 'assets/icons8-cyclops-marvel-144.png'
        },
        {
            name: 'magneto',
            img: 'assets/icons8-magneto-144.png'
        },
        {
            name: 'mistique',
            img: 'assets/icons8-mystique-144.png'
        },
        {
            name: 'storm',
            img: 'assets/icons8-storm-marvel-144.png'
        },
        {
            name: 'professor-x',
            img: 'assets/icons8-professor-x-144.png'
        },
        {
            name: 'wolverine',
            img: 'assets/icons8-wolverine-144.png'
        },
        {
            name: 'thanos',
            img: 'assets/icons8-thanos-144.png'
        },
        {
            name: 'gambit',
            img: 'assets/icons8-gambit-144.png'
        },
        {
            name: 'groot',
            img: 'assets/icons8-groot-144.png'
        },
        {
            name: 'hellcat',
            img: 'assets/icons8-hellcat-144.png'
        },
        {
            name: 'rogue',
            img: 'assets/icons8-rogue-144.png'
        },
        {
            name: 'captain',
            img: 'assets/icons8-captain-america-144.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        for(let i = 0; i< cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'assets/darthVader.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('Great. It`s a Match');
            cards[optionOneId].setAttribute('src', 'assets/white.png');
            cards[optionTwoId].setAttribute('src', 'assets/white.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'assets/darthVader.png');
            cards[optionTwoId].setAttribute('src', 'assets/darthVader.png');
            alert('Bad move. Try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Great Job. You won';
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length ===2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();

})