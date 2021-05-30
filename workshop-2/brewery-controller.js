'use strict';
const tbody = document.querySelector('#tbl-brewery tbody');

let viewBreweryData = async() => {
    let breweries = await breweryList();
    tbody.innerHTML = '';

    for (let i = 0; i < 10; i++) {    
        let row = tbody.insertRow();
        row.insertCell().innerHTML = breweries[i]['id'];
        row.insertCell().innerHTML = breweries[i]['name'];
        row.insertCell().innerHTML = breweries[i]['brewery_type'];
        row.insertCell().innerHTML = breweries[i]['city'];
        row.insertCell().innerHTML = breweries[i]['state'];
        row.insertCell().innerHTML = breweries[i]['postal_code'];
        row.insertCell().innerHTML = breweries[i]['country'];
        row.insertCell().innerHTML = breweries[i]['updated_at'];
        row.insertCell().innerHTML = breweries[i]['created_at'];
    }
};

viewBreweryData();