const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

MOUNTAINS.forEach(e => {
   let table = document.querySelector('table');
   let tr = table.insertRow();
   let innerTrName = document.createElement('td');
   let innerTrHeight = document.createElement('td');
   let innerTrPlace = document.createElement('td');

   innerTrName.innerHTML = e.name;
   innerTrHeight.innerHTML = e.height;
   innerTrPlace.innerHTML = e.place;

   innerTrName.className = 'tdData';
   innerTrHeight.className = 'tdData';
   innerTrPlace.className = 'tdData';

   tr.append(innerTrName);
   tr.append(innerTrHeight);
   tr.append(innerTrPlace);
});