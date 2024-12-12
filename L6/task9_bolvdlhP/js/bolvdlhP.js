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
                cardValue: tvalue,
                cardWeigth: value.indexOf(tvalue) + 6
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
var ace_spade = deskofcards.filter(function (value) { return (value.cardSuit === 'spade') && (value.cardValue === 'ace'); });
console.log('ace_spade', ace_spade);
var all6 = deskofcards.filter(function (value) { return value.cardValue === '6'; });
console.log('all6', all6);
var all_red = deskofcards.filter(function (value) { return value.cardColor === 'red'; });
console.log('all_red', all_red);
var all_diam = deskofcards.filter(function (value) { return value.cardSuit === 'diamond'; });
console.log('all_diam', all_diam);
var clubs_he_9 = deskofcards.filter(function (value) { return (value.cardSuit === 'clubs') && (value.cardWeigth >= 9); });
console.log('clubs_he_9', clubs_he_9);
