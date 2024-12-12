let nums: number[] = [11,21,3];

function sortNums(array: Array<number>, direction: string){
    if (Array.isArray(array)) {
        if (direction === 'asc'){
            return array.sort((a, b) => a-b);
        } else if (direction === 'desc'){
            return array.sort((a, b) => b-a);
        } else {
            console.log('Func sortNums arg 2 error');
        }
    } else console.log('Func sortNums arg 1 is not array');
}

console.log(sortNums(nums,'asc'));
console.log(sortNums(nums,'desc'));

console.log(sortNums(nums,'Desk'));