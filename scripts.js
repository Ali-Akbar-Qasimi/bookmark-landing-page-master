let menu = document.querySelector('.menu')
let nav = document.querySelector('nav')
let links = document.querySelectorAll('.links li')
let socialIcon = document.querySelectorAll('.social-icon img')
let ul = document.querySelector('.links')

ul.addEventListener('click',close)
menu.addEventListener('click',()=>{
    nav.classList.toggle('show')
})

function close(){
    nav.classList.remove('show')
}

// features tab

let featureData = [
    {
        image: './images/illustration-features-tab-1.svg',
        header: 'Bookmark in one click',
        body: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
        image: './images/illustration-features-tab-2.svg',
        header: 'Intelligent search',
        body: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
        image: './images/illustration-features-tab-3.svg',
        header: 'Share your bookmarks',
        body: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
]

let tabs = document.querySelectorAll('.tab')


let featureHeader = document.querySelector('.feature-header')
let featureBody = document.querySelector('.feature-body')
let featureImage = document.querySelector('.feature-image img')

console.log(tabs)
tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>{
        tabs.forEach(tab=>{
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        featureHeader.textContent = featureData[index].header
        featureBody.textContent = featureData[index].body
        featureImage.src = featureData[index].image
    })
})


// FAQ 

let questions = document.querySelectorAll('.question-container')
questions.forEach(question=>{
    question.addEventListener('click',()=>{
        question.parentElement.classList.toggle('show')
    })
})