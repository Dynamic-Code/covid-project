var nf = new Intl.NumberFormat();
$.get(
  "https://api.coronatracker.com/v3/stats/worldometer/global",

  function (data) {
    $("#total").html(nf.format(data.totalConfirmed));
    $("#totalRecovered").html(nf.format(data.totalRecovered));
    $("#TotalDeaths").html(nf.format(data.totalDeaths));
    $("#date").html(data.created);
  }
);
