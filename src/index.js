import "./style.css";
import { loadHome } from "./home";

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

    }

    navBar.addEventListener('click', updateContent);

    loadHome();
})();