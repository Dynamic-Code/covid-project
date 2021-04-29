var nf = new Intl.NumberFormat();
let fr;
let rr;

function precise(x) {
  return Number.parseFloat(x).toPrecision(4);
}
window.addEventListener('load',()=>{
const params = (new URL (document.location)).searchParams;
const CC = params.get('CC');
$.get("https://api.coronatracker.com/v3/stats/worldometer/country?countryCode="+CC,function(data){

    $("#total").html(nf.format(data[0].totalConfirmed)); 
    $('#totalRecovered').html(nf.format(data[0].totalRecovered));
    $('#TotalDeaths').html(nf.format(data[0].totalDeaths));
    $('#CountryName').html(data[0].country)
    $('#newcase').html(nf.format(data[0].dailyConfirmed))
    $('#newdeaths').html(nf.format(data[0].dailyDeaths))

   // fr = Math.trunc((data[0].FR)*100)/100
   // rr = Math.trunc((data[0].PR)*100)/100
    rr = precise(data[0].PR);

    fr = precise(data[0].FR);


var options = {
  chart: {
    height: 280,
    type: "radialBar",
  },

  series: [fr],
  colors: ["#c23616"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
        background: "#6D214F"
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 4,
          opacity: 0.15
        }
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#fff",
          fontSize: "13px"
        },
        value: {
          color: "#fff",
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#e84118"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Fatality Rate"]
};

var chart = new ApexCharts(document.querySelector("#FatalityRate"), options);
chart.render();


var options = {
  chart: {
    height: 280,
    type: "radialBar",
  },

  series: [rr],
  colors: ["#20E647"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
        background: "#293450"
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 4,
          opacity: 0.15
        }
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#fff",
          fontSize: "13px"
        },
        value: {
          color: "#fff",
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Recovery Rate"]
};

var chart = new ApexCharts(document.querySelector("#RecoveryRate"), options);
chart.render();

});


let date = []
let hiscase = []
let hisdeath = []
let hisrecover = []

// daily new case history graph

$.get(
  "https://api.coronatracker.com/v5/analytics/newcases/country?countryCode="+CC+"&startDate=2020-01-01&endDate=2021-04-29", function (data) {
    for(i = 0; i<=data.length-1;i++ ){
      date[i] = data[i].last_updated;
      hiscase[i] = Math.abs(data[i].new_infections);
      hisdeath[i] = Math.abs(data[i].new_deaths);
      hisrecover[i] = Math.abs(data[i].new_recovered);
    }


    var options = {
      series: [{
      name: 'New Cases',
      data: hiscase
    }, {
      name: 'New Recovered',
      data: hisrecover
    }, {
      name: 'New Deaths',
      data: hisdeath
    }],
      chart: {
      height: 410,
      type: 'area',
      background:'#efedfa'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: date
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy'
      },
    },
    };

    var chart = new ApexCharts(document.querySelector("#history"), options);
    chart.render();
  

  })
})
