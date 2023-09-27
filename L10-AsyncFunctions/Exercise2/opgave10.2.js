// opgave11.2.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

function createNode(element) {
    return document.createElement(element);
  }

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

let addPosts = async (id, name) => {
    let posts = await get(postUrl + id);
    let postsTBody = document.querySelector('#postsBody');
    postsTBody.innerHTML = "";
    let tr = createNode('tr');
    postsTBody.append(tr);
    let tdName = createNode('td');
    tdName.innerHTML = `Posts from: ${name}`;
    tr.append(tdName);
    posts.forEach(posts => {
        let tr = createNode('tr');
        postsTBody.append(tr);
        let tdTitle = createNode('td');
        tdTitle.innerHTML = `Title: ${posts.title}`;
        tr.append(tdTitle);
        let tdBody = createNode('td');
        tdBody.innerHTML = `Body: ${posts.body}`;
        tr.append(tdBody);
    })
}

let addUsers = async () => {
    let users = await get(userUrl);
    let infoTBody = document.querySelector('#infoTBody');
    users.forEach(user => {
        let tr = createNode('tr');
        tr.addEventListener('click', () => {
            addPosts(user.id, user.name);
        });
        infoTBody.append(tr);
        let td = createNode('td');
        td.innerHTML = `Name: ${user.name} Id: ${user.id} Username: ${user.username} Phone: ${user.phone}`;
        tr.append(td);
        
    });
}

addUsers();