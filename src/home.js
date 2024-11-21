import Img from "./img/shop.jpg";

function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const title = document.createElement('h1');
    title.innerText = "Our Coffee Store";

    const img = document.createElement('img');
    img.src = Img;

    const visitText = document.createElement('div');
    visitText.innerText = 'Visit us at';
    const address = document.createElement('div');
    address.innerText = '123 Faker st.';

    content.appendChild(title);
    content.appendChild(img);
    content.appendChild(visitText);
    content.appendChild(address);

}

export {loadHome};