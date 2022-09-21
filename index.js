

const toggleSwitch = document.querySelector('input[type="checkbox"]')
const toggleIcon = document.getElementById('toggle-icon')

function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function darkMode() {
    toggleIcon.children[0].textContent = "Dark Mode"
    toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("theme", "dark")
    imageMode("dark")
}

function lightMode() {
    toggleIcon.children[0].textContent = "Light Mode"
    toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("theme", "light")
    imageMode("dark")
}

function switchTheme(event) {
    console.log('event', event.target.checked);
    if (event.target.checked) {
        darkMode()
    } else {
        lightMode()
    }
}

toggleSwitch.addEventListener("change", switchTheme)

// Get current theme from localStorage
const currentTheme = localStorage.getItem("theme")

// Set Theme from localStorage
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme)
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true
        darkMode()
    }
}
