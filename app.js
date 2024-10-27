const nextImg = document.querySelector('.border-arrow-right')
const rightArrow = document.querySelector('.right-arrow')
const leftArrow = document.querySelector('.left-arrow')
const prevImg = document.querySelector('.border-arrow-left')
const imgArr = document.querySelectorAll('.coffee-content  div img')
const titleArr = document.querySelectorAll('.title-coffee h3')
const descriptionCoffeeArr = document.querySelectorAll('.description-coffee p')
const PriceArr = document.querySelectorAll('.prices p')
const controlItems = document.querySelectorAll('.control div')
const iosWrapper = document.querySelector('.border-app-ios')
const androidWrapper = document.querySelector('.border-app-android')
const iosImage = document.querySelector('.app-store')
const androidImage = document.querySelector('.google-play')
const pIos = document.querySelector('.border-app-ios p')
const h3Ios = document.querySelector('.border-app-ios h3')
const pAndroid = document.querySelector('.border-app-android p')
const h3Android = document.querySelector('.border-app-android h3')
const infoDiv = document.querySelectorAll('footer .info .part-of-info')
const tw = document.querySelector('#tw')
const inst = document.querySelector('#inst')
const fc = document.querySelector('#fc')

let currentImgIndex = 0;
const changeElement = (el, i) => {
    el.style = 'display:none'
    if (i == currentImgIndex) {
        el.style = 'display:block'
    }
}
const changeColorControlItem = (el, i) => {
    el.style = 'background-color: #C1B6AD'
    if (i == currentImgIndex) el.style = 'background-color: #665F55'
}
const nextItem = () => {
    imgArr.forEach((el, i) => changeElement(el, i))
    titleArr.forEach((el, i) => changeElement(el, i))
    descriptionCoffeeArr.forEach((el, i) => changeElement(el, i))
    PriceArr.forEach((el, i) => changeElement(el, i))
    controlItems.forEach((el, i) => changeColorControlItem(el, i))

}

setInterval(() => {
    currentImgIndex == imgArr.length - 1 ? currentImgIndex = 0 : currentImgIndex++
    nextItem()
}, 2000)

nextImg.addEventListener('click', () => {
    currentImgIndex == imgArr.length - 1 ? currentImgIndex = 0 : currentImgIndex++
    nextItem()
})
prevImg.addEventListener('click', () => {
    currentImgIndex == 0 ? currentImgIndex = imgArr.length - 1 : currentImgIndex--
    nextItem()
})
nextImg.addEventListener('mouseover', () => {
    nextImg.style = 'background-color:#665F55'
    rightArrow.style = 'background-image:url(./img/right-arrow-hover.svg)'
})
nextImg.addEventListener('mouseout', () => {
    nextImg.style = 'background-color:#E1D4C9'
    rightArrow.style = 'background-image:url(./img/right-arrow.svg)'

})

prevImg.addEventListener('mouseover', () => {
    prevImg.style = 'background-color:#665F55'
    leftArrow.style = 'background-image:url(./img/left-arrow-hover.svg)'
})
prevImg.addEventListener('mouseout', () => {
    prevImg.style = 'background-color:#E1D4C9'
    leftArrow.style = 'background-image:url(./img/left-arrow.svg)'
})
iosWrapper.addEventListener('mouseover', () => {
    iosImage.style = 'background-image:url(./img/apple-icon-hover.svg)'
    iosWrapper.style = 'background-color:#665F55'
    pIos.style = 'color:#E1D4C9'
    h3Ios.style = 'color:#E1D4C9'
})
iosWrapper.addEventListener('mouseout', () => {
    iosImage.style = 'background-image:url(./img/apple-icon.svg)'
    iosWrapper.style = 'background-color:#E1D4C9'
    pIos.style = 'color:#403F3D'
    h3Ios.style = 'color:#403F3D'
})
androidWrapper.addEventListener('mouseover', () => {
    androidImage.style = 'background-image:url(./img/googleplay-icon-hover.svg)'
    androidWrapper.style = 'background-color:#665F55'
    pAndroid.style = 'color:#E1D4C9'
    h3Android.style = 'color:#E1D4C9'
})
androidWrapper.addEventListener('mouseout', () => {
    androidImage.style = 'background-image:url(./img/googleplay-icon.svg)'
    androidWrapper.style = 'background-color:#E1D4C9'
    pAndroid.style = 'color:#403F3D'
    h3Android.style = 'color:#403F3D'
})

infoDiv.forEach((el) => {
    el.addEventListener('mouseover', () => {
        el.style = 'border-bottom: 2px solid #E1D4C9'
    })
})
infoDiv.forEach((el) => {
    el.addEventListener('mouseout', () => {
        el.style = 'border-bottom: none'
    })
})


const instImg = document.querySelector('.inst')
const facebookImg = document.querySelector('.fc')
const twitterImg = document.querySelector('.tw')


tw.addEventListener('mouseover', () => {
    tw.style = 'background-color:#E1D4C9'
    twitterImg.style = 'background-image:url(./img/twitter-hover.svg)'

})
inst.addEventListener('mouseover', () => {
    inst.style = 'background-color:#E1D4C9'
    instImg.style = 'background-image:url(./img/instagram-hover.svg)'
})
fc.addEventListener('mouseover', () => {
    fc.style = 'background-color:#E1D4C9'
    facebookImg.style = 'background-image:url(./img/facebook-hover.svg)'

})
tw.addEventListener('mouseout', () => {
    tw.style = 'background-color:none'
    twitterImg.style = 'background-image:url(./img/twitter.svg)'
})
inst.addEventListener('mouseout', () => {
    inst.style = 'background-color:none'
    instImg.style = 'background-image:url(./img/instagram.svg)'
})
fc.addEventListener('mouseout', () => {
    fc.style = 'background-color:none'
    facebookImg.style = 'background-image:url(./img/facebook.svg)'
})

// const menuB = document.querySelector('.preview div button')
// const iconImg = document.querySelector('coffe-cup-img')

// const textContentButton = menuB.textContent
// menuB.addEventListener('mouseover',()=>{
//     menuB.style = 'background-color:red'
//     menuB.style = 'button::after{}'
// })


