function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const title = document.createElement('h1');
    title.innerText = "Our Menu";

    const menuElements = [];
    const menu = [
                {name: "Small Coffee", price:"$1.00"},
                {name: "Medium Coffee", price:"$2.00"},
                {name: "Big Coffee", price:"$3.00"},
                {name: "Mystery Coffee", price:"$????"},
    ];

    menu.forEach((itemPriceObject) => {
                const newEntry = document.createElement('div');
                newEntry.classList.add('menu-entry');
                const name = document.createElement('div');
                name.classList.add('item-name');
                name.innerText = itemPriceObject.name;
                const price = document.createElement('div');
                price.classList.add('item-price');
                price.innerText = itemPriceObject.price;
                newEntry.appendChild(name);
                newEntry.appendChild(price);
                menuElements.push(newEntry);
    })


    content.appendChild(title);
    menuElements.forEach((newElement) => {
                        content.appendChild(newElement);
    })
}

export {loadMenu};