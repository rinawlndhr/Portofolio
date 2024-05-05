const mobilMenuButton = document.getElementById("mobile-menu-button");   
const mobilMenu = document.getElementById("mobile-menu");   

mobilMenuButton.addEventListener("click", ()=> {
    mobilMenu.classList.toggle("hidden")
})

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        header.classList.toggle("sticky", window.scrollY > 0);
        header,style.backgroundColor = rgba(0,0,0,8)
    }
    else{
    header.style.backgroundColor = 'transparent';
}
})

document.querySelectorAll('a[hreaf^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();

        const targetedSection = document.querySelector(this.getAtribute('href'));
        const navHeight = document.querySelector('nav').offsetHeight;
        let extraPadding = 0;

        if(window.innerWidth >= 768){
            extraPadding = 50;
        }

        window.scrollTo({
            top: targetedSection.offsetTop - navHeight - extraPadding,
            behavior: 'smooth'

        });

        // reset url to root path
        if(window.location.hash){
            window.location.replace(window.location.pathname);
        }
    })
});