

const cardFront= document.querySelector('.front');
const cardBack= document.querySelector('.back');
const prevButton= document.querySelector('.prev_nav');
const nextButton= document.querySelector('.next_nav');

let flashcards = [];

let currentIndex = 0;


prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    showPrevCard();
});

nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    showNextCard();
});

function showNextCard() {
    currentIndex++;
    if (currentIndex >= flashcards.length) {
        currentIndex = 0;
    }
    updateCard();
}

function showPrevCard() {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = flashcards.length - 1;
    }
    updateCard();
}

function updateCard() {
    if (flashcards.length === 0) {
        cardFront.textContent = '単語がありません';
        cardBack.textContent = '単語がありません';
        return;
    }

    const currentCard  = flashcards[currentIndex];
    cardFront.textContent = `表：${currentCard.english}`;
    cardBack.textContent = `裏：${currentCard.japanese}`;

    

}

window.onload = function() {
    flashcards = JSON.parse(localStorage.getItem('flashcards'));
};

