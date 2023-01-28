// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


// Changes the header based on window width
const mobileHeader = document.querySelector('.header--mobile')
const desktopHeader = document.querySelector('.header--desktop')
const windowWidth = window.screen.width

if (windowWidth <= 750) {
    mobileHeader.style.display = "flex"
    desktopHeader.style.display = "none"
}
else {
    desktopHeader.style.display = "flex"
    mobileHeader.style.display = "none"
}

addEventListener("resize", () => {
    if (window.screen.width <= 750) {
        desktopHeader.style.display = "none"
        mobileHeader.style.display = "flex"
        
    }
    else {
        mobileHeader.style.display = "none"
        desktopHeader.style.display = "flex"
    }
})

// Open and Close Mobile Menu
const menuOpenButton = document.querySelector(".header__button--open")
const navMenu = document.querySelector(".nav__menu--mobile")
const menuCloseButton = document.querySelector(".header__button--close")
const navLinks = document.querySelector(".nav--mobile")

// When menu button pressed open menu
menuOpenButton.addEventListener("click", async () => {
    // Clear open style
    navLinks.removeAttribute("style")
    menuCloseButton.removeAttribute("style")


    // Show the menu
    navMenu.style.display = "flex"
    menuOpenButton.style.display = "none"
    document.body.style.overflowX = "hidden"
    document.body.style.overflowY = "hidden"

    // Start navOpen animation
    navMenu.classList.add("nav__menu--mobile--aniOpen")

    // After Open animation animate in text and show button
    navLinks.classList.add("nav--mobile--aniIn")
    await sleep(600)
    navLinks.style.opacity = "100%"
    menuCloseButton.classList.add("ani-in")
    
    // after link and button animation
    await sleep(750)
    // Set button opacity
    menuCloseButton.style.opacity = "100%"
    // remove animation in classes
    navLinks.classList.remove("nav--mobile--aniIn")
    menuCloseButton.classList.remove("ani-in")
    navMenu.classList.remove("nav__menu--mobile--aniOpen")
})

// close menu function
async function closeMenu() {
     // Clear open style
     navLinks.removeAttribute("style")
     menuCloseButton.removeAttribute("style")
     // Animate out Links and button
     navLinks.classList.add("nav--mobile--aniOut")
     menuCloseButton.classList.add("ani-out")
     await sleep(500)
     navLinks.style.opacity = "0"
 
     // Start close menu ani
     navMenu.classList.add("nav__menu--mobile--aniClose")
     await sleep(600)
 
     // Close Menu
     navMenu.style.display = "none"
     menuOpenButton.style.display = "flex"
     document.body.style.overflowX = "scroll"
     document.body.style.overflowY = "scroll"
 
     // remove animation in classes
     navLinks.classList.remove("nav--mobile--aniOut")
     menuCloseButton.classList.remove("ani-out")
     navMenu.classList.remove("nav__menu--mobile--aniClose")

}

// When close button press close menu
menuCloseButton.addEventListener("click", async() => {
    await closeMenu()
})

// If escape key pressed close menu

window.addEventListener("keydown", async (event) => {
    if (event.key === "Escape") {
        await closeMenu()
    }
})
