import { getStockData } from './fakeStockAPI.js'

let previousPrice = 0

function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    const {name, sym, price, time} = stockData

    stockDisplayName.innerText = name
    stockDisplaySymbol.innerText = sym
    stockDisplayPrice.innerText = price
    stockDisplayTime.innerText = time
    stockDisplayPriceIcon.innerHTML = price > previousPrice ? "<img src='/svg/green.svg'/>"
                                      : price === previousPrice ? "<img src='/svg/gre.svg'/>"
                                      : "<img src='/svg/red.svg'/>"

    previousPrice = price
}

setInterval(function(){
  const stockData = getStockData()
  renderStockTicker(stockData)

},1500)