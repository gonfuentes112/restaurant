import "./style.css";
import { loadHome } from "./home";
import { loadMenu } from "./menu";

(() => {
    const navBar = document.getElementById('nav-bar');
    const content = document.getElementById('content');
    
    function updateContent(event) {
        const target = event.target;
        if (!target.classList.contains("nav-button")) {
            return;
        }
        if (target.id === 'home-button') {
            loadHome();
        }
        if (target.id === 'menu-button') {
            loadMenu();
        }

    }

    navBar.addEventListener('click', updateContent);

    loadHome();
})();