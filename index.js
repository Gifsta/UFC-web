// Barre de navigation
let navbar = document.getElementById('navbar')

async function navb(){
    let header = await fetch("header.html");
    navbar.innerHTML = await header.text();


    };
addEventListener("load", navb)

// footer 
let footer = document.getElementById('footer')

async function foot(){
    let header = await fetch("footer.html");
    footer.innerHTML = await header.text();


    };
addEventListener("load", foot)