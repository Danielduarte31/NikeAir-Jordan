var currentColor = "blue"

function show(file) {

    var ShowPhoto = document.getElementById('photo');
    newPhoto = "assets/" + currentColor + "-" + file + ".jpg"
    ShowPhoto.src = newPhoto;
}

function ChangeColor(color) {
    var sneaker = 1
    var newColor = color
    while (sneaker <= 8) {
        var otherSneaker = `assets/thumbs/${newColor}-${sneaker}.jpg`
        var thumbs = document.getElementById(sneaker)
        thumbs.src = otherSneaker
        sneaker++
    }
    currentColor = newColor
    show('1')
}