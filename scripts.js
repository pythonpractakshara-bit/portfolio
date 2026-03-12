// typing animation

const words = [
"automation tools",
"AI document systems",
"data processing pipelines"
]

let i = 0
let j = 0
let current = ""
let isDeleting = false

function type(){

current = words[i]

if(!isDeleting){

document.getElementById("typing").textContent =
current.substring(0,j++)

if(j > current.length){

isDeleting = true
setTimeout(type,1000)
return

}

}

else{

document.getElementById("typing").textContent =
current.substring(0,j--)

if(j == 0){

isDeleting = false
i++
if(i == words.length){ i = 0 }

}

}

setTimeout(type,80)

}

type()



// smooth scrolling

document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener('click',function(e){

e.preventDefault()

document.querySelector(this.getAttribute('href'))
.scrollIntoView({behavior:'smooth'})

})

})



// skill animation

window.addEventListener('load',()=>{

document.querySelectorAll('.skill-fill').forEach(bar=>{

bar.style.width = bar.dataset.width

})

})



// dark mode

function toggleTheme(){

document.body.classList.toggle("dark")

}



// scroll reveal

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = 1
entry.target.style.transform = "translateY(0)"

}

})

})

document.querySelectorAll('.card,.project-card').forEach(el=>{

el.style.opacity = 0
el.style.transform = "translateY(40px)"
el.style.transition = "0.6s"

observer.observe(el)

})
