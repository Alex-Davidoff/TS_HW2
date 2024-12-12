var exch_obj = /** @class */ (function () {
    function exch_obj() {
    }
    return exch_obj;
}());
var exch_table_UAH = [
    { currency: 'USD', buy_koef: 41.50 },
    { currency: 'EUR', buy_koef: 44.75 },
    { currency: 'GBP', buy_koef: 53.25 },
    { currency: 'CHF', buy_koef: 47.28 },
    { currency: 'CAD', buy_koef: 29.26 },
    { currency: 'AUD', buy_koef: 25.03 },
    { currency: 'PLN', buy_koef: 10.220 },
    { currency: 'HUF', buy_koef: 0.090 }
]; //2024-11-09 https://goverla.ua/
console.log(exch_table_UAH);
function exch_table_UAH_find(curr) {
    var tres = -1;
    for (var _i = 0, exch_table_UAH_1 = exch_table_UAH; _i < exch_table_UAH_1.length; _i++) {
        var el = exch_table_UAH_1[_i];
        if (curr === el.currency) {
            tres = el.buy_koef;
        }
    }
    return tres;
}
console.log('CAD', exch_table_UAH_find('CAD'));
function m_exchange(sumUAH, exchangeCurrency) {
    var k = exch_table_UAH_find(exchangeCurrency);
    if (k !== -1) {
        return sumUAH / k;
    }
    else {
        return -1;
    }
}
console.log('USD', m_exchange(10000, 'USD'));
console.log('EUR', m_exchange(10000, 'EUR'));
console.log('CZK', m_exchange(10000, 'CZK'));
