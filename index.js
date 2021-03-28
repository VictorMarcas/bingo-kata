const letters = 'BINGO'
const random = (l, u) => Math.floor(Math.random() * (u - l + 1)) + l

const getRange = (letter) => {
    let object = {'B' : [1, 15], 'I': [16, 30], 'N' : [31, 45], 'G' : [46, 60], 'O' : [61, 75]}

    return object[letter]
}

const uniqueNumber = (Array, number) => Array.includes(number)


const createArray = (range) => {
    let ArrayNumbers = []

    while (ArrayNumbers.length < letters.length) {
        let number = random(range[0], range[1])
        if (!uniqueNumber(ArrayNumbers, number)) {
            ArrayNumbers.push(number)
        } else {
            createArray(range);
        }
    }

    return ArrayNumbers;
}



const createColumns = (letters) => {

    let columns = {}

    for (let letter of letters) {
        columns[letter] = createArray(getRange(letter))
    }

    return columns;
}

console.log(createColumns(letters))
