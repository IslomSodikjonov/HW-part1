import { arr } from "./db.js"

let box = document.querySelector('.box')
let numberOfProduct = document.querySelector('.number_product')
let number = 0 

function reload(arr) {
    box.innerHTML = ''
    
    for(let item of arr) {
        let card = document.createElement('div')
        card.classList.add('catalog')
    
        let boxImg = document.createElement('div')
        boxImg.classList.add('box_img')
    
        let image = document.createElement('img')
        image.src = item.image
        image.alt = item.title
    
        let bottomBox = document.createElement('div')
        bottomBox.classList.add('bottom_box')
    
        let boxCategory = document.createElement('h1')
        boxCategory.classList.add('category')
        boxCategory.textContent = item.category
        // boxCategory.toUpperCase()
    
        let boxDescription = document.createElement('p')
        boxDescription.classList.add('description')
        boxDescription.textContent = item.description
    
        let bottomDiv = document.createElement('div')
        bottomDiv.classList.add('bottom_div')
    
        let boxP = document.createElement('div')
        boxP.classList.add('box_p')
    
        let symbol1 = document.createElement('img')
        symbol1.classList.add('description_img')
        symbol1.src = './images/dollar.svg'
    
        let symbol2 = document.createElement('img')
        symbol2.classList.add('description_img')
        symbol2.src = './images/star.svg'

    
        let symbol3 = document.createElement('img')
        symbol3.classList.add('description_img')
        symbol3.src = './images/box.svg'

    
        let priceInfo = document.createElement('p')
        priceInfo.classList.add('price')
        priceInfo.textContent = item.price
    
        let rateInfo = document.createElement('p')
        rateInfo.classList.add('rate')
        rateInfo.textContent = item.rating.rate
    
        let countInfo = document.createElement('p')
        countInfo.classList.add('count')
        countInfo.textContent = item.rating.count
    
        let boxBtn = document.createElement('button')
        boxBtn.classList.add('saved')
        // boxBtn.innerHTML = 'В избранное'
        let btnTxt = document.createElement('span')
        btnTxt.classList.add('btn_text')
        btnTxt.innerHTML = 'В избранное'

        
        box.append(card)
        card.append(boxImg, bottomBox)
        boxImg.append(image)
        bottomBox.append(boxCategory, boxDescription, bottomDiv, boxBtn)
        bottomDiv.append(boxP)
        boxP.append(symbol1, priceInfo)
        bottomDiv.append(boxP)
        boxP.append(symbol2, rateInfo)
        bottomDiv.append(boxP)
        boxP.append(symbol3, countInfo)
        boxBtn.append(btnTxt)
        
        
         

        
        boxBtn.onclick = () => {

            if (boxBtn.classList.contains('btn_active')) {
                boxBtn.classList.remove('btn_active')
                btnTxt.innerHTML = 'В избранное';
                btnTxt.style.color = '#000000'
                --number
                numberOfProduct.textContent = number
            } else {
                boxBtn.classList.add('btn_active')
                btnTxt.innerHTML = 'Добавлено';
                btnTxt.style.color = '#FFFFFF'
                ++number
                numberOfProduct.textContent = number
            } 
        }
        
    } 
}

reload(arr.slice(0, 4))

let showFour = document.querySelector('#show_four')
let showAll = document.querySelector('#show_all')

    showFour.onclick = () => {
        number = 0
        numberOfProduct.textContent = number
        reload(arr.slice(0, 4))
    }

    showAll.onclick = () => {
        number = 0
        numberOfProduct.textContent = number
        reload(arr)
    }