var currentDay = $('#currentDay');
var container = $('.container');


//create today
var today = moment().format('dddd MMMM do YYYY');

//displays the current day at the top of the page
$(currentDay).text(today);


//create an array of the times 
const scheduleList = [
    {time: "08:00"},
    {time: "09:00"},
    {time: "10:00"},
    {time: "11:00"},
    {time: "12:00"},
    {time: "13:00"},
    {time: "14:00"},
    {time: "15:00"},
    {time: "16:00"},
 ];



const buildCalendar = (scheduleList) => {
    scheduleList?.map((hourBlock) => {
        
        const row = document.createElement('li');
        const timeDisplay = document.createElement('div');
        const taskDisplay = document.createElement('input');
        const saveBtn = document.createElement('btn');
        
        timeDisplay.textContent = hourBlock?.time;
        saveBtn.classList.add("saveBtn");
        row.classList.add("row");

        row.appendChild(timeDisplay);
        row.appendChild(taskDisplay);

        container.append(row);
        return row;

    })

};

buildCalendar(scheduleList);





