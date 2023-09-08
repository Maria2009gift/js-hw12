"use strict"
// =====1=====

const clickOnButtonT1 = () => {
    alert("Hello World!")
}
const buttonT1 = document.querySelector("#buttonT1")
buttonT1.addEventListener("click", clickOnButtonT1)

// =====2=====

// Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове 
// поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.


const pResult = document.querySelector("#guessResult")
let guessInput
let randomNum

const checkGuess = () => {
    randomNum = Math.floor(Math.random() * 10) + 1
    guessInput = Number(document.querySelector("#guessField").value)

    if (guessInput < 1 || guessInput > 10) {
        return pResult.textContent = "not number"
    } else if (guessInput === randomNum){
        return pResult.textContent = "yes"
    }
    else {
        return pResult.textContent = "no"
    }

}
// =====3=====


// Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.


const bodyId = document.querySelector("#body")
let n = 0

function a() {
    // bodyId.textContent = n
    alert(n)
}

function clickOnBody() {
    n+=1
    a()
}
bodyId.addEventListener("click", clickOnBody)

// =====4=====

const applyCallbackToEachElements = (arr, callback) => {
    const newA = []

    for (let i = 0; i < arr.length; i+=1) {
        const element = arr[i]
        const newElem = callback(element)
        newA.push(newElem)
    }
    return newA
}

const arr = [1, 2, 3, 4, 5]

const sqareCallback = (a) => {
    return a * a
}

const result = applyCallbackToEachElements(arr, sqareCallback)
console.log(result);


// =====5=====

const showDiscountPrice = (price, discount) => {
    return price - (price / 100 * discount)
}
const calculateDiscountPrice = (price, discount, callback) => {
    console.log("Discounted price:", showDiscountPrice(price, discount))
}


calculateDiscountPrice(100, 10, showDiscountPrice)
