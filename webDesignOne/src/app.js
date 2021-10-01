const screen1 = document.getElementById('screen1')
const screen2 = document.getElementById('screen2')
const ind1 = document.getElementById('ind1')
const ind2 = document.getElementById('ind2')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const swtch = document.getElementById('switch')
const stun1 = document.getElementById('stun1')
const stud1 = document.getElementById('stud1')
const stun2 = document.getElementById('stun2')
const stud2 = document.getElementById('stud2')

let check = 1

const change = () => {
    if (check == 1) {
        screen1.src = './images/slider2.jpg'
        ind1.classList.toggle('active')
        ind2.classList.toggle('active')
        check = 0
    } else {
        screen1.src = './images/slider1.jpg'
        ind1.classList.toggle('active')
        ind2.classList.toggle('active')
        check = 1
    }
}

const swt = () => {
    stun1.classList.toggle('focus')
    stud1.classList.toggle('focus')
    stun2.classList.toggle('focus')
    stud2.classList.toggle('focus')
}

btn1.addEventListener('click', change)
btn2.addEventListener('click', change)

setInterval(change, 5000);

swtch.addEventListener('click', swt)
