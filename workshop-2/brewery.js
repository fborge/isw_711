'use strict';
let breweryList = async() => {
    let breweries;

    await axios({
            method: 'get',
            url: 'https://api.openbrewerydb.org/breweries?per_page=10',
            responseType: 'json'
        }).then(function(res) {
           breweries = res.data;
           
        })
        .catch(function(err) {
            console.log(err);
        });  
    return breweries;
};