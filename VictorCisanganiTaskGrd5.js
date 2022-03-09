const newForm = document.createElement('form')
const newHeader2 = document.createElement('h2')
document.body.appendChild(newForm)
newForm.appendChild(newHeader2)
newHeader2.textContent = 'Your New Quiz'
newForm.setAttribute('id', 'newForm')
const addFormButton = document.querySelector("#addForm")
let typeChoice = document.querySelector('#userType')
const boxOptions = document.querySelector('#boxChoices')
const textIDAdd = document.querySelector('#textIDAdd')
const goodAnswer = document.querySelector('#goodAnswer')
const correctAnswer = []
const arrayOfName = []
const numberPoints = []
const allPossibleID = []


typeChoice.addEventListener('change', function(e) {
    if (typeChoice.value === 'radio' || typeChoice.value === 'checkbox') {
        if (boxOptions.classList.contains('hiddenQuiz')) {
            boxOptions.classList.remove('hiddenQuiz')
        }
        if (!(textIDAdd.classList.contains('hiddenQuiz'))) {
            textIDAdd.classList.add('hiddenQuiz')
        }

    } else if (typeChoice.value === 'text') {
        if (!(boxOptions.classList.contains('hiddenQuiz'))) {
            boxOptions.classList.add('hiddenQuiz')
        }
        if (textIDAdd.classList.contains('hiddenQuiz')) {
            textIDAdd.classList.remove('hiddenQuiz')
        }
    } else {
        textIDAdd.classList.add('hiddenQuiz')
        boxOptions.classList.add('hiddenQuiz')
    }
})


