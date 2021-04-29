  var nf = new Intl.NumberFormat();
  var cc
    $.get("https://api.coronatracker.com/v3/stats/worldometer/country",
    
    function (data){

        var tval = document.getElementById('tval');
        for(var i = 1; i<=data.length-4; i++){

         
          var x = tval.insertRow()
          if(data[i-1]['countryCode'] != null )
          {
           CC = data[i-1]['countryCode'].toLowerCase();
       //   console.log(CC);
       //   var CC = countryCode.toLowerCase();
          x.setAttribute('onClick','window.location.assign("pages/countryWise.html?CC='+CC+'")');
          
            x.insertCell(0);

            tval.rows[i].cells[0].innerHTML = i;
            x.insertCell(1);

            tval.rows[i].cells[1].innerHTML ='<img src = "https://flagcdn.com/32x24/'+CC+'.png"/> &nbsp;'+data[i-1]['country'];


            x.insertCell(2);

            tval.rows[i].cells[2].innerHTML = nf.format(data[i-1]['totalConfirmed']);

            x.insertCell(3);

            tval.rows[i].cells[3].innerHTML = nf.format(data[i-1]['totalRecovered']);

            x.insertCell(4);

            tval.rows[i].cells[4].innerHTML = nf.format(data[i-1]['totalDeaths']);

            // $( ".rows" ).click(function() {
            //   console.log(CC);
            // });

          } 

          // tval.rows[i].onclick(function(){
          //   alert("The paragraph was clicked.");
          // })


          
        }

        function myFunction() {
          console.log('Hi');
        }
      }
    )
    
  







