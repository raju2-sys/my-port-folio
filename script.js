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