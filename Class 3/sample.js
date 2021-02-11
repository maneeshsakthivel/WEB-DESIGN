function creatTable(){
    let cont = document.getElementById('container');

    let table = document.createElement('TABLE');
    table.setAttribute('id', 'table')

    cont.appendChild(table);
}

function addRow(){
    let table = document.getElementById('table')

    let row = document.createElement('TR');

    for(let i=1; i<=5; i++){
        let col = document.createElement('TD');
        let cell = document.createElement('Cell');

        cell.innerHTML = 'test';

        col.appendChild(cell);
        row.appendChild(col)
    }

    table.appendChild(row);
}