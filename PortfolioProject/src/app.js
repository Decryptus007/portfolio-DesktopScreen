const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navList')

document.getElementById('bgBlackId').addEventListener('click', function fade() {
    document.getElementById('bgBlackId').style.display = "none"
})

function toggleBtn () {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleBtn)