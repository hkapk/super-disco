var currentDay = $('#currentDay');
var container = $('.container');


//create today
var today = moment().format('dddd MMMM do YYYY');

//displays the current day at the top of the page
$(currentDay).text(today);


//create an array of the times 
const scheduleList = [
    {time: "9AM"},
    {time: "10AM"},
    {time: "11AM"},
    {time: "12PM"},
    {time: "1PM"},
    {time: "2PM"},
    {time: "3PM"},
    {time: "4PM"},
    {time: "5PM"},
 ];


const buildCalendar = (scheduleList) => {
    scheduleList?.map((hourBlock) => {
        
        const row = document.createElement('div');
        const timeDisplay = document.createElement('div');
        const taskDisplay = document.createElement('input');
        const saveBtn = document.createElement('btn');
        
        timeDisplay.textContent = hourBlock?.time;
        timeDisplay.classList.add("hour");
        taskDisplay.classList.add("time-block");
        row.classList.add("row");
        saveBtn.classList.add("saveBtn");


        row.appendChild(timeDisplay);
        row.appendChild(taskDisplay);
        row.appendChild(saveBtn);

        console.log(saveBtn);


        container.append(row);
        return row;
        //save scheduleList task display items to localStorage
        //localStorage.setItem("taskDisplay",JSON.stringify(taskDisplay));
    })

};

buildCalendar(scheduleList);

//save events when you click the save button
const saveTasks = function () {
    saveBtn.addEventListener("click", function() {
        
    })
}


//create function to change color of hourBlock based on past/present/future
// const applyColor = (scheduleList) => {
//}

// $(document).ready(function () {
//     $('#btn').addClass('saveBtn');

// });




