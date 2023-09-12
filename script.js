/*
function Calculator(){

}

const cal = new Calculator()
*/

class Calculator{

}

const cal = new Calculator()

// 값 표시
const $previousPreview = document.querySelector('[data-previous-preview]')
const $currentPreview = document.querySelector(['[data-current-preview]'])

// 사칙연산
const $plus = document.querySelector('[data-btn-plus]')
const $minus = document.querySelector('[data-btn-minus]')
const $multiply = document.querySelector('[data-btn-multiply]')
const $divide = document.querySelector('[data-btn-divide]')

// 숫자, 연산
const $numbers = document.querySelectorAll('[data-btn-number]')
const $operations = document.querySelectorAll('[data-btn-operation]')

$numbers.forEach(($numbers) => {
    $numbers.addEventListener("click", (e) => {
        console.log(e.target.textContent)
    })
})

$operations.forEach(($operations) => {
    $operations.addEventListener("click", (e) => {
        console.log(e.target.textContent)
    })
})