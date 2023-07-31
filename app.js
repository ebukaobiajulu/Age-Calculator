const formControl = document.querySelector('#form-control');
const dayInput= document.querySelector('.day');
const monthInput= document.querySelector('.month');
const yearInput= document.querySelector('.year');
const errorDay = document.querySelector('.error-text-day');
const errorMonth = document.querySelector('.error-text-day');
const errorMessage = document.querySelector('.error-text-day');
const button = document.querySelector('.btn')
const button2 = document.querySelector('.btns')
// Count for days, months and years
const days= document.querySelector('.daysCount');
const months= document.querySelector('.monthsCount');
const years= document.querySelector('.yearsCount');

// To set the errors

let message = 'Enter a valid date'
const todayDay = new Date().getDate();
const todayMonth = new Date().getMonth() + 1;
const todayYear = new Date().getFullYear();

button.addEventListener('click', function(){
    days.textContent = todayDay - dayInput.value;
    months.textContent = todayMonth - monthInput.value;
    years.textContent = todayYear - yearInput.value;
    
    if(dayInput.value > 31 || dayInput.value ==''){
        errorDay.textContent = message;
        days.textContent = '--'
    }
    if(monthInput.value > 12 || monthInput.value ==''){
        errorDay.textContent = message;
        months.textContent = '--'
    }
    if(yearInput.value > 2023 || yearInput.value ==''){
        errorDay.textContent = message;
        years.textContent = '--'
    }
    
})

// To reload the page
button2.addEventListener('click', function(){
    window.location.reload();
})







// if(yearInput.value > 2023 || yearInput.value === ''){
//     years.textContent = '--'
//     errorMessage.textContent = message;
// }
// else{
//     years.textContent = 2023 - yearInput.value;
//     errorMessage.textContent = '';
// }
// if(monthInput.value > 12 || monthInput.value === ''){
//     months.textContent = '--'
// }else{
//     months.textContent = 12 - monthInput.value;
//     errorMessage.textContent = '';
// }
// if(dayInput.value > 31 || dayInput.value === ''){
//     days.textContent = '--'
// }else{
//     days.textContent = 31 - dayInput.value;
//     errorMessage.textContent = '';
// }