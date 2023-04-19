/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

/********* create variables *********/
const costPerDay = 25; // cost per day in dollars
let daysSelected = []; // an array to store the days selected by the user

const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const friday = document.getElementById('friday');
const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');
const calculatedCost = document.getElementById('calculated-cost');







/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!



const days = document.querySelectorAll('.day-selector li');
let dayCounter = 0;

days.forEach(day => {
day.addEventListener('click', () => {
if (!day.classList.contains('clicked')) {
day.classList.add('clicked');
dayCounter++;
}
else {
day.classList.remove('clicked');
dayCounter--;
}
calculateCost();
});
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.



clearButton.addEventListener("click", function() {
  const days = document.querySelectorAll(".day-selector li");
  days.forEach(function(day) {
    day.classList.remove("clicked");
  });
  dayCounter = 0;
  calculatedCost = 0;
  calculatedCostElement.textContent = calculatedCost;
});




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// select the half-day and full-day buttons
const halfDayButton = document.getElementById("half");
const fullDayButton = document.getElementById("full");

// add a click event listener to the half-day button
halfDayButton.addEventListener("click", function() {
  // set the daily rate to $20
  const rate = 20;

  // add the "clicked" class to the "half" element
  halfDayButton.classList.add("clicked");

  // remove the "clicked" class from the "full" element
  fullDayButton.classList.remove("clicked");

  // recalculate the total cost
  const days = document.querySelectorAll(".day-selector li.clicked");
  const cost = days.length * rate;
  const calculatedCost = document.getElementById("calculated-cost");
  calculatedCost.innerHTML = cost;
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
/********* change rate *********/

const dailyRate = 35;

fullDayButton.addEventListener('click', function() {
  // Set daily rate to $35
  dailyRate = 35;

  // Add clicked class to "full" and remove it from "half"
  fullDayButton.classList.add('clicked');
  halfDayButton.classList.remove('clicked');

  // Recalculate total cost
  calculateCost();
});

halfDayButton.addEventListener('click', function() {
  // Set daily rate to $20
  dailyRate = 20;

  // Add clicked class to "half" and remove it from "full"
  halfDayButton.classList.add('clicked');
  fullDayButton.classList.remove('clicked');

  // Recalculate total cost
  calculateCost();
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {
    const selectedDays = document.querySelectorAll('.clicked');
    const dailyRate = document.querySelector('.clicked#full') ? 35 : 20;
    const numDays = selectedDays.length;
    const totalCost = dailyRate * numDays;
  
    const calculatedCostElement = document.getElementById('calculated-cost');
    calculatedCostElement.innerHTML = totalCost;
  }



