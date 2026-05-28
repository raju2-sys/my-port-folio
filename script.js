// progress bar
const progressBar = document.getElementById("progressBar");

window.addEventListener('scroll', () => {

    const scrollTop = window.scrollY;
    
    const documentHeight = document.documentElement.scrollHeight;

    const windowHeight = window.innerHeight;

    let scrollPercent = ( scrollTop / ( documentHeight - windowHeight )) * 100;

    progressBar.style.width = scrollPercent + "%" ;

})


// menu button toggle
const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener('click', function(){

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuBtn.textContent = "✕";

    }
    else{

        menuBtn.textContent = "☰";

    }

})

document.querySelectorAll(".navLinks a").forEach(function(link){

    link.addEventListener('click', function(){

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    })

})


// Scroll Animation

const hiddenSection = document.querySelectorAll(".hiddenSection");

window.addEventListener('scroll', function(){

    hiddenSection.forEach(function(section){

        const sectionTop = section.getBoundingClientRect().top;

        const screenPosition = window.innerHeight - 100;

        if(sectionTop < screenPosition){

            section.classList.add("showSection");

        }
        else{

            section.classList.remove("showSection");

        }

    })

})

hiddenSection.forEach(function(section){

        const sectionTop = section.getBoundingClientRect().top;

        const screenPosition = window.innerHeight - 100;

        if(sectionTop < screenPosition){

            section.classList.add("showSection");

        }
        else{

            section.classList.remove("showSection");

        }

})


// cards animation
const revealCard = document.querySelectorAll(".revealCard");

window.addEventListener('scroll', function() {

    revealCard.forEach(function(card){

        const cardTop = card.getBoundingClientRect().top;

        const screenPosition = window.innerHeight - 100;

        if(cardTop < screenPosition){

            card.classList.add("activeCard");

        }
        else{

            card.classList.remove("activeCard");

        }

    })

})


// glow active section nav link
const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".navLinks a");

window.addEventListener('scroll', function(){

    let currentSection = "";

    sections.forEach(function(section){

        const sectionTop = section.offsetTop;

        if(window.scrollY >= sectionTop - 100){

            currentSection = section.getAttribute("id");

        }

    })

    navItems.forEach(function(link){

        link.classList.remove("activeLinks");

        if(link.getAttribute("href") === "#" + currentSection){

            link.classList.add("activeLinks");

        }

    })

})


//  dark mode toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener('click', () => {

    document.body.classList.toggle("darkMode");

    if(document.body.classList.contains("darkMode")){

        localStorage.setItem("theme","dark");

        themeBtn.textContent = "☀";

        if(themeBtn.getAttribute("title") === "Dark"){

            themeBtn.setAttribute("title","Light");

        }

    }
    else{

        localStorage.setItem("theme","light");

        themeBtn.textContent = "🌙";

        if(themeBtn.getAttribute("title") === "Light"){

            themeBtn.setAttribute("title","Dark");

        }

    }

})

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("darkMode");

    themeBtn.textContent = "☀";

    themeBtn.setAttribute("title").textContent = "Light"

}


// typing effect in hero section
const words = [

    "Frontend Developer",
    "UI Designer",
    "Web Creator",
    "Responsive Designer"

]

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    let currentWord = words[wordIndex];

    if(!isDeleting){

        typing.textContent = currentWord.substring(0,charIndex);

        charIndex++;

        if(charIndex > currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect,1000);

            return;

        }

    }
    else{

        typing.TextContent = currentWord.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }


        }

    }

    setTimeout(typeEffect,100);


}

typeEffect();


// counting effect

const counters = document.querySelectorAll(".counter");

counters.forEach(function(counter){

    counter.textContent = "0";

    function updateCounter(){

        const target = Number(counter.getAttribute("data-target"));

        const current = Number(counter.innerText);

        const increament = target / 100;

        if(current < target){

            counter.textContent = Math.ceil(current + increament);

            setTimeout(updateCounter,200);

        }
        else{
            
            counter.textContent = target;

        }


    }

    updateCounter();

})
