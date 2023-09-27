// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

async function getAsync(url) {
    const response = await fetch(url);
    if (response.status !== 200) // OK
        throw new Error(response.status);
    return await response.json();
}

function getPromise(url) {
   return fetch(url);
}

getAsync(userUrl).then(users => console.log(users));

getPromise(userUrl)
    .then(response => response.json())
    .then(users => console.log(users))
    .catch(error => console.log(error));