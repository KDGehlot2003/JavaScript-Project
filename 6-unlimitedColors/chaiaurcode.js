const randomColor = function () {
    const myRandomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    // console.log((myRandomColor));
    document.querySelector('body').style.backgroundColor = myRandomColor
}

let changeColorInterval

document.getElementById("start").addEventListener('click', function() {
    if (!changeColorInterval) {
        changeColorInterval = setInterval(randomColor,1000)
    }
})

document.getElementById("stop").addEventListener('click', function() {
    clearInterval(changeColorInterval)
    changeColorInterval = null
})

