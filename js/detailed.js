// outbreak starts
let totalConfirmed = [];
let totalDeaths = [];
let totalRecovered = [];
let time = [];
$.get(
  "https://api.coronatracker.com/v3/stats/worldometer/totalTrendingCases",
  function (data) {
    for (i = 0; i < data.length; i++) {
      totalConfirmed[i] = data[i].totalConfirmed;
      totalDeaths[i] = data[i].totalDeaths;
      totalRecovered[i] = data[i].totalRecovered;
      time[i] = data[i].lastUpdated;
    }

    var options = {
      series: [
        {
          name: "Total Confirmed",
          data: totalConfirmed,
        },
        {
          name: "Total Recovered",
          data: totalRecovered,
        },
        {
          name: "Total Deaths",
          data: totalDeaths,
        },
      ],
      chart: {
        height: 410,
        type: "area",
        background: "#efedfa",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        type: "datetime",
        categories: time,
      },
      tooltip: {
        x: {
          format: "dd MMMM yyyy",
        },
      },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    //outbreaks ends
    //top 10 cases starts
  }
);

let dailyCases = [];
let country = [];
let dailyDeaths = [];
$.get(
  "https://api.coronatracker.com/v5/analytics/dailyNewStats?limit=10",
  function (data) {
    for (i = 0; i < 10; i++) {
      dailyCases[i] = data[i].daily_cases;
      country[i] = data[i].country;
      dailyDeaths[i] = data[i].daily_deaths;
    }

    var options = {
      series: [
        {
          name: "Daily Cases",
          data: dailyCases,
        },
        { name: "Deaths", data: dailyDeaths },
      ],
      chart: {
        type: "bar",
        stacked: true,
        height: 350,
        background: "#efedfa",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        colors: ["#546E7A"],
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: country,
      },
    };

    var chart = new ApexCharts(document.querySelector("#topten"), options);
    chart.render();
  }
);

//top 10 cases ends
