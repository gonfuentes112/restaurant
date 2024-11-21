function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const title = document.createElement('h1');
    title.innerText = "Contact Us!";

    const email = document.createElement('div');
    email.innerText = 'plsdont@tempemail.com';
    content.appendChild(title);
    content.appendChild(email);
};
export {loadContact};