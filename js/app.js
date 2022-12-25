
const topDash = document.querySelector('.top-dash');
const container = document.querySelector('container');
const dashToday = document.querySelector('.today');
const dashSchedule = document.querySelector('.dash-scheduled');
const backButton = document.querySelector('#back');
const dateText = document.querySelector('.calender');
const popUP = document.querySelector('.popup-list');
const addList = document.getElementById('add-lists');
const newList = document.querySelector('#add-list');
const reminder = document.querySelector('#reminder');
const exitList = document.getElementById('close');
const exitReminder = document.getElementById('close-reminder');
const reminderPopup = document.querySelector('.add-reminder');
let today = new Date();
let newDate = today.getDate();
if(dateText){
dateText.textContent = newDate;
}
onload=function(){
 dashToday.addEventListener('click', function(){
   location.href='/htmls/today.html';
 });
 dashSchedule.addEventListener('click', function(){
   location.href = '/htmls/scheduled.html'
 });
reminder.addEventListener('click', function(event){
 event.preventDefault();
}); 

 reminder.addEventListener('click', () =>{
  reminderPopup.style.display = 'block';
});
exitReminder.addEventListener('click', ()=>{
  reminderPopup.style.display = 'none';
})
