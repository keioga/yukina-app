
let flashcards = [];

let wordnum;



function addWord() {



    const eng = document.getElementById(`english`).value.trim();
    const jpn = document.getElementById(`japanese`).value.trim();

    if (eng === `` || jpn === ``){
        alert('英単語と日本語訳を入力してください。');
        return;
    }

    const newCard = {
        english: eng,
        japanese: jpn
    };


    wordnum = wordnum + 1;

    flashcards.push(newCard);
    saveWords();

    // flashcards = JSON.parse(localStorage.getItem('flashcards'));

    document.getElementById(`english`).value = ``;
    document.getElementById(`japanese`).value = ``;
    document.getElementById(`result`).innerText = '登録完了';


    document.getElementById('wordnum').innerText = '登録単語数　：　' + wordnum;


    // const li = document.createElement(`li`);
    // li.textContent = `${eng} → ${jpn}`;

}

function saveWords() {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
    localStorage.setItem('wordnum',JSON.stringify(wordnum));
}

window.onload = function() {
    flashcards = JSON.parse(localStorage.getItem('flashcards'));
    wordnum = JSON.parse(localStorage.getItem('wordnum'));

    document.getElementById('wordnum').innerText = '登録単語数　：　' + wordnum;
};



function cleardeta() {

    localStorage.setItem('flashcards',JSON.stringify([]));
    wordnum = 1;

}