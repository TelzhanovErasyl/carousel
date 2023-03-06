let reviews = [
    {
        name: 'Susan Lowck',
        job: 'Web developer',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus exercitationem labore impedit laudantium atque, reiciendis voluptatem corporis quae amet ducimus, magni error minus sunt facere alias fugit nihil debitis unde',
        img: '#bae1ff'
    },
    {
        name: 'Woo Ji',
        job: 'IOS developer',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi mollitia dolorem sit quibusdam temporibus cum fuga debitis praesentium at neque! Tempora eligendi aperiam error facilis atque amet ut aliquam sed',
        img: '#f4ff7d'
    },
    {
        name: 'Katen Keisi',
        job: 'Android developer',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nisi, exercitationem dignissimos, et officiis veniam corrupti soluta vel impedit rerum cumque facilis amet, sint autem voluptatibus excepturi aspernatur! Fugiat, consequuntur!',
        img: '#f693ff'
    },
    {
        name: 'Malib Tailer',
        job: 'Menegment',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illo aliquam tempora voluptas, nobis dolorem vitae excepturi? Sint voluptatem, eveniet voluptatum consequuntur, illo necessitatibus nulla expedita eos iste aperiam sit',
        img: '#a1ff82'
    }
]

let img = document.getElementById('img')
let name = document.getElementById('name')
let job = document.getElementById('job')
let info = document.getElementById('info')

let arrowLeft = document.getElementById('previous')
let arrowRight = document.getElementById('next')
let randomButton = document.getElementById('random')

function showReview(person) {
    let item = reviews[person]
    img.style.backgroundColor = item.img
    name.textContent = item.name
    job.textContent = item.job
    info.textContent = item.info
}
currentReview = 0

window.addEventListener('DOMContentLoaded', showReview(currentReview))

arrowRight.addEventListener('click', function () {
    currentReview++
    if (currentReview > 3) {
        currentReview = 0
    }
    showReview(currentReview)
})

arrowLeft.addEventListener('click', function () {
    currentReview--
    if (currentReview < 0) {
        currentReview = reviews.length - 1
    }
    showReview(currentReview)
})

randomButton.addEventListener('click', function () {
    let randomNum = Math.floor(Math.random() * 3)
    while (currentReview == randomNum) {
        randomNum = Math.floor(Math.random() * 3)
        console.log('hop')
    }
    currentReview = randomNum
    showReview(currentReview)
})