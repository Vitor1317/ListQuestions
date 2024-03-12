const type = document.getElementById('select-type')
const askButton = document.getElementById('ask-button')
const askList = document.getElementById('ask-list')
const selectTrueOrFalse = document.getElementById('select-ask-true-or-false')
const selectAbcde = document.getElementById('select-ask-abcde')

function handleSelectType(){
    if(type.value === 'true-or-false') {
        selectAbcde.classList.add('none')
        selectTrueOrFalse.classList.remove('none')
    }else {
        selectTrueOrFalse.classList.add('none')
        selectAbcde.classList.remove('none')
    }
}

type.addEventListener('change', ()=> {
    if(type.value === 'true-or-false') {
        selectAbcde.classList.add('none')
        selectTrueOrFalse.classList.remove('none')
    }else {
        selectTrueOrFalse.classList.add('none')
        selectAbcde.classList.remove('none')
    }
})

function ask() {
    const li = document.createElement('li')
    if(type.value === 'true-or-false') {
        li.textContent = selectTrueOrFalse.value
    }else {
        li.textContent = selectAbcde.value
    }

    askList.appendChild(li)
}

askButton.addEventListener('click', ask)