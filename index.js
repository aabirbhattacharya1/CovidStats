$.ajax({
  type: "get",
  url: "https://api.covid19api.com/summary",
  success: function (response) {
    console.log(response);
    for (var i = 0; i < response.Countries.length; i++) {
      var ta =
        response.Countries[i].NewConfirmed - response.Countries[i].NewRecovered;
      var tablerow = `<tr><td> ${response.Countries[i].Country} </td><td> ${response.Countries[i].TotalConfirmed} </td> <td> ${ta} </td><td> ${response.Countries[i].NewDeaths} </td><<td> ${response.Countries[i].TotalDeaths} </td>/tr>`;
      $("#tbody").append(tablerow);
    }
    $('#covidtable').DataTable()
  },
  error: function (error) {
    console.log(error);
  },
});
