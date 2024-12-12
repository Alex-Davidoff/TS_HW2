interface Card{
    cardSuit: string;
    cardValue: string;
    cardColor?: string;
}

function cards36_init(): Array<Card>{
    const suit: Array<string> = ['spade', 'diamond', 'heart', 'clubs'];
    const value: Array<string> = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    let tarr: Array<Card> = [];
    for (const tsuit of suit){
        for (const tvalue of value){
            let tcard: Card = {
            cardSuit : tsuit,
            cardValue : tvalue
            }
            if ((tcard.cardSuit === 'spade') || (tcard.cardSuit === 'clubs')){
                tcard.cardColor = 'black';
            } else {
                tcard.cardColor = 'red';
            }
            tarr.push(tcard);
        }
    }
    return tarr;
}

let deskofcards = cards36_init();
console.log(deskofcards);

console.log(deskofcards.reduce((acc, tcard) => {
    if (tcard.cardSuit==='spade'){acc.spades.push(tcard)};
    if (tcard.cardSuit==='diamond'){acc.diamonds.push(tcard)};
    if (tcard.cardSuit==='heart'){acc.hearts.push(tcard)};
    if (tcard.cardSuit==='clubs'){acc.clubs.push(tcard)};
    return acc;
}, {spades:[],diamonds:[],hearts:[],clubs:[]}));