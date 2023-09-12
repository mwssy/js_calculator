/*
function Calculator(){

}

const cal = new Calculator()
*/

class Calculator{
    $previousPreview
    $currentPreview

    constructor($previousPreview, $currentPreview){      //생성자?
        this.$previousPreview = $previousPreview
        this.$currentPreview = $currentPreview
    }

    onPressNumber(number){
        this.$currentPreview.textContent += number
    }

    onPressOperation(operation){
        this.$currentPreview.textContent += operation
    }
}

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

const cal = new Calculator($previousPreview, $currentPreview)

$numbers.forEach(($numbers) => {
    $numbers.addEventListener("click", (e) => {
        cal.onPressNumber(e.target.textContent)
    })
})

$operations.forEach(($operations) => {
    $operations.addEventListener("click", (e) => {
        cal.onPressOperation(e.target.textContent)
    })
})