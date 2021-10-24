var currentDay = $('#currentDay');
var container = $('.container');

//create today
const today = moment().format('dddd, MMMM DD, YYYY');

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

const updatedList = [
    {time: "9AM", task: ""},
    {time: "10AM", task: ""},
    {time: "11AM", task: ""},
    {time: "12PM", task: ""},
    {time: "13PM", task: ""},
    {time: "14PM", task: ""},
    {time: "15PM", task: ""},
    {time: "16PM", task: ""},
    {time: "17PM", task: ""}
];

//updateTasks is called on the click inside of buildCalendar
const updateTasks = (time, task) => {
    //use time to find matching input class and get input value
    const matchingTask = document.getElementsByClassName(`${time}-input`)[0];
    //create object with time and task keys (key value pairs)

    //this is only adding a single row
    const timeTaskObj = {time: time, task: matchingTask.value};
    //push that new object to updatedList
    //console.log(timeTaskObj);
    updatedList.push(timeTaskObj);
    
    //console.log(updatedList);
    //save updatedList to localStorage
    //syntax for local storage
    localStorage.setItem("updatedList",JSON.stringify(updatedList));

    //console.log(time, task);
    console.log(updatedList);
};




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

        


        //add future class to all blocks


        row.classList.add("row");
        saveBtn.classList.add("saveBtn");
        saveBtn.textContent = "save";
        
    //there is a bug here, 9AM is set to future...        
        //apply present class for hour block equal to current time

        if (currentTime === hourBlock?.time){
            //taskDisplay.classList.remove("future");
            taskDisplay.classList.add("present");
            //apply past time to blocks at times < the current time
        } 
        if (currentTime < hourBlock?.time){
            taskDisplay.classList.add("future");
            }
            else {
            taskDisplay.classList.remove("future");
            taskDisplay.classList.add("past")};


        
        row.appendChild(timeDisplay);
        row.appendChild(taskDisplay);
        row.appendChild(saveBtn);


        container.append(row);
        return row;


    })

};

//if statement for pulling from local Storage if it exists
if (localStorage.getItem('updatedList')) {
console.log("local storage exists");
buildCalendar(updatedList);
} else 
  buildCalendar(scheduleList);

//updateTasks(time, task);

//buildCalendar(scheduleList);



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




