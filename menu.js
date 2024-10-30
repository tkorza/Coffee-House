const btnCoffee = document.querySelector('.wrapper-type .part-of-type:nth-child(1)')
const btnTea = document.querySelector('.wrapper-type .part-of-type:nth-child(2)')
const btnDessert = document.querySelector('.wrapper-type .part-of-type:nth-child(3)')
const coffee_product = document.querySelector('.coffee-products')


const objProducts = [
    {
        img: './img/coffee-1.png',
        h2: 'Irish coffee',
        p: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
        h3: '$7.00',
        category: 'coffee'
    },
    {
        img: './img/coffee-2.jpg',
        h2: 'Kahlua coffee',
        p: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
        h3: '$7.00',
        category: 'coffee'
    },
    {
        img: './img/coffee-3.jpg',
        h2: 'Honey raf',
        p: 'Espresso with frothed milk, cream and aromatic honey',
        h3: '$5.50',
        category: 'coffee'
    },
    {
        img: './img/coffee-4.jpg',
        h2: 'Ice cappuccino',
        p: 'Cappuccino with soft thick foam in summer version with ice',
        h3: '$5.00',
        category: 'coffee'
    },
    {
        img: './img/coffee-5.jpg',
        h2: 'Espresso',
        p: 'Classic black coffee',
        h3: '$4.50',
        category: 'coffee'
    },
    {
        img: './img/coffee-6.jpg',
        h2: 'Latte',
        p: 'Espresso coffee with the addition of steamed milk and dense milk foam',
        h3: '$5.50',
        category: 'coffee'
    },
    {
        img: './img/coffee-7.jpg',
        h2: 'Latte macchiato',
        p: 'Espresso with frothed milk and chocolate',
        h3: '$5.50',
        category: 'coffee'
    },
    {
        img: './img/coffee-8.jpg',
        h2: 'Coffee with cognac',
        p: 'Fragrant black coffee with cognac and whipped cream',
        h3: '$6.50',
        category: 'coffee'
    },
    {
        img: './img/tea-1.png',
        h2: 'Moroccan',
        p: 'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
        h3: '$4.50',
        category: 'tea'
    },
    {
        img: './img/tea-2.png',
        h2: 'Ginger',
        p: 'Original black tea with fresh ginger, lemon and honey',
        h3: '$5.00',
        category: 'tea'
    },
    {
        img: './img/tea-3.png',
        h2: 'Cranberry',
        p: 'Invigorating black tea with cranberry and honey',
        h3: '$5.00',
        category: 'tea'
    },
    {
        img: './img/tea-4.png',
        h2: 'Sea buckthorn',
        p: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
        h3: '$5.50',
        category: 'tea'
    },
    {
        img: './img/dessert-1.png',
        h2: 'Marble cheesecake',
        p: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
        h3: '$3.50',
        category: 'dessert'
    },
    {
        img: './img/dessert-2.png',
        h2: 'Red velvet',
        p: 'Layer cake with cream cheese frosting',
        h3: '$4.00',
        category: 'dessert'
    },
    {
        img: './img/dessert-3.png',
        h2: 'Cheesecakes',
        p: 'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
        h3: '$4.50',
        category: 'dessert'
    },
    {
        img: './img/dessert-4.png',
        h2: 'Creme brulee',
        p: 'Delicate creamy dessert in a caramel basket with wild berries',
        h3: '$4.00',
        category: 'dessert'
    },
    {
        img: './img/dessert-5.png',
        h2: 'Pancakes',
        p: 'Tender pancakes with strawberry jam and fresh strawberries',
        h3: '$4.50',
        category: 'dessert'
    },
    {
        img: './img/dessert-6.png',
        h2: 'Honey cake',
        p: 'Classic honey cake with delicate custard',
        h3: '$4.50',
        category: 'dessert'
    },
    {
        img: './img/dessert-7.png',
        h2: 'Chocolate cake',
        p: 'Cake with hot chocolate filling and nuts with dried apricots',
        h3: '$5.50',
        category: 'dessert'
    },
    {
        img: './img/dessert-8.png',
        h2: 'Black forest',
        p: 'A combination of thin sponge cake with cherry jam and light chocolate mousse',
        h3: '$6.50',
        category: 'dessert'
    }
]
const func = (str) => {
    coffee_product.innerHTML = ''
    const res = objProducts.filter(el => el.category === str, true)
    res.forEach(el => {
        const item_product = document.createElement('div')
        item_product.className = 'item-product'
        item_product.innerHTML = `<div class="item-coffe">
                <img src="${el.img}" alt="">
                <div class="content">
                    <div class="coffe-text-info">
                        <h2>${el.h2}</h2>
                        <p>${el.p}</p>
                    </div>
                    <h3>${el.h3}</h3>
                </div>
            </div>`
        coffee_product.appendChild(item_product)
    })
}
func('coffee')
btnTea.addEventListener('click', () => {
    func('tea')
})
btnCoffee.addEventListener('click', () => {
    func('coffee')
})
btnDessert.addEventListener('click', () => {
    func('dessert')
})

const arrItem = document.querySelectorAll('.item-product')
const modal = document.querySelector('.modal')
const buttonClose = document.querySelector('.modal .close-button')
const name_ = document.querySelector('h2')

arrItem.forEach(el => {
    el.addEventListener('click', () => {
        const filter = objProducts.filter(el => el.h2 === name_.textContent)
        modal.style = 'display:flex'
        const divContainer = document.createElement('div')
        divContainer.className = 'container'
        divContainer.innerHTML = `<div class="left-part"></div>

            <div class="right-part">
                <div class="aboutCoffee">
                    <h1>Irish coffee</h1>
                    <p>Fragrant black coffee with Jameson Irish whiskey and whipped milk</p>
                </div>

                <div class="size">
                    <p>Size</p>
                    <div class="size-additivies-layot">
                        <div id="s">
                            <p class="valueSize">S</p>
                            <p id="valueS">200 ml</p>
                        </div>
                        <div id="m">
                            <p class="valueSize">M</p>
                            <p id="valueM">300 ml</p>
                        </div>
                        <div id="l">
                            <p class="valueSize">L</p>
                            <p id="valueL">400 ml</p>
                        </div>
                    </div>
                </div>

                <div class="addivities">
                    <p>Additives</p>
                    <div class="size-additivies-layot">
                        <div id="sugar">
                            <p class="valueAdditivies">1</p>
                            <p id="suga-p">Sugar</p>
                        </div>
                        <div id="cinnamon">
                            <p class="valueAdditivies">2</p>
                            <p id="cinnamon-p">Cinnamon</p>
                        </div>
                        <div id="syryup">
                            <p class="valueAdditivies">3</p>
                            <p id="syrup-p">Syrup</p>
                        </div>
                    </div>
                </div>
                <div class="Total-price">
                    <p>Total:</p> 
                    <p>$7.00</p>
                </div>
                <div class="info-about-price">
                    <div class="icon"></div>
                    <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn
                        loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
                </div>
                <div class="close-button">
                    <p>Close</p>
                </div>
            </div>`
    })


})

buttonClose.addEventListener('click', () => {
    modal.style = 'display:none'
})
