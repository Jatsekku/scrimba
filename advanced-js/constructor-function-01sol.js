function Character(name) {
   this.name = name
   this.collectedItemsArr = []
   this.addItem = function(item) {
       this.collectedItemsArr.push(item)
       console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
   }
}

const vi = new Character('Violet')
const jinx = new Character('Jinx')

vi.addItem('Metal gloves')

jinx.addItem('Pow-pow gun')
jinx.addItem('Grenades')
