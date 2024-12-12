function cards36_init() {
    var suit = ['spade', 'diamond', 'heart', 'clubs'];
    var value = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    var tarr = [];
    for (var _i = 0, suit_1 = suit; _i < suit_1.length; _i++) {
        var tsuit = suit_1[_i];
        for (var _a = 0, value_1 = value; _a < value_1.length; _a++) {
            var tvalue = value_1[_a];
            var tcard = {
                cardSuit: tsuit,
                cardValue: tvalue
            };
            if ((tcard.cardSuit === 'spade') || (tcard.cardSuit === 'clubs')) {
                tcard.cardColor = 'black';
            }
            else {
                tcard.cardColor = 'red';
            }
            tarr.push(tcard);
        }
    }
    return tarr;
}
var deskofcards = cards36_init();
console.log(deskofcards);
console.log(deskofcards.reduce(function (acc, tcard) {
    if (tcard.cardSuit === 'spade') {
        acc.spades.push(tcard);
    }
    ;
    if (tcard.cardSuit === 'diamond') {
        acc.diamonds.push(tcard);
    }
    ;
    if (tcard.cardSuit === 'heart') {
        acc.hearts.push(tcard);
    }
    ;
    if (tcard.cardSuit === 'clubs') {
        acc.clubs.push(tcard);
    }
    ;
    return acc;
}, { spades: [], diamonds: [], hearts: [], clubs: [] }));
