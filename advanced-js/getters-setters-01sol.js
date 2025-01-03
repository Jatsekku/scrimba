class Holiday {
    #destination
    #price
    constructor(destination, price) {
        this.#destination = destination
        this.#price = price
    }

    get destination() {
        return this.#destination
    }
    
    get price() {
        return `$${this.#price.toFixed(2)}`
    }
    
    set price(newPrice) {
        this.#price = newPrice
    }

    set destination(newDestination) {
        if (typeof newDestination !== 'string' || newDestination.length <= 0){
            throw new Error('Destination not valid')
        }
        this.#destination = newDestination
    }
}

const safari = new Holiday('Kenya', 1000)
console.log(safari.price)
safari.price = 100
console.log(safari.price)
