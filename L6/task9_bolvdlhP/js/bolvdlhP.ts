interface Card{
    cardSuit: string;
    cardValue: string;
    cardWeigth: number;
    cardColor?: string;
}

function cards36_init(): Card[]{
    const suit: Array<string> = ['spade', 'diamond', 'heart', 'clubs'];
    const value: Array<string> = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    let tarr: Card[] = [];
    for (const tsuit of suit){
        for (const tvalue of value){
            let tcard: Card = {
            cardSuit : tsuit,
            cardValue : tvalue,
            cardWeigth : value.indexOf(tvalue)+6
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

let ace_spade = deskofcards.filter(value => (value.cardSuit==='spade') && (value.cardValue==='ace'));
console.log('ace_spade', ace_spade);

let all6 = deskofcards.filter(value => value.cardValue==='6');
console.log('all6', all6);

let all_red = deskofcards.filter(value => value.cardColor==='red');
console.log('all_red', all_red);

let all_diam = deskofcards.filter(value => value.cardSuit==='diamond');
console.log('all_diam', all_diam);

let clubs_he_9 = deskofcards.filter(value => (value.cardSuit==='clubs') && (value.cardWeigth>=9));
console.log('clubs_he_9', clubs_he_9);