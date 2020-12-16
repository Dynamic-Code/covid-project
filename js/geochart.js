
//Map sarted
let countrynew = [];
let totalConfirmednew = [];
let c = [['Country', 'Cases']];
$.get("https://api.coronatracker.com/v3/stats/worldometer/country",
function (data){
        for(i = 0;i<data.length;i++){
          countrynew[i] = data[i].country;
          totalConfirmednew[i] = data[i].totalConfirmed;
        c[i+1]= [countrynew[i],totalConfirmednew[i]];
        }
        c[1]= ['United States',totalConfirmednew[1]];
        
google.charts.load('current', {
  'packages':['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable(c);

  var options = {
     colorAxis: {colors: ['#6F1E51']},

  };

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  chart.draw(data, options);
}
});


//map ends
