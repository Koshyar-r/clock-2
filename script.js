const HourHand = document.querySelector(".hour")
const MinuteHand = document.querySelector(".minute")
const SecondHand = document.querySelector(".second")

const UpdateTime = () => {
    // Getting current time and calculating degress for clock hands
    let date = new Date()
    let SecondToDegree = (date.getSeconds() / 60) * 360,
    MinuteToDegree = (date.getMinutes() / 60) * 360,
    HoursToDegree = (date.getMinutes() / 12) * 360

    SecondHand.style.transform = `rotate(${SecondToDegree}deg)`
    MinuteHand.style.transform = `rotate(${MinuteToDegree}deg)`
    HourHand.style.transform = `rotate(${HoursToDegree}deg)`
}

setInterval(UpdateTime, 1000)

UpdateTime()

const themeButton = document.getElementById('theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})