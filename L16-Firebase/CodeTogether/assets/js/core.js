async function deleteCar(carID) {
    const response = await fetch(`/cars/${carID}`, {
        method: 'DELETE'
    })
    console.log(response.status);
    if (response.status == 204) {
        window.location = "/cars";
    } else {
        alert("Error!");
    }
}

async function editCar(carID) {
    const brand = document.getElementsByName('brand')[0].value;
    const model = document.getElementsByName('model')[0].value;
    let data = {brand: brand, model: model};
    let url = `/editCar/${carID}`;
    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    })
    if (response.status == 200) {
        window.location = "/cars";
    } else {
        alert("Error!");
    }
}