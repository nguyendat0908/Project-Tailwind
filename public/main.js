// Header menu
const topMenu = document.getElementById('datLeo-top-menu')
const toggleTopMenuIcon = document.getElementById('datLeo-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        // Click to toggle top menu icon
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('datLeo-topmenu-expaned')
    }else {
        // Click outside from toggle top menu icon
        if (topMenu.classList.contains('datLeo-topmenu-expaned')) {
        topMenu.classList.remove('datLeo-topmenu-expaned')
        topMenu.classList.add('hidden')
        }
    }
})