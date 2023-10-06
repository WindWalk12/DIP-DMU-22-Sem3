// opgave12.1.js
const earthquakeUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

function createNode(element) {
    return document.createElement(element);
  }

let addEqs = async () => {
    let eqs = await get(earthquakeUrl);
    eqs.features.sort((eq1, eq2) => {return eq1.properties.mag - eq2.properties.mag});
    let tbody = document.querySelector('tbody');
    eqs.features.forEach(eq => {
        if (parseInt(eq.properties.mag) >= 5) {
            let tr = createNode('tr');
            tbody.append(tr);
            let td = createNode('td');
            td.innerHTML = `Mag: ${eq.properties.mag} Place: ${eq.properties.place} Time: ${new Date(eq.properties.time).toLocaleString()}`;
            tr.append(td);
        }
    });
}

addEqs();