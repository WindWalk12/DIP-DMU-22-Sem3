let clicked = (event) => {
    if (event.currentTarget.id == 'tal') {
        let number = Math.floor(Math.random() * 100);
        event.currentTarget.value = number
    } else {
        event.currentTarget.value = new Date().toLocaleTimeString();
    }
}

for (let e of document.querySelectorAll('input')) {
    let lbl = document.createElement('label');
    lbl.innerHTML = e.id;
    lbl.setAttribute('for', e.id);
    e.addEventListener('click', clicked);
    document.body.insertBefore(lbl, e);
}