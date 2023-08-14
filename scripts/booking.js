/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let daliy_rate = 35;
let total_cost;
let days = [];
let days_selected;
const monButton = document.getElementById("monday");
const tueButton = document.getElementById("tuesday");
const wedButton = document.getElementById("wednesday");
const thuButton = document.getElementById("thursday");
const friButton = document.getElementById("friday");
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
const totalCostElement = document.getElementById("calculated-cost");





/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!



monButton.addEventListener("click", function() {
    if (!days.includes(monButton)) {
        days.push(monButton);
        monButton.classList.add("clicked");
    } else {
        days.splice(days.indexOf(monButton), 1);
        monButton.classList.remove("clicked");
    }
    calculation();
});

["tuesday", "wednesday", "thursday", "friday"].forEach(function(day) {
    const button = document.getElementById(day);
    button.addEventListener("click", function() {
        if (!days.includes(button)) {
            days.push(button);
            button.classList.add("clicked");
        } else {
            days.splice(days.indexOf(button), 1);
            button.classList.remove("clicked");
        }
        calculation();
    });
});






/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click",function(){
    days = [];
    daliy_rate = 35;
    monButton.classList.remove("clicked");
    tueButton.classList.remove("clicked");
    wedButton.classList.remove("clicked");
    thuButton.classList.remove("clicked");
    friButton.classList.remove("clicked");
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    calculation();
});





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfButton.addEventListener("click", function() {
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    daliy_rate = 20;
    calculation();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullButton.addEventListener("click", function() {
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    daliy_rate = 35;
    calculation();
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculation(){
    days_selected = days.length;
    total_cost = days_selected * daliy_rate;
    totalCostElement.textContent = total_cost;
    console.log(days);
    console.log(days_selected);
}

