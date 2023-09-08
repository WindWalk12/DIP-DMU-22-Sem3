let showHide = (event) => {
    for (let e of document.querySelectorAll('h1')) {
        if (event.currentTarget.id.slice(-1) == e.id.slice(-1)) {
            e.className = 'show';
        } else {
            e.className = 'hide';
        }
    }
}

// Startup
let id = 1;
for (let e of document.querySelectorAll('span')) {
    e.id = 'idSpan' + id++;
    e.addEventListener('click', showHide);
}

let addclass = 1;
for (let e of document.querySelectorAll('h1')) {
    e.id = 'idText' + addclass++;
}