addFormButton.addEventListener('click', function(e) {
    e.preventDefault()
    const myDiv = document.createElement('div')
    const myQuestion = document.createElement('p')
    const someSpace = document.createElement('br')

    let myPoints = document.querySelector('#userPoints').value
    let myPointsInt = parseInt(myPoints)

    let userQuestion = String(document.querySelector('#userQuestion').value)
    let userType = String(typeChoice.value)
    let myGoodAnswer = String(goodAnswer.value).replace(/\s/g, '')
    let groupName = String(document.querySelector('#questionName').value).replace(/\s/g, '')
    let newTextID = String(document.querySelector('#questionIDText').value).replace(/\s/g, '')

    let input1ID = String(document.querySelector('#input1').value).replace(/\s/g, '')
    let input2ID = String(document.querySelector('#input2').value).replace(/\s/g, '')
    let input3ID = String(document.querySelector('#input3').value).replace(/\s/g, '')
    let label1Text = String(document.querySelector('#option1').value).replace(/\s/g, '')
    let label2Text = String(document.querySelector('#option2').value).replace(/\s/g, '')
    let label3Text = String(document.querySelector('#option3').value).replace(/\s/g, '')

    myQuestion.textContent = userQuestion
    myDiv.classList.add('question')
    newForm.append(someSpace)
    newForm.append(myDiv)

    if (!(Number.isInteger(myPointsInt))) {
        alert('Invalid input! Please use integer to assign points.')
    } else {

        if (userType.trim() == '' || userQuestion.trim() == '' || groupName.trim() == '' || myGoodAnswer.trim() == '') {
            alert('Invalid input! Make sure you have: \nQuestion, Name, Type, Answer!')
        } else {

            if (allPossibleID.includes(newTextID) || allPossibleID.includes(input1ID) || allPossibleID.includes(input2ID) || allPossibleID.includes(input3ID) || arrayOfName.includes(groupName)) {
                alert('You have already used this Name and/or ID before. \nPlease use a different Name and/or ID.')
            } else {

                if (userType == 'text') {
                    if (newTextID == '') {
                        alert('Please input a valid unique ID.')
                    } else {
                        myDiv.append(myQuestion)
                        const myInput = document.createElement('input')
                        myInput.classList.add('textChoice')
                        myQuestion.classList.add('makeCenter')
                        myInput.setAttribute('name', groupName)
                        myInput.setAttribute('id', newTextID)
                        myDiv.append(myInput)

                        allPossibleID.push(newTextID)
                        numberPoints.push(myPointsInt)
                        arrayOfName.push(groupName)
                        correctAnswer.push(myGoodAnswer.toLowerCase())
                        let allInput = document.querySelectorAll('input')
                        for (let input of allInput) {
                            input.value = ''
                        }
                        typeChoice.value = ''
                        textIDAdd.classList.add('hiddenQuiz')
                        boxOptions.classList.add('hiddenQuiz')
                        // window.setTimeout(alert, 500, 'Success! Your question has been added.\nYou can add more questions or try your quiz.')
                    }
                }

                if (userType == 'checkbox') {

                    if (input1ID == '' || input2ID == '' || input3ID == '') {
                        alert('Please input a valid unique ID for all 3 inputs.')
                    } else {

                        if (input1ID === input2ID || input1ID === input3ID || input2ID === input3ID) {
                            alert('Duplicate error! You have the same ID for more than 1 input.\nPlease use different IDs')

                        } else {
                            const mySection = document.createElement('section')
                            const myDiv1 = document.createElement('div')
                            const myDiv2 = document.createElement('div')
                            const myDiv3 = document.createElement('div')
                            const option1Input = document.createElement('input')
                            const option1Label = document.createElement('label')
                            const myBR1 = document.createElement('br')
                            const option2Input = document.createElement('input')
                            const option2Label = document.createElement('label')
                            const myBR2 = document.createElement('br')
                            const option3Input = document.createElement('input')
                            const option3Label = document.createElement('label')
                            const myBR3 = document.createElement('br')

                            mySection.classList.add('question')

                            option1Input.setAttribute('type', 'checkbox')
                            option2Input.setAttribute('type', 'checkbox')
                            option3Input.setAttribute('type', 'checkbox')

                            option1Input.setAttribute('class', 'checkbox1')
                            option2Input.setAttribute('class', 'checkbox1')
                            option3Input.setAttribute('class', 'checkbox1')

                            option1Input.setAttribute('name', groupName)
                            option2Input.setAttribute('name', groupName)
                            option3Input.setAttribute('name', groupName)

                            option1Input.setAttribute('id', input1ID)
                            option2Input.setAttribute('id', input2ID)
                            option3Input.setAttribute('id', input3ID)

                            option1Label.htmlFor = input1ID
                            option2Label.htmlFor = input2ID
                            option3Label.htmlFor = input3ID

                            option1Label.textContent = label1Text
                            option2Label.textContent = label2Text
                            option3Label.textContent = label3Text



                            myDiv.append(mySection)
                            mySection.append(myQuestion)
                            myQuestion.classList.add('makeCenter')
                            mySection.append(myDiv1)
                            mySection.append(myDiv2)
                            mySection.append(myDiv3)
                            myDiv1.append(option1Input)
                            myDiv1.append(option1Label)
                            myDiv1.append(myBR1)
                            myDiv2.append(option2Input)
                            myDiv2.append(option2Label)
                            myDiv2.append(myBR2)
                            myDiv3.append(option3Input)
                            myDiv3.append(option3Label)
                            myDiv3.append(myBR3)

                            allPossibleID.push(input1ID)
                            allPossibleID.push(input2ID)
                            allPossibleID.push(input3ID)
                            numberPoints.push(myPointsInt)
                            arrayOfName.push(groupName)
                            correctAnswer.push(myGoodAnswer.toLowerCase())
                            let allInput = document.querySelectorAll('input')
                            for (let input of allInput) {
                                input.value = ''
                            }
                            typeChoice.value = ''
                            textIDAdd.classList.add('hiddenQuiz')
                            boxOptions.classList.add('hiddenQuiz')
                            // window.setTimeout(alert, 500, 'Success! Your question has been added.\nYou can add more questions or try your quiz.')
                        }
                    }
                }

                if (userType == 'radio') {

                    if (input1ID == '' || input2ID == '' || input3ID == '') {
                        alert('Please input a valid unique ID for all 3 inputs.')
                    } else {
                        if (input1ID === input2ID || input1ID === input3ID || input2ID === input3ID) {
                            alert('Duplicate error! You have the same ID for more than 1 input.\nPlease use different IDs')

                        } else {
                            const mySection = document.createElement('section')
                            const myDiv1 = document.createElement('div')
                            const myDiv2 = document.createElement('div')
                            const myDiv3 = document.createElement('div')
                            const option1Input = document.createElement('input')
                            const option1Label = document.createElement('label')
                            const myBR1 = document.createElement('br')
                            const option2Input = document.createElement('input')
                            const option2Label = document.createElement('label')
                            const myBR2 = document.createElement('br')
                            const option3Input = document.createElement('input')
                            const option3Label = document.createElement('label')
                            const myBR3 = document.createElement('br')

                            mySection.classList.add('question')

                            option1Input.setAttribute('type', 'radio')
                            option2Input.setAttribute('type', 'radio')
                            option3Input.setAttribute('type', 'radio')

                            option1Input.setAttribute('class', 'radio1')
                            option2Input.setAttribute('class', 'radio1')
                            option3Input.setAttribute('class', 'radio1')

                            option1Input.setAttribute('name', groupName)
                            option2Input.setAttribute('name', groupName)
                            option3Input.setAttribute('name', groupName)

                            option1Input.setAttribute('id', input1ID)
                            option2Input.setAttribute('id', input2ID)
                            option3Input.setAttribute('id', input3ID)

                            option1Label.htmlFor = input1ID
                            option2Label.htmlFor = input2ID
                            option3Label.htmlFor = input3ID

                            option1Label.textContent = label1Text
                            option2Label.textContent = label2Text
                            option3Label.textContent = label3Text

                            myDiv.append(mySection)
                            mySection.append(myQuestion)
                            myQuestion.classList.add('makeCenter')
                            mySection.append(myDiv1)
                            mySection.append(myDiv2)
                            mySection.append(myDiv3)
                            myDiv1.append(option1Input)
                            myDiv1.append(option1Label)
                            myDiv1.append(myBR1)
                            myDiv2.append(option2Input)
                            myDiv2.append(option2Label)
                            myDiv2.append(myBR2)
                            myDiv3.append(option3Input)
                            myDiv3.append(option3Label)
                            myDiv3.append(myBR3)

                            allPossibleID.push(input1ID)
                            allPossibleID.push(input2ID)
                            allPossibleID.push(input3ID)
                            numberPoints.push(myPointsInt)
                            arrayOfName.push(groupName)
                            correctAnswer.push(myGoodAnswer.toLowerCase())
                            let allInput = document.querySelectorAll('input')
                            for (let input of allInput) {
                                input.value = ''
                            }
                            typeChoice.value = ''
                            textIDAdd.classList.add('hiddenQuiz')
                            boxOptions.classList.add('hiddenQuiz')
                            // window.setTimeout(alert, 500, 'Success! Your question has been added.\nYou can add more questions or try your quiz.')
                        }
                    }
                }
            }
        }
    }
})

