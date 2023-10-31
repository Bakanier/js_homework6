function addTenToNumbers(numbers) {
    const result = numbers.map(number => number + 10)
    return result
}
  
const originalNumbers = [5, 10, 15, 20]
const modifiedNumbers = addTenToNumbers(originalNumbers)
console.log(modifiedNumbers)


function filterWordsByLength(words) {
    const result = words.filter(word => word.length > 5)
    return result
}
  
const wordArray = ["Migrator", "Cherry", "Capes", "Word", "Card"]
const longWords = filterWordsByLength(wordArray)
console.log(longWords)


function printSquares(numbers) {
    numbers.forEach(number => {
      const square = number * number
      console.log(`Квадрат числа ${number}: ${square}`)
    })
}

const numberArray = [1, 2, 3, 4, 5]
printSquares(numberArray)


function sumNumbers(numbers) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return sum
}

const numberArray1 = [1, 2, 3, 4, 5]
const totalSum = sumNumbers(numberArray1)
console.log(`Сумма чисел в массиве: ${totalSum}`)



function hasEvenNumber(numbers) {
    return numbers.some(number => number % 2 === 0)
}

const numberArray2 = [1, 3, 5, 6, 7, 9]
const hasEven = hasEvenNumber(numberArray2)
console.log(`В массиве есть четное число: ${hasEven}`)



function areAllPositive(numbers) {
    return numbers.every(number => number > 0)
}

const numberArray3 = [1, 3, 5, 7]
const allPositive = areAllPositive(numberArray3)
console.log(`Все числа положительные в массиве: ${allPositive}`)



function findFirstEvenNumber(numbers) {
    const firstEven = numbers.find(number => number % 2 === 0)
    return firstEven || null
}

const numberArray4 = [1, 2, 5, 7]
const firstEven = findFirstEvenNumber(numberArray4)
console.log(`Первое четное число в массиве : ${firstEven}`)


function convertToUpperCase(strings) {
    const upperCaseStrings = strings.map(str => str.toUpperCase())
    return upperCaseStrings
}
  
const stringArray = ["evolution", "dash", "eater", "bones"]
const upperCaseArray = convertToUpperCase(stringArray)
console.log(upperCaseArray)


function filterPositiveNumbers(numbers) {
    const positiveNumbers = numbers.filter(number => number > 0)
    return positiveNumbers
}
  

const numberArray5 = [1, -2, 3, -4, 5]
const positiveNumbers = filterPositiveNumbers(numberArray5)
console.log(positiveNumbers)


function greetNames(names) {
    names.forEach(name => {
      console.log(`Привет, ${name}!`)
    })
}
  

const nameArray = ["Улук", "Амир", "Абай"]
greetNames(nameArray)


function multiplyNumbers(numbers) {
    const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
    return product
}

const numberArray6 = [1, 2, 3, 4, 5]
const productResult = multiplyNumbers(numberArray6)
console.log(`Произведение чисел в массиве: ${productResult}`)


function hasLongString(strings) {
    return strings.some(string => string.length > 10)
}

const stringArray1 = ["short", "loooooooong", "medium"]
const hasLong= hasLongString(stringArray1)
console.log(`В массиве есть длинная строка: ${hasLong}`)


function findFirstMultipleOfSeven(numbers) {
    const firstMultiple = numbers.find(number => number % 7 === 0)
    return firstMultiple || null
}

const numberArray7 = [3, 13, 20, 30, 42];
const firstMultiple1 = findFirstMultipleOfSeven(numberArray7)
console.log(`Первое число, которое делится на 7: ${firstMultiple1}`)