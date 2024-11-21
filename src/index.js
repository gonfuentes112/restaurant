import "./style.css";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

(() => {
    const navBar = document.getElementById('nav-bar');
    const content = document.getElementById('content');
    
    function updateContent(event) {
        const target = event.target;
        if (!target.classList.contains("nav-button")) {
            return;
        };
        if (target.id === 'home-button') {
            loadHome();
        };
        if (target.id === 'menu-button') {
            loadMenu();
        };
        if (target.id === 'contact-button') {
            loadContact();
        };

    }

    navBar.addEventListener('click', updateContent);

    loadHome();
})();