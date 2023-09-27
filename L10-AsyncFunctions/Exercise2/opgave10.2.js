// opgave11.2.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

function createNode(element) {
    return document.createElement(element)
  }

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

let addUsers = async () => {
    let users = await get(userUrl);
    let nameTHead = document.querySelector('#nameTHead');
    let infoTBody = document.querySelector('#infoTBody');
    users.forEach(user => {
        let th = createNode('th');
        th.innerHTML = user.name;
        nameTHead.append(th);
        let tr = createNode('tr');
        infoTBody.append(tr);
        
    });
    console.log(users);
}

addUsers();