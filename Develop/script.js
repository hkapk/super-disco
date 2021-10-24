var currentDay = $('#currentDay');
var container = $('.container');

//create today
const today = moment().format('dddd MMMM do YYYY');

//create right now
const currentTime = moment().format("HA");
//console.log(currentTime);
console.log(currentTime);

//displays the current day at the top of the page
$(currentDay).text(today);




//create an array of the times 
const scheduleList = [
    {time: "9AM", task: ""},
    {time: "10AM", task: ""},
    {time: "11AM", task: ""},
    {time: "12PM", task: ""},
    {time: "1PM", task: ""},
    {time: "2PM", task: ""},
    {time: "3PM", task: ""},
    {time: "4PM", task: ""},
    {time: "5PM", task: ""},
 ];

const updatedList = [];


const updateTasks = (time, task) => {
    //use time to find matching input class and get input value
    const matchingTask = document.getElementsByClassName(`${time}-input`)[0];
    //create object with time and task keys (key value pairs)
    const timeTaskObj = {time: time, task: matchingTask.value};
    //push that new object to updatedList
    //console.log(timeTaskObj);
    
    updatedList.push(timeTaskObj);
    //console.log(updatedList);
    //save updatedList to localStorage
    //syntax for local storage
    localStorage.setItem("updatedList",JSON.stringify(updatedList));
    
    
    
    //console.log(time, task);
}

//function to build the calendar/ display the calendar on the page
const buildCalendar = (scheduleList) => {
    scheduleList?.map((hourBlock) => {
        
        const row = document.createElement('div');
        const timeDisplay = document.createElement('div');
        const taskDisplay = document.createElement('input');
        const saveBtn = document.createElement('button');
        

        saveBtn.addEventListener("click", function(){updateTasks(hourBlock?.time, hourBlock?.task)});

        taskDisplay.value = hourBlock?.task;
        timeDisplay.textContent = hourBlock?.time;

        //give button unique classes
        saveBtn.classList.add(`${timeDisplay.textContent}-saveBtn`);

        //add class for input block
        taskDisplay.classList.add(`${timeDisplay.textContent}-input`);

        timeDisplay.classList.add("hour");
        taskDisplay.classList.add("time-block");
        row.classList.add("row");
        saveBtn.classList.add("saveBtn");
    
        //if input class 'time' -- check moment documentation 

        
        row.appendChild(timeDisplay);
        row.appendChild(taskDisplay);
        row.appendChild(saveBtn);

    
        container.append(row);
        return row;

        

    })

};

//if statement for 
// if there is an updated list in Local Storage ){
//  buildCalendar(localStorage.updatedList);   (the one in local Storage)
//   }else buildCalendar(scheduleList);

buildCalendar(scheduleList);



//saveTasks(saveBtn);

//create function to change color of hourBlock based on past/present/future
//if timeDisplay < currentTime add class list .past
//else
//if currentTime === timeDisplay then add class list .present
//else if timeDisplay < currentTime add class list .future

// const applyColor = (scheduleList) => {

// }

// $(document).ready(function () {
//     $('#btn').addClass('saveBtn');

// });