const tryQuizButton = document.querySelector('#tryQuiz')
const userChoiceForm = document.querySelector('#userChoice')
const finalForm = document.querySelector('#finalForm')
const otherPage = document.querySelector('#otherPage')

tryQuizButton.addEventListener('click', function(e) {
    e.preventDefault()
    const sendFormButton = document.createElement('button')
    const someSpaceAgain = document.createElement('br')
    sendFormButton.textContent = 'Submit Quiz'
    sendFormButton.setAttribute('type', 'submit')
    newForm.append(someSpaceAgain)
    newForm.append(sendFormButton)
    userChoiceForm.classList.add('hiddenQuiz')
    newForm.classList.remove('hiddenQuiz')
})

let totalCorrect = 0
const chosenAnswers = []

newForm.addEventListener('submit', function(e) {
    e.preventDefault()

    for (let i = 0; i < arrayOfName.length; i++) {
        if (document.querySelector(`input[name="${arrayOfName[i]}"]`).classList.contains("textChoice")) {
            let name1 = document.querySelector(`input[name="${arrayOfName[i]}"]`).value
            if (name1 == '') {
                name1 = 'No Answer'
            }
            chosenAnswers.push(String(name1).replace(/\s/g, '').toLowerCase())
        }

        if (document.querySelector(`input[name="${arrayOfName[i]}"]`).classList.contains("checkbox1")) {
            let name2 = document.querySelectorAll(`input[name="${arrayOfName[i]}"]:checked`)
            let thisAnswer1
            if (name2.length === 1) {
                thisAnswer1 = `${String(name2[0].id)}`
            } else if (name2.length === 2) {
                thisAnswer1 = `${String(name2[0].id)} & ${String(name2[1].id)}`
            } else if (name2.length === 3) {
                thisAnswer1 = `${String(name2[0].id)} & ${String(name2[1].id)} & ${String(name2[2].id)}`
            } else {
                thisAnswer1 = 'No Answer'
            }
            chosenAnswers.push(thisAnswer1.replace(/\s/g, '').toLowerCase())
        }
        if (document.querySelector(`input[name="${arrayOfName[i]}"]`).classList.contains("radio1")) {
            let name3
            if (document.querySelector(`input[name="${arrayOfName[i]}"]:checked`) == null) {
                name3 = 'No Answer'
            } else {
                name3 = document.querySelector(`input[name="${arrayOfName[i]}"]:checked`).id
            }
            chosenAnswers.push(String(name3).replace(/\s/g, '').toLowerCase())
        }
    }
    calculateFinal()

    newForm.classList.add('hiddenQuiz')
    finalForm.classList.remove('hiddenQuiz')
})


finalForm.addEventListener('submit', function(e) {
    e.preventDefault()
    window.setTimeout(function() { window.location = 'userGenerated.html' }, 750)
})

const gotThis = document.querySelector('#spanGot')
const gotOutOf = document.querySelector('#spanOutOf')
const finalPercent = document.querySelector('#finalPercent')
const whatWasAnswered = document.querySelector('#youDid')
const whatIsCorrect = document.querySelector('#youDid2')

function calculateFinal() {
    let correctPoints = 0
    for (let points of numberPoints) {
        correctPoints = correctPoints + points
    }

    let total = 0
    for (let j = 0; j < correctAnswer.length; j++) {
        if (chosenAnswers[j] === correctAnswer[j]) {
            total = total + numberPoints[j]
        }
    }

    let percentResult = (total / correctPoints) * 100

    gotThis.innerText = String(total)
    gotOutOf.innerText = String(correctPoints)
    finalPercent.innerText = String(percentResult.toFixed(1))

    let z = 0
    for (let answer of chosenAnswers) {
        whatWasAnswered.innerText += `Question ${z+1}: ${answer} -- `
        z++
    }

    let y = 0
    for (let answer of correctAnswer) {
        whatIsCorrect.innerText += `Question ${y+1}: ${answer} (${numberPoints[y]} points) -- `
        y++
    }
}