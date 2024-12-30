const image = new Image()
image.src = "https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg"

console.log(image)

image.addEventListener('load', () => console.log('Image has loaded'))
image.addEventListener('error', () => console.log('Image has NOT loaded'))
