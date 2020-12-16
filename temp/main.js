// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var nf = new Intl.NumberFormat();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.coronatracker.com/v3/stats/worldometer/global', true)

request.onload = function() {
 // Begin accessing JSON data here
var data = JSON.parse(this.response)
//var x = "";
//for (i=0; i<10; i++) {
 //   x += data.Date[i];
 // 

    document.getElementById('total').innerHTML = nf.format(data.totalConfirmed);
    document.getElementById('totalRecovered').innerHTML = nf.format(data.totalRecovered);
    document.getElementById('TotalDeaths').innerHTML = nf.format(data.totalDeaths);
    document.getElementById('date').innerHTML= data.created;
    
// main graph

}
request.send()
