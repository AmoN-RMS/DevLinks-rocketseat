function toggleMode() {
    const html = document.documentElement 
    html.classList.toggle('light')
   
    const img = document.querySelector(".profile__avatar")
    if (html.classList.contains('light')) {
        img.setAttribute("src", "./assets/Avatarlight.svg")
    }
    else {
        img.setAttribute("src","./assets/Avatar.svg")
    }
    const alt = document.querySelector(".profile__avatar")
    if (html.classList.contains('light')) {
        alt.setAttribute("alt", "Foto de Amon com a borda preta")
    }
    else {
        alt.setAttribute("alt", "Foto de Amon com borda branca")
    }
}