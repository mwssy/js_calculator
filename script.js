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
        // 소수점이 연속되지 않게
        // 소수점 맨 앞에 찍히지 않게
        if(number === "." && this.$currentPreview.textContent.length<1){
            return
        }

        this.$currentPreview.textContent += number
    }

    onPressOperation(operation){
        // 연산할 수보다 연산기호 먼저 눌리지 않게
        if(this.$currentPreview.textContent.length<1){
            return
        }

        this.$previousPreview.textContent = `${this.$currentPreview.textContent} ${operation}`
        this.$currentPreview.textContent = ''
    }

    onEqual(){
        this.$previousPreview.textContent += ` ${this.$currentPreview.textContent}`
        let $arr = (this.$previousPreview.textContent).split(" ")
        $arr[0] = $arr[0] - 0
        $arr[2] = $arr[2] - 0
        let $answer = 0
        switch($arr[1]){
            case '+':
                $answer = $arr[0] + $arr[2];
                break;
            case '-':
                $answer = $arr[0] - $arr[2];
                break;
            case '*':
                $answer = $arr[0] * $arr[2];
                break;
            case '/':
                $answer = $arr[0] / $arr[2];
                break;
            default:
                break;
        }
        this.$currentPreview.textContent = `${$answer}`
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
const $equal = document.querySelector('[data-btn-equal]')

// 숫자, 연산
const $numbers = document.querySelectorAll('[data-btn-number]')
const $operations = document.querySelectorAll('[data-btn-operation]')

const cal = new Calculator($previousPreview, $currentPreview)

$numbers.forEach(($number) => {
    $number.addEventListener("click", (e) => {
        cal.onPressNumber(e.target.textContent)
    })
})

$operations.forEach(($operation) => {
    $operation.addEventListener("click", (e) => {
        switch($operation){
            case $plus:
                cal.onPressOperation("+")
                break;
            case $minus:
                cal.onPressOperation("-")
                break;
            case $multiply:
                cal.onPressOperation("*")
                break;
            case $divide:
                cal.onPressOperation("/")
                break;
            case $equal:
                cal.onEqual()
                break;
            default:
                break;
        }
    })
})