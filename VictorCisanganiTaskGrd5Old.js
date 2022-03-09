const startForm = document.querySelector('#startForm')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
let isValidEmail = false
let isValidFirstName = false
let isValidLastName = false

const question1 = document.querySelector('#question1')
const question2 = document.querySelector('#question2')
const question3 = document.querySelector('#question3')
const question4 = document.querySelector('#question4')
const results = document.querySelector('#results')
let answer1, answer2, answer3, answer4 = false
let print1, print1_1, print2, print2_1, print3, print3_1, print4, print4_1
let correct = 0
let percentage = 0

startForm.addEventListener('submit', function(e) {
    e.preventDefault()
    isValidEmail = validateEmail(email, '#emailError')
    isValidFirstName = validateName(firstName, '#firstNameError')
    isValidLastName = validateName(lastName, '#lastNameError')
    if (isValidEmail === true && isValidFirstName === true && isValidLastName === true) {
        window.setTimeout(nextForm, 500, startForm, question1)
    }
})

question1.addEventListener('submit', function(e) {
    e.preventDefault()
    answer1 = getRadio('#southKorea')
    print1 = document.querySelector('input[name="country"]:checked')

    if (print1 == null) {
        document.querySelector('#q1Error').classList.remove('hiddenQuiz')
    } else {
        print1_1 = String(print1.value)
        if (!(document.querySelector('#q1Error').classList.contains('hiddenQuiz')))
            document.querySelector('#q1Error').classList.add('hiddenQuiz')
        window.setTimeout(nextForm, 250, question1, question2)
    }

})

question2.addEventListener('submit', function(e) {
    e.preventDefault()
    answer2 = getCheckBox('#hermoine', '#volcano', '#draco')
    print2 = document.querySelectorAll('input[name="harryPotter"]:checked')
    if (print2.length === 0) {
        document.querySelector('#q2Error').classList.remove('hiddenQuiz')
    } else {
        if (!(document.querySelector('#q2Error').classList.contains('hiddenQuiz'))) {
            document.querySelector('#q2Error').classList.add('hiddenQuiz')
        }
        if (print2.length === 1) {
            print2_1 = `${print2[0].value}`
        } else if (print2.length === 2) {
            print2_1 = `${print2[0].value} & ${print2[1].value}`
        } else if (print2.length === 3) {
            print2_1 = `${print2[0].value} & ${print2[1].value} & ${print2[2].value}`
        }
        window.setTimeout(nextForm, 250, question2, question3)
    }
})

question3.addEventListener('submit', function(e) {
    e.preventDefault()
    answer3 = getText('#nextNumber')
    print3 = String(document.querySelector('#nextNumber').value)
    if (print3 === undefined || print3.trim() === '') {
        document.querySelector('#q3Error').classList.remove('hiddenQuiz')
    } else {
        print3_1 = print3
        if (!(document.querySelector('#q3Error').classList.contains('hiddenQuiz'))) {
            document.querySelector('#q3Error').classList.add('hiddenQuiz')
        }
        window.setTimeout(nextForm, 250, question3, question4)
    }
})

question4.addEventListener('submit', function(e) {
    e.preventDefault()
    answer4 = getRadio('#nile')
    print4 = document.querySelector('input[name="river"]:checked')
    if (print4 == null) {
        document.querySelector('#q4Error').classList.remove('hiddenQuiz')
    } else {
        print4_1 = String(print4.value)
        if (!(document.querySelector('#q4Error').classList.contains('hiddenQuiz'))) {
            document.querySelector('#q4Error').classList.add('hiddenQuiz')
        }
        setPrint()
        getResult()
        window.setTimeout(nextForm, 250, question4, results)
    }

})

function exit(url) {
    results.addEventListener('submit', function(e) {
        e.preventDefault()
        window.setTimeout(function() { window.location = url }, 750)
    })
}


function getRadio(selector) {
    if (document.querySelector(selector).checked) {
        return true
    } else {
        return false
    }
}

function getCheckBox(selector1, selector2, selector3) {
    if (document.querySelector(selector1).checked && document.querySelector(selector3).checked && !(document.querySelector(selector2).checked)) {
        return true
    } else {
        return false
    }
}

function getText(selector) {
    if (document.querySelector(selector).value.trim() === '128') {
        return true
    } else {
        return false
    }
}

function setPrint() {
    document.querySelector('#q1').innerText = print1_1
    document.querySelector('#q2').innerText = print2_1
    document.querySelector('#q3').innerText = print3_1
    document.querySelector('#q4').innerText = print4_1
}

function nextForm(oldForm, newForm) {
    oldForm.classList.add('hiddenQuiz')
    newForm.classList.remove('hiddenQuiz')
}

function validate() {

}

function validateName(name, selector) {
    if (name.value.trim().length <= 1 || /\d/.test(name.value)) {
        name.style.borderColor = "red"
        document.querySelector(selector).classList.remove('hidden')
        console.log(`Failed ${selector}`)
        return false
    } else {
        name.style.borderColor = "green"
        reverseError(selector)
        return true
    }
}

function validateEmail(email, selector) {
    if (email.value.trim().length <= 5 || !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))) {
        email.style.borderColor = "red"
        document.querySelector(selector).classList.remove('hidden')
        console.log(`Failed ${selector}`)
        return false
    } else {
        email.style.borderColor = "green"
        reverseError(selector)
        return true
    }
}

function reverseError(selector) {
    if (!document.querySelector(selector).classList.contains('hidden')) {
        document.querySelector(selector).classList.add('hidden')
        console.log(`Success ${selector}`)
    }
}

function getResult() {
    const allAnswers = [answer1, answer2, answer3, answer4]
    for (let answers of allAnswers) {
        if (answers === true) {
            correct++
        }
    }
    percentage = (correct * 100) / 4
    document.querySelector('#outOf').innerText = String(correct)
    document.querySelector('#percent').innerText = String(percentage)
    document.querySelector('#percent').style.color = "black"
}