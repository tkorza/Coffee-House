const sizeButtonS = document.querySelector('.size-additivies-layot #s')
const sizeButtonM = document.querySelector('.size-additivies-layot #m')
const sizeButtonL = document.querySelector('.size-additivies-layot #l')
const additiviesButtonSugar = document.querySelector('.size-additivies-layot #sugar')
const additiviesButtonCinnamon = document.querySelector('.size-additivies-layot #cinnamon')
const additiviesButtonSyryup = document.querySelector('.size-additivies-layot #syryup')

const subButttonS = document.querySelector('.size-additivies-layot #s .valueSize')
const subButttonM = document.querySelector('.size-additivies-layot #m .valueSize')
const subButttonL = document.querySelector('.size-additivies-layot #l .valueSize')
const subButttonSugar = document.querySelector('.size-additivies-layot #sugar .valueAdditivies')
const subButttonCinnamon = document.querySelector('.size-additivies-layot #cinnamon .valueAdditivies')
const subButttonSyryup = document.querySelector('.size-additivies-layot #syryup .valueAdditivies')

const pButtonS = document.querySelector('.size-additivies-layot #s #valueS')
const pButtonM = document.querySelector('.size-additivies-layot #m #valueM')
const pButtonL = document.querySelector('.size-additivies-layot #l #valueL')
const pButtonSugar = document.querySelector('.size-additivies-layot #sugar #suga-p')
const pButtonCinnamon = document.querySelector('.size-additivies-layot #cinnamon #cinnamon-p')
const pButtonSyryup = document.querySelector('.size-additivies-layot #syryup #syrup-p')

const closeBtn = document.querySelector('.close-button')
const closeBtnP = document.querySelector('.close-button p')

const divArr = document.querySelectorAll('.size .size-additivies-layot div')
let currentSize
const changeButtonStyleHover = (a, b, c) => {
    a.style = 'background-color:#665F55'
    b.style = 'background-color:#E1D4C9'
    c.style = 'color:#E1D4C9'
}
const changeButtonStyleOut = (a, b, c) => {
    a.style = 'background-color:none'
    b.style = 'background-color:none'
    c.style = 'color:none'
}

sizeButtonS.addEventListener('mouseover', () => changeButtonStyleHover(sizeButtonS, subButttonS, pButtonS))
sizeButtonS.addEventListener('mouseout', () => changeButtonStyleOut(sizeButtonS, subButttonS, pButtonS))
sizeButtonM.addEventListener('mouseover', () => changeButtonStyleHover(sizeButtonM, subButttonM, pButtonM))
sizeButtonM.addEventListener('mouseout', () => changeButtonStyleOut(sizeButtonM, subButttonM, pButtonM))
sizeButtonL.addEventListener('mouseover', () => changeButtonStyleHover(sizeButtonL, subButttonL, pButtonL))
sizeButtonL.addEventListener('mouseout', () => changeButtonStyleOut(sizeButtonL, subButttonL, pButtonL))

additiviesButtonSugar.addEventListener('mouseover', () => changeButtonStyleHover(additiviesButtonSugar, subButttonSugar, pButtonSugar))
additiviesButtonSugar.addEventListener('mouseout', () => changeButtonStyleOut(additiviesButtonSugar, subButttonSugar, pButtonSugar))
additiviesButtonCinnamon.addEventListener('mouseover', () => changeButtonStyleHover(additiviesButtonCinnamon, subButttonCinnamon, pButtonCinnamon))
additiviesButtonCinnamon.addEventListener('mouseout', () => changeButtonStyleOut(additiviesButtonCinnamon, subButttonCinnamon, pButtonCinnamon))
additiviesButtonSyryup.addEventListener('mouseover', () => changeButtonStyleHover(additiviesButtonSyryup, subButttonSyryup, pButtonSyryup))
additiviesButtonSyryup.addEventListener('mouseout', () => changeButtonStyleOut(additiviesButtonSyryup, subButttonSyryup, pButtonSyryup))

closeBtn.addEventListener('mouseover', () => {
    closeBtn.style = 'background-color:#665F55'
    closeBtnP.style = 'color:#E1D4C9'
})

closeBtn.addEventListener('mouseout', () => {
    closeBtn.style = 'background-color:none'
    closeBtnP.style = 'color:none'
})

