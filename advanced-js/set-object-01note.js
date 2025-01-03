const wishListArr = ['shoes', 'after shave', 'tesla', 'after shave', 'shoes']

const wishListSet = new Set(wishListArr)

wishListSet.add('diary')
wishListSet.delete('shoes')
console.log(wishListSet.has('shoes'))

wishListSet.forEach((listItem) => console.log(listItem))
