var currentDay = $('#currentDay');
var container = $('#container');


var today = moment().format('dddd MMMM do YYYY');


console.log(today);


//testing...1.2.3
//var today = document.createElement('div');
// function displayToday(currentDay); {
// }


//displays the current day at the top of the page
$(currentDay).text(today);


//create div in the container to display rows of data
//$(container).