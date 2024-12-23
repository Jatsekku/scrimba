import { playlistArr } from '/playlist.js'

const playlistHtml = playlistArr.map(function(piece){
    return `
        <section class="card">
            <div class="card-start">
                <img src="/images/${piece.albumArt}">
            </div>
                <div class="card-mid">
                    <h4 class="card-title">${piece.title}</h4>
                    <p class="card-artist">${piece.artist}</p>
                </div>
            <div class="card-end">
                <p class="card-menu">...</p>
            </div>
        </section>
    `
})

console.log(playlistHtml)

document.getElementById('container').innerHTML = playlistHtml
